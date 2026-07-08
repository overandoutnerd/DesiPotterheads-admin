import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { updateSubreddit } from "@/api/community";

export function useUpdateSubreddit() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn: updateSubreddit,

        onSuccess() {

            queryClient.invalidateQueries({

                queryKey: ["subreddit"],

            });

        },

    });

}