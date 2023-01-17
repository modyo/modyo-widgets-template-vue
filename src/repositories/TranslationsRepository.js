import translationClient from './clients/ModyoTranslationsClient';

const space = 'translations';
const type = 'modyoservices-widgets-template-vue';

export default {
  getTranslations(lang) {
    return translationClient(lang).getContentType(space, type).getEntries();
  },
};
