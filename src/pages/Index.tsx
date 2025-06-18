import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Palette, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import ParticleBackground from '@/components/ParticleBackground';
import ProjectCard from '@/components/ProjectCard';
import SkillBar from '@/components/SkillBar';
import Timeline from '@/components/Timeline';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const { toast } = useToast();

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'AWS/Cloud', level: 75 }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Dashboard',
      description: 'Modern dashboard with AI-powered analytics and real-time data visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['TypeScript', 'React', 'D3.js', 'Python'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Led development of scalable web applications serving 100K+ users'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description: 'Developed responsive web applications using React and TypeScript'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Built RESTful APIs and contributed to frontend development'
    }
  ];

  const stats = [
    { icon: Star, value: '50+', label: 'Projects Completed' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ScrollProgress />
      <AnimatedBackground />
      <ParticleBackground />
      
      {/* Enhanced Navigation with glassmorphism */}
      <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-2xl z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 px-4 py-2 rounded-full ${
                    activeSection === section
                      ? 'text-white bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-white/20'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="text-center z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{
                background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              John Doe
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Full Stack Developer & UI/UX Designer
            </motion.p>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mb-12 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-white mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                View My Work
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-8"
          >
            {[
              { icon: Github, href: "#", color: "hover:text-purple-400" },
              { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
              { icon: Mail, href: "#", color: "hover:text-pink-400" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`text-white/70 ${social.color} transition-all duration-300 p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience creating beautiful, 
              functional, and user-centered digital experiences. I love turning complex problems 
              into simple, beautiful designs that make a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { icon: Code, title: 'Development', desc: 'Clean, efficient code with modern technologies', color: 'from-purple-400 to-purple-600' },
              { icon: Palette, title: 'Design', desc: 'Beautiful, intuitive user interfaces', color: 'from-pink-400 to-pink-600' },
              { icon: Zap, title: 'Performance', desc: 'Fast, optimized, and scalable solutions', color: 'from-blue-400 to-blue-600' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white/5 border-white/20 backdrop-blur-lg hover:bg-white/10 transition-all duration-500 h-full">
                  <CardContent className="p-10 text-center h-full flex flex-col justify-center">
                    <motion.div
                      className={`h-16 w-16 bg-gradient-to-br ${item.color} rounded-2xl mx-auto mb-6 flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-lg">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Constantly evolving and learning new technologies to deliver cutting-edge solutions
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-2 gap-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              My professional journey and the amazing projects I've been part of
            </p>
          </motion.div>

          <Timeline experiences={experiences} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center text-white/80">
                  <Mail className="h-5 w-5 mr-3 text-purple-400" />
                  john.doe@example.com
                </div>
                <div className="flex items-center text-white/80">
                  <Phone className="h-5 w-5 mr-3 text-purple-400" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-white/80">
                  <MapPin className="h-5 w-5 mr-3 text-purple-400" />
                  San Francisco, CA
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
};

export default Index;
