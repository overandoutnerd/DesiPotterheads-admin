import express from "express";
import cors from "cors";

import subredditRoutes from "./routes/subreddit.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_req, res) => {

    res.json({

        message: "DesiPotterheads Admin API",

    });

});

app.use(
    "/subreddit",
    subredditRoutes,
);

export default app;
