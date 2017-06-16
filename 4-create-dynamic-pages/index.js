var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: '动态页面',
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
      title: '添加文章列表',
      page: getUrl('2-adding-a-list-of-posts.md'),
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
            var content = fs.readFileSync(tpath).toString()
            return /PostLink/.test(content)
          },
          message: 'index.js中没有添加 PostLink',
        }
      ]
    },
    {
      title: '传递query string',
      page: getUrl('3-passing-data-via-query-strings.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','post.js')
            return fs.existsSync(tpath)
          },
          message: '没有找到文件pages/post.js',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','about.js')
            var content = fs.readFileSync(tpath).toString()
            return /props\.url\.query\.title/.test(content)
          },
          message: 'post.js中没有获取props.url.query.title',
        }
      ]
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