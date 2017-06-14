# Server Side Support for Clean URLs

In the previous lesson, we learned how to create clean URLs for our app. Basically, we can have URLs like this:

http://localhost:3000/p/my-blog-post

But it only worked with client side navigations. When we reload page, it gives us a 404 page.

That's because there is no actual page called `p/my-blog-post` in the pages directory.

<img src="https://cloud.githubusercontent.com/assets/50838/24919433/475417bc-1f01-11e7-9fae-a17030d3d051.png" alt="">

We can solve this pretty easily with the Next.js custom server API.

Let's see how we can do it.