# Styling our home page

Now let's add some styles into our home page. (`pages/index.js`)

Simply replace `pages/index.js` with the following code:

```
import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <li key={post.id}>
          <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)
```

Have a look at the `<style jsx>` element. This is where we write our CSS rules.

After you have replaced this code, our blog's home page will look like this:

<img src="https://cloud.githubusercontent.com/assets/50838/25552915/f18f2f12-2c5a-11e7-97aa-4b9d4b9f95a7.png" alt="">

In the above code, we did not write styles directly inside of the style tag; rather, it was written inside of a template string.

Now try to write CSS directly without a template string (``{` `}``). Like this:

```
<style jsx>
  h1, a {
    font-family: "Arial";
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    margin: 5px 0;
  }

  a {
    text-decoration: none;
    color: blue;
  }

  a:hover {
    opacity: 0.6;
  }
</style>
```

What will happen?

✦Nothing has changed
✦New styles are gone
✓Shows an error on the page: “SyntaxError: Unexpected token”
✦Shows an error on the page: “Invalid styles provided”