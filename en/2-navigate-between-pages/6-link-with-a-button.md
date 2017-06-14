# Link With a Button

Let's say that we need to use a "button" instead of an anchor for our link. Then we need to edit our navigation code like this:

```
<Link href="/about">
  <button>Go to About Page</button>
</Link>
```

What will happen when you click the button on the index page?

```
✦It does nothing.
✦It throws an error saying "button is not allowed inside link".
✦It reloads the page.
✓It navigates the page to the about page.
```