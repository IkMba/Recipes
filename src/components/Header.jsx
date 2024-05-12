"use client";
import { useState } from "react";
import { navItems } from "../data/data";
import Button from "./Button";
import { RiMenu3Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);
  return (
    <header className="flex-between py-4 md:py-6 p-4 md:pl-16 md:pr-12 z-10 text-black relative">
      <div className="flex-between gap-12 lg:gap-16">
        {!openNav && (
          <Link to="/">
            <h2 className="text-3xl font-gatile md:text-4xl font-bold">
              cookwell
            </h2>
          </Link>
        )}
        <nav
          className={`${
            openNav
              ? "flex-col flex bg-white absolute top-0 left-0 p-4 w-full"
              : "hidden md:flex"
          }`}
        >
          {openNav && (
            <FaTimes
              className=" absolute right-5 md:hidden text-xl"
              onClick={() => setOpenNav(false)}
            />
          )}
          {navItems.map((item) => (
            <a
              className={`${
                openNav ? "mt-4 mx-auto" : "mr-6 text-md font-bold "
              }`}
              href={item.href}
              key={item.name}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div>
        {!openNav && (
          <RiMenu3Fill
            className="md:hidden cursor-pointer text-xl"
            onClick={() => setOpenNav(true)}
          />
        )}

        <Button className="hidden md:block">Start now</Button>
      </div>
    </header>
  );
}

export default Header;
