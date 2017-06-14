# 对嵌套组件没有影响

这是你所看到的：

<img src="https://cloud.githubusercontent.com/assets/50838/25552972/6becac5c-2c5c-11e7-9fce-61cdc207a10d.png" alt="">

如您所见，CSS规则对子组件中的元素没有影响。

styled-jsx的这个功能可以帮助您管理更大的应用程序的样式。

在这种情况下，您需要直接对子组件进行风格化。 在我们的特殊情况下，我们需要为我们的Link组件做到这一点：

```
const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)
```

> 否则你可以使用 [global selectors](https://github.com/zeit/styled-jsx#global-selectors).