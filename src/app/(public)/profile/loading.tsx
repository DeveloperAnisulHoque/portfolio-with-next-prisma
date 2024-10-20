"use client";
import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loader = () => {
  return (
    <div className="  bg-white     flex items-center justify-center min-h-36 lg:min-h-72">
      <PuffLoader />
    </div>
  );
};

export default Loader;
