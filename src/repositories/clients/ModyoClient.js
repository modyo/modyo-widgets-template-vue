import { Client } from '@modyo/sdk';
import { accountUrl } from '../settings/modyo';

export default new Client(accountUrl, 'es');
