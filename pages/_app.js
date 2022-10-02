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
          chainId={4}
          connectors={{
            walletconnect: {
              rpcUrl:
                "https://eth-rinkeby.alchemyapi.io/v2/KWiWBNgKjB_dcp_bXLKF8HNg7pj_9w8S",
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
