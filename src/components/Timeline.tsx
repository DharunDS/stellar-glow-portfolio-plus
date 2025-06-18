
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

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
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-400 to-pink-400" />
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-purple-400 font-medium mb-2">{exp.company}</h4>
                  <p className="text-pink-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-white/70">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
