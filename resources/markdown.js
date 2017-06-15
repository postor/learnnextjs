const url = require('url')
const fs = require('fs-extra')
const $ = require('jquery')
const showdown  = require('showdown')
const URL = url.URL

var urlObj = new URL(global.location.href)
var markdownPath = urlObj.searchParams.get('md')

fs.readFile(markdownPath)
.then((markdownContent)=>{  
    converter = new showdown.Converter()
    html      = converter.makeHtml(markdownContent)
    $('.markdown-body').html(html)
})