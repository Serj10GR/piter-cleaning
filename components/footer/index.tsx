import Link from "next/link";
import { Logo } from "../logo";
import { Pages } from "@/types/pages";
import { MENU_ITEMS } from "@/config/menuItems";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  const services =
    MENU_ITEMS.find((item) => item.title === "Dienstleistungen")?.items ?? [];
  return (
    <footer className="bg-secondary text-white py-10 px-5">
      <div className="flex flex-col md:flex-row-reverse md:items-center lg:max-w-[1280px] lg:mx-auto md:px-5 md:gap-[200px]">
        <div className="grid grid-cols-2 gap-3 mb-20 md:mb-0">
          <div>
            <div className="text-lg">Dienstleistungen</div>
            <div className="flex flex-col space-y-2 mt-4">
              {services.map((service) => (
                <Link
                  className="text-sm text-white/60 cursor-pointer hover:text-white"
                  key={service.href}
                  href={service.href}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-lg">Kontaktiere uns</div>
            <div className="flex flex-col space-y-2 mt-4">
              <a
                href={`call:${siteConfig.tel.value}`}
                className="text-sm text-white/60 cursor-pointer hover:text-white"
              >
                {siteConfig.tel.label}
              </a>
              <a
                href={`mailto:${siteConfig.mail}`}
                className="text-sm text-white/60 cursor-pointer hover:text-white"
              >
                {siteConfig.mail}
              </a>
            </div>
          </div>
        </div>
        <Link href={Pages.home()} className="flex justify-center">
          <Logo variant="white" />
        </Link>
      </div>
    </footer>
  );
};
