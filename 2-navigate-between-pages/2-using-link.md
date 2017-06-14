# 使用 Link

现在我们将使用`next/link`链接我们的两个页面。

将以下代码添加到`pages/index.js`中

```
// This is the Link API
import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index
```

Here we've imported `next/link` as Link and use it like this:

```
<Link href="/about">
  <a>About Page</a>
</Link>
```

现在尝试访问 http://localhost:3000/

然后点击“关于页面”链接。 它将导航到“关于”页面。

> 这是客户端导航; 该操作发生在浏览器中，而不向服务器发出请求。
> 您可以通过打开浏览器的网络请求检查器来验证这一点。
> 好的，现在我们有一个简单的任务：

访问 http://localhost:3000/

- 然后点击“关于页面”
- 然后按浏览器的“返回”按钮
- 你将如何描述“后退”按钮的体验？

```
✦按钮不起作用
✦Back按钮在浏览器控制台上发生错误。
✓通过客户端将页面导航到索引（home）页面。
✦它弹出一个警告，提示“import 'next/back' to support back button”。
```