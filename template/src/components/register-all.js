import TopNav from './top-nav'

const components = {
  TopNav
}

export default function registerAllComponents (instance) {
  Object.keys(components).forEach(key => {
    instance.component(key, components[key])
  })
}
