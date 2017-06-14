# 创建自定义服务器

现在我们将使用Express为我们的应用程序创建一个自定义服务器。 这很简单

首先，将Express添加到您的应用程序中：

```
npm install --save express
```

然后在您的应用程序中创建一个名为“server.js”的文件，并添加以下内容：

```
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
```

现在更新你的npm dev脚本到：

```
{
  "scripts": {
    "dev": "node server.js"
  }
}
```

现在尝试用`npm run dev`再次运行你的应用程序。

你会得到什么样的体验？

```
✦它将为干净的URL添加服务器端支持。
✓该应用程序将工作，但没有服务器端干净的URL。
✦应用程序会发出错误：“Express和Next.js不能一起使用”。
✦应用程序将抛出一个错误：“Next.js自定义服务器只能在生产中工作”。
```