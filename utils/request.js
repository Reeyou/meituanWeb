import axios from 'axios'
import qs from 'qs'

export default function request(url, options) {

  axios.defaults.timeout = 10000;

  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

  if(!options) {
    return getData(url)
  }
  if(options.method = 'POST') {
    return postData(url,options.body)
  }

  function getData(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
    })
  }

  function postData(url, params) {
    return new Promise((resolve, reject) => {
      console.log( qs.stringify(params))
      axios.post(url, qs.stringify(params))
      .then(res => {
        return resolve(res.data);
      })
      .catch(error => {
        return reject(error.data);
      })
    })
  }
}