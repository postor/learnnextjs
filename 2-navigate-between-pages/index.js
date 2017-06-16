var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: '在页面之间切换',
  steps: [
    {
      title: '在页面之间切换',
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
      title: '使用 Link',
      page: getUrl('2-using-link.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: '没有找到learnnextjs-demo/pages/index.js',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content = fs.readFileSync(tpath).toString()
            return /Link/.test(content)
          },
          message: 'index.js中没有添加 <Link> 标签',
        }
      ]
    },
    {
      title: '客户端历史支持',
      page: getUrl('3-client-side-history-support.md')
    },
    {
      title: '样式',
      page: getUrl('4-styling-a-link.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: '没有找到learnnextjs-demo/pages/index.js',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content = fs.readFileSync(tpath)
            return /fontSize/.test(content)
          },
          message: 'index.js中没有添加 fontSize 样式',
        }
      ]
    },
    {
      title: 'HOC',
      page: getUrl('5-link-is-just-a-higher-order-component-hoc.md')
    },
    {
      title: '与按钮配合',
      page: getUrl('6-link-with-a-button.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: '没有找到learnnextjs-demo/pages/index.js',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content = fs.readFileSync(tpath)
            return /button/.test(content)
          },
          message: 'index.js中没有添加 button',
        }
      ]
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