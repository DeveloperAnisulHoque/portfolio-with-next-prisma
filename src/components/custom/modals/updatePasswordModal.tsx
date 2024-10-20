"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { softDeleteProject } from "@/actions/actions";
import { useToast } from "@/hooks/use-toast";

interface UpdatePasswordModalProps {
  isOpen: boolean;
  setIsOpen: (item: boolean) => void;
}

const UpdatePasswordModal: React.FC<UpdatePasswordModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reset Your Password</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" onClick={handleCancel}>
            {" "}
            {/* Close on cancel */}
            Cancel
          </Button>
          <Button onClick={handleDelete} disabled={loading}>
            {loading ? "Submiting..." : "Submit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePasswordModal;
