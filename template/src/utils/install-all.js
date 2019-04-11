import Common from './common'
import Browser from './browser'

const utils = {
  Common,
  Browser
}

export default function installAllUtils (instance) {
  Object.keys(utils).forEach(key => {
    instance.use(utils[key])
  })
}
