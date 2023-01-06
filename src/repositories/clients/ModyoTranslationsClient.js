import { Client } from '@modyo/sdk';
import liquidParser from '../../liquid/liquidParser';

export default (lang) => new Client(liquidParser.parse('{{account.url}}'), liquidParser.parse(lang));
