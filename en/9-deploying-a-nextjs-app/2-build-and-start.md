# Build and Start

First of all, we need to build our Next.js app for production. It will produce an optimized set of code for production.

For that, simply add the following npm script:

```
"scripts": {
  "build": "next build"
}
```

Then you need to start your Next.js app on a port. That will do side rendering and serve pages (built with the above command).

For that, add the following npm script:

```
"scripts": {
  "start": "next start"
}
```

That will start our app in port 3000.

So, you can run the following commands to run our app in production:

```
npm run build
npm run start
```