# 创建动态页面

现在我们知道如何创建一个具有多个页面的基本的Next.js应用程序。 为了创建页面，我们必须在磁盘上创建一个实际的文件。

然而，在真正的应用中，我们需要动态地创建页面，以便显示动态内容。 有很多方法可以通过Next.js.

我们开始使用**query string**创建动态页面。

我们将创建一个简单的博客应用程序。 它列出了Home（索引）页面上的所有文章。

<img src="https://cloud.githubusercontent.com/assets/50838/24542722/600b9ce8-161a-11e7-9f1d-7ed08ff394fd.png" alt="">

当您点击文章标题时，您将可以自行查看单个文章。

<img src="https://cloud.githubusercontent.com/assets/50838/24542721/5fdd9c26-161a-11e7-9b10-296d4cb6912d.png" alt="">

我们来构建那个应用程序.