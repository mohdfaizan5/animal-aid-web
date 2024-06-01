import React from "react";
import { Button } from "@/components/ui/button";
import { HoverLineBtn } from "./UI";
import { ModeToggle } from "./DarkModeToggle";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex px-10 items-center py-5 justify-between">
      <div className="text-xl font-semibold flex items-center">
        <img
          alt="alternative text"
          src="/static/logo/logo-base-256x256.png"
          className="size-10"
        ></img>
        AnimalAidWeb
      </div>
      <nav className="md:hidden">
        <CiMenuBurger size={32} />
      </nav>
      <nav className="hidden md:flex gap-7 items-center text-lg  ">
        <a className="" href="#">
          <HoverLineBtn>Find a pet</HoverLineBtn>
        </a>
        <a className="" href="#">
          <HoverLineBtn>Donate</HoverLineBtn>
        </a>
        <ModeToggle />
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium dark:text-white light:text-black  transition-all duration-100 [box-shadow:5px_5px_rgb(9_185_76)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]">
          Get started
        </button>{" "}
      </nav>
    </div>
  );
};

export default Navbar;
