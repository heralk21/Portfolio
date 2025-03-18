import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

const data = [
  { name: 'Never', value: 5, color: '#4C6FFF' },
  { name: '1-3 times a week', value: 81.3, color: '#FF5C72' },
  { name: '3-8 times a week', value: 8, color: '#FFA94D' },
  { name: '8+ times a week', value: 5.7, color: '#4CAF50' },
];

interface OnlineBankingPieChartProps {
  className?: string;
  mainColor?: string;
}

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        className="filter drop-shadow-md"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 10}
        outerRadius={outerRadius + 14}
        fill={fill}
        opacity={0.3}
      />
      <text 
        x={cx} 
        y={cy - 10} 
        dy={8} 
        textAnchor="middle" 
        fill="#333"
        className="font-medium text-xs"
      >
        {payload.name}
      </text>
      <text 
        x={cx} 
        y={cy + 15} 
        textAnchor="middle" 
        fill="#333"
        className="font-semibold"
      >
        {`${value}%`}
      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip bg-card/90 backdrop-blur-sm p-2 rounded-md border shadow-sm">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-muted-foreground">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const OnlineBankingPieChart = ({ className, mainColor = "#53b948" }: OnlineBankingPieChartProps) => {
  const [activeIndex, setActiveIndex] = useState(1);
  
  // Generate colors based on the main color if provided
  const chartColors = mainColor ? [
    mainColor,
    `${mainColor}CC`, // 80% opacity
    `${mainColor}99`, // 60% opacity
    `${mainColor}66`, // 40% opacity
  ] : data.map(item => item.color);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            onMouseEnter={onPieEnter}
            className="drop-shadow-sm"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={chartColors[index]} 
                stroke="white" 
                strokeWidth={2} 
                className="transition-all duration-300 hover:opacity-90"
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2">
        {data.map((entry, index) => (
          <div 
            key={`legend-${index}`} 
            className="flex items-center gap-2" 
          >
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: chartColors[index] }}
            />
            <span className="text-sm">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineBankingPieChart; 