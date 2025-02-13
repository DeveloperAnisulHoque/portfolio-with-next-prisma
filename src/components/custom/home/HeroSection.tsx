"use client";
import { Button } from "@/components/ui/button";
import { Briefcase, FileUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MeImage1 from "@/assets/anisulhoque1.jpg";

import iconPlaceholder from "../../../../public/svg-icons/placeholder.svg";

import { skillsContentData, socialLinkContentData } from "@/lib/contentData";

const HeroSection = () => {
  return (
    <div>
      <div className="container  py-24 flex flex-col-reverse   lg:flex-row  gap-10 items-center text-center lg:text-left ">
        <div className=" lg:w-6/12   space-y-4 flex flex-col items-center  lg:items-start">
          <h4 className="text-slate-700  text-2xl">HI, I'M A FREELANCER</h4>
          <h2 className=" text-4xl    lg:text-7xl font-extrabold text-primary">
            Developer
            {/* / Designer */}
          </h2>
          <p className="text-lg">
            I'm a software developer specializing in scalable web apps.{" "}
            <br className="hidden lg:block" /> Explore my{" "}
            <Link href={"/blogs"} className="font-semibold text-primary">
              blog
            </Link>
            , and{" "}
            <Link href={"/resume"} className="font-semibold text-primary">
              online resume{" "}
            </Link>{" "}
            .
          </p>
          <div className="flex gap-4 items-center py-5">
            <Link href={"/resume"}>
              <Button className="flex gap-2 items-center">
                <FileUser /> View Resume
              </Button>
            </Link>
            <Link href={"/#project"}>
              <Button variant={"outline"} className="flex gap-2 items-center">
                <Briefcase /> View Portfolio
              </Button>
            </Link>
          </div>

          <div className="flex gap-1 items-center">
            {socialLinkContentData
              ?.sort((a, b) => a.priority - b.priority)
              ?.map((item, index) => {
                return (
                  <Link href={item?.link} key={index}>
                    <Image
                      src={item?.url}
                      width={100}
                      height={100}
                      alt={item?.name}
                      onBlur={iconPlaceholder}
                      className="w-10 h-10 p-1  rounded-full border border-slate-100 shadow  object-cover bg-white"
                    />
                  </Link>
                );
              })}
          </div>
        </div>

        <div className="lg:w-6/12 h-full   flex flex-col  gap-5    items-center   rounded-lg   group   ">
          <div className="   w-6/12     ">
            <Image
              src={MeImage1}
              className="w-full h-auto   object-contain rounded-full   duration-500  shadow-lg group-hover:shadow-2xl  ring-4 ring-offset-4  ring-primary  border border-slate-100  ring-slate-200 "
              width={700}
              height={700}
              alt="anisulhoque"
            />
          </div>
          <div className="flex items-center -space-x-4 group-hover:space-x-1 transition-transform duration-200">
            {skillsContentData
              ?.sort((a, b) => a.priority - b.priority)
              .slice(0, 4)
              .map((item, index) => {
                return (
                  <Image
                    key={index || item.url} // Prefer unique keys like item.id
                    className={`w-10 h-10   lg:w-16 lg:h-16 rounded-full bg-white p-1 overflow-hidden border border-slate-100 hover:scale-105 hover:shadow-md duration-150  `}
                    width={200}
                    height={200}
                    alt={item.title || "skill image"} // Dynamically handle alt text
                    src={item.url}
                    onBlur={iconPlaceholder}
                  />
                );
              })}
          </div>
        </div>
      </div>

      <div className="container pb-12  flex   justify-center  lg:justify-start items-center gap-4   lg:gap-12 flex-wrap ">
        {" "}
        <div className="flex flex-col lg:flex-row gap-2 lg:items-center border rounded p-2   lg:border-none lg:p-0 hover:ring-2 hover:ring-offset-2 ring-primary lg:ring-transparent lg:ring-offset-transparent duration-300 ">
          <span className=" text-3xl lg:text-5xl font-extrabold text-primary">
            5{" "}
          </span>{" "}
          <span className="   hidden lg:block text-4xl ">| </span>{" "}
          <span className="text-xs lg:text-base">
            {" "}
            Years of <br /> Experience{" "}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:items-center border rounded p-2   lg:border-none lg:p-0 hover:ring-2 hover:ring-offset-2 ring-primary lg:ring-transparent lg:ring-offset-transparent duration-300 ">
          <span className=" text-3xl lg:text-5xl font-extrabold text-primary">
            55{" "}
          </span>{" "}
          <span className="   hidden lg:block text-4xl ">| </span>{" "}
          <span className="text-xs lg:text-base">
            {" "}
            Projects <br /> Completed{" "}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:items-center border rounded p-2   lg:border-none lg:p-0 hover:ring-2 hover:ring-offset-2 ring-primary lg:ring-transparent lg:ring-offset-transparent duration-300 ">
          <span className=" text-3xl lg:text-5xl font-extrabold text-primary">
            1k{" "}
          </span>{" "}
          <span className="   hidden lg:block text-4xl ">| </span>{" "}
          <span className="text-xs lg:text-base">
            {" "}
            Client <br /> Worldwide{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
