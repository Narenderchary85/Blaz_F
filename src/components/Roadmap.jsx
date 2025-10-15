import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
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

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "backOut",
        delay: 0.5
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="bg-black py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <style>
        {`
          @keyframes flashGradient {
            0%, 100% { opacity: 0; transform: translate(-50%, 20%) scale(1); }
            50% { opacity: 0.9; transform: translate(-50%, 0%) scale(1.05); }
          }
        `}
      </style>
      
      <motion.div 
        className="text-center mb-12"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-white relative inline-block pb-2"
          variants={textVariants}
        >
          Roadmap
        </motion.h2>
        <motion.p 
          className="mt-2 text-2xl text-gray-300"
          variants={itemVariants}
        >
          Peace of mind by design
        </motion.p>
      </motion.div>

      <motion.div 
        className="w-full flex gap-10 mt-10"
        variants={staggerContainer}
      >

<motion.div 
  className="relative rounded-3xl p-5 flex flex-col justify-start items-start border-3 border-blue-600 overflow-hidden shadow-lg w-[50rem] h-[750px]"
  variants={cardVariants}
  whileHover="hover"
> 
  <motion.h3 
    className="text-4xl mt-10 ml-5 font-bold text-white mb-6"
    variants={textVariants}
  >
    Blazpay Roadmap
  </motion.h3>

  <motion.div 
    className="w-full h-[calc(100%-80px)] relative flex items-center justify-center"
    variants={imageVariants}
  >
    <motion.img 
      src="/raodmap.png" 
      alt="Blazpay Coin" 
      className="w-full h-full object-contain max-w-none max-h-none"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 }
      }}
    />
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
  </motion.div>
</motion.div>
        <motion.div 
          className="md:col-span-1 lg:col-span-2 flex flex-col gap-8"
          variants={staggerContainer}
        >

          <motion.div 
            className="relative rounded-3xl flex flex-col items-center justify-center 
                w-[35rem] h-[360px] overflow-hidden bg-[#06152a] 
                shadow-[0_0_25px_rgba(0,0,0,0.8)]"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0a1b33] to-[#0c2342]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.9)_70%,rgba(0,0,0,1)_90%)] opacity-90"></div>
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rounded-t-3xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rounded-b-3xl"></div>
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#4faaff]/40 to-transparent opacity-40 rounded-l-3xl"></div>
            <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#4faaff]/40 to-transparent opacity-40 rounded-r-3xl"></div>
            <motion.div 
              className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[250%] h-[180%] 
                  bg-[radial-gradient(ellipse_120%_60%_at_50%_100%,rgba(255,255,255,0.25)_0%,rgba(30,90,150,0.15)_40%,rgba(0,0,0,0)_75%)] 
                  opacity-0 blur-2xl animate-[flashGradient_6s_ease-in-out_infinite]"
              variants={glowVariants}
            ></motion.div>
            
            <motion.h3 
              className="text-4xl font-bold text-white mb-4 z-10"
              variants={textVariants}
            >
              Listing Timeline
            </motion.h3>
            
            <motion.span 
              className="text-7xl sm:text-[180px] font-bold text-white leading-none z-10"
              variants={numberVariants}
              animate={{
                scale: [1, 1.1, 1],
                color: ["#ffffff", "#4faaff", "#ffffff"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              08
            </motion.span>
            
            <motion.span 
              className="text-xl text-gray-300 mt-2 z-10"
              variants={itemVariants}
            >
              Months
            </motion.span>
            <div class="
                      absolute 
                      top-70
                      w-full     
                      h-50      
                      bg-gradient-to-br from-blue-500 to-black
                      rounded-[50%_50%_0_0/100%_100%_0_0] 
                      opacity-80 
                      filter blur-3xl 
                      ">
                </div>
          </motion.div>

          <motion.div 
            className="relative rounded-3xl flex flex-col items-center justify-center 
                w-[35rem] h-[360px] overflow-hidden bg-[#06152a] 
                shadow-[0_0_25px_rgba(0,0,0,0.8)] p-4"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0a1b33] to-[#0c2342]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.9)_70%,rgba(0,0,0,1)_90%)] opacity-90"></div>
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rounded-t-3xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rounded-b-3xl"></div>
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#4faaff]/40 to-transparent opacity-40 rounded-l-3xl"></div>
            <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#4faaff]/40 to-transparent opacity-40 rounded-r-3xl"></div>
            <motion.div 
              className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[250%] h-[180%] 
                  bg-[radial-gradient(ellipse_120%_60%_at_50%_100%,rgba(255,255,255,0.25)_0%,rgba(30,90,150,0.15)_40%,rgba(0,0,0,0)_75%)] 
                  opacity-0 blur-2xl animate-[flashGradient_6s_ease-in-out_infinite]"
              variants={glowVariants}
            ></motion.div>
            
            <motion.div 
              className="absolute top-5 z-10"
              variants={textVariants}
            >
              <motion.h3 
                className="text-4xl font-bold text-white mb-4"
                variants={itemVariants}
              >
                Confirmed Listings
              </motion.h3>
              <div class="
                      absolute 
                      top-70
                      w-full     
                      h-50      
                       bg-gradient-to-br from-blue-500 to-black
                      rounded-[50%_50%_0_0/100%_100%_0_0] 
                      opacity-80 
                      filter blur-3xl 
                      ">
                </div>
            </motion.div>

            <motion.div 
              className="mt-20 z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.p 
        className="mt-12 text-sm text-gray-500"
        variants={itemVariants}
      >
        Disclaimer: LISTING T&C Applied
      </motion.p>
    </motion.section>
  );
};

export default Roadmap;