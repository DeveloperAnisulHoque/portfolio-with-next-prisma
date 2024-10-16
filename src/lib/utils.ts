import moment from "moment";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to format a date to a specific format
export const formatDate = (date, format = "YYYY-MM-DD") => {
  return moment(date).format(format);
};

export const getImageUrl = (url, defaultImage) => {
  // Check if the URL is empty or if the image is not found
  if (!url || url.trim() === '' || !isValidImage(url)) {
    return defaultImage; // Return default image if URL is empty or invalid
  }
  return url; // Return the original image URL if valid
};

// Helper function to validate image URL (basic example)
const isValidImage = (url) => {
  // Here you can add more sophisticated validation if necessary
  return /\.(jpeg|jpg|png|gif|svg)$/.test(url); // Check if the URL ends with an image extension
};
