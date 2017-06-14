# 样式组件

到目前为止，造型组件在很大程度上是一个事后的想法。但是你的应用程序值得一些风格。

对于一个React应用程序，我们可以使用许多不同的技术来设计它们，而这些技术可以分为两种广泛的方法：

- 传统的基于CSS文件的样式（包括SASS，PostCSS等）
- [CSS in Js](https://github.com/MicheleBertoli/css-in-js) 

因此，传统的基于CSS文件的样式（特别是使用SSR）有一些实际问题需要考虑，所以我们建议在为Next.js设计样式时避免使用此方法。

相反，我们建议使用JS中的CSS，您可以使用CSS来对单个组件进行样式，而不是导入CSS文件。

Next.js在JS框架中预先加载了一个名为[styled-jsx](https://github.com/zeit/styled-jsx)的CSS，专门用于使您的生活更轻松。它允许您为组件编写熟悉的CSS规则;规则对组件（甚至不是子组件）以外的任何东西都没有影响。

这意味着您的CSS规则是范围的。

我们来看看我们如何使用styled-jsx。