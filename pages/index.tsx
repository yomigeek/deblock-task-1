import Image from "next/image";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "@components/navigation/Header";
import ThreeCardsBlock from "@modules/ThreeCardsBlock";

import HeroImage from "public/images/jpegs/hero.jpeg";
import Head from "next/head";

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("home");

  return (
    <>
      <Head>
        <title>DeBlock Task 1</title>
      </Head>
      <div className="max-w-[960px] my-0 mx-auto p-8">
        <Header />
        <main>
          <div>
            <Image alt="hero-image" src={HeroImage} className="rounded-lg" />
          </div>
          <ThreeCardsBlock title={t("title")} />
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["home", "common", "navigation"])),
  },
});

export default Home;
