var getMdPage = require('../helper').getMdPage
var path = require('path')

module.exports = {
  title: '增加样式',
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
      title: '增加样式',
      page: getUrl('2-styling-our-home-page.md')
    },
    {
      title: '样式模板字符串',
      page: getUrl('3-styles-template-strings.md')
    },
    {
      title: '样式和嵌套组件',
      page: getUrl('4-styles-and-nested-components.md')
    },
    {
      title: '不影响嵌套组件',
      page: getUrl('5-no-effect-for-nested-components.md')
    },
    {
      title: '全局样式',
      page: getUrl('6-global-styles.md')
    },
    {
      title: '全局样式',
      page: getUrl('7-global-styles-work.md')
    },
    {
      title: '下一步',
      page: getUrl('8-what-next.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}