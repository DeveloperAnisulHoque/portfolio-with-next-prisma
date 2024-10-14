"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { softDeleteProject } from "@/actions/actions";
import { useToast } from "@/hooks/use-toast";

interface softDeleteProjectModal {
  id: string;
}

const SoftDeleteProjectModal: React.FC<softDeleteProjectModal> = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false); // Control the modal's open state

  const handleDelete = async () => {
    setLoading(true);
    try {
      await softDeleteProject(id); // Execute server action
      toast({ title: "Project deleted successfully" });
      setIsOpen(false); // Close the modal after deletion
    } catch (error) {
      console.error("Error deleting:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsOpen(false); // Close the modal when cancel is clicked
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="px-2 text-red-500 hover:bg-red-500 hover:text-white "
          onClick={() => setIsOpen(true)} // Open the modal
        >
          <Trash2 />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" onClick={handleCancel}>
            {" "}
            {/* Close on cancel */}
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SoftDeleteProjectModal;
