import { SERVICES } from "@/config/services";
import { makeUrlFromServiceName } from "@/lib/utils";

export default function Page({ params }: { params: { service: string } }) {
  const serviceNameParam = decodeURIComponent(params.service);
  return <div>Service: {serviceNameParam}</div>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: makeUrlFromServiceName(service.name),
  }));
}
