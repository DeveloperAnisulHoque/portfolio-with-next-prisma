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
import { Trash } from "lucide-react";
import { softpermanentlyDeleteProject } from "@/actions/actions";
import { useToast } from "@/hooks/use-toast";

interface HardsoftDeleteProjectModal {
  id: string;
}

const HardsoftDeleteProjectModal: React.FC<HardsoftDeleteProjectModal> = ({
  id,
}) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false); // Control the modal's open state

  const handleDelete = async () => {
    setLoading(true);
    try {
      await softpermanentlyDeleteProject(id); // Execute server action
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
          onClick={() => setIsOpen(true)}
          variant="destructive"
          className="  space-x-2 "
        >
          <Trash className="" />
          <span className="hidden md:block"> Delete Permanently</span>
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

export default HardsoftDeleteProjectModal;
