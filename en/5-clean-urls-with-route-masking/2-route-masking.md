# Route Masking

Here, we are going to use a unique feature of Next.js called route masking. Basically, it will show a different URL on the browser than the actual URL that your app sees.

Let's add a route mask to our blog post URL.

Use the following code for the `pages/index.js`:

```
import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)
```

Have look at the following code block:

```
const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
```

In the <Link> element, we have used another prop called “as”. That's the URL which we need to show on the browser. The URL your app sees is mentioned in the “href” prop.

Now try to click on the first blog post and you'll be navigated to the blog post.

After that, hit the **back** button and then hit the **forward** button. What will happen?

```
✦It throws an error.
✓It goes back to the index page and navigates again to the post page.
✦It goes back to the index page but nothing happens after that.
✦It goes back to the index page then throws an error.
```