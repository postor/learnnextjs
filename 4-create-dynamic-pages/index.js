var getMdPage = require('../helper').getMdPage
var path = require('path')

module.exports = {
  title: '动态页面',
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
      title: '添加文章列表',
      page: getUrl('2-adding-a-list-of-posts.md')
    },
    {
      title: '传递query string',
      page: getUrl('3-passing-data-via-query-strings')
    },
    {
      title: '特殊的url属性',
      page: getUrl('4-special-prop-url.md')
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