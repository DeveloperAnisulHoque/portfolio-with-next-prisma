import { LogoComponent } from "@/components/custom/layout/Header";
import { Button } from "@/components/ui/button";
import { Github, Lock, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="container py-16">
      <div className=" w-16 h-16 hover:shadow  flex justify-center  items-center rounded-full bg-white m-4 mx-auto">
        <LogoComponent />
      </div>

      <div className="  w-11/12  max-w-[500px]   p-6     lg:p-10  bg-white mx-auto rounded space-y-6">
        <div className="text-center   space-y-2 pb-5">
          <h4 className="font-bold  text-xl lg:text-2xl text-primary ">
            Welcome Back
          </h4>
          <p className="text-gray-500 ">
            Enter your credentials to access your account.
          </p>
        </div>

        <div className="flex gap-5 px-3 py-2  border border-slate-200 rounded   duration-150   ">
          <Mail />{" "}
          <input
            type="text"
            className="outline-none flex-1"
            placeholder="Enter your email "
          />
        </div>
        <div className="flex gap-5 px-3 py-2  border border-slate-200 rounded   duration-150  ">
          <Lock />{" "}
          <input
            type="password"
            className="outline-none flex-1"
            placeholder="Enter your password "
          />
        </div>
        <Button className=" w-full">Sign In</Button>

        <div className="flex justify-center items-center gap-3">
          <Button variant={"outline"}>
            <Github />
          </Button>
          <Button className="text-lg font-bold" variant={"outline"}>
            G
          </Button>
        </div>

        <div className="space-y-2">
          <Link href={"/sign-up"} className="block text-sm">
            Don't have an account ?
          </Link>
          <Link href={"/forgot-password"} className="block text-sm">
            Forgot password ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
