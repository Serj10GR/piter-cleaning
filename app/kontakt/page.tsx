import { SmallRoundImage } from "@/components/roundImage/small";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { PhoneCall } from "lucide-react";

export default function Home() {
  return (
    <main className="md:grid md:grid-cols-3 pb-20 gap-[100px] px-6 py-10 md:p-0 text-center md:text-left">
      <div>
        <h1 className="text-[45px] mb-10">Kontaktiere uns</h1>
        <p className="mb-5">
          Sie sich kostenlos beraten. Wir sind bereit, Ihre Fragen zu
          beantworten
        </p>
      </div>
      <div className="mb-20 md:mb-0">
        <div className="text-[45px] mb-10 hidden md:block md:invisible">
          Kontaktiere uns
        </div>
        <p className="mb-5 md:max-80%">
          Rufen Sie uns an oder schreiben Sie uns auf WhatsApp
        </p>
        <Button variant="link" asChild>
          <a href={`tel:${siteConfig.tel.value}`}>
            <PhoneCall />
            <span className="ml-3">{siteConfig.tel.label}</span>
          </a>
        </Button>
      </div>
      <div className="flex justify-center">
        <SmallRoundImage />
      </div>
    </main>
  );
}
