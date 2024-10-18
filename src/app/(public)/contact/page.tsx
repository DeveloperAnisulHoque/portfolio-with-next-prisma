import { Button } from "@/components/ui/button";
import { socialLinkContentData } from "@/lib/contentData";
import { Computer, Locate, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import iconPlaceholder from "../../../../public/svg-icons/placeholder.svg";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="container py-24 space-y-16">
      {/* Contact Section */}
      <div className="border-l-8 border-l-primary px-4">
        <h2 className="section-title text-4xl font-bold">Contact</h2>
      </div>
      <div className="lg:w-7/12 text-lg leading-relaxed text-gray-700">
        Interested in hiring me for your project or just want to say hi? You can
        fill in the contact form below or send me an email to{" "}
        <span className="text-primary font-semibold">
          anisulhoque587@gmail.com
        </span>
        . Want to get connected? Follow me on the social channels below.
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 items-center">
        {socialLinkContentData
          ?.sort((a, b) => a.priority - b.priority)
          ?.map((item, index) => (
            <Link href={item?.link} key={index}>
              <Image
                src={item?.url}
                width={100}
                height={100}
                alt={item?.name}
                onBlur={iconPlaceholder}
                className="w-12 h-12 p-1 rounded-full border border-gray-200 shadow-md transition-transform transform hover:scale-105 hover:border-primary"
              />
            </Link>
          ))}
      </div>

      {/* Contact Info & Form Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Info Cards */}
        <div className="space-y-6 lg:w-4/12">
          <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Computer className="w-8 h-8 text-primary" />
            <h3 className="section-title text-xl font-semibold">
              Book a Meeting
            </h3>
            <Button className="mt-3">Let's Go</Button>
          </Card>
          <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <PhoneCall className="w-8 h-8 text-primary" />
            <h3 className="section-title text-xl font-semibold">Phone</h3>
            <p className="text-gray-700">01852320729</p>
          </Card>
          <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Locate className="w-8 h-8 text-primary" />
            <h3 className="section-title text-xl font-semibold">Location</h3>
            <p className="text-gray-700">Bangladesh</p>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg lg:w-8/12 space-y-6 h-fit">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Input
              id="name"
              type="text"
              placeholder="Your Name *"
              className="focus:ring-primary focus:border-primary"
            />
            <Input
              id="email"
              type="email"
              placeholder="Your Email *"
              className="focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Input
              id="phone"
              type="text"
              placeholder="Phone *"
              className="focus:ring-primary focus:border-primary"
            />
            <Input
              id="location"
              type="text"
              placeholder="Location *"
              className="focus:ring-primary focus:border-primary"
            />
          </div>
          <Textarea
            placeholder="Your Message :"
            className="focus:ring-primary focus:border-primary"
          />
          <Button className="min-w-[200px] bg-primary hover:bg-primary-dark transition duration-300">
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
