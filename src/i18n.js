/* Config file for i18n plugin */

import Vue from 'vue';
import VueI18n from 'vue-i18n';

// The default language is spanish.
// If you add another language to your project be sure to:
// STEP 1: import the validations messages from vee-validate.
import esCL from 'vee-validate/dist/locale/es.json';

Vue.use(VueI18n);

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
  messages['es-CL'] = {
    ...messages['es-CL'],
    validations: esCL.messages,
  };


  return messages;
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'es-CL',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'es-CL',
  messages: loadLocaleMessages(),
});
