import { z } from "zod";

export const subredditSchema = z.object({

    display_name:
        z.string()
            .min(1)
            .max(100),

    display_name_prefixed:
        z.string()
            .min(1)
            .max(100),

    title:
        z.string()
            .min(1)
            .max(100),

    public_description:
        z.string()
            .min(1),

    subscribers:
        z.number()
            .int()
            .min(0),

    community_icon:
        z.url(),

    banner_background_image:
        z.url(),

    primary_color:
        z.string()
            .regex(
                /^#[0-9A-Fa-f]{6}$/
            ),

    url:
        z.string()
            .startsWith("/r/"),

    created_utc:
        z.number()
            .int(),

});

export type SubredditInput =
    z.infer<typeof subredditSchema>;
