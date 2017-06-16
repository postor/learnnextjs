var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: '可重用组件',
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
      title: '创建顶部导航',
      page: getUrl('2-create-the-header-component.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','components','Header.js')
            return fs.existsSync(tpath)
          },
          message: '没有创建文件components/Header.js',
        },
      ]
    },
    {
      title: '使用顶部导航',
      page: getUrl('3-using-the-header-component.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: '没有找到pages/index.js',
        },{
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content =  fs.readFileSync(tpath).toString()
            return /Header/.test(content)
          },
          message: 'pages/index.js中没有应用<Header>组件',
        },{
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','comps','Header.js')
            return fs.existsSync(tpath)
          },
          message: '没有重命名目录components到comps',
        }
      ]
    },
    {
      title: 'component目录',
      page: getUrl('4-the-component-directory.md')
    },
    {
      title: '布局组件',
      page: getUrl('5-the-layout-component.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','components','MyLayout.js')
            return fs.existsSync(tpath)
          },
          message: '没有创建文件components/MyLayout.js',
        },{
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: '没有找到pages/index.js',
        },{
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content =  fs.readFileSync(tpath).toString()
            return /MyLayout/.test(content)
          },
          message: 'pages/index.js中没有应用<MyLayout>组件',
        },{
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','about.js')
            return fs.existsSync(tpath)
          },
          message: '没有找到pages/about.js',
        },{
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','about.js')
            var content =  fs.readFileSync(tpath).toString()
            return /MyLayout/.test(content)
          },
          message: 'pages/about.js中没有应用<MyLayout>组件',
        }
        
      ]
    },
    {
      title: '显示子组件',
      page: getUrl('6-rendering-child-components.md')
    },
    {
      title: '使用组件',
      page: getUrl('7-using-components.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}