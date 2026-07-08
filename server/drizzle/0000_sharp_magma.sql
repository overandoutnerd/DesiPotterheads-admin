CREATE TABLE "subreddit" (
	"id" serial PRIMARY KEY NOT NULL,
	"display_name" text NOT NULL,
	"display_name_prefixed" text NOT NULL,
	"title" text NOT NULL,
	"public_description" text NOT NULL,
	"subscribers" integer NOT NULL,
	"community_icon" text NOT NULL,
	"banner_background_image" text NOT NULL,
	"created_utc" bigint NOT NULL,
	"primary_color" text NOT NULL,
	"url" text NOT NULL,
	"is_published" boolean DEFAULT true NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
