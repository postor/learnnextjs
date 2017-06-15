var getMdPage = require('../helper').getMdPage
var path = require('path')

module.exports = {
  title: '客户端路由',
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
      title: '路由配置',
      page: getUrl('2-route-masking.md')
    },
    {
      title: '支持历史',
      page: getUrl('3-history-awareness.md')
    },
    {
      title: '刷新页面',
      page: getUrl('4-reload.md')
    },
    {
      title: '404页面',
      page: getUrl('5-404.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}