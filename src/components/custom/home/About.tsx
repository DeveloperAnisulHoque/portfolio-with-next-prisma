import { Button } from "@/components/ui/button";
import { skillsContentData } from "@/lib/contentData";
import { Ellipsis, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="container py-24 space-y-4">
        <div className="border-l-8 border-l-primary px-4">
          <h2 className="section-title">What I do</h2>
        </div>
        <div className="flex  flex-col lg:flex-row gap-5 items-center">
          <p className="flex-1">
            I have more than 10 years' experience building software for clients
            all over the world. Below is a <br className="hidden lg:block" />{" "}
            quick overview of my main technical skill sets and technologies I
            use. Want to find out more <br className="hidden lg:block" /> about
            my experience? Check out my{" "}
            <Link href={"/resume"} className="font-semibold text-primary">
              online resume{" "}
            </Link>
            and{" "}
            <Link href={"/#project"} className="font-semibold text-primary">
              project portfolio{" "}
            </Link>{" "}
            .
          </p>

          <Link href={"/"}>
            <Button className="flex gap-2 items-center">
              <MoveRight />
              Services & Pricing
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-5 ">
          {skillsContentData
            ?.sort((a, b) => a.priority - b.priority)
            ?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-4    border border-slate-100 rounded space-y-3 hover:shadow-lg duration-500  bg-white"
                >
                  <Image
                    width={200}
                    height={200}
                    alt={item?.title}
                    src={item?.url}
                    className="w-10 h-10 rounded-full"
                  />
                  <h3 className="text-lg font-semibold">{item?.title}</h3>

                  <p className="text-sm   text-gray-600 line-clamp-3">
                    {item?.description}
                  </p>
                </div>
              );
            })}
        </div>{" "}
      </div>
      <hr />
      <div className="py-24  section-image relative  ">
        <div className=" absolute inset-0 m-auto bg-white bg-opacity-10 backdrop-blur  z-0 "></div>
        <div className="container relative z-10 space-y-3 text-center lg:text-left">
          <div className="flex  flex-col lg:flex-row gap-5 items-center">
            <h2 className="section-title flex-1">
              Let’s Work together on your next Project
            </h2>

            <Link href={"/"}>
              <Button className="flex gap-2 items-center">
                <MoveRight />
                Let's get in touch
              </Button>
            </Link>
          </div>{" "}
          <p className="">
            I am available for freelance projects. Hire me and get your project
            done.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
