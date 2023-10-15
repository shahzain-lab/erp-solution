import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"
import { pgTable, serial, varchar, integer, jsonb, boolean } from "drizzle-orm/pg-core"
import { sales } from "./sale"


export const customer = pgTable('customer', {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', {length: 256}).notNull(), 
    email: varchar('email', {length: 256}).notNull(), 
    phone: varchar('phone', {length: 256}), 
    fields: jsonb('fields'),
    billingAddress: varchar('billingAddress', {length: 256}),
    // shippingAddress: [],
    openedBalance: integer('openedBalance'),
    creditDate: varchar('creditDate', {length: 256}),
    toPay: boolean('toPay'),
    toReceive: boolean('toReceive'),
    limit: integer('limit'),
}) 

export const customerRelations = relations(customer, ({many}) => ({
    sales: many(sales)
}))

export type Customer = InferSelectModel<typeof customer>
export type NewCustomer = InferInsertModel<typeof customer>