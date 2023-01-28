import { ContactForm } from "../components/form";
import { Layout } from "../components/layout";
import { Meta } from "../components/meta";

export default function ContactsPage() {
  return (
    <>
      <Meta
        title="Kotakt: Zmeu Hausbesorger"
        description="Kotakt: Zmeu Hausbesorger"
      />
      <Layout>
        <ContactForm />
      </Layout>
    </>
  );
}
