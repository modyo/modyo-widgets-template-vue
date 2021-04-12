import { Client } from '@modyo/sdk';

import liquidParser from '../../liquid/liquidParser';

const accountUrl = liquidParser.parse('{{account.url}}');
const LANG = liquidParser.parse('{{site.language}}');

export default new Client(accountUrl, LANG);
