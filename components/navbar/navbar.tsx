import React from "react";
import Link from "next/link"
import Image from "next/image"
import Button from "../button/button";
import NavItem from "../nav-item/nav-item";

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Experience", href:"/experience"},
    { text: "Projects", href: "/projects"},
    { text: "Contact", href: "/contact" },
]

const Navbar: React.FC = () => {
    const [navActive, setNavActive] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(-1);

    return (
        <header className="w-full bg-white h-20 sticky z-30 top-0 shadow-lg shadow-teal-600 border border-solid border-teal-600 rounded-b-xl dark:bg-black">
            <nav className="flex justify-between items-center text-center p-4 ml-8">
                <Link href="/">
                    <Image src="/../public/favicon.ico" height={50} width={50} alt="greenervigil logo"/>
                </Link>
                <div className="block lg:hidden">
                    <Button
                        aria-controls="navbar-menu"
                        aria-label="Toggle menu"
                        aria-expanded="false"
                        onClick={() => setNavActive(!navActive)}
                    >
                        <span className="block w-6 h-1 m-0.5 bg-slate-900"></span>
                        <span className="block w-6 h-1 m-0.5 bg-slate-900"></span>
                        <span className="block w-6 h-1 m-0.5 bg-slate-900"></span>
                    </Button>
                </div>
                <div className={`${navActive ? "active" : ""} flex fixed gap-7 right-10 font-mono`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;