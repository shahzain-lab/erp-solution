
import { drizzle } from 'drizzle-orm/vercel-postgres'
import { sql } from '@vercel/postgres'
import { sales, salesRelations } from './schema/sale';
import { purchase, purchaseRelations } from './schema/purchase';
import { item } from './schema/item';
import { customer, customerRelations } from './schema/customer';
import { vendor, vendorRelations } from './schema/vendor';


export const db = drizzle(sql, {schema: {sales, purchase, item, customer, vendor, salesRelations, customerRelations, purchaseRelations, vendorRelations}});