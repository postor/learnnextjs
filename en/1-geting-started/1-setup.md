# Setup

Next.js works with Windows, Mac and Linux alike. You only need to have Node.js installed on your system to begin building Next.js applications.

Besides that you need to have a text editor to write code, and a Terminal application to invoke some commands.

> If you are on Windows, try to use PowerShell.
> Next.js works with any shell or terminal, but we'll be using some UNIX-specific commands in this guide.
> We recommend using PowerShell to make it easy to follow along.

To start, create a sample project by running the following commands:

```
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages
```

Then open the "package.json" in the hello-next directory and add the following NPM script.

```
{
  "scripts": {
    "dev": "next"
  }
}
```

Now everything is ready. Run the following command to start the dev server:

```
npm run dev
```

Then open http://localhost:3000 from your favourite browser.

What's the output you see on the screen?

```
✦Error No Page Found
✓404 - This page could not be found
✦Hello Next.js
✦Hello World
```
