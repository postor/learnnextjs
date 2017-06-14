# Using Shared Components

We know that Next.js is all about pages. We can create a page by exporting a React component, and putting that component inside the pages directory. Then it will have a fixed URL based on the file name.

Since exported pages are JavaScript modules, we can import other JavaScript components into them as well.

> This is a feature you'd expect from any JavaScript framework.

In this lesson, we'll create a common Header component and use it in multiple pages. Finally, we'll look at implementing a Layout component and see how it can help us define the look for multiple pages.

Let's get started.