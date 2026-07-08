import "dotenv/config";

import { db } from "./index.js";
import { subreddit } from "./schema.js";

async function seed() {

    const existing = await db
        .select()
        .from(subreddit);

    if (existing.length > 0) {

        console.log(
            "Subreddit already exists."
        );

        process.exit(0);

    }

    await db
        .insert(subreddit)
        .values({

            display_name:
                "DesiPotterheads",

            display_name_prefixed:
                "r/DesiPotterheads",

            title:
                "DesiPotterheads",

            public_description:
`Desi Potterheads 🪄

A home for South Asian Potterheads who never stopped believing in the magic.

From deep lore discussions and fan theories to memes, nostalgia, and fan art. This is where the wizarding world meets the desi fandom.

No gatekeeping. Just South Asian fans keeping the magic alive.

Mischief Managed.`,

            subscribers:
                1270,

            community_icon:
"https://styles.redditmedia.com/t5_gwm5he/styles/communityIcon_kcrpy6shrn4h1.png?width=256&s=e12d6dd3ffa57baabcc4dfe2138930f7746fbbc2",

            banner_background_image:
"https://styles.redditmedia.com/t5_gwm5he/styles/bannerBackgroundImage_e7kddj2443zg1.png?width=4000&s=61e63eb1d394fd6ecb63ea369a6803f0b2aa9640",

            primary_color:
                "#fca503",

            url:
                "/r/DesiPotterheads",

            created_utc:
                1773398642,

        });

    console.log(
        "Subreddit seeded successfully."
    );

    process.exit(0);

}

seed().catch(error => {

    console.error(error);

    process.exit(1);

});
