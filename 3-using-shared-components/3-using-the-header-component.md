# Using the Header Component

接下来，我们导入此组件并将其用于我们的页面。 对于index.js页面，它将如下所示：

```
import Header from '../components/Header'

export default () => (
  <div>
    <Header />
    <p>Hello Next.js</p>
  </div>
)
```

您也可以在about.js页面上执行相同操作。

此时，如果您通过 http://localhost:3000/ 导航到您的应用程序，您将可以看到新的 Header 并在页面之间导航。

<img src="https://cloud.githubusercontent.com/assets/50838/24333679/fa856f00-1279-11e7-931d-a5707e51a801.gif" alt="">

我们尝试对我们的应用进行一些简单的修改。

- 停止正在运行的应用程序
- 将组件目录重命名为comps。
- 从../comps/Header导入头，而不是../components/Header。
- 再次启动应用程序。

它会工作吗？

```
✓Yes。
✦No。 它会抛出一个错误：“未找到组件”。
✦No。 它会抛出一个错误：“组件需要在组件目录中。”
✦No。 它会抛出一个错误：“comps是一个无效的目录”。
```