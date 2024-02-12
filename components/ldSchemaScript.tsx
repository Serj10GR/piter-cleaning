import Script from "next/script";
import { LocalBusiness } from "schema-dts";

const schema: LocalBusiness = {
  "@type": "LocalBusiness",
  brand: "Zmeu Hausbesorger",
  description: "Hausbesorger",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.076668,
    longitude: 15.421371,
  },
  founder: "Petru Zmeu",
  priceRange: "$$",
  telephone: "+4367762853634",
  openingHours: "Mo-Su",
  url: "https://zmeuhausbesorger.at/",
  email: "service@hausbesorger.net",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 47.076668,
      longitude: 15.421371,
    },
    geoRadius: 210000,
  },
};

export const LDSchemaScript = () => (
  <Script
    id="app-ld-json"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": schema,
      }),
    }}
  />
);
