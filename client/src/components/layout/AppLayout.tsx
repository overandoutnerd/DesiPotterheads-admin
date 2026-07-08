import Header from "./Header";
import PageContainer from "./PageContainer";
import Sidebar from "./Sidebar";

type Props = {
    children: React.ReactNode;
};

export default function AppLayout({
    children,
}: Props) {

    return (

        <div className="min-h-screen bg-[#0c0e1f] text-white">

            <Header />

            <div className="flex">

                <Sidebar />

                <PageContainer>

                    {children}

                </PageContainer>

            </div>

        </div>

    );

}
