# Passing Data via Query Strings

We are passing data via a query string parameter (a query param). In our case, it's the “title” query param. We do this with our PostLink component as shown below:

```
const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
```

(Check the href prop of the Link component.)

Just like that, you can pass any kind of data you like with query strings.

## Create the “post” page

Now we need to create the post page to show the blog post. In order to do that, we need to get the title from the query strings. Let's see how to do that:

Create a file called `pages/post.js` and add the following content:

```
import Layout from '../components/MyLayout.js'

export default (props) => (
    <Layout>
       <h1>{props.url.query.title}</h1>
       <p>This is the blog post content.</p>
    </Layout>
)
```

Now our page will look like this:

<img src="https://cloud.githubusercontent.com/assets/50838/24542721/5fdd9c26-161a-11e7-9b10-296d4cb6912d.png" alt="">

Here's what's happening in the above code.

- Every page will get a prop called “URL” which has some details related to the current URL.
- In this case, we are using the “query” object, which has the query string params.
- Therefore, we get the title with `props.url.query.title`.

Let's do a simple modification to our app. Replace the content of the “pages/post.js” with the following:

```
import Layout from '../components/MyLayout.js'

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

export default () => (
    <Layout>
       <Content />
    </Layout>
)
```

What'll happen when you navigate to this page? http://localhost:3000/post?title=Hello%20Next.js

```
✦It'll work as expected.
✦It'll render nothing.
✦It'll rendered only the header.
✓It throws an error
```
