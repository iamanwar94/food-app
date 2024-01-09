import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href={"/"}>
        A FOODS
      </Link>
      <nav className="flex gap-8 items-center text-gray-500 font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link
          href={"/login"}
          className="bg-primary rounded-full text-white px-8 py-2 hover:bg-red-500"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
