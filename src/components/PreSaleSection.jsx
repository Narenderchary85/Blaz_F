import React from "react";
import { motion } from "framer-motion";
import Countdowntimer from "./Countdowntimer";

const PreSaleSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
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
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

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

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div 
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.section 
        className="relative w-[85rem] h-[650px] mt-10 border-3 border-[#2A8AF8] flex items-center justify-center overflow-hidden rounded-2xl"
        variants={containerVariants}
      >
        <motion.img
          src="/presale.jpg" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          variants={imageVariants}
        />
        <div className="absolute inset-0"></div>

        <motion.div 
          className="absolute top-20 left-15 z-10 text-center text-white px-6 max-w-3xl"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold leading-snug"
            variants={itemVariants}
          >
            <motion.span 
              className="font-bold text-[70px] bg-gradient-to-r from-[#FE652B] to-[#2989FA] bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Pre-Sale is Live,
            </motion.span>
            <br />
            <motion.span 
              className="font-bold text-[70px] bg-gradient-to-r from-[#FE652B] to-[#2989FA] bg-clip-text text-transparent"
              variants={itemVariants}
            >
              participate with
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="flex justify-center gap-5 mt-8"
            variants={containerVariants}
          >
            {["/pre1.png", "/pre2.png", "/pre3.png", "/pre6.png", "/pre4.png", "/pre5.png"].map((src, index) => (
              <motion.img 
                key={index}
                src={src} 
                alt={["ETH", "USDT", "USDC", "SOL", "BNB", "BTC"][index]}
                className="h-18 w-18"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                animate={pulseAnimation}
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6 mt-35"
            variants={containerVariants}
          >
            <motion.button 
              className="px-15 py-3 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-[#FE652B] to-[#2989FA] hover:opacity-90 transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Buy Now
            </motion.button>
            <motion.button 
              className="px-15 py-3 rounded-full text-white text-lg font-semibold bg-[#0a1f3b]/80 border border-[#2989FA] hover:bg-[#0a1f3b]/60 transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Join Whitelist
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
     
   <Countdowntimer/>
    </motion.div>
  );
};

export default PreSaleSection;