type Props = {
    children: React.ReactNode;
};

export default function PageContainer({
    children,
}: Props) {

    return (

        <main
            className="
                flex-1
                p-8
            "
        >

            {children}

        </main>

    );

}
