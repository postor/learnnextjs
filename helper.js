
var url = require('url')
var path = require('path')

module.exports.getMdPage = function(p){
  return url.format({
    pathname: path.join(__dirname, 'resources', 'markdown.html'),
    protocol: 'file:',
    slashes: true,
    query:{
      md: p,
    }
  })
}
  
