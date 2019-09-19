import ajax from './ajax'
const BASE = ''
/**
 *
 * @param {商品} data
 */
//获取所有数据
export const getDataList = data => ajax(BASE + '/getproducts', data, 'post')
//新增
export const addDataList = data => ajax(BASE + '/addDataList', data, 'post')
//查询
export const searchDataList = data =>
  ajax(BASE + '/searchDataList', data, 'post')
//删除
export const deleteDataList = data =>
  ajax(BASE + '/deleteDataList', data, 'post')
//编辑
export const editDataList = data => ajax(BASE + '/editDataList', data, 'post')
//获取单个商品信息
export const getOneData = data => ajax(BASE + '/getOneData', data, 'post')
