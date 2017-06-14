# Navigate Between Pages

Now we know how to create a simple Next.js app and run it. Our simple app only had a single page, but we can add as many pages as we want. For example, we can create an "About" page by adding the following content to pages/about.js:

```
export default () => (
  <div>
    <p>This is the about page</p>
  </div>
)
```

 Then we can access that page with http://localhost:3000/about.

After that, we need to connect these pages. We could use an HTML "a" tag for that. However, it won't perform client-side navigation; it navigates to the page via the server, which is not what we want.

In order to support client-side navigation, we need to use Next.js's Link API, which is exported via next/link.

Let's see how to use it.