var getMdPage = require('../helper').getMdPage
var path = require('path')

module.exports = {
  title: '初识next.js',
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
      title: '404 页面',
      page: getUrl('2-404-page.md')
    },
    {
      title: '创建第一个页面',
      page: getUrl('3-creating-our-first-page.md')
    },
    {
      title: '错误处理',
      page: getUrl('4-handling-errors.md')
    },
    {
      title: '做的很好！',
      page: getUrl('5-you-are-awesome.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}