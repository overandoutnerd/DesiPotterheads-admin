import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import type { Community } from "@/types/community";

type Props = {
    community: Community;
};

export default function CommunityCard({
    community,
}: Props) {

    return (

        <Card className="border-white/10 bg-white/5 backdrop-blur-xl">

            <CardHeader>

                <div className="flex items-center justify-between">

                    <CardTitle>

                        Community Information

                    </CardTitle>

                    <Badge>

                        Live

                    </Badge>

                </div>

            </CardHeader>

            <CardContent className="space-y-8">

                <div className="flex gap-6">

                    <img
                        src={community.iconUrl}
                        alt={community.displayName}
                        className="h-24 w-24 rounded-2xl border border-white/10 object-cover"
                    />

                    <div>

                        <h2 className="text-2xl font-bold">

                            {community.displayName}

                        </h2>

                        <p className="text-white/60">

                            {community.displayNamePrefixed}

                        </p>

                        <p className="mt-2">

                            👥 {community.members.toLocaleString()} members

                        </p>

                    </div>

                </div>

                <div>

                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/60">

                        Description

                    </h3>

                    <p className="whitespace-pre-wrap leading-7">

                        {community.description}

                    </p>

                </div>

                <div>

                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/60">

                        Banner

                    </h3>

                    <img
                        src={community.bannerUrl}
                        alt="Banner"
                        className="h-48 w-full rounded-2xl border border-white/10 object-cover"
                    />
                </div>

                <div className="flex items-center gap-4">

                    <span className="text-sm text-white/60">

                        Primary Color

                    </span>

                    <div
                        className="h-8 w-8 rounded-full border border-white/20"
                        style={{
                            background: community.primaryColor,
                        }}
                    />

                    <code>

                        {community.primaryColor}

                    </code>

                </div>

            </CardContent>

        </Card>

    );

}
