import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const CompetitiveAnalysisTableTamago = ({ promptColor = "#FFA631" }: { promptColor?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Define competitors and features for comparison
  const competitors = [
    { name: "TamaGo", logo: "/placeholder.svg" },
    { name: "Instagram", logo: "/placeholder.svg" },
    { name: "TikTok", logo: "/placeholder.svg" },
    { name: "Eventbrite", logo: "/placeholder.svg" },
  ];

  const features = [
    { id: 1, name: "Algorithm-Free Local Discovery", scores: [1, 0, 0, 1] },
    { id: 2, name: "Interactive Real-World Engagement", scores: [1, 0, 0, 0] },
    { id: 3, name: "Community Building for Niche Artists", scores: [1, 0, 0, 0] },
    { id: 4, name: "Immersive Storytelling", scores: [1, 1, 1, 0] },
    { id: 5, name: "Artist-Centric Features", scores: [1, 0, 0, 0] },
    { id: 6, name: "Geotagged Promotions", scores: [1, 0, 0, 1] },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="overflow-x-auto"
    >
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-muted/30">
            <th className="p-3 text-center font-medium border-b border-r">#</th>
            <th className="p-3 text-left font-medium border-b border-r min-w-[200px]">Features</th>
            {competitors.map((competitor, index) => (
              <th key={index} className="p-3 text-center font-medium border-b border-r">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-full">
                    <span className="text-sm font-bold">{competitor.name.charAt(0)}</span>
                  </div>
                  <span className="text-sm">{competitor.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.id} className="even:bg-muted/5">
              <td className="p-3 border-b border-r text-center">{feature.id}</td>
              <td className="p-3 border-b border-r">{feature.name}</td>
              {feature.scores.map((score, index) => (
                <td key={index} className="p-3 border-b border-r text-center">
                  {score === 1 ? (
                    <div className="inline-flex items-center justify-center">
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: promptColor }}
                      />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center">
                      <span className="w-4 h-4 rounded-full border border-gray-300" />
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

const TamagoCompetitiveAnalysis = ({ promptColor = "#FFA631" }: { promptColor?: string }) => {
  useEffect(() => {
    console.log("TamagoCompetitiveAnalysis component mounted");
  }, []);

  return (
    <div className="space-y-8">
      <div className="p-4 bg-yellow-900/20 mb-4 border border-yellow-600 rounded-lg">
        <p className="text-yellow-400 font-bold">TamagoCompetitiveAnalysis Component Loaded</p>
      </div>

      <p className="text-muted-foreground mb-4">
        Our competitive analysis revealed that while existing platforms excel in their specific domains, none offer a comprehensive approach to connecting audiences with local art through interactive, real-world experiences.
      </p>
      <CompetitiveAnalysisTableTamago promptColor={promptColor} />
    </div>
  );
};

export default TamagoCompetitiveAnalysis;