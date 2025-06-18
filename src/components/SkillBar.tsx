
import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
}

const SkillBar = ({ name, level, delay }: SkillBarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-8 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-3">
        <motion.span 
          className="text-white font-semibold text-lg"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.span>
        <motion.span 
          className="text-purple-400 font-bold"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            color: isHovered ? "#ec4899" : "#a855f7"
          }}
          transition={{ duration: 0.2 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="relative w-full bg-white/10 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-white/20">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ 
            duration: 1.5, 
            delay: delay + 0.3, 
            ease: "easeOut" 
          }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: isHovered ? ['-100%', '100%'] : '-100%',
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
          />
        )}
      </div>
    </motion.div>
  );
};

export default SkillBar;
