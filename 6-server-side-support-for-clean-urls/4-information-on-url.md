# 关于URL的信息

我们的`/post`页面通过查询字符串参数`title`接受标题。 在客户端路由中，我们可以轻松地给它一个适当的值与URL Mask。
（通过链接中的**as** prop）。

```
<Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
  <a>{props.title}</a>
</Link>
```

但是在服务器路由中，我们没有该标题，因为我们只有URL中的博文的ID。 因此，在这种情况下，我们将ID设置为服务器端查询字符串参数。

您可以在以下路由定义中看到它：

```
server.get('/p/:id', (req, res) => {
  const actualPage = '/post'
  const queryParams = { title: req.params.id } 
  app.render(req, res, actualPage, queryParams)
})
```

这是个问题。 但是在现实世界中，这不是一个问题，因为我们将使用一个ID从客户端和服务器中的数据服务器获取数据。

所以我们只需要一个ID。