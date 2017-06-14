# 创建我们的自定义路由

如您所见，应用程序将像以前一样工作，因为我们编写的定制服务器类似于“下一个”二进制命令。

现在我们要添加一个自定义路线来匹配我们的博客文章URL。

使用新路由，我们的`server.js`将如下所示：

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

看看下面的代码：

```
server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id } 
    app.render(req, res, actualPage, queryParams)
})
```

在这里，我们简单地将自定义路由映射到我们现有的页面“/post”。 我们也映射了查询参数。

就是这样了。

现在，重新启动您的应用程序并访问以下页面：

http://localhost:3000/p/hello-nextjs

现在你将看不到404页面，而是实际的页面。

但是还有一个小问题。 你可以发现吗？

```
✦No。 没有问题。
✓客户端渲染标题和服务器端渲染标题不同。
✦服务器端渲染页面将在控制台上发生错误。
✦客户端渲染的页面将在控制台上发生错误。
```