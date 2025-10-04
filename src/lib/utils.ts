import { clsx as clsx_1 } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: any[]) {
  return twMerge(clsx_1(inputs))
}
