import { useQuery } from "@tanstack/react-query";

import { getSubreddit } from "@/api/community";

export function useSubreddit() {

    return useQuery({

        queryKey: ["subreddit"],

        queryFn: getSubreddit,

    });

}