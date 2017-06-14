运行两个实例

现在我们将运行我们的应用程序的两个实例。 通常，我们这样做可以水平扩展我们的应用程序。
首先，对我们的start npm脚本进行以下更改：

```
"scripts": {
  "start": "next start -p $PORT"
}
```

> 如果你在Windows上，你的起始脚本应该是下一个启动-p％PORT％。

现在我们来构建我们的应用程序。

```
npm run build
```

然后尝试在自己的终端中运行以下命令：

```
PORT=8000 npm start
PORT=9000 npm start
```

> 在Windows上，您需要以不同的方式运行命令。 一个选项是将npm模块交叉环境安装到您的应用程序中。
> 然后从命令行运行`cross-env PORT=9000 npm start`。

是否可以在两个端口上访问我们的应用程序？

```
✓是，http://localhost:8000 和 http://localhost:9000
✦只有http://localhost:8000
✦只有http://localhost:9000
✦都不可以
```