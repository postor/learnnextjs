# Creating Our First Page

Now let's create our first page.

Create a file named pages/index.js and add the following content:

```
const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
)

export default Index
```

Now if you visit http://localhost:3000 again, you'll see a page with "Hello Next.js"

Here, we've exported a simple React Component from the pages/index.js module. Likewise, you could write your own React component and export it.

> Make sure your React Component is the default export.

Now try to prompt a syntax error in your Index page. Here's an example:

(We have simply removed the </p> HTML tag)

```
const Index = () => (
  <div>
    <p>Hello Next.js
  </div>
)

export default Index
```

What will happen to the app loaded at http://localhost:3000?

```
✦Nothing happened
✦There's an error with page not found
✓There's an error showing the syntax error
✦There's an error with 500 - Internal Error
```
