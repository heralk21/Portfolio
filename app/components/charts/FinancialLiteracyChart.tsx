import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { cn } from '@/lib/utils';

const data = [
  { level: 1, percentage: 6.3, label: "Don't know anything" },
  { level: 2, percentage: 25 },
  { level: 3, percentage: 50 },
  { level: 4, percentage: 18.8 },
  { level: 5, percentage: 0, label: "Absolute expert" },
];

interface FinancialLiteracyChartProps {
  className?: string;
  color?: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const item = data.find(d => d.level === label);
    
    return (
      <div className="chart-tooltip bg-card/90 backdrop-blur-sm p-2 rounded-md border shadow-sm">
        <p className="font-medium">Level {label}</p>
        <p className="text-muted-foreground">{`${payload[0].value}%`}</p>
        {item?.label && <p className="text-xs mt-1 italic">{item.label}</p>}
      </div>
    );
  }
  return null;
};

const FinancialLiteracyChart = ({ className, color = "#7E5BEF" }: FinancialLiteracyChartProps) => {
  const [activeBar, setActiveBar] = useState<number | null>(null);

  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="level" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            domain={[0, 60]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
          <Bar 
            dataKey="percentage" 
            radius={[4, 4, 0, 0]}
            className="transition-all duration-300"
            onMouseOver={(data) => setActiveBar(data.level)}
            onMouseLeave={() => setActiveBar(null)}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                fill={color}
                fillOpacity={activeBar === entry.level ? 1 : 0.8}
                className="filter drop-shadow-sm"
                style={{
                  transition: 'fill-opacity 300ms',
                }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      <div className="flex justify-between px-6 text-sm text-muted-foreground">
        <div className="text-left">{data[0].label || "Very Low"}</div>
        <div className="text-right">{data[data.length - 1].label || "Very High"}</div>
      </div>
    </div>
  );
};

export default FinancialLiteracyChart; 