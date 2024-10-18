import { Button } from "@/components/ui/button";
import { FileText, Mail, Phone, PinIcon } from "lucide-react";
import React from "react";

import MeImage1 from "@/assets/anisulhoque1.jpg";
import Image from "next/image";
const Page = () => {
  return (
    <div className="container py-24 space-y-4">
      <div className=" space-y-2">
        <h1 className="section-title">Online Resume</h1>
        <Button className="flex gap-2  items-center">
          <FileText />
          Download PDF Version
        </Button>
      </div>

      <div className="rounded-xl shadow-sm bg-white border border-slate-200 px-8 py-4">
        <div className="py-4  flex gap-4 divide-x-2">
          <div className="flex-1">
            <h4 className="text-4xl font-bold text-primary">Anisul hoque</h4>
            <p className="text-lg font-semibold text-gray-600">
              Softoware developer
            </p>
          </div>
          <div className="px-6 space-y-3">
            <div className="flex gap-3 ">
              <Phone /> <span>01852320729</span>
            </div>
            <div className="flex gap-3 ">
              <Mail /> <span>anisulhoque587@gmail.com</span>
            </div>
            <div className="flex gap-3 ">
              <PinIcon /> <span>Bangladesh</span>
            </div>
          </div>
        </div>
        <hr />

        <div className="py-12 flex gap-12  items-center">
          <div className="w-[170px] h-[170px] rounded-full bg-slate-100 shadow ">
            <Image
              src={MeImage1}
              className="w-full h-auto   object-contain rounded-full   duration-500  shadow-lg group-hover:shadow-2xl  ring-2 ring-offset-2  ring-primary  border border-slate-100  ring-slate-100 "
              width={700}
              height={700}
              alt="anisulhoque"
            />
          </div>
          <div className="flex-1 text-gray-600">
            Summarise your career here. You can make a PDF version of your
            resume using our free Sketch template here. Donec quam felis,
            ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Maecenas nec odio et ante
            tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
            Duis leo. Sed fringilla mauris sit amet nibh.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
