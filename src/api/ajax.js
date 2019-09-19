/**
 * 发送异步ajax请求的函数模块
 * 封装axios
 * 函数返回值是一个promise对象
 */
import axios from 'axios'
import { notification } from 'antd'
/**
 * 优化，对请求错误进行统一处理
 */
//全局提示
const openNotificationWithIcon = type => {
  let options = {
    message: '服务器错误',
    description: ''
  }
  notification[type](options)
}

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (type === 'GET' || type === 'get') {
      promise = axios.get(url, { params: data })
    } else {
      promise = axios.post(url, data)
    }
    promise
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        openNotificationWithIcon('error')
      })
  })
}
