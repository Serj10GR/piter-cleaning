import { RoundImage } from "@/components/roundImage";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/config/services";
import { makeUrlFromServiceName } from "@/lib/utils";
import { Pages } from "@/types/pages";
import Link from "next/link";
import { Fragment } from "react";

export default function Page({ params }: { params: { service: string } }) {
  const serviceLinkParam = decodeURIComponent(params.service);

  const service = SERVICES.find((s) => s.link === serviceLinkParam);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <RoundImage src="/service_1.jpg" isPlp />
        <div>
          <h1 className="text-[32px] mb-10">{service?.name}</h1>
          <p className="mb-5">
            Möchten Sie weitere Informationen zu diesem Service?
          </p>
          <Button asChild>
            <Link href={Pages.contact()}>Kontaktiere uns</Link>
          </Button>
        </div>
      </div>
      <section className="my-20 px-[200px]">
        {service?.included.map((item) => {
          if (item.subItems) {
            return (
              <Fragment key={item.name}>
                <div className="font-bold mt-5">{item.name}:</div>
                <ul>
                  {item.subItems?.map((subItem) => (
                    <li className="px-8" key={subItem}>
                      &#8226; {subItem}
                    </li>
                  ))}
                </ul>
              </Fragment>
            );
          }

          return <div key={item.name}> &#8226; {item.name}</div>;
        })}
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: makeUrlFromServiceName(service.name),
  }));
}
