import Head from "next/head";
import { Layout } from "../components/layout";
import { Features } from "../components/services";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Dienstleistungen: Zmeu Hausbesorger</title>
        <meta name="description" content="Handwerker Zmeu Petru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
