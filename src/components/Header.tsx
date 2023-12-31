"use client";
import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = ({}: Props) => {
  // header element for the SEO benefitd
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-99 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.youtube.com"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-grey-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-grey-400">
            email me
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
