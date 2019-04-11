import Indicator from './indicator'
import Toast from './toast'
import Picker from './picker'
import Distpicker from './distpicker'
import Datepicker from './datepicker'
import MessageBox from './message-box'

const plugins = {
  Indicator,
  Toast,
  Picker,
  MessageBox,
  Distpicker,
  Datepicker
}

export default function installAllPlugins (instance) {
  Object.keys(plugins).forEach(key => {
    instance.use(plugins[key])
  })
}
