# 获取页数据

现在我们知道如何创建一个相当体面的Next.js应用程序，并获得Next.js路由API的全部优势。

实际上，我们通常需要从远程数据源中获取数据。 Next.js附带一个标准API来获取页面的数据。 我们使用一个名为“getInitialProps”的异步函数来做。

因此，我们可以通过远程数据源获取给定页面的数据，并将其作为道具传递到我们的页面。 我们可以将我们的“getInitialProps”写入到服务器和客户端上。 所以，Next.js可以在客户端和服务器上使用它。

在本课中，使用“getInitialProps”，我们将构建一个应用程序，显示有关蝙蝠侠电视节目的信息，利用公开的 [TVmaze API](http://www.tvmaze.com/api).

让我们开始吧。