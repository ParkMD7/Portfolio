import type { NextPage } from "next";
import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

const Home: NextPage = () => {
  return (
    <div className=" text-white h-screen bg-zinc-900 snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Parkers Portfolio</title>
      </Head>

      <Header />

      {/* Hero Section */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Work Exp Section */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills Section */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Projects Section */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
