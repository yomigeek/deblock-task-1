import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "@components/navigation/Header";
import ThreeCardsBlock from "@modules/ThreeCardsBlock";
import Head from "next/head";

const Contact = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("contact");

  return (
    <>
      <Head>
        <title>DeBlock - Contact</title>
      </Head>
      <div className="max-w-[960px] my-0 mx-auto p-8">
        <Header />
        <main>
          <ThreeCardsBlock title={t("title")} />
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "contact",
      "common",
      "navigation",
    ])),
    fallback: false,
  },
});

export default Contact;
