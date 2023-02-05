import Footer from "../footer/footer";

interface LayoutProps {
    children: any;
}

const Layout: React.FC<LayoutProps> = ({
    children
}) => {
    return (
        <div className="py-6">
            <main className="px-16 h-full w-auto flex flex-col justify-center items-center">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;