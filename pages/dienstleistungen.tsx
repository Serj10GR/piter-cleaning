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
              title: "REINIGUNG UND PFLEGE VON INNEN UND AUSSEN BEREICH",
              description: "Wir sind Handwerker",
            },
            {
              image: "/images/feature-1.svg",
              title: "HAUSTECHNIK TÄTIGKEITEN UND KONTROLLEN",
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
          supTitle="Hausbesorger"
        />
      </Layout>
    </>
  );
}
