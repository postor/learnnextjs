var getMdPage = require('../helper').getMdPage
var path = require('path')

module.exports = {
  title: '在页面之间切换',
  steps: [
    {
      title: '在页面之间切换',
      page: getUrl('README.md')
    },
    {
      title: '安装',
      page: getUrl('1-setup.md')
    },
    {
      title: '使用 Link',
      page: getUrl('2-using-link.md')
    },
    {
      title: '客户端历史支持',
      page: getUrl('3-client-side-history-support.md')
    },
    {
      title: '样式',
      page: getUrl('4-styling-a-link.md')
    },
    {
      title: 'HOC',
      page: getUrl('5-link-is-just-a-higher-order-component-hoc.md')
    },
    {
      title: '与按钮配合',
      page: getUrl('6-link-with-a-button.md')
    },
    {
      title: '与任何东西配合',
      page: getUrl('7-link-works-with-anything.md')
    },
    {
      title: 'Link简单高效',
      page: getUrl('8-link-is-simple-but-powerful.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}