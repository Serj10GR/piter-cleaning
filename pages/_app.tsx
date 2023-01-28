import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
