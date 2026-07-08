import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { useUpdateSubreddit } from "@/hooks/useUpdateCommunity";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import type { Subreddit } from "@/types/community";

type Props = {

    community: Subreddit;

    onCancel: () => void;

};

export default function CommunityEditor({
    community,
    onCancel,
}: Props) {

    const updateSubreddit =
        useUpdateSubreddit();

    const {

        register,

        reset,

        watch,

        handleSubmit,

        formState: {

            isDirty,

        },

    } = useForm<Subreddit>();

    useEffect(() => {

        reset(community);

    }, [community, reset]);

    const values = watch();

    async function onSubmit(
        data: Subreddit,
    ) {

        await updateSubreddit.mutateAsync(
            data,
        );

        reset(data);

        onCancel();

    }

    return (

        <Card className="border-white/10 bg-white/5 backdrop-blur-xl">

            <CardHeader>

                <CardTitle>

                    Edit Community

                </CardTitle>

            </CardHeader>

            <CardContent>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                >

                    <div className="space-y-2">

                        <Label>

                            Display Name

                        </Label>

                        <Input
                            {...register(
                                "display_name"
                            )}
                        />

                    </div>

                    <div className="space-y-2">

                        <Label>

                            Display Name Prefixed

                        </Label>

                        <Input
                            {...register(
                                "display_name_prefixed"
                            )}
                        />

                    </div>

                    <div className="space-y-2">

                        <Label>

                            Title

                        </Label>

                        <Input
                            {...register(
                                "title"
                            )}
                        />

                    </div>

                    <div className="grid gap-6 md:grid-cols-2">

                        <div className="space-y-2">

                            <Label>

                                Subscribers

                            </Label>

                            <Input
                                type="number"
                                {...register(
                                    "subscribers",
                                    {
                                        valueAsNumber: true,
                                    },
                                )}
                            />

                        </div>

                        <div className="space-y-2">

                            <Label>

                                Primary Color

                            </Label>

                            <Input
                                {...register(
                                    "primary_color"
                                )}
                            />

                        </div>

                    </div>

                    <div className="space-y-2">

                        <Label>

                            Community Icon

                        </Label>

                        <Input
                            {...register(
                                "community_icon"
                            )}
                        />

                    </div>

                    <div className="space-y-2">

                        <Label>

                            Banner Background Image

                        </Label>

                        <Input
                            {...register(
                                "banner_background_image"
                            )}
                        />

                    </div>

                    <div className="space-y-2">

                        <Label>

                            URL

                        </Label>

                        <Input
                            {...register(
                                "url"
                            )}
                        />

                    </div>

                    <div className="space-y-2">

                        <Label>

                            Public Description

                        </Label>

                        <Textarea
                            rows={8}
                            {...register(
                                "public_description"
                            )}
                        />

                    </div>

                    <div className="rounded-xl border border-white/10 p-4">

                        <p className="text-sm text-white/60">

                            Live Preview

                        </p>

                        <h2 className="mt-2 text-2xl font-bold">

                            {

                                values.display_name

                            }

                        </h2>

                        <p>

                            👥 {

                                values.subscribers?.toLocaleString()

                            } subscribers

                        </p>

                        <p className="mt-2 whitespace-pre-line text-sm text-white/70">

                            {

                                values.public_description

                            }

                        </p>

                    </div>

                    <div className="flex justify-end gap-3">

                        <Button
                            type="button"
                            variant="outline"
                            onClick={onCancel}
                        >

                            Cancel

                        </Button>

                        <Button
                            type="submit"
                            disabled={
                                !isDirty ||
                                updateSubreddit.isPending
                            }
                        >

                            {

                                updateSubreddit.isPending
                                    ? "Saving..."
                                    : "Save Changes"

                            }

                        </Button>

                    </div>

                </form>

            </CardContent>

        </Card>

    );

}