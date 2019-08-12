import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import axios from '../utils/axios'
import passport from '../utils/passport'
import Email from '../dbs/config'
import User from '../dbs/models/users'

let router = new Router({
  prefix: '/user'
})
let redisStore = new Redis().client

router.post('/register', (ctx) => {
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body

  if(code) {
    const sessionCode = redisStore.hget(`nodemailer:${username}`, 'code')
    const sessionExpire = redisStore.hget(`nodemailer:${username}`, 'expire')

    if(code === sessionCode) {
      if(new Date().getTime() - sessionExpire > 0) {
        ctx.body = {
          code: -1,
          msg: "验证码已过期，请重新尝试"
        }
        return false
      } else {
        ctx.body = {
          code: -1,
          msg: "请填写正确验证码"
        }
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "请填写验证码"
    }
  }

  let user = User.find({username})
  if(user.length) {
    ctx.body = {
      code: -1,
      msg: "用户名已注册"
    }
    return
  }
  let newUser = User.create({
    username,
    password,
    email
  })
  if(newUser) {
    ctx.body = {
      code: 0,
      msg: "注册成功",
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "注册失败"
    }
  }
})

router.post('/login', async(ctx, next) => {
  return passport.authenticate('local', function(err,user,info,status) {
    if(err) {
      ctx.body = {
        code: -1,
        msg: '登陆失败'
      }
    } else {
      if(user) {
        ctx.body = {
          code: 0,
          msg: '登陆成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: -1,
          msg: info
        }
      }  
    }
  })(ctx, next)
})

router.post('/sendCode', async (ctx, next) => {
  let username = ctx.request.body.username
  const sessionExpire = redisStore.hget( `nodemail:${username}`,'expire')
  if(sessionExpire && new Date().getTime() - sessionExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '请求频繁，请稍后再试'
    }
    return false
  }
  // 发送对象
  let transporter = nodeMailer.createTransport({
    host: Email.stmp.host,
    port: 465,
    secure: true,
    auth: {
      user: Email.stmp.user,
      pass: Email.stmp.pass,
    }
  })

  // 接收的信息对象
  let ko = {
    code: Email.stmp.code(),
    expire: Email.stmp.expire(),
    // user: ctx.request.body.username,
    email: ctx.request.body.email
  }
  console.log(ko)

  // 邮箱显示内容
  let mailOptions = {
    from: `'认证邮件' <${Email.stmp.user}>`,
    to: ko.email,
    subject: "《美团注册验证码》",
    html: `你的邀请码是${ko.code}`
  }

  await transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      return console.log(err)
    } else {
      redisStore.hmset(`nodemail:${ko.user}`,'code',ko.code,'expire',ko.expire,'email',ko.email)
    }
  })
  ctx.body={
    code: 0,
    msg: "验证码已发送，请查看邮箱"
  }
})

router.get('/loginOut', async (ctx) => {
  await ctx.logout()
  if(!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})

router.get('/getUserInfo', async (ctx) => {
  if(ctx.isAuthenticated()) {
    const {username, email} = ctx.session.passport.user
    ctx.body = {
      username,
      email
    }
  } else {
    ctx.body = {
      username: '',
      email: ''
    }
  }
})

export default router

