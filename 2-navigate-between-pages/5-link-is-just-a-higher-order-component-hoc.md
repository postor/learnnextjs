# Link 只是一个 Higher Order Component (HOC)

事实上，应用在`next/link`上的 style prop 没有任何效果。那是因为`next/link` 仅仅是一个 [higher order component](https://facebook.github.io/react/docs/higher-order-components.html) 它只接受"href"和意向类似的 props. 如果您需要对其进行风格化，则需要对下层组件进行调整.

在本例中，是我们的`<a>`标签。