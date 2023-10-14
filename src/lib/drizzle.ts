
import { drizzle } from 'drizzle-orm/vercel-postgres'
import { sql } from '@vercel/postgres'
import { sales } from './schema/sale';
import { purchase } from './schema/purchase';
import { item } from './schema/item';
import { customer } from './schema/customer';
import { vendor } from './schema/vendor';


export const db = drizzle(sql, {schema: {sales, purchase, item, customer, vendor}});