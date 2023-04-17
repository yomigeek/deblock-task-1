import install from "@twind/with-next/app";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import { config } from "../twind.config";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { pathname, asPath } = router;

  useEffect(() => {
    if (!window || !localStorage) return;

    const userSelectedCountry = localStorage.getItem("userPreferredCountry");

    if (userSelectedCountry) {
      router.push(pathname, asPath, { locale: userSelectedCountry });
    }
  }, [router.locale]);

  return <Component {...pageProps} />;
};

export default install(config, appWithTranslation(App));
