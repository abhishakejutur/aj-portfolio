'use client';

import React from 'react';
import Link from "next/link";
import Nav from './Nav';
import MobileNav from './MobileNav';
import { Button } from './ui/button';

const playClickSound = () => {
  const audio = new Audio("/assets/dialog.mp3");
  audio.play();
};

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link href='/' passHref legacyBehavior>
          <a className='text-4xl font-semibold'>
            Jutur<span className='text-accent'>Abhishake</span>
          </a>
        </Link>
        {/* desktop nav */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href="/contact" passHref legacyBehavior>
            <a>
              <Button onClick={playClickSound}>Hire Me</Button>
            </a>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;
