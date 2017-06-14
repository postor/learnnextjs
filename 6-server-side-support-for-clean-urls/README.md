# 服务器端支持定制URL

在上一课中，我们了解了如何为我们的应用创建干净的网址。 基本上，我们可以有这样的URL：

http://localhost:3000/p/my-blog-post

但它只适用于客户端导航。 当我们重新加载页面时，它会给我们一个404页面。

这是因为在pages目录中没有实际的页面叫做 `p/my-blog-post`。

<img src="https://cloud.githubusercontent.com/assets/50838/24919433/475417bc-1f01-11e7-9fae-a17030d3d051.png" alt="">

我们可以使用Next.js自定义服务器API轻松解决这个问题。

让我们看看我们如何做到这一点。