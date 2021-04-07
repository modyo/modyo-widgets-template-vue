import { Client } from '@modyo/sdk';
import { accountUrl } from './config/modyo.config';

import liquidParser from '../../liquid/liquidParser';
// Get page language from modyo site using liquid
const LANG = liquidParser.parse('{{site.language}}');

export default new Client(accountUrl, LANG);
