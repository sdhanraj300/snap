import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TbGridDots, TbPlayerPlay } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import Link from "next/link";
import { CgStories } from "react-icons/cg";
import { BsChatRight, BsSnapchat } from "react-icons/bs";
import { IoSparklesSharp } from "react-icons/io5";
type Props = {};

const Navbar = () => {
  return (
    <div className="flex justify-between w-screen border-b-[1px] rounded-md h-20 px-10 py-4">
      <div className="flex items-center gap-3">
        <Link href="/">
          <div className="hover:bg-[#fefc01] w-[70px] p-5 h-[70px] rounded-xl my-auto mx-auto">
          <BsSnapchat size={"30"} />
          </div>
        </Link>
        <Input
          placeholder="Search "
          type="text"
          className="bg-[#f0f1f2] rounded-full"
        />
      </div>
      <div className="flex">
        <Button className="hover:bg-gray-200 rounded-xl" variant={"ghost"}>
          <CgStories size={"30"} />
          <span className="">Stories</span>
        </Button>
        <Button className="hover:bg-gray-200 rounded-xl" variant={"ghost"}>
          <TbPlayerPlay size={"30"} />

          <span>Spotlight</span>
        </Button>
        <Button className="hover:bg-gray-200 rounded-xl" variant={"ghost"}>
          <BsChatRight size={"30"} />

          <span>Chat</span>
        </Button>
        <Button className="hover:bg-gray-200 rounded-xl" variant={"ghost"}>
          <IoSparklesSharp size={"30"} />
          <span>Lenses</span>
        </Button>
      </div>
      <div className="flex items-center gap-5">
        <Button
          size={"icon"}
          variant={"secondary"}
          className=""
        >
          <TbGridDots className="bg-gray-300 hover:bg-gray-400 rounded-full p-2 text-black" size={"30"} />
        </Button>
        <Button className="rounded-full bg-black text-white hover:bg-white hover:text-black">
          Snapchat Ads
        </Button>
        <Button className="rounded-full bg-black text-white hover:bg-white hover:text-black">
          Download
        </Button>
        <Button
          size={"icon"}
          className="rounded-full bg-black text-white hover:bg-white hover:text-black"
        >
          <IoMdLogOut size={"18px"} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
