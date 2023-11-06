import type { NextPage } from "next";
import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <div className=" text-white h-screen bg-zinc-900 snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Parkers Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </div>
  );
};

export default Home;
