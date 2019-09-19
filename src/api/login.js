/**
 * 请求函数模块
 */
import ajax from './ajax'
// import jsonp from 'jsonp'
// import fetchJsonp from 'fetch-jsonp'
//登录
// export default function login(data) {
//   return ajax('/login', data, 'post')
// }

// let nda = {
//   key: 'S24Z4Njii2Elvwe - q',
//   location: 'suzhou',
//   language: 'zh - Hans',
//   unit: 'c'
// }
const BASE = ''
export const login = data => ajax(BASE + '/login', data, 'post')
// export const reqWeather = nda => {
//   ajax(
//     'https://api.seniverse.com/v3/weather/now.json?key=S24Z4Njii2Elvwe-q&location=suzhou&language=zh-Hans&unit=c',
//     nda,
//     'get'
//   )
// }
// ajax('https://api.seniverse.com/v3/weather/now.json', {}, 'get')

/**
 * jsonp请求的接口请求函数
 */

// reqWeather()
