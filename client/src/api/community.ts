import axios from "axios";

import type { Subreddit } from "@/types/community";

export const api = axios.create({
    baseURL: "/api",
});

export async function getSubreddit() {
    const { data } = await api.get<Subreddit>(
        "/subreddit",
    );

    return data;
}

export async function updateSubreddit(
    subreddit: Subreddit,
) {
    const { data } = await api.put<Subreddit>(
        "/subreddit",
        subreddit,
    );

    return data;
}