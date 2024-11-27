"use client";

import Navigations from "../molecules/navigations";
import Button from "../atoms/button"; // For button usage
import Logo from "../atoms/logo"; // For the logo

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Logo />
        <Navigations />
        <Button
          onClick={() => {
            console.log("logedin");
          }}
          className="bg-blue-600 text-white"
        >
          Log In
        </Button>
      </div>
    </header>
  );
};
export default Header;
