# 创建Header组件

让我们为我们的应用创建一个Header组件。
将以下内容添加到文件`components/Header.js`中。

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

该组件包含两个到我们的应用程序可用页面的链接。 我们还将链接的样式美化了一下。