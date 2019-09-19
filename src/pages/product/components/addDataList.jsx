import React, { Component } from 'react'
import { Form, Input, message, Modal } from 'antd'
import { addDataList, editDataList } from '../../../api/product'

/**
 * 布局
 */
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
}

class AddData extends Component {
  state = {
    visible: false,
    name: '初始值'
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleCancel = e => {
    this.props.closeModel(!this.props.visible)
  }

  Init() {
    this.props.form.validateFields(async (err, values) => {})
  }

  handleOk = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let res
        values.price = parseInt(values.price)
        values.number = parseInt(values.number)
        if (this.props.isedit === 1) {
          values.id = this.props.id
          res = await editDataList(values)
        } else {
          res = await addDataList(values)
        }
        if (res.status === 1) {
          message.success(res.message)
          this.props.closeModel(!this.props.visible)
          // values.forEach(v => {
          //   console.log('*********' + v)
          // })
        } else {
          message.error(res.message)
        }
      }
    })
  }

  componentWillMount() {
    this.Init()
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Modal
        title={this.props.title}
        destroyOnClose="true"
        cancelText="取消"
        okText="确定"
        onOk={this.handleOk}
        visible={this.props.visible}
        onCancel={this.handleCancel}
      >
        <Form {...formItemLayout}>
          <Form.Item label="商品名">
            {getFieldDecorator('name', {
              initialValue: this.props.data.name,
              rules: [{ required: true, message: '请输入商品名' }]
            })(<Input placeholder="请输入商品名" />)}
          </Form.Item>

          <Form.Item label="商品价格">
            {getFieldDecorator('price', {
              initialValue: this.props.data.price,
              rules: [{ required: true, message: '请输入商品价格' }]
            })(<Input placeholder="请输入商品价格" />)}
          </Form.Item>

          <Form.Item label="商品数量">
            {getFieldDecorator('number', {
              initialValue: this.props.data.number,
              rules: [{ required: true, message: '请输入商品数量' }]
            })(<Input placeholder="请输入商品数量" />)}
          </Form.Item>

          <Form.Item label="商品描述">
            {getFieldDecorator('description', {
              initialValue: this.props.data.description,
              rules: [{ required: true, message: '请输入商品描述' }]
            })(<Input placeholder="请输入商品描述" />)}
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

const AddModel = Form.create()(AddData)
export default AddModel
