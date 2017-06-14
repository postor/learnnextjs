# 造型我们的主页

现在我们在主页面添加一些样式。 (`pages/index.js`)

只需用以下代码替换`pages/index.js`：

```
import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <li key={post.id}>
          <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)
```

看看`<style jsx>`元素。 这是我们编写我们的CSS规则的地方。

替换此代码后，我们的博客的主页将如下所示：

<img src="https://cloud.githubusercontent.com/assets/50838/25552915/f18f2f12-2c5a-11e7-97aa-4b9d4b9f95a7.png" alt="">

在上面的代码中，我们没有直接在样式标签中编写样式; 而是写在模板字符串中。

现在尝试直接编写CSS而不使用模板字符串（``{` `}``）。 像这样：

```
<style jsx>
  h1, a {
    font-family: "Arial";
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    margin: 5px 0;
  }

  a {
    text-decoration: none;
    color: blue;
  }

  a:hover {
    opacity: 0.6;
  }
</style>
```

会发生什么？

```
✦没有变化
✦新风格不见了
✓在页面上显示错误：“SyntaxError：Unexpected token”
✦在页面上显示错误：“提供的样式无效”
```