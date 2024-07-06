"use client"
import React from "react";
import { BsGithub, BsSnapchat } from "react-icons/bs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";

const githubSignUpHandler = async (e:any) => {
  e.preventDefault();
  await signIn("github");
};

const signUpHandler = async (e:any) => {
  e.preventDefault();
  const data = {
    firstName: e.target.first_name.value,
    lastName: e.target.last_name.value,
    userName: e.target.user_name.value,
    email: e.target.email.value,
    password: e.target.password.value,
  };
  await signIn("credentials", { ...data, redirect: false });
};

const Signup = () => {
  return (
    <div className="flex w-full h-full pb-10 bg-[#f2f3f3]">
      <div className="mt-20 rounded-xl shadow-md mx-auto justify-center bg-white items-center w-1/3">
        <div className="flex mt-10 mx-auto flex-col items-center rounded-md">
          <BsSnapchat className="text-3xl" />
          <span className="font-extrabold text-3xl">Sign Up</span>
        </div>
        <div>
          <form onSubmit={signUpHandler} className="p-4 centered-form ml-3 mt-4">
            <label className="font-semibold text-xs text-gray-600">First Name</label>
            <Input
              name="first_name"
              placeholder="Input your first name"
              type="text"
              className="rounded-xl text-gray-500 font-semibold text-xs border-none bg-gray-100"
              required
            />
            <label className="font-semibold text-xs text-gray-600">Last Name</label>
            <Input
              name="last_name"
              placeholder="Input your last name"
              type="text"
              className="rounded-xl text-gray-500 font-semibold text-xs border-none bg-gray-100"
              required
            />
            <label className="font-semibold text-xs text-gray-600">User Name</label>
            <Input
              name="user_name"
              placeholder="Input your user name"
              type="text"
              className="rounded-xl text-gray-500 font-semibold text-xs border-none bg-gray-100"
              required
            />
            <label className="font-semibold text-xs text-gray-600">Email</label>
            <Input
              name="email"
              placeholder="Input your Email"
              type="email"
              className="rounded-xl text-gray-500 font-semibold text-xs border-none bg-gray-100"
              required
            />
            <label className="font-semibold text-xs text-gray-600">Password</label>
            <Input
              name="password"
              placeholder="Input your Password"
              type="password"
              className="rounded-xl text-gray-500 font-semibold text-xs border-none bg-gray-100"
              required
            />
            <p className="password-tip text-xs text-gray-500 mt-2">
              Password must be at least 8 characters.
            </p>
            <span className="sign-up-form-footer font-semibold text-xs text-gray-500">
              By tapping Sign Up & Accept, you acknowledge that you have read the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                href="https://www.snap.com/privacy/privacy-policy"
              >
                Privacy Policy
              </a>{" "}
              and agree to the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.snap.com/terms"
                className="underline"
              >
                Terms of Service
              </a>
              . Snapchatters can always capture or save your messages, such as by taking a screenshot or using a camera. Be mindful of what you Snap!
            </span>
            <div className="signup-button">
              <Button type="submit" className="mb-2 rounded-full bg-[#0c98e4] text-white mt-4 w-full hover:bg-blue-600">
                Sign Up & Accept
              </Button>
            </div>
          </form>
          <span className="mx-[13rem] font-bold text-xl">Or</span>
          <Button
            onClick={githubSignUpHandler}
            className="rounded-full bg-[#0c98e4] text-white mt-4 w-full hover:bg-blue-600"
          >
            Sign Up with <BsGithub size={24} className="ml-2 inline-block" />
          </Button>
          <p className="text-sm mt-4 font-semibold">
            Have an account?{" "}
            <Link className="text-blue-700" href="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
