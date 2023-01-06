import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import {
  i18n,
  // , loadLanguageAsync
} from './i18n';
import './vee-validate-config';
import 'bootstrap';
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
const VueAxe = process.env.NODE_ENV !== 'production' ? require('vue-axe').default : null;

Vue.config.productionTip = false
if (VueAxe) {
  Vue.use(VueAxe, {
    allowConsoleClears: false,
  });
}

new Vue({
  render: h => h(App),
  pinia,
  i18n,
}).$mount('#app')

