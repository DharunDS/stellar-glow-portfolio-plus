
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <div className="max-w-6xl mx-auto relative">
      {/* Enhanced timeline line with gradient */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400 rounded-full shadow-lg" />
      
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`relative flex items-center mb-16 ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}
        >
          {/* Enhanced timeline dot */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-4 border-slate-900 shadow-xl z-10"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Enhanced card with better alignment */}
          <motion.div 
            className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-white/5 border-white/20 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
              <CardContent className="p-8">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {exp.title}
                </motion.h3>
                
                <motion.h4 
                  className="text-purple-400 font-semibold mb-4 text-lg flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  {exp.company}
                </motion.h4>
                
                <motion.p 
                  className="text-pink-400 text-sm mb-4 flex items-center font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  {exp.period}
                </motion.p>
                
                <motion.p 
                  className="text-white/80 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {exp.description}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
