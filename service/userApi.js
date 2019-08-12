import request from '../utils/request'

export async function login(params) {
  return request('/user/login', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
export async function register(params) {
  return request('/user/register', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
export async function getUserInfo(params) {
  return request('/user/getUserInfo')
}
export async function sendCode(params) {
  return request('/user/sendCode', {
    method: 'POST',
    body: {
      ...params
    }
  })
}