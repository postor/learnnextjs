# 渲染子组件

如果您删除`{props.children}`，则布局无法呈现我们放置在Layout元素内的内容，如下所示：

```
export default () => (
    <Layout>
       <p>This is the about page</p>
    </Layout>
)
```

这只是创建布局组件的一种方式。 以下是创建布局组件的其他一些方法：

```
import withLayout from '../lib/layout'

const Page = () => (
  <p>This is the about page</p>
)

export default withLayout(Page)
```

```
const Page = () => (
  <p>This is the about page</p>
)

export default () => (<Layout page={Page}/>)
```

```
const content = (<p>This is the about page</p>)

export default () => (<Layout content={content}/>)
```
