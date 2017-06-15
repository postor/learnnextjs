var getMdPage = require('../helper').getMdPage
var path = require('path')

module.exports = {
  title: '可重用组件',
  steps: [
    {
      title: '简介',
      page: getUrl('README.md')
    },
    {
      title: '安装',
      page: getUrl('1-setup.md')
    },
    {
      title: '创建顶部导航',
      page: getUrl('2-create-the-header-component.md')
    },
    {
      title: '使用顶部导航',
      page: getUrl('3-using-the-header-component.md')
    },
    {
      title: 'component目录',
      page: getUrl('4-the-component-directory.md')
    },
    {
      title: '布局组件',
      page: getUrl('5-the-layout-component.md')
    },
    {
      title: '显示子组件',
      page: getUrl('6-rendering-child-components.md')
    },
    {
      title: '使用组件',
      page: getUrl('7-using-components.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}