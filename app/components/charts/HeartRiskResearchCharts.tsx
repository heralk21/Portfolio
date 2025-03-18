import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Sector } from 'recharts';
import { motion } from 'framer-motion';

interface HeartRiskResearchChartsProps {
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

// Custom tooltip for the pie chart
const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border rounded-md shadow-sm">
        <p className="text-sm font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const HeartRiskResearchCharts = ({ promptColor }: HeartRiskResearchChartsProps) => {
  // Data for awareness of heart disease risk factors
  const awarenessData = [
    { factor: "Blood Pressure", awareness: 78 },
    { factor: "Cholesterol", awareness: 65 },
    { factor: "Family History", awareness: 54 },
    { factor: "Exercise", awareness: 82 },
    { factor: "Diet", awareness: 76 },
    { factor: "Stress", awareness: 48 },
  ];
  
  // Data for primary concerns about heart health
  const concernsData = [
    { name: "Early Detection", value: 42 },
    { name: "Prevention", value: 28 },
    { name: "Treatment Options", value: 14 },
    { name: "Understanding Risk", value: 16 },
  ];
  
  // Colors for the pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  return (
    <div className="space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="p-6 rounded-lg border bg-card/30 backdrop-blur-sm"
      >
        <h3 className="text-xl font-semibold mb-3" style={{ color: promptColor }}>
          Awareness of Heart Disease Risk Factors
        </h3>
        <p className="text-muted-foreground mb-6">
          Survey results showing public awareness of various heart disease risk factors.
          While exercise and blood pressure are well understood, stress and family history
          show lower awareness levels, indicating areas for education.
        </p>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={awarenessData}
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="factor" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={70}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomBarTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
            <Bar 
              dataKey="awareness" 
              radius={[4, 4, 0, 0]}
              className="transition-all duration-300"
            >
              {awarenessData.map((entry, index) => (
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
          Primary Health Concerns
        </h3>
        <p className="text-muted-foreground mb-6">
          Survey data showing what aspects of heart health concern people most.
          Early detection is the top concern (42%), followed by prevention methods (28%),
          highlighting the need for accessible screening tools.
        </p>
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={concernsData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {concernsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomPieTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default HeartRiskResearchCharts; 