import Head from "next/head";
import { Layout } from "../components/layout";

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Kotakt: Zmeu Hausbesorger</title>
        <meta name="description" content="Handwerker Zmeu Petru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>Contact form here</Layout>
    </>
  );
}
