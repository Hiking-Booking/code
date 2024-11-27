"use client";

import NavLink from "../atoms/navLink";

const Navigations = () => {
  return (
    <nav className="flex  justify-between px-10 py-4 items-center">
      <ul className="flex flex-row space-x-4">
        <NavLink href="/"> about </NavLink>
        <NavLink href="/"> services </NavLink>
        <NavLink href="/"> contact</NavLink>
      </ul>
    </nav>
  );
};

export default Navigations;
