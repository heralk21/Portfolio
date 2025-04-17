import React, { useEffect } from 'react';
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
  color = "#FFA631",
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

const TamagoPersonas = ({ promptColor = "#FFA631" }: { promptColor?: string }) => {
  useEffect(() => {
    console.log("TamagoPersonas component mounted");
  }, []);

  return (
    <div className="space-y-8 mt-6">
      <div className="p-4 bg-yellow-900/20 mb-4 border border-yellow-600 rounded-lg">
        <p className="text-yellow-400 font-bold">TamagoPersonas Component Loaded</p>
      </div>

      {/* Persona for a Local Artist */}
      <UserPersonaCard
        name="Lila Rivera"
        subtitle="Local Visual Artist"
        age={28}
        location="Vancouver, Canada"
        occupation="Painter & Muralist"
        painPoints={[
          "Struggles with digital algorithms that overshadow niche art.",
          "Finds it hard to connect with a local audience.",
          "Limited opportunities for live, interactive feedback.",
          "Overwhelmed by mass-market platforms."
        ]}
        goals={[
          "Build a local following without algorithm bias.",
          "Engage directly with art enthusiasts in real-world settings.",
          "Receive live feedback during interactive events.",
          "Create a community that appreciates niche art."
        ]}
        imageUrl="/placeholder.svg"
        color={promptColor}
      />

      {/* Persona for an Art Enthusiast */}
      <UserPersonaCard
        name="Marcus Lee"
        subtitle="Art Enthusiast & Community Organizer"
        age={26}
        location="Calgary, Canada"
        occupation="Event Coordinator"
        painPoints={[
          "Passively scrolls through digital art feeds.",
          "Finds it challenging to discover local art in a meaningful way.",
          "Frustrated with lack of interactive art experiences.",
          "Wants more personal, immersive art encounters."
        ]}
        goals={[
          "Discover and engage with local art in real-world spaces.",
          "Participate in interactive art events and scavenger hunts.",
          "Connect with artists on a more personal level.",
          "Transform art discovery from passive to active experience."
        ]}
        imageUrl="/placeholder.svg"
        color={promptColor}
      />
    </div>
  );
};

export default TamagoPersonas; 