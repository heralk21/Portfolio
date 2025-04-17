import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const CompetitiveAnalysisTable = ({ promptColor = "#53b948" }: { promptColor?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Define competitors and features for comparison
  const competitors = [
    { name: "Seelie", logo: "/competitive-analysis/seelie-logo.png" },
    { name: "Mint", logo: "/competitive-analysis/mint-competitive-analy-seelie.jpg" },
    { name: "YNAB", logo: "/competitive-analysis/ynab-competitive-analy-seelie.png" },
    { name: "PocketGuard", logo: "/competitive-analysis/pocketguard-competitive-analy-seelie.jpg" },
  ];
  
  const features = [
    { id: 1, name: "AI-Driven Finance Assistance", scores: [1, 0, 0, 0] },
    { id: 2, name: "Bill Payment Reminders", scores: [1, 1, 0, 1] },
    { id: 3, name: "Personalized Budgeting", scores: [1, 1, 1, 1] },
    { id: 4, name: "Banking Education", scores: [1, 0, 0, 0] },
    { id: 5, name: "Subscription Tracking", scores: [1, 0, 0, 1] },
    { id: 6, name: "Smart Spending Insights", scores: [1, 1, 1, 1] },
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
                  <div className="w-10 h-10 relative">
                    <Image 
                      src={competitor.logo} 
                      alt={competitor.name} 
                      width={40} 
                      height={40} 
                      className="object-contain"
                    />
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

const SeelieCompetitiveAnalysis = ({ promptColor = "#53b948" }: { promptColor?: string }) => {
  return (
    <div className="space-y-8">
      <CompetitiveAnalysisTable promptColor={promptColor} />
    </div>
  );
};

export default SeelieCompetitiveAnalysis; 