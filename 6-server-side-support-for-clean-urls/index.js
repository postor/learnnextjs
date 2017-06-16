var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: '服务端路由',
  steps: [
    {
      title: '简介',
      page: getUrl('README.md')
    },
    {
      title: '安装',
      page: getUrl('1-setup.md'),
      validate: [
        {
          command: 'cd learnnextjs-demo',
          message: '没有创建目录learnnextjs-demo',
        },
      ]
    },
    {
      title: '自定义服务',
      page: getUrl('2-create-a-custom-server.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','server.js')
            return fs.existsSync(tpath)
          },
          message: '没有找到文件server.js',
        }
      ]
    },
    {
      title: '自定义路由',
      page: getUrl('3-create-our-custom-route.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','server.js')
            var content = fs.readFileSync(tpath)
            return content.toString().indexOf('getRequestHandler')>=0
          },
          message: 'server.js中没有使用app.getRequestHandler更改路由',
        }
      ]
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