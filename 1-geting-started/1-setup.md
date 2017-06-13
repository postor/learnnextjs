# 安装

Next.js适用于Windows，Mac和Linux。 您只需要在系统上安装Node.js即可开始构建Next.js应用程序。

此外，您需要一个文本编辑器来编写代码，一个终端应用程序来调用一些命令。

> 如果您在Windows上，请尝试使用PowerShell。
> Next.js适用于任何shell或终端，但我们将在本指南中使用一些UNIX特定的命令。
> 我们建议您使用PowerShell来轻松追踪。

要开始，请通过运行以下命令创建示例项目：

```
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages
```

然后在hello-next目录中打开“package.json”，并添加以下NPM脚本。

```
{
  "scripts": {
    "dev": "next"
  }
}
```

现在一切都准备好了 运行以下命令启动dev服务器：

```
npm run dev
```

然后从您最喜欢的浏览器打开 http://localhost:3000 

你在屏幕上看到的输出是什么？

```
✦Error No Page Found
✓404 - This page could not be found
✦Hello Next.js
✦Hello World
```

[继续](./2-404-page.md)