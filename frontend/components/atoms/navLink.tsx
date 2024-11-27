"use client";

import Link from "next/link";

// Define types for props
interface NavLinkProps {
  href: string; // Type href to be a string
  children: React.ReactNode; // Type children to accept any renderable content
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavLink;
