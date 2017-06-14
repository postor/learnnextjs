# Create a Custom Server

Now we are going to create a custom server for our app using Express. It's pretty simple.

First of all, add Express into your app:

```
npm install --save express
```

Then create a file called `server.js` in your app and add following content:

```
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

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

Now update your npm dev script to:

```
{
  "scripts": {
    "dev": "node server.js"
  }
}
```

Now try to run your app again with npm run dev.

What's the you experience you will get?

```
✦It will add server side support for clean URLs.
✓The app will work but no server side clean URLs.
✦The app will throw an error: “Express and Next.js cannot be used together.”
✦The app will throw an error: “Next.js custom server only work in production.”
```