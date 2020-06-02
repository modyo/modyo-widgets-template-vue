import ModyoSdk from './clients/ModyoClient';

const space = 'testing';
const type = 'posts';
const content = ModyoSdk.getContentType(space, type);
const privateContent = ModyoSdk.getContentType(space, type, false);

export default {
  get() {
    return content.getEntries();
  },
  getTop(number) {
    const filter = content.Filter().limit(number);
    return content.getEntries(filter);
  },
  getPrivate() {
    return privateContent.getEntries();
  },
  getEntry(id) {
    return privateContent.getEntry(id);
  },
};
