import { NavItem } from "@/types/navItem";

export const MENU_ITEMS: Array<NavItem> = [
  {
    href: "",
    title: "Dienstleistungen",
    items: [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
      },
      {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Progress",
        href: "/docs/primitives/progress",
      },
    ],
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
