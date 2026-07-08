import { Router } from "express";
import { eq } from "drizzle-orm";

import { db } from "../db/index.js";
import { subreddit } from "../db/schema.js";
import { subredditSchema } from "../lib/validation.js";

const router = Router();

/* ==========================================
   GET SUBREDDIT
========================================== */

router.get("/", async (_req, res) => {

    try {

        const rows = await db
            .select()
            .from(subreddit)
            .limit(1);

        if (!rows.length) {

            return res.status(404).json({

                message: "Subreddit not found.",

            });

        }

        return res.json(rows[0]);

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message: "Internal server error.",

        });

    }

});

/* ==========================================
   UPDATE SUBREDDIT
========================================== */

router.put("/", async (req, res) => {

    const parsed =
        subredditSchema.safeParse(req.body);

    if (!parsed.success) {

        return res.status(400).json({

            message: "Invalid request.",

            errors:
                parsed.error.flatten(),

        });

    }

    try {

        const body = parsed.data;

        const rows = await db
            .update(subreddit)
            .set({

                display_name:
                    body.display_name,

                display_name_prefixed:
                    body.display_name_prefixed,

                title:
                    body.title,

                public_description:
                    body.public_description,

                subscribers:
                    body.subscribers,

                community_icon:
                    body.community_icon,

                banner_background_image:
                    body.banner_background_image,

                primary_color:
                    body.primary_color,

                url:
                    body.url,

                created_utc:
                    body.created_utc,

                updated_at:
                    new Date(),

            })
            .where(
                eq(
                    subreddit.id,
                    1,
                )
            )
            .returning();

        if (!rows.length) {

            return res.status(404).json({

                message: "Subreddit not found.",

            });

        }

        return res.json(rows[0]);

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            message:
                "Failed to update subreddit.",

        });

    }

});

export default router;
