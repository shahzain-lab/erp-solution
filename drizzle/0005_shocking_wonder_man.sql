ALTER TABLE "customer" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "customer" ADD COLUMN "billingAddress" varchar(256);--> statement-breakpoint
ALTER TABLE "customer" ADD COLUMN "openedBalance" integer;--> statement-breakpoint
ALTER TABLE "customer" ADD COLUMN "creditDate" varchar(256);--> statement-breakpoint
ALTER TABLE "customer" ADD COLUMN "toPay" boolean;--> statement-breakpoint
ALTER TABLE "customer" ADD COLUMN "toReceive" boolean;--> statement-breakpoint
ALTER TABLE "customer" ADD COLUMN "limit" integer;--> statement-breakpoint
ALTER TABLE "customer" DROP COLUMN IF EXISTS "balance";--> statement-breakpoint
ALTER TABLE "customer" DROP COLUMN IF EXISTS "credits";