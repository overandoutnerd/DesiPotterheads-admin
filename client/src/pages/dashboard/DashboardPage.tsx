import { useState } from "react";

import AppLayout from "@/components/layout/AppLayout";

import CommunityEditor from "@/components/editor/CommunityEditor";
import SubredditCard from "@/components/common/SubredditCard";

import { useSubreddit } from "@/hooks/useCommunity";

export default function DashboardPage() {

    const {

        data: subreddit,

        isLoading,

        error,

    } = useSubreddit();

    const [

        editing,

        setEditing,

    ] = useState(false);

    if (isLoading) {

        return (

            <AppLayout>

                <p>Loading...</p>

            </AppLayout>

        );

    }

    if (error || !subreddit) {

        return (

            <AppLayout>

                <p>Failed to load subreddit.</p>

            </AppLayout>

        );

    }

    return (

        <AppLayout>

            {

                editing

                    ? (

                        <CommunityEditor
                            community={subreddit}
                            onCancel={() => setEditing(false)}
                        />

                    )

                    : (

                        <SubredditCard
                            subreddit={subreddit}
                            onEdit={() => setEditing(true)}
                        />

                    )

            }

        </AppLayout>

    );

}