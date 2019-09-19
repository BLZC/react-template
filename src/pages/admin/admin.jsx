import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import './admin.scss'
import LeftNav from '../../components/left-nav'
import TopNav from '../../components/top-nav'
// 菜单栏路由
import Routes from '../../routers'
/**
 * 后台管理路由组件
 */
const { Content } = Layout

export default class Admin extends Component {
  state = {
    collapsed: false
  }
  // 菜单栏状态
  toggle = msg => {
    this.setState({
      collapsed: msg
    })
  }

  render() {
    const user = localStorage.getItem('user')
    //判断是否登录
    if (!user) {
      //如何未登录，跳到登录页面
      return <Redirect to="/login" />
    } else {
      return (
        <Layout>
          <LeftNav collapsed={this.state.collapsed} />
          <Layout>
            <TopNav
              collapsed={this.state.collapsed}
              changeStatus={msg => this.toggle(msg)}
            />
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                height: '100%'
              }}
            >
              <Routes></Routes>
            </Content>
          </Layout>
        </Layout>
      )
    }
  }
}
