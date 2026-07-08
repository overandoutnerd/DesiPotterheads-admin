import { Home } from "lucide-react";

export default function Sidebar() {

    return (

        <aside
            className="
                hidden
                min-h-[calc(100vh-64px)]
                w-72
                border-r
                border-white/10
                bg-white/5
                lg:block
            "
        >

            <nav className="p-6">

                <button
                    className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        bg-[#fca503]
                        px-4
                        py-3
                        font-medium
                        text-black
                    "
                >

                    <Home size={18} />

                    Dashboard

                </button>

            </nav>

        </aside>

    );

}
