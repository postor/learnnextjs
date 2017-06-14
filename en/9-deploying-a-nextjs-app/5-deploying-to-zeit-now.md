# Deploying to ▲ZEIT now

Now we know how to build and start a Next.js app. We did everything with npm scripts. So, you will be able to customize it to work with your favorite deployment service.

But if you use ▲ZEIT now, there is only a single step.

Just add the following npm scripts:

"scripts": {
  "build": "next build",
  "start": "next start -p 8000"
}

Then [install now](https://zeit.co/now). Then apply the following command:

```
now
```

> Basically, you run the “now” command inside your app's root directory.

Here, we mentioned port 8000 as the port in which we start our app. But we didn't change it when deploying to ZEIT now.

So, in which port could we access our app when deployed to ZEIT now?

```
✦8000
✓80 (or without a port mentioned)
✦Any port you mentioned in the URL
✦It will throw an error saying, "You can only start your app on port 80"
```