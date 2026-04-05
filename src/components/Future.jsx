import React from "react";
import { motion } from "framer-motion";

const Future = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const gradientTextVariants = {
    hidden: { 
      backgroundPosition: "0% 50%",
      opacity: 0 
    },
    visible: {
      backgroundPosition: "100% 50%",
      opacity: 1,
      transition: {
        backgroundPosition: {
          duration: 2,
          ease: "easeInOut"
        },
        opacity: {
          duration: 1.2,
          ease: "easeOut"
        }
      }
    }
  };

  return (
    <motion.div 
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} 
      variants={containerVariants}
    >
      <motion.section 
        className="relative w-[85rem] h-[650px] mt-10 border-3 border-[#2A8AF8] flex items-center justify-center overflow-hidden rounded-2xl"
        variants={containerVariants}
      >
        <motion.img
          src="/future.jpg" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          variants={imageVariants}
        />
        <div className="absolute inset-0"></div>

        <motion.div 
          className="absolute top-30 left-15 z-10 text-center text-white px-6 max-w-3xl"
          variants={containerVariants}
        >
          <motion.div 
            className="max-w-xl"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-left font-bold text-[80px] md:text-[75px] leading-[1.2]"
              variants={titleVariants}
            >
           
                   <span className="bg-gradient-to-r from-[#FE652B] to-[#2989FA] bg-clip-text text-transparent">
            Join The Future of Crypto with this Presale
        </span>
          
            </motion.h1>
          </motion.div>
          
          <motion.div 
            className="flex gap-6 mt-35"
            variants={containerVariants}
          >
            <motion.button 
              className="px-15 py-3 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-[#FE652B] to-[#2989FA] hover:opacity-90 transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Join the PreSale
            </motion.button>
            <motion.button 
              className="px-15 py-3 rounded-full text-white text-lg font-semibold bg-[#0a1f3b]/80 border border-[#2989FA] hover:bg-[#0a1f3b]/60 transition"
              variants={buttonVariants}
              whileTap="tap"
              whileHover={{
                borderColor: "#FE652B",
                backgroundColor: "rgba(10, 31, 59, 0.9)",
                transition: { duration: 0.3 }
              }}
            >
              How to Join
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Future;