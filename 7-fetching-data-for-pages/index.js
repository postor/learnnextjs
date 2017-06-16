var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: '获取数据',
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
      title: '获取数据',
      page: getUrl('2-fetching-batman-shows.md'),
      validate: [
        {
          command: 'cd learnnextjs-demo/node_modules/isomorphic-unfetch',
          message: '没有安装isomorphic-unfetch',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: '没有找到文件index.js',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content = fs.readFileSync(tpath)
            return content.toString().indexOf('getInitialProps')>=0
          },
          message: 'index.js没有中使用getInitialProps获取初始prop',
        }        
      ]
    },
    {
      title: '只在服务端',
      page: getUrl('3-only-on-the-server.md'),
    },
    {
      title: '实现文章页',
      page: getUrl('4-implement-the-post-page.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','post.js')
            return fs.existsSync(tpath)
          },
          message: '没有找到文件post.js',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','post.js')
            var content = fs.readFileSync(tpath)
            return content.toString().indexOf('getInitialProps')>=0
          },
          message: 'post.js没有中使用getInitialProps获取初始prop',
        }        
      ]
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