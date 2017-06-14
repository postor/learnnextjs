# Rendering Child Components

If you remove `{props.children}`, the Layout cannot render the content we put inside the Layout element, as shown below:

```
export default () => (
    <Layout>
       <p>This is the about page</p>
    </Layout>
)
```

This is just a one way to create a Layout component. Here are some other methods of creating a Layout component:

```
import withLayout from '../lib/layout'

const Page = () => (
  <p>This is the about page</p>
)

export default withLayout(Page)
```

```
const Page = () => (
  <p>This is the about page</p>
)

export default () => (<Layout page={Page}/>)
```

```
const content = (<p>This is the about page</p>)

export default () => (<Layout content={content}/>)
```
