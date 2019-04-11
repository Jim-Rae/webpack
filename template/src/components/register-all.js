{{#if_eq type "m"}}
import TopNav from './top-nav'
{{/if_eq}}

const components = {
  {{#if_eq type "m"}}
  TopNav
  {{/if_eq}}
}

export default function registerAllComponents (instance) {
  Object.keys(components).forEach(key => {
    instance.component(key, components[key])
  })
}
