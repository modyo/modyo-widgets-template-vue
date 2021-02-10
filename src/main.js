/* eslint-disable global-require */
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import i18n from './i18n';
import './vee-validate-config';
import './vue-fontawesome-config';
import './scss/custom.scss';
import LiquidPlugin from './vue-liquid-plugin';
import liquidConfig from './vue-liquid-config';

if (process.env.NODE_ENV === 'development') {
  require('bootstrap');

  const VueAxe = require('vue-axe').default;
  Vue.use(VueAxe, {
    clearConsoleOnUpdate: false,
  });
}

Vue.config.productionTip = false;
Vue.use(LiquidPlugin, liquidConfig);
new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#my-widget');
