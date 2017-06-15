
var url = require('url')

module.exports.getMdPage(path){
  url.format({
    pathname: path.join(__dirname, 'resources', 'markdown.html'),
    protocol: 'file:',
    slashes: true,
    query:{
      md: path,
    }
  })
}
  