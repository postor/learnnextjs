const url = require('url')
const fs = require('fs-extra')
const $ = require('jquery')
const showdown  = require('showdown')
const child_process = require('child_process')
const URL = url.URL

var urlObj = new URL(global.location.href)
var markdownPath = urlObj.searchParams.get('md')

fs.readFile(markdownPath)
.then((markdownContent)=>{  
    var converter = new showdown.Converter()
    var html      = converter.makeHtml(markdownContent.toString())
    $('.markdown-body').html(html)    
    return true
})
.then(()=>{
    $('a').click(function(e){
        e.preventDefault()
        var src = $(this).attr('href')
        if(src.startsWith('http')){
            child_process.execSync('start '+src)
        }
    })
})