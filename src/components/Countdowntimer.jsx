import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdowntimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your target end date here
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-10-30T23:59:59'); // Change this to your target date
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }

    // If countdown is over, return zeros
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    // Calculate initial time
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  const countdownItems = [
    { value: formatTime(timeLeft.days), label: "D" },
    { value: formatTime(timeLeft.hours), label: "H" },
    { value: formatTime(timeLeft.minutes), label: "M" },
    { value: formatTime(timeLeft.seconds), label: "S" }
  ];

  const countdownVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const countdownItemVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="absolute bottom-0 right-18 flex flex-col items-center justify-center text-white mb-5"
      variants={countdownVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div 
        className="flex space-x-4 mb-4"
        variants={containerVariants}
      >
        {countdownItems.map((item, index) => (
          <motion.div 
            key={index}
            className="relative flex flex-col items-center justify-center w-24 h-24 sm:w-20 sm:h-20 bg-black rounded-lg border-2 border-blue-500 overflow-hidden"
            variants={countdownItemVariants}
            whileHover={{ 
              scale: 1.1,
              borderColor: "#FE652B",
              transition: { duration: 0.2 }
            }}
          >
            <div className="absolute inset-0 border-blue-500 rounded-lg animate-pulse-border"></div>
            <motion.span 
              className="text-4xl sm:text-3xl font-bold text-orange-500 z-10"
              key={item.value} // This triggers animation when value changes
              animate={{
                color: ["#FE652B", "#FF8C00", "#FE652B"],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {item.value}
            </motion.span>
            <span className="text-lg sm:text-xl font-medium text-gray-400 z-10">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
   
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold"
        variants={itemVariants}
        animate={{
          textShadow: [
            "0 0 0px rgba(255,255,255,0)",
            "0 0 10px rgba(42, 138, 248, 0.5)",
            "0 0 0px rgba(255,255,255,0)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Phase 1 Ends In
      </motion.h2>
    </motion.div>
  );
};

export default Countdowntimer;