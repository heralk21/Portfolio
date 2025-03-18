import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface UserPersonaCardProps {
  name: string;
  subtitle: string;
  age: string | number;
  location: string;
  occupation: string;
  painPoints: string[];
  goals: string[];
  imageUrl?: string;
  color?: string;
}

const UserPersonaCard = ({ 
  name, 
  subtitle, 
  age, 
  location, 
  occupation, 
  painPoints, 
  goals,
  imageUrl = "/placeholder.svg", 
  color = "#e11d48" 
}: UserPersonaCardProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="p-6 rounded-lg border bg-card/30 backdrop-blur-sm relative overflow-hidden"
      style={{ 
        background: `linear-gradient(to right, rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.05), rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.02))` 
      }}
    >
      <div className="flex flex-col gap-6">
        {/* Header with image and name */}
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full overflow-hidden relative">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold">{name}</h3>
        </div>
        
        {/* Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3">
          <div>
            <p className="font-semibold">Age</p>
            <p className="text-muted-foreground">{age}</p>
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-muted-foreground">{location}</p>
          </div>
          <div>
            <p className="font-semibold">Occupation</p>
            <p className="text-muted-foreground">{occupation}</p>
          </div>
          <div>
            <p className="font-semibold">Context</p>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          <div>
            <h4 className="font-semibold text-lg mb-3">Pain Points:</h4>
            <ul className="space-y-2">
              {painPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 text-lg">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Goals:</h4>
            <ul className="space-y-2">
              {goals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-500 flex-shrink-0 text-lg">•</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HeartRiskPersonas = ({ promptColor = "#e11d48" }: { promptColor?: string }) => {
  return (
    <div className="space-y-8 mt-6">
      <UserPersonaCard
        name="Robert Chen"
        subtitle="Family Health Concerns"
        age={42}
        location="Seattle, WA"
        occupation="Software Engineer"
        painPoints={[
          "Family history of heart disease but unclear about his own personal risk.",
          "Busy work schedule makes regular health check-ups difficult to schedule.",
          "Finds medical terminology confusing and intimidating.",
          "Worried about his health but unsure which lifestyle changes would have the most impact."
        ]}
        goals={[
          "Understand his personal cardiac risk factors based on family history and lifestyle.",
          "Receive clear, actionable recommendations that fit into his busy schedule.",
          "Track progress over time to see if lifestyle changes are making a difference."
        ]}
        imageUrl="/heart-risk/persona1.jpg"
        color={promptColor}
      />
      
      <UserPersonaCard
        name="Maria Sanchez"
        subtitle="Preventative Health Focus"
        age={35}
        location="Chicago, IL"
        occupation="Elementary School Teacher"
        painPoints={[
          "Concerned about borderline high blood pressure at recent check-up.",
          "Confused by conflicting health information online.",
          "Wants to prevent health issues but doesn't know which factors to prioritize.",
          "Limited budget for expensive health monitoring devices."
        ]}
        goals={[
          "Get personalized guidance on which health metrics to focus on improving.",
          "Understand the relationship between different risk factors.",
          "Find affordable, evidence-based ways to monitor her heart health."
        ]}
        imageUrl="/heart-risk/persona2.jpg"
        color={promptColor}
      />
    </div>
  );
};

export default HeartRiskPersonas; 