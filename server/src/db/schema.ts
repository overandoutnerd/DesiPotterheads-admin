import {
    bigint,
    boolean,
    integer,
    pgTable,
    serial,
    text,
    timestamp,
} from "drizzle-orm/pg-core";

export const subreddit = pgTable("subreddit", {

    id: serial("id").primaryKey(),

    display_name:
        text("display_name")
            .notNull(),

    display_name_prefixed:
        text("display_name_prefixed")
            .notNull(),

    title:
        text("title")
            .notNull(),

    public_description:
        text("public_description")
            .notNull(),

    subscribers:
        integer("subscribers")
            .notNull(),

    community_icon:
        text("community_icon")
            .notNull(),

    banner_background_image:
        text("banner_background_image")
            .notNull(),

    created_utc:
        bigint("created_utc", {
            mode: "number",
        }).notNull(),

    primary_color:
        text("primary_color")
            .notNull(),

    url:
        text("url")
            .notNull(),

    is_published:
        boolean("is_published")
            .default(true)
            .notNull(),

    updated_at:
        timestamp("updated_at", {
            mode: "date",
        })
            .defaultNow()
            .notNull(),

});
