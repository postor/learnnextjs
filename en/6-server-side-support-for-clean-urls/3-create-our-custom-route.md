# Create our Custom Route

As you've experienced, the app will work just like it did previously because the custom server we wrote is similar to the “next” binary command.

Now we are going to add a custom route to match our blog post URLs.

With the new route, our `server.js` will look like this:

```
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
```

Have a look at the code below:

```
server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id } 
    app.render(req, res, actualPage, queryParams)
})
```

Here, we simply mapped a custom route to our existing page "/post". We have also mapped query params as well.

So, that's it.

Now, restart your app and visit to following page:

http://localhost:3000/p/hello-nextjs

Now you won't see the 404 page anymore but the actual page.

But there's an small issue. Can you identify it?

✦No. There are no issues.
✓Client side rendered title and server side rendered title are different.
✦Server side rendered page will have an error on the console.
✦Client side rendered page will have an error on the console.