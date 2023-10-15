ALTER TABLE "vendor" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "vendor" ADD COLUMN "billingAddress" varchar(256);--> statement-breakpoint
ALTER TABLE "vendor" ADD COLUMN "openedBalance" integer;--> statement-breakpoint
ALTER TABLE "vendor" ADD COLUMN "creditDate" varchar(256);--> statement-breakpoint
ALTER TABLE "vendor" ADD COLUMN "toPay" boolean;--> statement-breakpoint
ALTER TABLE "vendor" ADD COLUMN "toReceive" boolean;--> statement-breakpoint
ALTER TABLE "vendor" ADD COLUMN "limit" integer;--> statement-breakpoint
ALTER TABLE "vendor" DROP COLUMN IF EXISTS "balance";--> statement-breakpoint
ALTER TABLE "vendor" DROP COLUMN IF EXISTS "credits";