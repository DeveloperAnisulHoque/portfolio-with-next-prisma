"use client";
import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-white  bg-opacity-50  flex items-center justify-center">
      <PuffLoader />
    </div>
  );
};

export default Loader;
