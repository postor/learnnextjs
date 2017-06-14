# Route Masking（路由定制）

在这里，我们将使用称为Route Masking的Next.js的独特功能。 基本上，它会在浏览器上显示与您的应用程序看到的实际URL不同的URL。

我们在我们的博客文章URL中添加一个路由掩码。

对`pages/index.js`应用以下代码：

```
import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)
```

看看下面的代码块：

```
const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
```

在`<Link>`元素中，我们使用了另一个称为“as”的支柱。 这是我们需要在浏览器上显示的URL。 您的应用看到的URL在“href” prop 中被提及。

现在尝试点击第一个博文，你将被导航到博客文章。

之后，点击**返回**按钮，然后按**前进**按钮。 会发生什么？

```
✦It throws an error.
✓It goes back to the index page and navigates again to the post page.
✦It goes back to the index page but nothing happens after that.
✦It goes back to the index page then throws an error.
```