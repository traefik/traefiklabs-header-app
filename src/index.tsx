import App from 'App'
import { addCustomClickEventListener } from 'utils/addCustomEventListener'
import registerCustomElement from 'utils/register-custom-element'

registerCustomElement({
  name: 'header-app',
  component: App,
})

addCustomClickEventListener('custom_click_event')
