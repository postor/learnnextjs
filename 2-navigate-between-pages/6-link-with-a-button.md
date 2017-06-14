# Link 配合 Button

Let's say that we need to use a "button" instead of an anchor for our link. Then we need to edit our navigation code like this:

假设我们需要使用`button`而不是链接的`a`。 那么我们需要编辑我们的导航代码：

```
<Link href="/about">
  <button>Go to About Page</button>
</Link>
```

当您单击索引页上的按钮时会发生什么？

```
✦什么都不做
✦在“链接中不允许使用按钮”时会发出错误。
✦重新加载页面。
✓将页面导航到关于页面。
```