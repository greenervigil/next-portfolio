import './globals.css';

import Footer from "../components/footer/footer";
import { Metadata } from "next";
import Navbar from "../components/navbar/navbar";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: 'Daniel Vigil',
    description: 'Daniel Vigil is a Full Stack Developer with a passion for creating and building things. He has experience in front-end and back-end development, and is always looking for new challenges to take on.',
}

const Layout = ({ children }: { children: ReactNode}) => {
    return (
        <html lang="en">
            <body className='font-mono'>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

export default Layout;