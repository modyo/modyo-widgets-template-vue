import { Client } from '@modyo/sdk';
import { accountUrl } from './config/modyo.config';

// Get page language from modyo, change to your needs
const LANG = window?.liquid?.lang ?? 'es';

export default new Client(accountUrl, LANG);
