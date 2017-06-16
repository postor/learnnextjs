var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: '客户端路由',
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
      title: '路由配置',
      page: getUrl('2-route-masking.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: '没有找到文件pages/index.js',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content = fs.readFileSync(tpath)
            return content.toString().indexOf('/p/${props.id}')>=0
          },
          message: 'index.js中Link没有添加 as={`/p/${props.id}`}',
        }
      ]
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