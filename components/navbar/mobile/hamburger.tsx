import { BurgerIcon } from "@/app/icons/burger";
import { ContactIcon } from "@/app/icons/contact";
import { Button } from "@/components/ui/button";
import { Pages } from "@/types/pages";
import Link from "next/link";

export const Hamburger = () => {
  return (
    <div className="bg-secondary px-5 py-[7px] flex justify-between items-center">
      <BurgerIcon />
      <Button
        asChild
        className="text-white hover:text-primary pr-0"
        variant="link"
      >
        <Link href={Pages.contact()}>
          Kontaktiere uns
          <ContactIcon />
        </Link>
      </Button>
    </div>
  );
};
