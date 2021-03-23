/* eslint-disable global-require */
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import i18n from './i18n';
import LiquidPlugin from './vue-liquid-plugin';
import liquidVariables from './liquid-variables';
import './vee-validate-config';
import './vue-fontawesome-config';
import 'bootstrap';
import './scss/custom.scss';

if (process.env.NODE_ENV === 'development') {
  const VueAxe = require('vue-axe').default;
  Vue.use(VueAxe, {
    clearConsoleOnUpdate: false,
  });
}

Vue.config.productionTip = false;

Vue.use(LiquidPlugin, liquidVariables);

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#my-widget');
