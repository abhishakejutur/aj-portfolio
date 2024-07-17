"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/abhishakejutur' },
    { icon: <FaLinkedinIn />, path: 'https://linkedin.com/in/abhishakejutur' }
];

const Socials = ({ containerStyles, iconStyles, playClickSound }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index}>
            <span className={iconStyles} onClick={playClickSound}>
              {item.icon}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
