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
  color = "#0891b2" 
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

const RecoverEasePersonas = ({ promptColor = "#0891b2" }: { promptColor?: string }) => {
  return (
    <div className="space-y-8 mt-6">
      <UserPersonaCard
        name="Thomas Wilson"
        subtitle="Post-Knee Replacement"
        age={58}
        location="Austin, TX"
        occupation="High School Coach"
        painPoints={[
          "Struggles to remember complex rehabilitation exercise sequences.",
          "Uncertain if he's performing exercises correctly without supervision.",
          "Difficulty tracking progress and knowing if he's on the right path.",
          "Feels isolated during the recovery process with limited clinic visits."
        ]}
        goals={[
          "Have clear, visual instructions for rehabilitation exercises.",
          "Receive confirmation that exercises are being performed correctly.",
          "Track recovery progress and celebrate milestones.",
          "Maintain connection with healthcare providers between appointments."
        ]}
        imageUrl="/recover-ease/persona1.jpg"
        color={promptColor}
      />
      
      <UserPersonaCard
        name="Aisha Johnson"
        subtitle="Shoulder Surgery Recovery"
        age={32}
        location="Portland, OR"
        occupation="Graphic Designer"
        painPoints={[
          "Works remotely and can't easily attend multiple in-person PT sessions.",
          "Anxiety about potential setbacks during the recovery process.",
          "Struggles with motivation to complete exercises consistently.",
          "Difficulty interpreting whether pain is normal or concerning."
        ]}
        goals={[
          "Access a flexible rehabilitation program that fits her work schedule.",
          "Understand what to expect at each recovery stage.",
          "Establish a consistent exercise routine with reminders.",
          "Have clear guidance on when to seek medical attention."
        ]}
        imageUrl="/recover-ease/persona2.jpg"
        color={promptColor}
      />
    </div>
  );
};

export default RecoverEasePersonas; 