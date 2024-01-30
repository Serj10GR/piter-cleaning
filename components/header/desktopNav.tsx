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
import { MENU_ITEMS } from "@/config/menuItems";
import { Pages } from "@/types/pages";
import Link from "next/link";
import { forwardRef } from "react";

export const DesktopNav = () => {
  return (
    <div className="hidden md:flex justify-between mb-[120px] mt-6 px-5">
      <Link href={Pages.home()}>
        <Logo />
      </Link>
      <div className="flex">
        <NavigationMenu>
          <NavigationMenuList>
            {MENU_ITEMS.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items?.length ? (
                  <>
                    <NavigationMenuTrigger>
                      Dienstleistungen
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="p-4 rounded-sm">
                        {item.items.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
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
