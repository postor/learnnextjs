# Adding a list of posts

First of all, let's add the list of post titles in the home page.
Add the following content to the `pages/index.js`.

```
import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js"/>
      <PostLink title="Learn Next.js is awesome"/>
      <PostLink title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)
```

Once you add this content, you will see a page like this:

<img src="https://cloud.githubusercontent.com/assets/50838/24542722/600b9ce8-161a-11e7-9f1d-7ed08ff394fd.png" alt="">

Next, click the first link. You'll get a 404 page. That's fine.

What's the URL of that page?

```
✦/?id=Hello%20Next.js
✓/post?title=Hello%20Next.js
✦/post?title=Hello Next.js
✦/post
```