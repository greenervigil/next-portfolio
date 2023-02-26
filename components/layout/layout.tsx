import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

interface LayoutProps {
    children: any;
}

const Layout: React.FC<LayoutProps> = ({
    children
}) => {
    return (
        <>
            <Navbar />
            <main className="w-screen">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;