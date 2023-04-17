import Header from "@components/navigation/Header";
import TheWhys from "@modules/TheWhys";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>DeBlock Task 1</title>
      </Head>
      <div className="max-w-[960px] my-0 mx-auto p-8">
        <Header />
        <main>
          <div className="text-center my-5 text-[15px] tablet:text-[25px]">
            Contact Us
          </div>
          <TheWhys />
        </main>
      </div>
    </>
  );
};

export default Home;
