"use client"

import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type React from "react"

interface TimelineEntry {
  title: string
  year: string
  company: string
  content: React.ReactNode
  image1: string
  image2: string
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  return (
    <div ref={containerRef} className="relative min-h-[500px] py-10">
      <div className="absolute left-8 top-0 bottom-0 w-[2px] md:left-1/2">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted to-transparent opacity-20" />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-rose-500 via-teal-500 to-transparent origin-top"
        />
      </div>

      <div className="relative">
        {data.map((item, idx) => (
          <TimelineItem key={idx} item={item} index={idx} />
        ))}
      </div>
    </div>
  )
}

const TimelineItem = ({ item, index }: { item: TimelineEntry; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={itemRef} className="group mb-32 last:mb-0">
      <div
        className={cn(
          "grid grid-cols-1 gap-4 md:grid-cols-2",
          index % 2 === 0 ? "md:[--align:end]" : "md:[--align:start]",
        )}
        style={{
          textAlign: "var(--align)" as TextAlign,
        }}
      >
        <motion.div
          className={cn("relative col-span-1", index % 2 === 0 ? "md:col-start-1" : "md:col-start-2")}
          style={{ opacity, y }}
        >
          <div className="relative space-y-4 rounded-2xl border bg-gradient-to-br from-rose-50 to-teal-50 p-6 shadow-lg transition-colors dark:from-rose-600/50 dark:to-blue-800/50">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-2xl gradient-text">{item.title}</h3>
              <p className="font-medium text-muted-foreground">{item.company}</p>
              <span className="block text-sm text-muted-foreground md:hidden">{item.year}</span>
            </div> 
            <div className="grid grid-cols-2 gap-4 mt-4">
            {item.image1 && (
              <Image
                src={item.image1}
                alt={`${item.title} - Image 1`}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-40"
              />
            )}
            {item.image2 && (
              <Image
                src={item.image2}
                alt={`${item.title} - Image 2`}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-40"
              />
            )}
          </div>
          </div>
        </motion.div>

        <div
          className={cn(
            "relative col-span-1 flex md:px-4",
            index % 2 === 0 ? "md:col-start-2 md:justify-start" : "md:col-start-1 md:justify-end",
          )}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: index * 0.1,
            }}
            className="relative h-16 w-16 rounded-full bg-background shadow-lg flex items-center justify-center"
          >
            <span className="font-medium text-xl gradient-text">{item.year.split(" ")[0]}</span>
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="absolute inset-0 rounded-full border-2 border-rose-200 dark:border-rose-800"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

