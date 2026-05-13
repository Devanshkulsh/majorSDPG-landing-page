import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToLeadForm() {
  const leadSection = document.getElementById("lead");
  if (!leadSection) return;
  leadSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
