var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs-extra')

module.exports = {
  title: '初识next.js',
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
          command: 'cd hello-next/pages',
          message: '没有创建目录hello-next/pages',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'hello-next','package.json')
            return fs.existsSync(tpath)
          },
          message: '没有在目录hello-next下运行npm init',
        },
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'hello-next','package.json')
            var content = fs.readFileSync(tpath).toString()
            return /dev/.test(content)
          },
          message: 'package.json中没有添加 "dev": "next" ',
        }
      ],
    },
    {
      title: '404 页面',
      page: getUrl('2-404-page.md')
    },
    {
      title: '创建第一个页面',
      page: getUrl('3-creating-our-first-page.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'hello-next','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: '没有在目录hello-next/pages下添加index.js',
        }
      ]
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