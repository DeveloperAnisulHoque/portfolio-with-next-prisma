"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { createNewProject } from "@/actions/actions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image as ImageIcon, Plus, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { projectTypes } from "../../../../type"; // Assuming projectTypes is an array of strings
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projectSchema = z.object({
  title: z.string().nonempty("Title is required"),
  live: z.string().url("Must be a valid URL"),
  github: z.string().url("Must be a valid URL"),
  description: z.string().optional(),
  photo: z.any(),
  type: z.string(),
});

const CreateNewProjectModal = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [file, setFile] = useState(null);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
  });

  const handleFormSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("live", data.live);
    formData.append("github", data.github);
    formData.append("description", data.description);
    formData.append("type", data.type); // Append the type field
    if (file) {
      formData.append("photo", file);
    } else {
      setError("photo", { message: "Photo is required" });
      return;
    }

    try {
      const projectData = await createNewProject(formData);
      if (projectData.id) {
        toast({ title: "Project created successfully!" });
        setFile(null);
        reset();
        setOpen(false);
      }
    } catch (error) {
      toast({ title: error.message });
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    clearErrors("photo"); // Clear photo error when file is selected
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex gap-1 items-center  px-3"
      >
        <Plus />
        Create
      </Button>
      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen(false);
          setFile(null);
          reset();
        }}
      >
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className=" w-11/12   max-w-lg ">
          <DialogHeader>
            <DialogTitle>Add New Project</DialogTitle>
          </DialogHeader>

          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="space-y-3 py-2"
          >
            <div className="space-y-1">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                {...register("title")}
                placeholder="Enter project title"
              />
              {errors.title && (
                <p className="text-red-500 text-xs">{errors.title.message}</p>
              )}
            </div>

            {/* Project Type Selection */}
            <div className="space-y-1">
              <Label htmlFor="type">Project Type</Label>
              <Select id="type" onValueChange={(e) => setValue("type", e)}>
                <SelectTrigger className="">
                  <SelectValue placeholder="Select Project Type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((type) => (
                    <SelectItem className="capitalize" key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.type && (
                <p className="text-red-500 text-xs">{errors.type.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="live">Live Link</Label>
              <Input
                type="text"
                id="live"
                {...register("live")}
                placeholder="https://example.com"
              />
              {errors.live && (
                <p className="text-red-500 text-xs">{errors.live.message}</p>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="github">GitHub Link</Label>
              <Input
                type="text"
                id="github"
                {...register("github")}
                placeholder="https://github.com/username/repo"
              />
              {errors.github && (
                <p className="text-red-500 text-xs">{errors.github.message}</p>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="photo">
                Photo
                <Input
                  type="file"
                  id="photo"
                  {...register("photo")}
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div className="h-32 bg-slate-50 border rounded border-slate-200 hover:shadow-sm overflow-hidden flex items-center justify-center text-slate-500 hover:text-slate-600 duration-150 cursor-pointer relative">
                  <Button
                    type="button"
                    onClick={() => setFile(null)}
                    className="absolute top-2 right-1 px-1 w-6 h-6 z-20 bg-red-500 hover:bg-red-600 rounded-sm "
                  >
                    <X />
                  </Button>
                  {file ? (
                    <Image
                      src={URL.createObjectURL(file)}
                      width={500}
                      height={500}
                      alt="Selected image"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageIcon className="w-2/12 h-auto" />
                  )}
                </div>
              </Label>
              {errors.photo && (
                <p className="text-red-500 text-xs">{errors.photo.message}</p>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                {...register("description")}
                placeholder="Briefly describe the project (optional)"
              />
            </div>

            <Button type="submit" className="ms-auto block">
              Create
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateNewProjectModal;
