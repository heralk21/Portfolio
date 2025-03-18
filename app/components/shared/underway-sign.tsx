import React from 'react';
import { motion } from 'framer-motion';

interface UnderwaySignProps {
  color?: string;
}

const UnderwaySign: React.FC<UnderwaySignProps> = ({ color = "#FA5C5C" }) => {
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <motion.div
        className="border-2 rounded-lg px-8 py-6 text-center relative overflow-hidden"
        style={{ borderColor: color }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Construction diagonal stripes */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              ${color},
              ${color} 10px,
              transparent 10px,
              transparent 20px
            )`
          }}
        />
        
        {/* Animated dots */}
        <div className="flex items-center justify-center space-x-2 mb-3">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <motion.h3
          className="text-2xl font-bold relative z-10"
          style={{ color }}
          animate={{ 
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Under Development
        </motion.h3>
        
        <p className="mt-2 text-muted-foreground relative z-10">
          This section is currently being built. Check back soon!
        </p>
        
        {/* Tool icons */}
        <div className="flex justify-center mt-4 space-x-4 relative z-10">
          <motion.div
            className="text-2xl"
            animate={{ 
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🛠️
          </motion.div>
          <motion.div
            className="text-2xl"
            animate={{ 
              rotate: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            📝
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UnderwaySign; 