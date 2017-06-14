# Deploying an app with a custom server

The app we just deployed doesn't use a custom server code. But if we have that, how can we deploy it?

So, checkout the following branch:

```
git checkout .
git checkout clean-urls-ssr
```

In that, we use a custom server to run our app.

## Build the app

Even for that, you can build your app with the next build. So add the following npm script for that:

```
"scripts": {
  "build": "next build"
}
```

## Start the app

We need to create our custom server code to mention that this is a production app. For that, have a look at this code from our server.js

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

Have a look at the line below:

```
const dev = process.env.NODE_ENV !== 'production'
```

So, we can start our app like this for production:

```
NODE_ENV=production node server.js
```

So, our “npm start” script will be like this:

```
"scripts": {
   "start": "NODE_ENV=production node server.js"
}
```

That's all you have to do.