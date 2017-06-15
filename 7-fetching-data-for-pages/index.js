var getMdPage = require('../helper').getMdPage
var path = require('path')

module.exports = {
  title: '获取数据',
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
      title: '获取数据',
      page: getUrl('2-fetching-batman-shows.md')
    },
    {
      title: '只在服务端',
      page: getUrl('3-only-on-the-server.md')
    },
    {
      title: '实现文章页',
      page: getUrl('4-implement-the-post-page.md')
    },
    {
      title: '客户端获取',
      page: getUrl('5-fetch-data-in-client-side.md')
    },
    {
      title: '最后',
      page: getUrl('6-finally.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}