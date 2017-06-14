# Fetching Data for Pages

Now we know how to create a pretty decent Next.js app and get the full advantage of the Next.js routing API.

In practice, we usually need to fetch data from a remote data source. Next.js comes with a standard API to fetch data for pages. We do it using an async function called `getInitialProps`.

With that, we can fetch data for a given page via a remote data source and pass it as props to our page. We can write our `getInitialProps` to work on both server and the client. So, Next.js can use it on both client and server.

In this lesson, using `getInitialProps`, we are going to build an app which shows information about Batman TV Shows, utilising the public [TVmaze API](http://www.tvmaze.com/api).



Let's get started.