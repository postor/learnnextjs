# 特殊prop “url”

你可以看到，该代码会抛出如下错误：

<img src="https://cloud.githubusercontent.com/assets/50838/24542720/5fd985a0-161a-11e7-8971-bc677906b1bf.png" alt="">

这是因为`url` prop 只暴露给页面的主要组件。 这不会暴露在页面中使用的其他组件。 但是，如果你需要，你可以这样传递：

```
export default (props) => (
    <Layout>
       <Content url={props.url} />
    </Layout>
)
```
