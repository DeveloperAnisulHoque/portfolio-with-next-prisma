"use client";
import UpdateNameModal from "@/components/custom/modals/updateNameModal";
import UpdatePasswordModal from "@/components/custom/modals/updatePasswordModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, ChevronRight, CircleCheck, Edit } from "lucide-react";
import React, { useState } from "react";

const page = () => {
  const [isOpenUpdateNameModal, setUpadateNameModalOpen] = useState(false);
  const [isOpenUpdatePasswordModal, setUpadatePasswordModalOpen] =
    useState(false);

  return (
    <div className="space-y-3">
      <Avatar className="w-24 h-24 border relative group">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback className="bg-white text-xl">CN</AvatarFallback>
        <button className="  opacity-0    absolute inset-0 bg-black bg-opacity-25 group-hover:opacity-100   flex items-center justify-center text-white  duration-500 ">
          <Camera />
        </button>
      </Avatar>
      <div className="flex  flex-wrap  items-center gap-5 py-2">
        <div className="min-w-[100px]">Account name</div>
        <p className="font-semibold">Anisul hoque</p>
        <button
          className="  ms-auto"
          onClick={() => setUpadateNameModalOpen(true)}
        >
          <Edit className="  w-5 h-5   " />
        </button>
      </div>
      <hr />
      <div className="flex flex-wrap   items-center gap-5 py-2">
        <div className="min-w-[100px]">Email</div>
        <p className="font-semibold ">anisulhoque587@gmail.com</p>
        <button className="  ms-auto">
          <CircleCheck className="  w-5 h-5    text-green-500" />
        </button>
      </div>
      <hr />
      <div className="flex flex-wrap   items-center gap-5 py-2">
        <div className=" space-y-2">
          <h4 className="font-semibold">Reset Your Password</h4>
          <p className="text-sm">Change password for your account here</p>
        </div>

        <button
          className="  ms-auto"
          onClick={() => setUpadatePasswordModalOpen(true)}
        >
          <ChevronRight className="  w-5 h-5    " />
        </button>
      </div>

      <UpdateNameModal
        isOpen={isOpenUpdateNameModal}
        setIsOpen={setUpadateNameModalOpen}
      />
      <UpdatePasswordModal
        isOpen={isOpenUpdatePasswordModal}
        setIsOpen={setUpadatePasswordModalOpen}
      />
    </div>
  );
};

export default page;
