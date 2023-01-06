import { Client } from '@modyo/sdk';
import liquidParser from '../../liquid/liquidParser';

export default new Client(liquidParser.parse('{{account.url}}'), liquidParser.parse('{{site.lang}}'));
