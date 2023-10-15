import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"
import { pgTable, serial, varchar, integer, jsonb } from "drizzle-orm/pg-core"
import { purchase } from "./purchase"


export const vendor = pgTable('vendor', {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', {length: 256}).notNull(), 
    email: varchar('email', {length: 256}), 
    phone: varchar('phone', {length: 256}), 
    fields: jsonb('fields'),
    balance: integer('balance'),
    credits: integer('credits'),
}) 

export const vendorRelations = relations(vendor, ({many}) => ({
    purchase: many(purchase)
}))

export type Vendor = InferSelectModel<typeof vendor>;
export type NewVendor = InferInsertModel<typeof vendor>