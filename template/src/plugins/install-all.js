{{#if_eq type "m"}}
import Indicator from './indicator'
import Toast from './toast'
import Picker from './picker'
import Distpicker from './distpicker'
import Datepicker from './datepicker'
{{/if_eq}}
import MessageBox from './message-box'

const plugins = {
  {{#if_eq type "m"}}
  Indicator,
  Toast,
  Picker,
  Distpicker,
  Datepicker,
  {{/if_eq}}
  MessageBox
}

export default function installAllPlugins (instance) {
  Object.keys(plugins).forEach(key => {
    instance.use(plugins[key])
  })
}
