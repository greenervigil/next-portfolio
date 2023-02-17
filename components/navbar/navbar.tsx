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
    const [open, setOpen] = React.useState(false)
    const [navActive, setNavActive] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(-1);

    return (
        <header className="bg-white h-20 sticky z-30 top-0 shadow-lg shadow-teal-600 border border-solid border-teal-600 rounded-b-xl dark:bg-black">
            <nav className="font-mono flex filter drop-shadow-md bg-white dark:bg-black px-4 py-4 h-20 items-center">
                <div className={`absolute top-0 left-0 h-screen w-screen bg-white dark:bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
                    <div className="flex items-center justify-center filter drop-shadow-md bg-white dark:bg-black h-20"> 
                        {/*logo container*/}
                        <Link href="/"><a className="text-xl font-semibold">DJGV</a></Link>
                    </div>
                    <div className="flex flex-col text-center mt-7 gap-5">
                        {MENU_LIST.map((menu, idx) => (
                            <div
                                onClick={() => {
                                    setActiveIdx(idx);
                                    setNavActive(false);
                                    setOpen(false)
                                }}
                                key={menu.text}
                            >
                                <NavItem active={activeIdx === idx} {...menu} />
                            </div>
                        ))}
                    </div>  
                </div>
                <div className="w-3/12 flex items-center">
                    <Link href="/"><a className="text-3xl font-semibold">DJGV</a></Link>
                </div>
                <div className="w-9/12 flex justify-end items-center">

                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full bg-black dark:bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>

                    <div className="hidden md:flex md:gap-10">
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
                </div>
            </nav>
        </header>
    )
}

export default Navbar;