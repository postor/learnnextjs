# Using the Header Component

Next, let's import this component and use it in our pages. For the index.js page, it will look like this:

```
import Header from '../components/Header'

export default () => (
  <div>
    <Header />
    <p>Hello Next.js</p>
  </div>
)
```

You can do the same for the about.js page as well.

At this point, if you navigate to your app at http://localhost:3000/ you'll be able to see the new Header and navigate between pages.

<img src="https://cloud.githubusercontent.com/assets/50838/24333679/fa856f00-1279-11e7-931d-a5707e51a801.gif" alt="">

Let's try to make some simple modifications to our application.

- Stop the running app.
- Rename the components directory to comps.
- Import the Header from ../comps/Header instead of ../components/Header.
- Start the app again.

Will it work?

```
✓Yes.
✦No. It will throw an error: “Component not found.”
✦No. It will throw an error: “Component needs to be in the components directory.”
✦No. It will throw an error: “comps is an invalid directory.”
```