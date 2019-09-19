import React, { Component } from 'react'
import { Card, Table, Button, Icon, message, Input, Modal } from 'antd'
import LinkButton from '../../components/LINK-BUTTON/link-button'
import './product.scss'
import {
  getDataList,
  searchDataList,
  deleteDataList,
  getOneData
} from '../../api/product'
import AddModel from './components/addDataList'

const { Search } = Input
const { confirm } = Modal
export default class Product extends Component {
  state = {
    dataList: [],
    isloading: true,
    visible: false,
    selectedRowKeys: [],
    isedit: 0,
    title: '',
    data: {},
    id: 0,
    searchValue: ''
  }

  Init = async () => {
    console.log(123)
    let data = {}
    const res = await getDataList(data)
    if (res.status === 1) {
      this.setState({ isloading: false })
      this.setState({ dataList: res.result })
    } else {
      message.error(res.message)
    }
  }

  //编辑
  editData = async record => {
    let data = { id: record.id }
    const res = await getOneData(data)
    this.setState({ isedit: 1, id: record.id, title: '编辑商品信息' })
    if (res.status === 1 && res.data.length > 0) {
      this.setState({
        visible: true
      })
      this.setState({ data: res.data[0] })
    } else {
      message.error(res.message)
    }
  }

  //新增
  addDataList = () => {
    this.setState({
      visible: true,
      title: '新增商品信息'
    })
  }

  /**
   * 删除信息
   */
  deleteData = async () => {
    let data = { value: this.state.selectedRowKeys }
    const res = await deleteDataList(data)
    if (res.status === 1) {
      message.success(res.message)
      this.setState({ selectedRowKeys: [] })
      this.Init()
    } else {
      message.error(res.message)
    }
  }
  //删除信息---确认框
  showConfirm = () => {
    let _this = this
    if (this.state.selectedRowKeys.length > 0) {
      confirm({
        title: '是否确认删除?',
        cancelText: '取消',
        okText: '确定',
        content: '',
        onOk() {
          _this.deleteData()
        },
        onCancel() {
          message.success('已取消')
        }
      })
    } else {
      message.error('请选择要删除的商品信息')
    }
  }

  //搜索
  Search = async value => {
    this.setState({ isloading: true, searchValue: value })
    let data = { value: value }
    const res = await searchDataList(data)
    if (res.status === 1) {
      this.setState({ isloading: false })
      this.setState({ dataList: res.data })
    } else {
      message.error(res.message)
    }
  }

  modelClose = msg => {
    this.setState({ isedit: 0, data: {} })
    if (!msg) {
      this.setState({
        visible: msg
      })
      this.Search(this.state.searchValue)
    }
  }
  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys })
  }

  componentWillMount() {
    this.Init()
  }

  render() {
    const title = '商品信息'
    const { selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    }
    const extra = (
      <div>
        <Search
          style={{ width: '400px' }}
          allowClear
          prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="请输入要搜索的内容"
          enterButton="搜索"
          onSearch={value => this.Search(value)}
        />
        {/* <Button type="primary" onClick={this.deleteDataList}>
          <Icon type="search" />
          搜索
        </Button> */}
        <Button
          type="primary"
          style={{ marginLeft: '20px' }}
          onClick={this.addDataList}
        >
          <Icon type="plus" />
          添加
        </Button>
        <Button
          style={{ marginLeft: '20px' }}
          type="primary"
          onClick={this.showConfirm}
        >
          <Icon type="delete" />
          删除
        </Button>
      </div>
    )
    const columns = [
      {
        title: '商品名',
        width: 200,
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '商品价格',
        width: 100,
        dataIndex: 'price',
        key: 'price'
      },
      { title: '商品数量', width: 100, dataIndex: 'number', key: 'number' },
      { title: '商品描述', dataIndex: 'description', key: 'description' },
      {
        title: 'Action',
        key: 'operation',
        // fixed: 'right',
        width: 200,
        render: record => (
          <span>
            <LinkButton onClick={() => this.editData(record)}>编辑</LinkButton>
            {/* {this.state.status ? (
              <LinkButton onClick={this.show}></LinkButton>
            ) : null} */}
          </span>
        )
      }
    ]

    return (
      <Card title={title} extra={extra} style={{ marginTop: 60 }}>
        <AddModel
          id={this.state.id}
          visible={this.state.visible}
          title={this.state.title}
          data={this.state.data}
          isedit={this.state.isedit}
          closeModel={msg => {
            this.modelClose(msg)
          }}
        />
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.dataList}
          bordered
          loading={this.state.isloading}
          rowKey="id"
          pagination={{ defaultPageSize: 5 }}
          // scroll={{ y: 300 }}
        />
      </Card>
    )
  }
}
