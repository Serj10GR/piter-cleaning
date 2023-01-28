import { FooterLinks } from "./footer";
import { MainHeader } from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <MainHeader
        links={[
          { link: "/dienstleistungen", label: "Dienstleistungen" },
          { link: "/kontakt", label: "Kontakt" },
        ]}
      />
      {children}
      <FooterLinks
        data={[
          {
            title: "",
            links: [
              { label: "Dienstleistungen", link: "/dienstleistungen" },
              { label: "Kontakt", link: "/kontakt" },
            ],
          },
        ]}
      />
    </main>
  );
};
