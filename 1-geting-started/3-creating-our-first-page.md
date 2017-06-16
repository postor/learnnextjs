# 创建第一个页面

现在让我们创建我们的第一页。

创建一个名为pages / index.js的文件，并添加以下内容：

```
const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
)

export default Index
```

现在如果再次访问 http://localhost:3000 ，你会看到一个带有“Hello Next.js”的页面

在这里，我们从pages / index.js模块导出了一个简单的React Component。 同样，您可以编写自己的React组件并将其导出。

> 确保您的React Component是默认的导出。

现在尝试在您的索引页面中提示语法错误。 以下是一个例子：

（我们只是删除了</ p> HTML标签）

```
const Index = () => (
  <div>
    <p>Hello Next.js
  </div>
)

export default Index
```

该应用程序将会发生什么 http://localhost:3000 ？

```
✦发生了一切
✦页面中找不到错误
✓显示语法错误的错误
✦500 - 内部错误有一个错误
```