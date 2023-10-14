import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"
import { pgTable, serial, varchar, integer, jsonb } from "drizzle-orm/pg-core"
import { sales } from "./sale"
import { purchase } from "./purchase"

export const item = pgTable('item', {
    id: serial('id').primaryKey().notNull(),
    itemCode: integer('itemCode').notNull(),
    saleId: integer('saleId'),
    purchaseId: integer('purchaseId'),
    name: varchar('name', {length: 256}).notNull(), 
    date: varchar('date', {length: 256}).notNull(), 
    itemName: varchar('itemName', {length: 256}).notNull(),
    category: varchar('category', {length: 256}).notNull(),
    // pricing: IItemPricing
    // stock: IItemStock
}) 

export const itemRelations = relations(item, ({one}) => ({
    sale: one(sales, {
        fields: [item.saleId],
        references: [sales.id]
    }),
    purchase: one(purchase, {
        fields: [item.purchaseId],
        references: [purchase.id]
    })
}))

export type Item = InferSelectModel<typeof item>
export type NewItem = InferInsertModel<typeof item>