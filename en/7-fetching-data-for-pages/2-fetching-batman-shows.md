# Fetching Batman Shows

In our demo app, we have a list of blog posts on the home page. Now we are going to display a list of Batman TV shows.

Instead of hardcoding those shows, we are going to fetch them from a remote server.

> Here are we using the [TVMaze API](http://www.tvmaze.com/api) to fetch those TV shows.
> It's an API to search TV show information.

First of all we need to install isomorphic-unfetch. That's the library we are going to use to fetch data. It's a simple implementation of the browser fetch API, but works both in client and server environments.

```
npm install --save isomorphic-unfetch
```

Then replace our `pages/index.js` with the following content:

```
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
```

Everything on the above page will be familiar to you except the `Index.getInitialProps` as shown below:

```
Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}
```

That's a static async function you can add into any page in your app. Using that, we can fetch data and send them as props to our page.

As you can see, now we are fetching Batman TV shows and passing them into our page as the 'shows' prop.

<img src="https://cloud.githubusercontent.com/assets/50838/26300128/de007dd6-3efa-11e7-9084-6ba7ff10774b.png" alt="">

As you can see in the above `getInitialProps` function, it prints the number of data fetched to the console.
Now, have a look at both the browser console and server console.
Then reload the page.

Where did you see the above message printed after page reload?

```
✓On server console
✦On browser console
✦On both console
✦Not printed on any console
```