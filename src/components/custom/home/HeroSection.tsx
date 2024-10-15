"use client";
import { Button } from "@/components/ui/button";
import { Briefcase, StickyNote, TvMinimal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import MeImage1 from "@/assets/anisulhoque1.jpg";

const HeroSection = () => {
  return (
    <div>
      <div
        data-scroll
        data-scroll-speed="2"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
        className="container py-28  grid grid-cols-12 gap-5 items-center"
      >
        <div className=" col-span-6  space-y-4 ">
          <h4 className="text-slate-700  text-2xl">HI, I'M A FREELANCER</h4>
          <h2 className="text-7xl font-extrabold text-primary">
            Developer
            {/* / Designer */}
          </h2>
          <p className="text-lg">
            I'm a software developer specializing in scalable web apps. <br />{" "}
            Explore my{" "}
            <Link href={"/blog"} className="font-semibold text-primary">
              blog
            </Link>
            ,{" "}
            <Link href={"/blog"} className="font-semibold text-primary">
              Project portfolio
            </Link>{" "}
            and{" "}
            <Link href={"/blog"} className="font-semibold text-primary">
              online resume{" "}
            </Link>{" "}
            .
          </p>
          <div className="flex gap-4 items-center py-5">
            <Button className="flex gap-2 items-center">
              <StickyNote /> View Resume
            </Button>
            <Button variant={"outline"} className="flex gap-2 items-center">
              <Briefcase /> View Portfolio
            </Button>
          </div>
        </div>

        <div className="col-span-6   flex   -space-x-14   justify-center">
          <div className="min-h-[400px] w-4/12 bg-slate-50 rounded border  border-slate-200 z-10 hover:z-20 hover:scale-110 duration-200"></div>
          <div className="min-h-[400px] w-4/12 bg-slate-50 rounded border scale-105 border-slate-200 z-10 hover:z-20 hover:scale-110 duration-200 overflow-hidden ">
            <Image
              src={MeImage1}
              className="w-full h-full   object-cover"
              width={700}
              height={700}
              alt="anisulhoque"
            />
          </div>
          <div className="min-h-[400px] w-4/12 bg-slate-50 rounded border border-slate-200 z-0 hover:z-20 hover:scale-110 duration-200"></div>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="4"
        data-scroll-position="top"
        data-scroll-direction="vertical"
        className="container pb-12  flex items-center gap-12"
      >
        {" "}
        <div className="flex gap-2 items-center">
          <span className="text-5xl font-extrabold text-primary">5 </span>{" "}
          <span className="text-4xl ">| </span>{" "}
          <span className="">
            {" "}
            Years of <br /> Experience{" "}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-5xl font-extrabold text-primary">55 </span>{" "}
          <span className="text-4xl ">| </span>{" "}
          <span className="">
            {" "}
            Projects <br /> Completed{" "}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-5xl font-extrabold text-primary">1k </span>{" "}
          <span className="text-4xl ">| </span>{" "}
          <span className="">
            {" "}
            Client <br /> Worldwide{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
