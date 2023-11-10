"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeader from "@/components/SectionHeader";
import Skill from "@/components/Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      // viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 m-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <SectionHeader title="Skills" />

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
