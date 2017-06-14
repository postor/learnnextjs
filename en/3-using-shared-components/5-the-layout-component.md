# The Layout Component

In our app, we'll use a common style across various pages. For this purpose, we can create a common Layout component and use it for each of our pages. Here's an example:

Add this content to `components/MyLayout.js`:

```
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
```

Once we've done that, we can use this Layout in our pages as follows:

```
// pages/index.js

import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
       <p>Hello Next.js</p>
    </Layout>
)
// pages/about.js

import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
       <p>This is the about page</p>
    </Layout>
)
```

Remember, you can access the app at http://localhost:3000/ to see what it looks like.

Now let's try removing `{props.children}` from the Layout and see what happens to the app.

What will happen to the app?

✦There will be no effect.
✓The content of the page being displayed will be removed.
✦It will throw an error saying: “Layout needs some content.”
✦It will log a warning message for the browser component.