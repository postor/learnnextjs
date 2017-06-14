# 通过query string传递数据

我们通过query string传递数据。 在我们的例子中，这是“title”查询参数。 我们的PostLink组件如下所示：

```
const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
```

（检查'Link'组件的'href' prop。）

就像这样，你可以通过query string传递任何你喜欢的数据。

## 创建 “post” 页

现在我们需要创建一个帖子来显示博客文章。 为了做到这一点，我们需要从query string中获取标题。 让我们看看如何做到这一点：

创建一个名为`pages/post.js`的文件并添加以下内容：

```
import Layout from '../components/MyLayout.js'

export default (props) => (
    <Layout>
       <h1>{props.url.query.title}</h1>
       <p>This is the blog post content.</p>
    </Layout>
)
```

现在我们的页面将如下所示：

<img src="https://cloud.githubusercontent.com/assets/50838/24542721/5fdd9c26-161a-11e7-9b10-296d4cb6912d.png" alt="">

以上代码中发生了什么。

- 每个页面都会得到一个名为“URL”的prop，其中有一些与当前URL相关的详细信息。
- 在这种情况下，我们使用的是包含有query string参数的“query”对象。
- 所以我们得到的标题是`props.url.query.title`。

我们来简单的修改我们的应用程序。 将“pages/post.js”的内容替换为以下内容：

```
import Layout from '../components/MyLayout.js'

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

export default () => (
    <Layout>
       <Content />
    </Layout>
)
```

当您浏览此页面时会发生什么？ http://localhost:3000/post?title=Hello%20Next.js

```
✦它将按预期工作。
✦没有任何东西。
✦它只会显示标题。
✓引发错误
```
