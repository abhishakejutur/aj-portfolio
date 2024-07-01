"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    }
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className='flex gap-8'>
            {links.map((link, index)=>{
                return( 
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`capitalize hover:text-accent font-medium transition-all ${link.path === pathname && "text-accent border-b-2 border-accent" } no-underline`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav
