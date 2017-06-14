# Information on URL

Our `/post` page accepts the title via the query string parameter `title`. In client side routing, we can easily give it a proper value with URL masking.
(via the **as** prop in Link).

```
<Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
  <a>{props.title}</a>
</Link>
```

But in the server route, we don't have that title because we only have an ID for the blog post in the URL. So, in that case, we set the ID as the server side query string param.

You can see it in the following route definition:

```
server.get('/p/:id', (req, res) => {
  const actualPage = '/post'
  const queryParams = { title: req.params.id } 
  app.render(req, res, actualPage, queryParams)
})
```

This is a problem. But in the real world, this won't be much of an issue because we'll use an ID to fetch data from a data server in both client and the server.

So, we only need an ID.