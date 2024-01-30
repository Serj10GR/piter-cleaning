import { Logo } from "@/components/logo";
import { Hamburger } from "./hamburger";
import Link from "next/link";
import { Pages } from "@/types/pages";

export const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Link
        href={Pages.home()}
        className="pt-[25px] pb-[30px] flex justify-center"
      >
        <Logo />
      </Link>
      <div className="relative">
        <Hamburger />
      </div>
    </div>
  );
};
