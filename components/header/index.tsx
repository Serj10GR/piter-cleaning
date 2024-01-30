import { Pages } from "@/types/pages";
import { Button } from "../ui/button";
import { DesktopNav } from "./desktopNav";
import { MobileNav } from "./mobileNav";
import Link from "next/link";
import { ContactIcon } from "@/app/icons/contact";
import { Logo } from "../logo";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <DesktopNav />
      <div className="md:hidden">
        <Link href={Pages.home()} className="py-[25px] flex justify-center">
          <Logo />
        </Link>
        <div className="px-5 flex h-[54px] items-center bg-secondary">
          <MobileNav />
          <div className="flex flex-1 items-center justify-end space-x-2">
            <div className="md:w-auto md:flex-none">
              <Button asChild variant="secondary" className="pr-0 md:pr-4">
                <Link href={Pages.contact()}>
                  Kontaktiere uns
                  <ContactIcon />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
