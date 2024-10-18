import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import forgot_password_banner from "../../../../public/forgot-password.png";
import React from "react";

const Page = () => {
  return (
    <div className="container py-16">
      <Image
        src={forgot_password_banner}
        className=" w-[180px]   lg:w-[300px] h-auto  object-contain mx-auto"
        width={500}
        height={500}
        alt="forgot_password"
      />

      <div className="  w-11/12  max-w-[500px]   px-6 py-16     lg:p-10  bg-white mx-auto rounded space-y-6">
        <div className="text-center   space-y-2 pb-5">
          <h4 className="font-bold  text-xl lg:text-2xl text-primary ">
            Forgot your passoword ?{" "}
          </h4>
          <p className="text-gray-500 ">
            Enter your Email and we"ll help you reset your password .
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

        <Button className=" px-14  lg:px-20 block mx-auto">Continue</Button>
      </div>
    </div>
  );
};

export default Page;
