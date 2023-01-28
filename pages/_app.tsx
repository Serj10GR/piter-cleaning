import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-9S2MVSGW4W"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9S2MVSGW4W', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          colors: {
            brand: ["#80C936", "0C3D33"],
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
