import { ChakraProvider } from "@chakra-ui/react";
import MyHeader from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MyHeader />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
