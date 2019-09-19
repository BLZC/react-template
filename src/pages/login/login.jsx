import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Icon, Input, Button, message } from 'antd'
import { login } from '../../api/login'
import './login.css'
/**
 * 登录组件
 */
//全局提示
class Login extends Component {
  /**
   * 登录
   * TODO: 将所有请求接口放到同一文件中好还是放在对应组件内部好
   */
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const res = await login(values)
        if (res.status === 1) {
          // 将用户账号存放到localstorage中
          localStorage.setItem('user', res.account)
          // 进入
          this.props.history.replace('/admin')
        } else {
          // 提示登录失败原因
          message.error(res.message)
        }
      }
    })
  }

  render() {
    /**
     * Why
     */
    const form = this.props.form
    const { getFieldDecorator } = form
    // 是否登录 ？ 直接进入 ： 渲染登录页面
    if (localStorage.getItem('user')) {
      return <Redirect to="/" />
    } else {
      return (
        <div className="login">
          <div className="loginFo">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('account', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your account!'
                    },
                    {
                      min: 2,
                      message: 'min is 2'
                    },
                    {
                      max: 12,
                      message: 'max is 12'
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Username"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'Please input your Password!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )
    }
  }
}

const Wraplogin = Form.create()(Login)
export default Wraplogin
