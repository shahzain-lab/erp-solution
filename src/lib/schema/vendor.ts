import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"
import { pgTable, serial, varchar, integer, jsonb, boolean } from "drizzle-orm/pg-core"
import { purchase } from "./purchase"


export const vendor = pgTable('vendor', {
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

export const vendorRelations = relations(vendor, ({many}) => ({
    purchase: many(purchase)
}))

export type Vendor = InferSelectModel<typeof vendor>;
export type NewVendor = InferInsertModel<typeof vendor>