"use client"
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { signIn } from "next-auth/react";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailPasswordSignIn = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        // Handle successful sign-in (optional)
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setError("Failed to sign in");
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await signIn("github");
    } catch (error) {
      console.error("GitHub sign-in error:", error);
      setError("Failed to sign in with GitHub");
    }
  };

  return (
    <div className="bg-[#f2f3f3] w-full h-full p-20">
      <div className="w-1/2 bg-white mx-auto p-10">
        <form
          onSubmit={handleEmailPasswordSignIn}
          className="flex flex-col mb-4 gap-5"
        >
          <div className="">
            <label
              className="font-semibold text-sm text-gray-500"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              className="border-none font-semibold text-sm text-gray-500 bg-gray-100 rounded-xl"
              type="email"
              required
              placeholder="Input Your Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="">
            <label
              className="font-semibold text-sm text-gray-500"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              className="border-none font-semibold text-sm text-gray-500 bg-gray-100 rounded-xl"
              type="password"
              required
              placeholder="Input Your Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <Button
            type="submit"
            className="rounded-full bg-[#0c98e4] text-white mt-4 w-full hover:bg-blue-600"
          >
            Log In
          </Button>
          <span className="font-semibold text-xl mx-auto">Or</span>
          <Button
            type="button"
            className="flex gap-4 rounded-full bg-[#0c98e4] text-white mt-4 w-full hover:bg-blue-600"
            onClick={handleGithubSignIn}
          >
            <span className="">Continue With Github</span>
            <BsGithub size={30} />
          </Button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <span className="">Don&apos;t have an account?</span>
        <Link className="text-blue-500" href="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
