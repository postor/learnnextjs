# Create the Header Component

Let's create a Header component for our app.
Add the following to the file `components/Header.js`.

```
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header
```

This component contains two links to the pages available in our app. We've also styled the link a bit to make it easy to visualize.