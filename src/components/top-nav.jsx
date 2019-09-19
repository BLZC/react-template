import React, { Component } from 'react'
import { Layout, Icon, Modal } from 'antd'
import './top-nav.scss'
import memoryUtils from '../utils/memoryUtils'
import storageUtils from '../utils/storageUtils'
import LinkButton from './LINK-BUTTON/link-button'
// import { reqWeather } from '../api/login'
const { Header } = Layout
const { confirm } = Modal
export default class TopNav extends Component {
  state = {}
  // getWeather = async () => {
  //   const res = await reqWeather('101190401')
  //   // debugger
  //   // console.log(res)
  // }
  // componentDidMount() {
  //   this.getWeather()
  // }

  logout() {
    confirm({
      title: '确认退出?',
      // content: 'Some descriptions',
      onOk() {
        storageUtils.removeUser()
        window.location.reload()
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }
  render() {
    const changeCollapsed = () => {
      let collapsed = this.props.collapsed
      this.props.changeStatus(!collapsed)
    }
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={changeCollapsed}
        />
        <div className="header-top">
          <span>欢迎，admin</span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">
            {memoryUtils.title || storageUtils.Gettitle()}
            <span className="tb" />
          </div>
          <div className="header-bottom-right">
            <span className="span-time">2019/7/19</span>
            <img src="/favicon.ico" alt="图标" />
            <span className="span-weather">阵雨</span>
          </div>
        </div>
      </Header>
    )
  }
}
