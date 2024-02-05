import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const makeUrlFromServiceName = (serviceName: string) =>
  `/dienstleistungen/${serviceName.replace(/ /g, "-").toLowerCase()}`;
