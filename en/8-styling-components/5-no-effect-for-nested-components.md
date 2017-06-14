# No Effect for Nested Component

This is what you've seen:

<img src="https://cloud.githubusercontent.com/assets/50838/25552972/6becac5c-2c5c-11e7-9fce-61cdc207a10d.png" alt="">

As you have witnessed, CSS rules have no effect on elements inside of a child component.

This feature of styled-jsx helps you to manage styles for bigger apps.

In that case, you need to style the child component directly. And in our particular case, we need to do this for our Link component:

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

> Otherwise, you could use [global selectors](https://github.com/zeit/styled-jsx#global-selectors).