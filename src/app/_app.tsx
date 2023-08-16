import { ChakraProvider } from "@chakra-ui/react";

interface Props {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
