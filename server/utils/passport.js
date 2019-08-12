import passport from 'koa-passport'
import localStrategy from 'passport-local'
import userModel from '../dbs/models/users'

passport.use(
  new localStrategy(async function(username, password, done) {
    let where = {
      username
    }
    let result = await userModel.findOne(where)
    if(result) {
      if(result.password === password) {
        return done(null, result)
      } else {
        return done(null, false, '密码错误')
      }
    } else {
      return done(null, false, '用户名不存在')
    }
  })
)

// 序列化存到session
passport.serializeUser(function(user,done) {
  done(null, user)
})

// 反序列化取session值
passport.deserializeUser(function(user,done) {
  return done(null, user)
})

export default passport