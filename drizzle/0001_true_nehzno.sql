CREATE TABLE IF NOT EXISTS "item" (
	"id" serial PRIMARY KEY NOT NULL,
	"itemCode" integer NOT NULL,
	"saleId" integer,
	"purchaseId" integer,
	"name" varchar(256) NOT NULL,
	"date" varchar(256) NOT NULL,
	"itemName" varchar(256) NOT NULL,
	"category" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "purchase" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" varchar(256),
	"partyId" integer,
	"transactionType" varchar(256),
	"moduleId" varchar(256),
	"paymentType" varchar(256),
	"discountRate" integer,
	"billingName" varchar(256),
	"invoiceType" varchar(256),
	"billingMessage" varchar(256),
	"balanceDue" integer,
	"discountAmount" integer,
	"description" varchar(256),
	"totalAmount" integer,
	"isPaying" boolean,
	"paid" integer,
	"balance" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vendor" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"email" varchar(256),
	"phone" varchar(256),
	"fields" jsonb,
	"balance" integer,
	"credits" integer
);
--> statement-breakpoint
ALTER TABLE "customer" ADD COLUMN "fields" jsonb;--> statement-breakpoint
ALTER TABLE "customer" ADD COLUMN "balance" integer;--> statement-breakpoint
ALTER TABLE "customer" ADD COLUMN "credits" integer;--> statement-breakpoint
ALTER TABLE "sales" ADD COLUMN "moduleId" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "sales" ADD COLUMN "discountToPKR" integer;--> statement-breakpoint
ALTER TABLE "sales" ADD COLUMN "discount" integer;--> statement-breakpoint
ALTER TABLE "sales" ADD COLUMN "billingName" varchar(256);--> statement-breakpoint
ALTER TABLE "sales" ADD COLUMN "invoiceType" varchar(256);--> statement-breakpoint
ALTER TABLE "sales" ADD COLUMN "billingMessage" varchar(1000);--> statement-breakpoint
ALTER TABLE "sales" ADD COLUMN "balanceDue" integer;--> statement-breakpoint
ALTER TABLE "sales" ADD COLUMN "description" varchar(1000);--> statement-breakpoint
ALTER TABLE "sales" ADD COLUMN "total" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "purchase" ADD CONSTRAINT "purchase_partyId_vendor_id_fk" FOREIGN KEY ("partyId") REFERENCES "vendor"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
