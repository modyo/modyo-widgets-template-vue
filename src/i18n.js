/* Config file for i18n plugin */

import Vue from 'vue';
import VueI18n from 'vue-i18n';

// The default language is spanish.
// If you add another language to your project be sure to:
// STEP 1: import the validations messages from vee-validate.
import es from 'vee-validate/dist/locale/es.json';
import en from 'vee-validate/dist/locale/en.json';

import liquidParser from './liquid/liquidParser';

Vue.use(VueI18n);

// Get page language from modyo site using liquid
const LANG = liquidParser.parse('{{site.language}}');

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });

  // STEP 2: add the validation messages to the i18n plugin.
  // Copy the code below for every new language you add.
  messages.es = {
    ...messages.es,
    validations: es.messages,
  };

  messages.en = {
    ...messages.en,
    validations: en.messages,
  };

  return messages;
}

export default new VueI18n({
  locale: LANG,
  fallbackLocale: 'es',
  messages: loadLocaleMessages(),
});
