import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line, Legend } from 'recharts';
import { motion } from 'framer-motion';

interface RecoverEaseResearchChartsProps {
  promptColor: string;
}

// Custom tooltip for the bar chart
const CustomBarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border rounded-md shadow-sm">
        <p className="text-sm font-medium">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

// Custom tooltip for the line chart
const CustomLineTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border rounded-md shadow-sm">
        <p className="text-sm font-medium">{`Week ${label}`}</p>
        <p className="text-xs" style={{ color: payload[0].color }}>{`Standard: ${payload[0].value}%`}</p>
        <p className="text-xs" style={{ color: payload[1].color }}>{`With App: ${payload[1].value}%`}</p>
      </div>
    );
  }
  return null;
};

const RecoverEaseResearchCharts = ({ promptColor }: RecoverEaseResearchChartsProps) => {
  // Data for recovery challenges
  const challengesData = [
    { challenge: "Following Exercises", percentage: 68 },
    { challenge: "Pain Management", percentage: 54 },
    { challenge: "Understanding Progress", percentage: 62 },
    { challenge: "Communicating with Doctors", percentage: 42 },
    { challenge: "Motivation", percentage: 71 },
  ];
  
  // Data for rehab adherence over time
  const adherenceData = [
    { week: 1, standard: 92, withApp: 94 },
    { week: 2, standard: 78, withApp: 92 },
    { week: 3, standard: 65, withApp: 88 },
    { week: 4, standard: 58, withApp: 86 },
    { week: 6, standard: 45, withApp: 83 },
    { week: 8, standard: 38, withApp: 79 },
  ];
  
  return (
    <div className="space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="p-6 rounded-lg border bg-card/30 backdrop-blur-sm"
      >
        <h3 className="text-xl font-semibold mb-3" style={{ color: promptColor }}>
          Post-Surgery Recovery Challenges
        </h3>
        <p className="text-muted-foreground mb-6">
          Survey results showing the most common challenges patients face during post-surgical recovery.
          Maintaining motivation (71%) and following prescribed exercises (68%) are the top challenges,
          indicating the need for better guidance and encouragement tools.
        </p>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={challengesData}
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            layout="vertical"
          >
            <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis 
              dataKey="challenge"
              type="category"
              axisLine={false}
              tickLine={false}
              width={150}
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomBarTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
            <Bar 
              dataKey="percentage" 
              radius={[0, 4, 4, 0]}
              className="transition-all duration-300"
            >
              {challengesData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={promptColor}
                  fillOpacity={0.8}
                  className="filter drop-shadow-sm"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="p-6 rounded-lg border bg-card/30 backdrop-blur-sm"
      >
        <h3 className="text-xl font-semibold mb-3" style={{ color: promptColor }}>
          Exercise Adherence Over Time
        </h3>
        <p className="text-muted-foreground mb-6">
          Comparison of rehabilitation exercise adherence between standard care and patients using RecoverEase.
          While standard care shows a sharp decline after the first few weeks, RecoverEase users maintain
          significantly higher adherence throughout the recovery period.
        </p>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart
            data={adherenceData}
            margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="week" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              label={{ value: 'Weeks Post-Surgery', position: 'insideBottom', offset: -15 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
              label={{ value: 'Adherence Rate', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomLineTooltip />} />
            <Legend verticalAlign="top" height={36} />
            <Line 
              type="monotone" 
              dataKey="standard" 
              name="Standard Care" 
              stroke="#8884d8" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="withApp" 
              name="With RecoverEase" 
              stroke={promptColor} 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default RecoverEaseResearchCharts; 