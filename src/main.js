import Vue from 'vue';
import App from './App.vue';
import store from './store';
import i18n from './i18n';
import './vee-validate-config';
import './vue-fontawesome-config';
import 'bootstrap';
import './scss/custom.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#my-widget');
