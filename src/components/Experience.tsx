"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <SectionHeader title="Experience" />
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
