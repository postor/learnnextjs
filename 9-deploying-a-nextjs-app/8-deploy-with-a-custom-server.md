# 使用自定义服务器部署应用程序

我们刚刚部署的应用程序不使用自定义服务器代码。 但是如果我们这样做，我们如何才能部署呢？

所以，检查以下分支：

```
git checkout .
git checkout clean-urls-ssr
```

因此，我们使用自定义服务器来运行我们的应用程序。

## 构建应用程序

即使这样，您可以使用下一个构建来构建您的应用程序。 所以添加以下npm脚本：

```
"scripts": {
  "build": "next build"
}
```

## Start the app

我们需要创建我们的自定义服务器代码来提及这是一个生产应用程序。 为此，请看我们的server.js中的这段代码

```
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

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

看下面的一行：

```
const dev = process.env.NODE_ENV !== 'production'
```

所以，我们可以像这样开始我们的应用程序：

```
NODE_ENV=production node server.js
```

所以，我们的“npm开始”脚本将是这样的：

```
"scripts": {
   "start": "NODE_ENV=production node server.js"
}
```

这就是你所要做的一切。