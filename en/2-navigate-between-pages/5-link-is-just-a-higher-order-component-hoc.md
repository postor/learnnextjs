# Link is Just a Higher Order Component (HOC)

Actually, the style prop on `next/link` has no effect. That's because `next/link` is just a [higher order component](https://facebook.github.io/react/docs/higher-order-components.html) which only accepts the "href" and some similar props. If you need to style it, you need to do it to the underlying component.

In this case, it's our anchor.