ALTER TABLE "sales" DROP CONSTRAINT "sales_customerId_customer_id_fk";
--> statement-breakpoint
ALTER TABLE "sales" ADD COLUMN "customer_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales" ADD CONSTRAINT "sales_customer_id_customer_id_fk" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "sales" DROP COLUMN IF EXISTS "customerId";