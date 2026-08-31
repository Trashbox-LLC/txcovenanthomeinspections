"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { JOEL_PORTRAIT } from "@/lib/constants";
import { fadeIn } from "@/lib/motion";

export function MeetJoelSection() {
  return (
    <section className="container-site py-stack-xl">
      <div className="gap-gutter grid grid-cols-1 items-center md:grid-cols-12">
        <FadeIn className="gap-stack-lg order-2 flex flex-col md:order-2 md:col-span-6 md:col-start-7">
          <div className="gap-stack-sm flex flex-col">
            <span className="text-tertiary text-sm font-semibold tracking-widest uppercase">
              Pastor & Home Inspector
            </span>
            <h1 className="font-headline text-primary text-[2rem] leading-10 font-bold md:text-5xl md:leading-14">
              Joel Piercy
            </h1>
          </div>

          <div className="border-outline-variant bg-surface-container-lowest p-stack-md shadow-ambient md:p-stack-lg relative overflow-hidden rounded-xl border">
            <div className="bg-gold absolute top-0 left-0 h-full w-1" />
            <p className="mb-stack-md text-on-surface text-lg leading-7">
              Joel Piercy is a dedicated home inspector and a young adults
              pastor serving the Texas community. He brings a unique perspective
              of integrity and service to every inspection.
            </p>
            <blockquote className="my-stack-md border-outline-variant pl-stack-md text-on-surface-variant border-l-2 text-base italic">
              &ldquo;And whatever you do, in word or deed, do everything in the
              name of the Lord Jesus, giving thanks to God the Father through
              him.&rdquo;
              <footer className="text-on-surface-variant mt-2 text-xs not-italic">
                — Colossians 3:17
              </footer>
            </blockquote>
            <p className="text-on-surface text-base">
              Texas Covenant Home Inspections is committed to serving clients
              with integrity, professionalism, and care. My mission is to
              provide thorough, high-quality home inspections while building
              genuine relationships based on trust.
            </p>
          </div>
        </FadeIn>

        <motion.div
          className="order-1 md:order-1 md:col-span-5 md:col-start-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="border-outline-variant shadow-ambient relative overflow-hidden rounded-xl border">
            <Image
              src={JOEL_PORTRAIT}
              alt="Portrait of Joel Piercy, certified home inspector"
              width={1086}
              height={1448}
              className="aspect-[1086/1448] w-full object-cover"
            />
            <div className="from-primary/80 p-stack-md pt-stack-xl absolute bottom-0 left-0 w-full bg-gradient-to-t to-transparent">
              <div className="text-on-primary flex items-center gap-2">
                <BadgeCheck className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-wider">
                  Certified Inspector
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
