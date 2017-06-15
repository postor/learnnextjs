const path = require('path')

module.exports = {
  title: '学习next.js',
  dependences: [],
  chapters: [
    {
      title: '环境准备',
      steps: [
        {
          title:'NodeJS',
          desc: '如果你还没有NodeJS环境，请先回到',
          page: path.join(__dirname,'resources','markdown.html'), 
          validate: [            
            {
              cmd: 'node -v',
              errorMsg: 'node 没有正确安装', 
            },
            {
              cmd: 'npm -v',
              errorMsg: 'npm 没有正确安装', 
            },
            {
              cmd: 'yarn -v',
              errorMsg: 'yarn 没有正确安装', 
            },
          ],
        },
      ]
    },    
  ].concat(require('./chapters'))
}