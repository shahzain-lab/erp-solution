CREATE TABLE IF NOT EXISTS "stock" (
	"id" serial PRIMARY KEY NOT NULL,
	"openQty" integer NOT NULL,
	"atPrice" integer NOT NULL,
	"asOfDate" varchar(256) NOT NULL,
	"minStock" integer,
	"location" varchar(256),
	"purchasePrice" integer,
	"itemId" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "sales" DROP CONSTRAINT "sales_customer_id_customer_id_fk";
--> statement-breakpoint
ALTER TABLE "item" ADD COLUMN "quantity" integer;--> statement-breakpoint
ALTER TABLE "item" ADD COLUMN "salePrice" integer;--> statement-breakpoint
ALTER TABLE "sales" ADD COLUMN "customerId" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales" ADD CONSTRAINT "sales_customerId_customer_id_fk" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "sales" DROP COLUMN IF EXISTS "customer_id";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stock" ADD CONSTRAINT "stock_itemId_item_id_fk" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
