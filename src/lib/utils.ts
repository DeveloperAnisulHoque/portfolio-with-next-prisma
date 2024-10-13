import moment from "moment";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




// Function to format a date to a specific format
export const formatDate = (date, format = "YYYY-MM-DD") => {
  return moment(date).format(format);
};