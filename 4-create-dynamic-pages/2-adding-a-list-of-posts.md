# 添加帖子列表

首先，我们在主页上添加帖子标题列表。
将以下内容添加到`pages/index.js`。

```
import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js"/>
      <PostLink title="Learn Next.js is awesome"/>
      <PostLink title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)
```

添加此内容后，您将看到如下所示的页面：

<img src="https://cloud.githubusercontent.com/assets/50838/24542722/600b9ce8-161a-11e7-9f1d-7ed08ff394fd.png" alt="">

接下来，点击第一个链接。 你会得到一个404页面。 没关系。

该页面的URL是什么？

```
✦/?id=Hello%20Next.js
✓/post?title=Hello%20Next.js
✦/post?title=Hello Next.js
✦/post
```