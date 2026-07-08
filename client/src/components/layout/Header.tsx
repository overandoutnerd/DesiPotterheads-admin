import { ShieldCheck } from "lucide-react";

export default function Header() {

    return (

        <header
            className="
                sticky
                top-0
                z-50
                border-b
                border-white/10
                bg-[#11142a]/70
                backdrop-blur-xl
            "
        >

            <div
                className="
                    mx-auto
                    flex
                    h-16
                    max-w-7xl
                    items-center
                    justify-between
                    px-6
                "
            >

                <div className="flex items-center gap-3">

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#fca503]
                            text-black
                        "
                    >

                        🪄

                    </div>

                    <div>

                        <h1 className="font-semibold">

                            DesiPotterheads Admin

                        </h1>

                        <p className="text-xs text-white/60">

                            Community Dashboard

                        </p>

                    </div>

                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-emerald-500/30
                        bg-emerald-500/10
                        px-3
                        py-1
                        text-sm
                        text-emerald-300
                    "
                >

                    <ShieldCheck size={16} />

                    Online

                </div>

            </div>

        </header>

    );

}
