# 布局组件

在我们的应用程序中，我们将在各种页面中使用通用的样式。 为此，我们可以创建一个通用的布局组件，并为每个页面使用它。 以下是一个例子：

将此内容添加到`components/MyLayout.js`中：

```
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
```

一旦我们这样做，我们可以在我们的页面中使用这个布局如下：

```
// pages/index.js

import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
       <p>Hello Next.js</p>
    </Layout>
)
// pages/about.js

import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
       <p>This is the about page</p>
    </Layout>
)
```

Remember, you can access the app at http://localhost:3000/ to see what it looks like.

Now let's try removing `{props.children}` from the Layout and see what happens to the app.

What will happen to the app?


```
✦There will be no effect.
✓The content of the page being displayed will be removed.
✦It will throw an error saying: “Layout needs some content.”
✦It will log a warning message for the browser component.
```

请记住，您可以访问 http://localhost:3000/ 来查看它的外观。

现在我们来试试从“布局”中删除`{props.children}`，看看会发生什么？

```
✦不会有影响。
✓显示页面的内容将被删除。
✦会出现一个错误：“布局需要一些内容”。
✦它将记录浏览器组件的警告消息。
```