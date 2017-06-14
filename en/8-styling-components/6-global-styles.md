# Global Styles

Sometimes, we do need to change styles inside of a child component. This is especially true when using markdown with React. You can see that on our post page. (pages/post.js)

This is where global styles come in handy. Now try to add some global style rules with styled-jsx. Apply the following content to `pages/post.js`.

> Before you apply the following content, install react-markdown component into your app with: `npm install --save react-markdown`

```
import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown'

export default (props) => (
  <Layout>
   <h1>{props.url.query.title}</h1>
   <div className="markdown">
     <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}/>
   </div>
   <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
  </Layout>
)
```

What will happen?

✦Nothing has changed
✓Styles get applied to the markdown content
✦Error on the page
✦Error on the console