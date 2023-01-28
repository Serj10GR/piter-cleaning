import Head from "next/head";
import { HeroComponent } from "../components/hero";
import { Layout } from "../components/layout";
import { Meta } from "../components/meta";

export default function Home() {
  return (
    <>
      <Meta title="Zmeu hausbesorger" description="Zmeu hausbesorger" />
      <Layout>
        <HeroComponent />
      </Layout>
    </>
  );
}
