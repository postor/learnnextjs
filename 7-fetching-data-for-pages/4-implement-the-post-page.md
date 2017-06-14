# 实现 Post 页面

现在让我们尝试实现“/ post”页面，其中显示有关电视节目的详细信息。

首先，打开`server.js`并更改`/p/：id`路由，其中包含以下内容：

```
server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
})
```

然后重新启动您的应用程序以应用上述代码更改。

> 以前，我们将`title`查询参数映射到页面。 现在我们需要将其重命名为id。

现在用以下内容替换`pages/post.js`：

```
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
```

看看该页面的getInitialProps：

```
Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.Title}`)

  return { show }
}
```

在那里，函数的第一个参数在`context`对象中。 它有一个我们可以用来获取信息的查询字段。

在我们的示例中，我们从查询参数中选择了显示ID，并从TVMaze API中获取了其显示数据。

<hr>

在这个`getInitialProps`函数中，我们添加了一个console.log来打印显示标题。 现在我们来看看它打印的位置。

打开服务器控制台和客户端控制台。
然后访问主页 http://localhost:3000，然后点击第一个蝙蝠侠节目标题。

你在哪些地方看到上面提到的console.log消息？

```
✦在服务器控制台
✓在浏览器控制台
✦两个控制台
✦不要在任何控制台上打印
```