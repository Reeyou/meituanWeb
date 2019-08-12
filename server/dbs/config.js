export default {
  // 数据库
  dbs: "mongodb://127.0.0.1:27017/users",
  // redis
  redis: {
    get host() {
      return "127.0.0.1"
    },
    get port() {
      return 6379
    }
  },
  // 邮箱服务
  stmp: {
    get host() {
      return "smtp.qq.com"
    },
    get user() {
      return '993830137@qq.com'
    },
    get pass() {
      return 'sikkzpxbrbmbbdeg'
    },
    // 随机验证码
    get code() {
      return () => {
        return Math.random().toString(16).slice(2,6).toUpperCase()
      }
    },
    // 过期时间
    get expire() {
      return () => {
        return new Date().getTime() + 60*60*1000
      }
    }
  },
  
}