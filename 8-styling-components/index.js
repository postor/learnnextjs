var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

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
      page: getUrl('2-styling-our-home-page.md'),
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
            return /style\s+jsx/.test(content)
          },
          message: 'index.js中没有使用<style jsx>添加样式',
        }
      ]
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
      page: getUrl('6-global-styles.md'),
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
            var tpath = path.join(cwd,'learnnextjs-demo','pages','post.js')
            var content = fs.readFileSync(tpath).toString()
            return /style\s+jsx\s+global/.test(content)
          },
          message: 'post.js中没有使用<style jsx global>添加全局样式',
        }
      ]
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