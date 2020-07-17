import Vue from 'vue';
import VueAxe from 'vue-axe';
import App from './App.vue';
import store from './store';
import i18n from './i18n';
import './vee-validate-config';
import './vue-fontawesome-config';

import 'bootstrap';
import './scss/custom.scss';

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  Vue.use(VueAxe, {
    clearConsoleOnUpdate: false,
  });
}

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#my-widget');
