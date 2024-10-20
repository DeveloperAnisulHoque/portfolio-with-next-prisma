import Image from "next/image";
import React from "react";
import EmptySection from "../../../../../public/empty.png";

const page = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">All your events</h3>
      <hr />
      <Image
        width={400}
        height={400}
        alt="not_event_found"
        src={EmptySection}
        className="w-8/12 max-w-sm mx-auto h-auto object-contain"
      />
    </div>
  );
};

export default page;
