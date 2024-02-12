import { NavItem } from "@/types/navItem";
import { SERVICES } from "./services";

const servicesUrls = SERVICES.map((s) => ({
  title: s.name,
  href: `/dienstleistungen/${s.link}/`,
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
