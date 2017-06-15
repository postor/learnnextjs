var getMdPage = require('../helper').getMdPage
var path = require('path')

module.exports = {
  title: '服务端路由',
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
      title: '自定义服务',
      page: getUrl('2-create-a-custom-server.md')
    },
    {
      title: '自定义路由',
      page: getUrl('3-create-our-custom-route.md')
    },
    {
      title: 'url信息',
      page: getUrl('4-information-on-url.md')
    },
    {
      title: '最后',
      page: getUrl('5-finally.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}