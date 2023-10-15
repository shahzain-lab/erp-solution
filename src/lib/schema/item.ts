import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"
import { pgTable, serial, varchar, integer, jsonb } from "drizzle-orm/pg-core"
import { sales } from "./sale"
import { purchase } from "./purchase"

export const item = pgTable('item', {
    id: serial('id').primaryKey().notNull(),
    code: integer('itemCode').notNull(),
    name: varchar('name', {length: 256}).notNull(), 
    date: varchar('date', {length: 256}).notNull(), 
    category: varchar('category', {length: 256}).notNull(),
    quantity: integer('quantity'),
    salePrice: integer('salePrice'),
    // stock: IItemStock
}) 

export const itemRelations = relations(item, ({one, many}) => ({
    stock: many(stock)
}))

export type Item = InferSelectModel<typeof item>
export type NewItem = InferInsertModel<typeof item>

export const stock = pgTable('stock', {
    id: serial('id').primaryKey().notNull(),
    openQty: integer('openQty').notNull(),
    atPrice: integer('atPrice').notNull(),
    asOfDate: varchar('asOfDate', {length: 256}).notNull(),
    minStock: integer('minStock'),
    location: varchar('location', {length: 256}),
    purchasePrice: integer('purchasePrice'),
    itemId: integer('itemId').references(() => item.id).notNull()
})

export const stockRelations = relations(stock, ({one}) => ({
    item: one(item, {
        fields: [stock.itemId],
        references: [item.id]
    })
}))

export type Stock = InferSelectModel<typeof stock>
export type NewStock = InferInsertModel<typeof stock>

