import { Client } from '@modyo/sdk';
import { accountUrl } from './config/modyo.config';

export default new Client(accountUrl, 'es');
