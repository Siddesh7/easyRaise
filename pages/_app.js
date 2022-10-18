import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { UseWalletProvider } from "use-wallet";
import NavBar from "../components/Navbar";

import "@fontsource/space-grotesk";

const theme = extendTheme({
  fonts: {
    heading: "Space Grotesk",
    body: "Space Grotesk",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <ChakraProvider theme={theme}>
        <UseWalletProvider
          chainId={5}
          connectors={{
            walletconnect: {
              rpcUrl:
                "https://eth-goerli.g.alchemy.com/v2/j9X6tG_LSvuHpCTehf-jLyPPoRmpyTKU",
            },
          }}
        >
          <NavBar />
          <Component {...pageProps} />
        </UseWalletProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
