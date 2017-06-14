# Styling a Link

Most of the time, we may want to style our links. This is how we can do it:

```
<Link href="/about">
  <a style={{ fontSize: 20 }}>About Page</a>
</Link>
```

Once we add this, you can see the style applied correctly.

How about doing this instead?

```
<Link href="/about" style={{ fontSize: 20 }}>
  <a>About Page</a>
</Link>
```

What has happened with the above code change?

```
✦It applied the style correctly as expected.
✓It didn't do anything to the link's style.
✦It applied the style after a full page reload.
✦It applied the style, but with a warning in the console.
```
