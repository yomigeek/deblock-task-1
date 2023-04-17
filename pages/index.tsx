import Image from "next/image";
import { useRouter } from "next/router";
import Header from "@components/navigation/Header";
import AccountTypes from "@modules/AccountTypes";
import TheWhys from "@modules/TheWhys";

import HeroImage from "public/images/jpegs/hero.jpeg";
import Head from "next/head";

export default function Home() {
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
          <TheWhys />
          <AccountTypes />
        </main>
      </div>
    </>
  );
}
