import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cn = (...arg) => {
  return twMerge(clsx(...arg));
};
