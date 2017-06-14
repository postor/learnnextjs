# Create Dynamic Pages

Now we know how to create a basic Next.js app with multiple pages. In order to create a page, we have to create an actual file on the disk.

However, in a real app, we need to create pages dynamically in order to display dynamic content. There are many approaches to do that with Next.js.

We are starting with creating dynamic pages by using **query strings**.

We'll be creating a simple blog app. It has a list of all the posts on the home (index) page.

<img src="https://cloud.githubusercontent.com/assets/50838/24542722/600b9ce8-161a-11e7-9f1d-7ed08ff394fd.png" alt="">

When you click on a post title, you'll be able to see the individual post on its own view.

<img src="https://cloud.githubusercontent.com/assets/50838/24542721/5fdd9c26-161a-11e7-9b10-296d4cb6912d.png" alt="">

Let's build that app.