import React from "react";
import Image from "next/image";
import EmptyImage from "@/assets/Empty.gif";
const EmptyDataSection = () => {
  return (
    <div className=" py-14  md:py-28">
      <div className="w-64  h-full  md:w-80 md:h-auto space-y-2 rounded-full overflow-hidden mx-auto text-center  ">
        <Image
          src={EmptyImage}
          width={700}
          height={700}
          className="w-full h-auto object-contain"
          alt="empty_data"
        />
        <p className="text-sm  md:text-lg md:font-semibold text-slate-700">
          No Data found !
        </p>
      </div>{" "}
    </div>
  );
};

export default EmptyDataSection;
