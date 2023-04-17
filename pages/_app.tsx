import install from "@twind/with-next/app";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import { config } from "../twind.config";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default install(config, appWithTranslation(App));
