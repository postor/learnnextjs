# Implement the Post Page

Now let's try to implement the “/post” page where it shows the detailed information about the TV show.

First, open the `server.js` and change the `/p/:id` route with the following content:

````
server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
})
```

Then restart your app to apply the above code change.

> Earlier, we mapped the `title` query param to the page. Now we need to rename it to id.

Now replace the pages/post.js with the following content:

```
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
```

Have a look at the getInitialProps of that page:

```
Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.Title}`)

  return { show }
}
```

In that, the first argument of the function in the `context` object. It has a query field that we can use to fetch information.

In our example, we picked the show ID from query params and fetched its show data from the TVMaze API.

<hr>

In this `getInitialProps` function, we have added a console.log to print the show title. Now we are going to see where it's going to print.

Open both the server console and the client console.
Then visit to the home page http://localhost:3000 and click on the first Batman show title.

In what places have you seen the above mentioned console.log message?

```
✦On server console
✓On browser console
✦On both console
✦Not printed on any console
```