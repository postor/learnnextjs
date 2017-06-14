# Special prop "url"

As you can see, that code will throw an error like this:

<img src="https://cloud.githubusercontent.com/assets/50838/24542720/5fd985a0-161a-11e7-8971-bc677906b1bf.png" alt="">

That's because, `url` prop is only exposed to the page's main component. That's not exposed for other components used in the page. But, if you need, you can pass it like this:

```
export default (props) => (
    <Layout>
       <Content url={props.url} />
    </Layout>
)
```
