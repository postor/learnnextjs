var getMdPage = require('../helper').getMdPage
var path = require('path')

module.exports = {
  title: '部署next.js',
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
      title: '构建并启动',
      page: getUrl('2-build-and-start.md')
    },
    {
      title: '两个实例',
      page: getUrl('3-run-two-instances.md')
    },
    {
      title: '多实例',
      page: getUrl('4-build-once-run-many-instances.md')
    },
    {
      title: '部署到now',
      page: getUrl('5-deploying-to-zeit-now.md')
    },
    {
      title: '总是80',
      page: getUrl('6-zeit-now-port-80.md')
    },
    {
      title: '本地构建',
      page: getUrl('7-build-your-app-locally.md')
    },
    {
      title: '部署自定义服务',
      page: getUrl('8-deploy-with-a-custom-server.md')
    },
    {
      title: '最后',
      page: getUrl('9-finally.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}