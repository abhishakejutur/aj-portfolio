"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
        const audio = new Audio("/assets/dialog.mp3");
        audio.play();
    };

    const playClickSound = () => {
        setIsOpen(false);
        const audio = new Audio("/assets/click1.mp3");
        audio.play();
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className="flex justify-center items-center" >
                    <CiMenuFries className="text-[32px] text-accent" onClick={handleLinkClick} />
                </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={handleLinkClick}>
                        <h1 className="text-4xl font-semibold">
                            J.<span className="text-accent">Abhishake</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link 
                            href={link.path} 
                            key={index} 
                            onClick={playClickSound}
                            className={`text-xl hover:text-accent capitalize transition-all ${link.path === pathname && "text-accent border-b-2 border-accent" }`}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
