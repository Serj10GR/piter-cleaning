import Head from "next/head";
import { HeroComponent } from "../components/hero";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zmeu Hausbesorger</title>
        <meta name="description" content="Handwerker Zmeu Petru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroComponent />
      </Layout>
    </>
  );
}
