# 获取蝙蝠侠节目

在我们的演示应用程序中，我们列出了主页上的博客文章。 现在我们要显示一个蝙蝠侠电视节目列表。

而不是硬编码这些节目，我们将从远程服务器获取它们。

> 这是我们使用[TVMaze API](http://www.tvmaze.com/api)来获取这些电视节目。
> 这是一个搜索电视节目信息的API。

首先我们需要安装同构 - 非提取。 这是我们要用来获取数据的库。 这是浏览器抓取API的简单实现，但在客户端和服务器环境中均可使用。

```
npm install --save isomorphic-unfetch
```

然后用以下内容替换我们的 `pages/index.js`:

```
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
```

除了`Index.getInitialProps`之外，上述页面上的所有内容都会很熟悉，如下所示：

```
Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}
```

这是一个静态异步功能，您可以添加到应用程序的任何页面。 使用它，我们可以获取数据并将其作为道具发送到我们的页面。

正如你所看到的，现在我们正在获取蝙蝠侠电视节目，并将它们作为“shows” prop传入我们的页面。

<img src="https://cloud.githubusercontent.com/assets/50838/26300128/de007dd6-3efa-11e7-9084-6ba7ff10774b.png" alt="">

您可以在上面的`getInitialProps`函数中看到，它会打印出提取到控制台的数据。

现在，看看浏览器控制台和服务器控制台。

然后重新加载页面。

您在哪里看到上述消息在页面重新加载后打印？

```
✓在服务器控制台
✦浏览器控制台
✦两个控制台
✦不要在任何控制台上打印
```