import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "../public/microsoft-store-logo.png";
import banner from "../public/lesssocialmediamoresnapchat.png";
import filters from "../public/snap-filters.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex">
      <div className="pt-[16rem] pl-10 border-r-[1px] w-1/2 h-screen">
        <div>
          <h1 className="font-bold text-xl">Log in to Snapchat</h1>
          <p className="text-gray-500">
            Chat, Snap and video call your friends. Watch Stories and Spotlight,
            <br />
            all from your computer.
          </p>
        </div>
        <div className="mt-4">
          <p className="text-gray-500">Username or email address</p>
          <Input placeholder="" className="w-2/3 bg-gray-200 rounded-xl" />
          <Button className="bg-[#0197e5] text-white mt-4 w-2/3 rounded-full hover:bg-blue-600">
            Log in
          </Button>
        </div>
        <div className="mt-6">
          <p className="text-gray-600">
            or continue with downloading the Snapchat web app
          </p>
          <Button className="mt-2">
            <Image
              width={120}
              className="rounded-[3px]"
              src={logo}
              alt="microsoft-store"
            />
          </Button>
          <p>
            Looking for the app? Get it <span className="underline">here</span>
          </p>
        </div>
      </div>
      <div className="bg-[#fefc01] w-1/2 h-full">
        <Image src={banner} alt="banner" className="mx-auto rotate-2 mt-4" />
        <Image src={filters} alt="banner" className="mx-auto mt-4" />
      </div>
    </div>
  );
};

export default Header;
