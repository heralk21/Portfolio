"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { ShineBorder } from "./shine-border";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  year: string;
  company: string;
  content: React.ReactNode;
  image1: string;
  image2: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []); // Updated dependency

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-rose-100 to-teal-100 border border-rose-200" />
              </div>
              <div className="hidden md:block pl-20">
                <h3 className="font-medium text-4xl gradient-text">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground">{item.year}</p>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden mb-4 text-left">
                <h3 className="font-medium text-2xl gradient-text">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.year}</p>
              </div>
              <ShineBorder
                borderRadius={12}
                borderWidth={2}
                color={["#f43f5e", "#14b8a6"]}
                className="w-full bg-gradient-to-br from-rose-50 to-teal-50 p-6 dark:from-rose-600/50 dark:to-blue-800/50"
              >
                <div className="p-6">
                  <div className="font-semibold text-muted-foreground">
                    {item.company}
                  </div>
                  <div className="mt-2 text-muted-foreground">
                    {item.content}
                  </div>
                </div>
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                  {item.image1 && (
                    <Image
                      src={item.image1}
                      alt={`${item.title} - Image 1`}
                      width={100}
                      height={100}
                      className="rounded-lg object-cover w-full sm:h-60 lg:h-80"
                    />
                  )}
                  {item.image2 && (
                    <Image
                      src={item.image2}
                      alt={`${item.title} - Image 2`}
                      width={100}
                      height={100}
                      className="rounded-lg object-cover w-full sm:h-60 lg:h-80"
                    />
                  )}
                </div>
              </ShineBorder>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-rose-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-rose-500 via-blue-500 to-transparent from-[0%] via-[60%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
