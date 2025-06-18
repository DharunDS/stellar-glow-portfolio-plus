
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, Moon, Sun, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const FloatingButtons = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    toast({
      title: "Theme Changed",
      description: `Switched to ${!isDark ? 'dark' : 'light'} mode`,
    });
    setIsMenuOpen(false);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "Portfolio link copied to clipboard",
    });
    setIsMenuOpen(false);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    toast({
      title: isLiked ? "Removed Like" : "Thank you!",
      description: isLiked ? "Like removed" : "Thanks for liking my portfolio!",
    });
    setIsMenuOpen(false);
  };

  const buttons = [
    { icon: ArrowUp, action: scrollToTop, color: "bg-purple-500 hover:bg-purple-600", delay: 0.1 },
    { icon: isDark ? Sun : Moon, action: toggleTheme, color: "bg-pink-500 hover:bg-pink-600", delay: 0.2 },
    { icon: Share2, action: handleShare, color: "bg-blue-500 hover:bg-blue-600", delay: 0.3 },
    { icon: Heart, action: handleLike, color: `${isLiked ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-500 hover:bg-gray-600'}`, delay: 0.4 },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute bottom-20 right-0 space-y-4"
          >
            {buttons.map((button, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0 }}
                transition={{ delay: button.delay, duration: 0.3 }}
                className="flex items-center space-x-3"
              >
                <motion.div
                  className="bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: button.delay + 0.1 }}
                >
                  {index === 0 && "Scroll to top"}
                  {index === 1 && "Toggle theme"}
                  {index === 2 && "Share portfolio"}
                  {index === 3 && `${likes} likes`}
                </motion.div>
                <Button
                  onClick={button.action}
                  size="sm"
                  className={`${button.color} rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button.icon className={`h-5 w-5 ${index === 3 && isLiked ? 'text-white' : ''}`} />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={toggleMenu}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full w-16 h-16 p-0 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <MessageCircle className="h-7 w-7" />
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
};

export default FloatingButtons;
