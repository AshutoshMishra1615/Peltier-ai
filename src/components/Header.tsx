import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="py-4 px-6 border-b animate-fade-in">
      <div className="container flex items-center justify-between">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
