/**
 * 根组件
 */
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
/**
 * 引入antd全局样式
 */
import 'antd/dist/antd.css'
// 登录组件
import Wraplogin from './pages/login/login'
// main
import Admin from './pages/admin/admin'
// 404页面
import ErrPage from './pages/errPage/errPage'
class App extends Component {
  render() {
    return (
      /**
       * 为什么Wraplogin组件必须放到Admin组件之前？ react的路由匹配
       */
      <BrowserRouter>
        <Switch>
          <Route path="login" component={Wraplogin} />
          <Route path="/" component={Admin} />
          <Route component={ErrPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
