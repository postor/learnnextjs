Run two instances

Now we are going to run two instances of our app. Usually, we do this to horizontally scale our app.
First of all, do the following changes to our start npm script:

```
"scripts": {
  "start": "next start -p $PORT"
}
```

> If you are on Windows, your start script should be next start -p %PORT%.

Now let's build our app first.

```
npm run build
```

Then try to run the following commands in its own terminal:

```
PORT=8000 npm start
PORT=9000 npm start
```

> On Windows, you will need to run the command differently. One option is to install the npm module cross-env into your app.
> Then run cross-env PORT=9000 npm start from the command line.

Is it possible to access our app on both ports?

```
✓Yes, both http://localhost:8000 and http://localhost:9000
✦Only http://localhost:8000
✦Only http://localhost:9000
✦Neither one
```