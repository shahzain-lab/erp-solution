import { boolean, integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { vendor } from "./vendor";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { item } from "./item";



export const purchase = pgTable('purchase', {
    id: serial('id').primaryKey(),
    date: varchar('date', {length: 256}),
    vendorId: integer('partyId').references(() => vendor.id), 
    // items: IItems[]; // List of products sold in this transaction
    transactionType: varchar('transactionType', {length: 256}),
    moduleId: varchar('moduleId', {length: 256}),
    paymentType: varchar('paymentType', {length: 256}),
    discountRate: integer('discountRate'),
    billingName: varchar('billingName', {length: 256}),
    invoiceType: varchar('invoiceType', {length: 256}),
    billingMessage: varchar('billingMessage', {length: 256}),
    balanceDue: integer('balanceDue'),
    discountAmount: integer('discountAmount'),
    description: varchar('description', {length: 256}),
    totalAmount: integer('totalAmount'),
    isPaying: boolean('isPaying'),
    paid: integer('paid'),
    balance: integer('balance')
})


export const purchaseRelations = relations(purchase, ({one, many}) => ({
    vendor: one(vendor, {
        fields: [purchase.vendorId],
        references: [vendor.id]
    }),
    items: many(item)
}))

export type Purchase = InferSelectModel<typeof purchase>;
export type NewPurchase = InferInsertModel<typeof purchase>