import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// #region CLASS-NAME
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
