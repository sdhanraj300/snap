import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex">
      <div className="">
        <div className="">
          <span>
            <h1>Log in to Snapchat</h1>
            <p>
              Chat, Snap and video call your friends. Watch Stories and
              Spotlight, all from your computer.
            </p>
          </span>
        </div>
        <div className="">
          <p>Username or email address</p>
          <Input placeholder="" />
          <Button className="bg-[#0197e5] text-white w-2/3 rounded-full hover:bg-blue-600">Log in</Button>
        </div>
        <div className="">
          <p>or continue with downloading the Snapchat web app</p>
          <Button>microsoft</Button>
          <p>
            Looking for the app? Get it <span className="underline">here</span>
          </p>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Header;
