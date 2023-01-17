/* Config file for i18n plugin */

import Vue from 'vue';
import VueI18n from 'vue-i18n';

import es from 'vee-validate/dist/locale/es.json';
import liquidParser from './liquid/liquidParser';
import esLocales from './locales/es.json';

Vue.use(VueI18n);

// Get page language from modyo, change to your needs
const LANG = liquidParser.parse('{{site.lang}}');

export const i18n = new VueI18n({
  locale: LANG,
  fallbackLocale: 'es',
  // eslint-disable-next-line no-use-before-define
  messages: loadLocaleMessages(),
});

function loadLocaleMessages() {
  const messages = {};
  messages.es = {
    ...es.messages,
    ...esLocales,
  };
  return messages;
}
export default { i18n };
