import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// 首页
import Home from '../pages/home/home'
// 客户
import Customer from '../pages/customer/customer'
// 商品
import Product from '../pages/product/product'
// 配置 ---> 权限配置
import Permission from '../pages/permission/permission'
// 配置 ---> 角色配置
import Role from '../pages/role/role'

export default () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/customer" component={Customer} />
    <Route path="/product" component={Product} />
    <Route path="/permission" component={Permission} />
    <Route path="/role" component={Role} />
    <Redirect to="/home" />
  </Switch>
)
