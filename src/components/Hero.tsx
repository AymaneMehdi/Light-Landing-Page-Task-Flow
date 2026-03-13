"use client";
import cylinederImage from "@/assets/cylinder.png";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 1.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mt-6">
              All in One Dashboard
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Manage projects, assign tasks, and monitor progress from a single
              powerful workspace designed for modern teams.
            </p>
            <div className="flex gap-2 items-center mt-[30px]">
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get started for free
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[668px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinederImage.src}
              width={220}
              height={220}
              alt="Cylinder"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{ translateY: translateY }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              height={220}
              alt="Noodle"
              className="absolute top-[524px] left-[448px] hidden lg:block rotate-[30deg]"
              style={{ translateY: translateY, rotate: 30 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
