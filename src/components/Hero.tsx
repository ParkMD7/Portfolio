"use client";

import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import ImageComponent from "@/components/Image";
import BackgroundCircles from "@/components/BackgroundCircles";

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: ["Software Engineer", "Technologist", "Volunteer"],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <ImageComponent
        src="/portfolio.png"
        className="relative rounded-full w-32 h-32 mx-auto object-cover object-center"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Parker Dinsmore
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">
            {text}
            <Cursor cursorColor="#F7AB0A" />
          </span>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
