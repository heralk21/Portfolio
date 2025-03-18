import React from 'react';
import FinancialLiteracyChart from './FinancialLiteracyChart';
import OnlineBankingPieChart from './OnlineBankingPieChart';
import { motion } from 'framer-motion';

interface SeelieResearchChartsProps {
  promptColor: string;
}

const SeelieResearchCharts = ({ promptColor }: SeelieResearchChartsProps) => {
  return (
    <div className="space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="p-6 rounded-lg border bg-card/30 backdrop-blur-sm"
      >
        <h3 className="text-xl font-semibold mb-3" style={{ color: promptColor }}>
          Financial Literacy Self-Assessment
        </h3>
        <p className="text-muted-foreground mb-6">
          Survey results showing how Gen Z users rate their own financial literacy on a scale of 1-5.
          Most respondents (75%) rated themselves at level 3 or below, indicating a significant opportunity
          for financial education.
        </p>
        <FinancialLiteracyChart color={promptColor} />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="p-6 rounded-lg border bg-card/30 backdrop-blur-sm"
      >
        <h3 className="text-xl font-semibold mb-3" style={{ color: promptColor }}>
          Online Banking Usage Frequency
        </h3>
        <p className="text-muted-foreground mb-6">
          Survey data showing how frequently Gen Z users check their banking apps.
          While 81.3% check 1-3 times weekly, only 13.7% check more frequently, suggesting
          an opportunity to increase engagement through more compelling features.
        </p>
        <OnlineBankingPieChart mainColor={promptColor} />
      </motion.div>
    </div>
  );
};

export default SeelieResearchCharts; 