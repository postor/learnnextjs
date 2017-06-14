# 全局风格

有时，我们确实需要改变子组件中的样式。 当使用带有React的markdown时，这一点尤其如此。 您可以在我们的帖子页面看到。（页/ post.js）

这就是全球风格派上用场的地方。 现在尝试添加一些全局样式规则与样式的jsx。 将以下内容应用于`pages/post.js`。

> 在应用以下内容之前，请在应用程序中安装反应标记组件：`npm install --save react-markdown`

```
import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown'

export default (props) => (
  <Layout>
   <h1>{props.url.query.title}</h1>
   <div className="markdown">
     <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}/>
   </div>
   <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
  </Layout>
)
```

会发生什么？

```
✦没有变化
✓应用程序可以应用于markdown内容
✦页面上的错误
✦控制台上的错误
```