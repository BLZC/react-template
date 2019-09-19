/**
 * 入口js文件
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
/**
 * TODO: why use it
 */
import * as serviceWorker from './serviceWorker'

// 挂载
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
