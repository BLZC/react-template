const menuList = [
  {
    title: '首页',
    key: '/home',
    icon: 'pie-chart'
  },
  {
    title: '客户',
    key: '/customer',
    icon: 'pie-chart'
  },
  {
    title: '商品',
    key: '/product',
    icon: 'pie-chart'
  },
  {
    title: '配置',
    key: '/config',
    icon: 'pie-chart',
    children: [
      {
        title: '权限配置',
        key: '/permission',
        icon: 'pie-chart'
      },
      {
        title: '角色配置',
        key: '/role',
        icon: 'pie-chart'
      }
    ]
  }
]

export default menuList
