"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Compare } from "@/components/ui/compare";

export interface CaseStudy {
  title: string;
  description: string;
  image: string;
  challenge: string;
  challengeImage: string;
  solution: string;
  solutionImage: string;
  result: string;
  resultImage: string;
  researchImage1: string;
  researchImage2: string;
  researchDescription: string;
  beforeImage: string;
  afterImage: string;
  tags: string[];
  link?: string;
}

export function CaseStudyList({ cases }: { cases: CaseStudy[] }) {
  const [active, setActive] = useState<CaseStudy | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {active ? (
          <motion.div
            className="fixed inset-0 grid place-items-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.button
              key={`button-${active.title}-${id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-background rounded-full h-8 w-8 border"
              onClick={() => setActive(null)}
            >
              <X className="h-4 w-4" />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full max-w-4xl h-full md:h-fit md:max-h-[90vh] flex flex-col bg-background border rounded-2xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={800}
                  height={400}
                  src={active.image || "/placeholder.svg"}
                  alt={active.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </motion.div>

              <div className="overflow-auto p-6">
                <div className="flex flex-col gap-8">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-2xl sm:text-3xl gradient-text"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-muted-foreground"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
                  >
                    <div className="rounded-lg border bg-card/50 p-4 backdrop-blur-sm flex flex-col gap-4">
                      <h4 className="font-medium text-xl text-rose-600">
                        The Challenge
                      </h4>
                      {active.challengeImage && (
                        <Image
                          src={active.challengeImage || "/placeholder.svg"}
                          alt="Challenge"
                          width={300}
                          height={200}
                          className="rounded-lg object-cover w-full h-50"
                        />
                      )}
                      <p className="text-sm text-muted-foreground">
                        {active.challenge}
                      </p>
                    </div>

                    {active.solution && (
                      <div className="rounded-lg border bg-card/50 p-4 backdrop-blur-sm flex flex-col gap-4">
                        <h4 className="font-medium text-xl text-teal-600">
                          The Solution
                        </h4>
                        {active.solutionImage && (
                          <Image
                            src={active.solutionImage || "/placeholder.svg"}
                            alt="Solution"
                            width={300}
                            height={200}
                            className="rounded-lg object-cover w-full h-40"
                          />
                        )}
                        <p className="text-sm text-muted-foreground">
                          {active.solution}
                        </p>
                      </div>
                    )}

                    {active.result && (
                      <div className="rounded-lg border bg-card/50 p-4 backdrop-blur-sm sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
                        <h4 className="font-medium text-xl gradient-text">
                          The Result
                        </h4>
                        {active.resultImage && (
                          <Image
                            src={active.resultImage || "/placeholder.svg"}
                            alt="Result"
                            width={300}
                            height={200}
                            className="rounded-lg object-cover w-full h-50"
                          />
                        )}
                        <p className="text-sm text-muted-foreground">
                          {active.result}
                        </p>
                      </div>
                    )}
                  </motion.div>

                  {active.researchDescription && (
                    <div>
                      <h4 className="font-medium text-xl text-teal-600">
                        UX Research
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Image
                          src={active.researchImage1 || "/placeholder.svg"}
                          alt="Solution"
                          width={300}
                          height={300}
                          className="rounded-lg object-cover w-full h-50"
                        />
                        <Image
                          src={active.researchImage2 || "/placeholder.svg"}
                          alt="Result"
                          width={300}
                          height={300}
                          className="rounded-lg object-cover w-full h-50"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground pt-4">
                        {active.researchDescription}
                      </p>
                    </div>
                  )}

                  {active.beforeImage && (
                    <div className="flex justify-center">
                      <Compare
                        firstImage={active.beforeImage || "/placeholder.svg"}
                        secondImage={active.afterImage || "/placeholder.svg"}
                        className="w-full max-w-2xl h-[300px] rounded-lg"
                      />
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-rose-100 to-teal-100 text-rose-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {active.link && (
                    <motion.a
                      layoutId={`link-${active.title}-${id}`}
                      href={active.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start px-6 py-2 text-sm rounded-full font-medium bg-gradient-to-r from-rose-500 to-teal-500 text-white hover:from-rose-600 hover:to-teal-600"
                    >
                      View Project
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <ul className="grid gap-4 md:grid-cols-2">
        {cases.map((caseStudy, index) => (
          <motion.div
            layoutId={`card-${caseStudy.title}-${id}`}
            key={caseStudy.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            onClick={() => setActive(caseStudy)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-rose-200 dark:border-rose-800"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${caseStudy.title}-${id}`}>
                <Image
                  width={400}
                  height={300}
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${caseStudy.title}-${id}`}
                  className="font-medium text-xl gradient-text text-center md:text-left"
                >
                  {caseStudy.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${caseStudy.description}-${id}`}
                  className="text-sm text-muted-foreground text-center md:text-left"
                >
                  {caseStudy.description}
                </motion.p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-center">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full bg-gray-200 dark:bg-white dark:bg-white-300/0 text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
