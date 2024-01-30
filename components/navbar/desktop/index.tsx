"use client";

import { ContactIcon } from "@/app/icons/contact";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Pages } from "@/types/pages";
import Link from "next/link";
import { forwardRef } from "react";

const components: { title: string; href: string }[] = [
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
];

export const DesktopNav = () => {
  return (
    <div className="hidden md:flex justify-between mb-[120px] mt-6">
      <Link href={Pages.home()}>
        <Logo />
      </Link>
      <div className="flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Dienstleistungen</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 rounded-sm">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#about-us-section" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Über uns
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#feedback" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Rezensionen
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button asChild variant="secondary">
          <Link href={Pages.contact()}>
            Kontaktiere uns
            <ContactIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
          </a>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
