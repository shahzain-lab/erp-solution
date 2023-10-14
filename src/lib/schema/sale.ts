import { InferInsertModel, InferSelectModel, relations } from 'drizzle-orm';
import {
    integer,
    pgTable,
    serial,
    varchar
} from 'drizzle-orm/pg-core'
import { customer } from './customer';
import { item } from './item';

export const sales = pgTable('sales', {
    id: serial('id').primaryKey().notNull(),
    date: varchar('date', {length: 255}).notNull(),
    transactionType: varchar('transactionType', {length: 100}).notNull(),
    paymentType: varchar('paymentType', {length: 50}).notNull(),
    customerId: integer('customerId').references(() => customer.id).notNull(),
    moduleId: varchar('moduleId', {length: 50}).notNull(),
    discountToPKR: integer('discountToPKR'),
    discount: integer('discountToPKR'),
    billingName: varchar('billingName', {length: 256}),
    invoiceType: varchar('invoiceType', {length: 256}),
    billingMessage: varchar('billingMessage', {length: 1000}),
    balanceDue: integer('balanceDue'),
    description: varchar('description', {length: 1000}),
    total: integer('total')
})

export const salesRelations = relations(sales, ({one, many}) => ({
    customer: one(customer, {
        fields: [sales.customerId],
        references: [customer.id]
    }),
    items: many(item)
}))


export type Sale = InferSelectModel<typeof sales>;
export type NewSale = InferInsertModel<typeof sales>