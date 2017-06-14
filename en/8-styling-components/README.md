# Styling Components

Until now, styling components were largely an afterthought. But your app deserves some style.

For a React app, there are many different techniques that we can use to style it, and those can be categorized into two broad methods:

- Traditional CSS-file-based styling (including SASS, PostCSS etc)
- [CSS in Js](https://github.com/MicheleBertoli/css-in-js) styling

Consequently, there are a bunch of practical issues to consider with traditional CSS-file-based styling (especially with SSR), so we suggest avoiding this method when styling for Next.js.

Instead we recommend CSS in JS, which you can use to style individual components rather than importing CSS files.

Next.js comes preloaded with a CSS in JS framework called [styled-jsx](https://github.com/zeit/styled-jsx), specifically designed to make your life easier. It allows you to write familiar CSS rules for your components; rules will have no impact on anything other than the components (not even child components).

That means, your CSS rules are scoped.
Let's see how we can use styled-jsx.