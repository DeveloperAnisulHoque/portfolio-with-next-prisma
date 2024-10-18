import { Button } from "@/components/ui/button";

import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Page = () => {
  return (
    <div className="container py-24 ">
      <div className="  w-11/12  max-w-[500px]   px-6 py-16     lg:p-10  bg-white mx-auto rounded space-y-6">
        <div className="text-center   space-y-2 pb-5">
          <h4 className="font-bold  text-xl lg:text-2xl text-primary ">
            Verification{" "}
          </h4>
          <p className="text-gray-500 ">
            Enter your Email and we"ll help you reset your password .
          </p>
        </div>
        <div className="flex justify-center">
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              {/* </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup> */}
              <InputOTPSlot index={3} />
              {/* <InputOTPSlot index={4} />
              <InputOTPSlot index={5} /> */}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button className=" px-8  block mx-auto">Confirm Code</Button>
      </div>
    </div>
  );
};

export default Page;
