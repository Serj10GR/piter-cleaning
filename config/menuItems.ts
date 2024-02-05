import { NavItem } from "@/types/navItem";
import { SERVICES } from "./services";
import { makeUrlFromServiceName } from "@/lib/utils";

const servicesUrls = SERVICES.map((s) => ({
  title: s.name,
  href: makeUrlFromServiceName(s.name),
}));

export const MENU_ITEMS: Array<NavItem> = [
  {
    href: "",
    title: "Dienstleistungen",
    items: servicesUrls,
  },
  {
    title: "Über uns",
    href: "/#about",
  },
  {
    title: "Rezensionen",
    href: "/#feedback",
  },
];
