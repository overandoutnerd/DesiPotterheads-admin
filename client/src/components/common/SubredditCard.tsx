import { Pencil } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

import type { Subreddit } from "@/types/community";

type Props = {

    subreddit: Subreddit;

    onEdit: () => void;

};

export default function SubredditCard({
    subreddit,
    onEdit,
}: Props) {

    return (

        <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl">

            <div className="relative">

                <div className="relative h-32 overflow-hidden bg-[#101321] sm:h-40 md:h-56 lg:h-64">

                    <img
                        src={
                            subreddit.banner_background_image.replaceAll(
                                "&amp;",
                                "&",
                            )
                        }
                        alt="Banner"
                        className="h-full w-full object-cover object-center"
                    />

                </div>

                <img
                    src={
                        subreddit.community_icon.replaceAll(
                            "&amp;",
                            "&",
                        )
                    }
                    alt="Community Icon"
                    className="absolute left-6 top-full size-24 -translate-y-1/2 rounded-full border-4 border-[#0c0e1f] bg-[#0c0e1f] object-cover shadow-xl md:size-28"
                />

            </div>

            <CardContent className="pt-16 md:pt-20">

                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                    <div className="flex-1">

                        <h2 className="text-4xl font-bold">

                            {subreddit.display_name}

                        </h2>

                        <p className="mt-1 text-lg text-white/60">

                            {subreddit.display_name_prefixed}

                        </p>

                        <Badge
                            variant="secondary"
                            className="mt-5 w-fit"
                        >

                            👥 {subreddit.subscribers.toLocaleString()} subscribers

                        </Badge>

                        <p className="mt-6 whitespace-pre-line leading-8 text-white/80">

                            {subreddit.public_description}

                        </p>

                    </div>

                    <Button
                        onClick={onEdit}
                        className="gap-2 self-start"
                    >

                        <Pencil size={18} />

                        Edit Community

                    </Button>

                </div>

            </CardContent>

        </Card>

    );

}