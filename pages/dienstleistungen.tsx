import { Layout } from "../components/layout";
import { Meta } from "../components/meta";
import { Features } from "../components/services";

export default function ServicesPage() {
  return (
    <>
      <Meta
        title="Dienstleistungen: Zmeu Hausbesorger"
        description="Dienstleistungen: Zmeu Hausbesorger"
      />
      <Layout>
        <Features
          data={[
            {
              image: "/images/feature-1.svg",
              title: "Handwerker",
              description: "Wir sind Handwerker",
            },
            {
              image: "/images/feature-1.svg",
              title: "Handwerker",
              description: "Wir sind Handwerker",
            },
            {
              image: "/images/feature-1.svg",
              title: "Handwerker",
              description: "Wir sind Handwerker",
            },
            {
              image: "/images/feature-1.svg",
              title: "Handwerker",
              description: "Wir sind Handwerker",
            },
            {
              image: "/images/feature-1.svg",
              title: "Handwerker",
              description: "Wir sind Handwerker",
            },
            {
              image: "/images/feature-1.svg",
              title: "Handwerker",
              description: "Wir sind Handwerker",
            },
          ]}
          description="Wir sind Handwerker"
          supTitle="Handwerker"
        />
      </Layout>
    </>
  );
}
