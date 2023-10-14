import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"
import { pgTable, serial, varchar, integer, jsonb } from "drizzle-orm/pg-core"
import { sales } from "./sale"


export const customer = pgTable('customer', {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', {length: 256}).notNull(), 
    email: varchar('email', {length: 256}), 
    phone: varchar('phone', {length: 256}), 
    // address: ICustomerAddress
    // creditDetails: ICusotmerCredits,
    fields: jsonb('fields'),
    balance: integer('balance'),
    credits: integer('credits'),
}) 

export const customerRelations = relations(customer, ({many}) => ({
    sales: many(sales)
}))

export type Customer = InferSelectModel<typeof customer>
export type NewCustomer = InferInsertModel<typeof customer>