import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface UserPersonaCardProps {
  name: string;
  subtitle: string;
  age: string | number;
  location: string;
  occupation?: string;
  painPoints: string[];
  solutions: string[];
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
  solutions,
  imageUrl = "/placeholder.svg", 
  color = "#FA5C5C" 
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3">
          <div>
            <p className="font-semibold">Age</p>
            <p className="text-muted-foreground">{age}</p>
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-muted-foreground">{location}</p>
          </div>
          {occupation && (
            <div>
              <p className="font-semibold">Occupation</p>
              <p className="text-muted-foreground">{occupation}</p>
            </div>
          )}
          <div className={occupation ? "md:col-span-3" : "md:col-span-1"}>
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
            <h4 className="font-semibold text-lg mb-3">How Melo Helps:</h4>
            <ul className="space-y-2">
              {solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-500 flex-shrink-0 text-lg">•</span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MeloPersonas = ({ promptColor = "#FA5C5C" }: { promptColor?: string }) => {
  return (
    <div className="space-y-8 mt-6">
      <UserPersonaCard
        name="Emily Carter"
        subtitle="Eco-Conscious Young Professional"
        age={27}
        location="New York"
        painPoints={[
          "Struggles with forgetting expiry dates.",
          "Wants budget-friendly and sustainable meal planning."
        ]}
        solutions={[
          "Expiry reminders & AI recipe suggestions prevent waste.",
          "Smart shopping lists help her buy just enough food."
        ]}
        imageUrl="/melo/melo-persona1.jpg"
        color={promptColor}
      />
      
      <UserPersonaCard
        name="Daniel Reyes"
        subtitle="College Student on a Budget"
        age={21}
        location="Toronto"
        painPoints={[
          "Buys in bulk but forgets what's in his fridge.",
          "Wants quick, easy meals with what he already has."
        ]}
        solutions={[
          "Food tracking & alerts remind him to use ingredients before they expire.",
          "AI suggests leftover-friendly meals based on his pantry."
        ]}
        imageUrl="/melo/melo-persona2.jpg"
        color={promptColor}
      />
    </div>
  );
};

export default MeloPersonas; 