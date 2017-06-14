# Using Link

Now we are going to use next/link to link our two pages.

Add the following code into `pages/index.js`

```
// This is the Link API
import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index
```

Here we've imported next/link as Link and use it like this:

```
<Link href="/about">
  <a>About Page</a>
</Link>
```

Now try to visit http://localhost:3000/

Then click the "About Page" link. It will navigate you to the "About" page.

> This is client-side navigation; the action takes place in the browser, without making a request to the server.
> You can verify this by opening your browser's network request inspector.
> Okay, now we have a simple task for you:

Visit http://localhost:3000/

- Then click the "About Page"
- Then hit your browser's Back button
- How would you best describe the experience of the Back button?

✦Back button didn't work.
✦Back button threw an error on the browser console.
✓It navigated the page to the index (home) page via the client side.
✦It popped up an alert saying, "import 'next/back' to support back button".