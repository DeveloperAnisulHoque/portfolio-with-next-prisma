"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { updateProjectById } from "@/actions/actions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image as ImageIcon, Pencil, X } from "lucide-react";
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

const UpdateProjectByIdModal = ({ data }: { data: any }) => {
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
    defaultValues: {
      title: data?.title || "",
      live: data?.live || "",
      github: data?.github || "",
      description: data?.description || "",
      type: data?.type || "", // Set the default value for type
    },
  });

  // Ensure that the type field is set when opening the modal
  useEffect(() => {
    if (data?.type) {
      setValue("type", data.type);
    }
  }, [data?.type, setValue]);

  const handleFormSubmit = async (d: any) => {
    const formData = new FormData();
    formData.append("title", d.title);
    formData.append("live", d.live);
    formData.append("github", d.github);
    formData.append("description", d.description);
    formData.append("type", d.type);
    if (file) {
      formData.append("photo", file);
    } else {
      setError("photo", { message: "Photo is required" });
      return;
    }

    try {
      const projectData = await updateProjectById(data.id, formData);
      if (projectData.id) {
        toast({ title: "Project updated successfully!" });
        setFile(null);
        setOpen(false);
      }
    } catch (error) {
      toast({ title: error.message });
      console.log(error);
    }
  };

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    clearErrors("photo");
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant={"outline"}
        className="px-2 text-blue-500 hover:bg-blue-500 hover:text-white"
      >
        <Pencil />
      </Button>
      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen(false);
        }}
      >
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className="w-11/12 max-w-lg">
          <DialogHeader>
            <DialogTitle>Update Project</DialogTitle>
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
              <Select
                id="type"
                onValueChange={(value) => setValue("type", value)}
                defaultValue={data.type} // Set the default value based on the data
              >
                <SelectTrigger>
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
                    className="absolute top-2 right-1 px-1 w-6 h-6 z-20 bg-red-500 hover:bg-red-600 rounded-sm"
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
              Update
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateProjectByIdModal;
