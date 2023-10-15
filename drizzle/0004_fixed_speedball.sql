ALTER TABLE "purchase" DROP CONSTRAINT "purchase_partyId_vendor_id_fk";
--> statement-breakpoint
ALTER TABLE "purchase" ADD COLUMN "vendorId" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "purchase" ADD CONSTRAINT "purchase_vendorId_vendor_id_fk" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "purchase" DROP COLUMN IF EXISTS "partyId";