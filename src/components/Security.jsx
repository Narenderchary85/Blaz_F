import React from 'react';
import { motion } from 'framer-motion';

const Security = () => {

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
      backgroundColor: "#ffffff",
      color: "#000000",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const cardGlowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const staggerLogosVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const logoItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <div>
      <style>
        {`
          @keyframes flashGradient {
            0%, 100% {
              opacity: 0;
              transform: translate(-50%, 20%) scale(1);
            }
            50% {
              opacity: 0.9;
              transform: translate(-50%, 0%) scale(1.05);
            }
          }
        `}
      </style>
  
      <motion.section 
        className="bg-black py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white relative inline-block pb-2"
            variants={textVariants}
          >
            Serious security
          </motion.h2>
          <motion.p 
            className="mt-2 text-lg text-gray-300"
            variants={itemVariants}
          >
            Peace of mind by design
          </motion.p>
        </motion.div>

        <motion.div 
          className="w-[85rem] h-[450px] border-3 border-[#2A8AF8] rounded-3xl"
          variants={containerVariants}
        >
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-center">
            {/* Animated Security Card */}
            <motion.div
              className={`relative text-4xl font-bold text-white rounded-3xl flex flex-col items-center justify-center 
              w-[500px] h-[350px] overflow-hidden bg-[#06152a] shadow-[0_0_25px_rgba(0,0,0,0.8)]`}
              variants={cardGlowVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0a1b33] to-[#0c2342]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.85)_60%,rgba(0,0,0,1)_90%)] opacity-90" />
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#4faaff] to-transparent opacity-60 rounded-t-3xl" />
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#4faaff] to-transparent opacity-60 rounded-b-3xl" />
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#4faaff]/40 to-transparent opacity-40 rounded-l-3xl" />
              <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#4faaff]/40 to-transparent opacity-40 rounded-r-3xl" />
              <div
                className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[250%] h-[180%] 
                bg-[radial-gradient(ellipse_120%_60%_at_50%_100%,rgba(255,255,255,0.28)_0%,rgba(30,90,150,0.15)_40%,rgba(0,0,0,0)_75%)] 
                opacity-0 blur-2xl animate-[flashGradient_6s_ease-in-out_infinite]"
              />
              <motion.div 
                className="w-48 h-48 md:w-85 md:h-85 flex items-center justify-center absolute top-0"
                variants={imageVariants}
                whileHover="hover"
              >
                 
                <img src="/security1.png" alt="Security Shield" className="max-w-full h-auto" />
              </motion.div>
              <div class="
                    absolute 
                    bottom-0 
                    w-3/4     
                    h-48      
                    bg-gradient-to-br from-blue-500 to-black
                    rounded-[50%_50%_0_0/100%_100%_0_0] 
                    opacity-80 
                    filter blur-3xl 
                    ">
              </div>
            </motion.div>

            <motion.div 
              className="text-center md:text-left flex-grow ml-5"
              variants={textVariants}
            >
              <motion.h3 
                className="text-4xl font-semibold text-white mb-4 relative pb-2"
                variants={itemVariants}
              >
                Security
                <motion.span 
                  className="absolute left-0 bottom-0 w-full h-[1px] bg-white"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.span>
              </motion.h3>
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                variants={itemVariants}
              >
                Peace of mind supported by multiple audits by the world's
                leading security firms.
              </motion.p>
              <motion.button 
                className="px-8 py-3 mt-20 border-2 border-white text-white text-lg rounded-full hover:bg-white hover:text-black transition duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="bg-black py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-[-80px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="w-[85rem] h-[450px] border-3 border-[#2A8AF8] rounded-3xl"
          variants={containerVariants}
        >
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-center">
            <motion.div 
              className="text-center md:text-left flex-grow ml-5"
              variants={textVariants}
            >
              <motion.h3 
                className="text-4xl font-semibold text-white mb-4 relative pb-2"
                variants={itemVariants}
              >
                Audited by Internal
                <motion.span 
                  className="absolute left-0 bottom-0 w-130 h-[1px] bg-white"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.span>
              </motion.h3>
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                variants={itemVariants}
              >
                Peace of mind supported by multiple audits by the world's
                <motion.br variants={itemVariants} />
                leading security firms.
              </motion.p>
              <motion.button 
                className="px-8 py-3 mt-20 border-2 border-white text-white text-lg rounded-full hover:bg-white hover:text-black transition duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div 
  className="flex-shrink-0 mb-8 md:mb-0 rounded-3xl flex justify-center items-center relative w-[550px] h-[350px] overflow-hidden bg-[#06152a] shadow-[0_0_25px_rgba(0,0,0,0.8)]"
  whileHover={{ 
    scale: 1.02,
    transition: { duration: 0.3 }
  }}
>
  {/* Background Gradients */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0a1b33] to-[#0c2342]" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.85)_60%,rgba(0,0,0,1)_90%)] opacity-90" />
  
  {/* Animated Borders */}
  <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#4faaff] to-transparent opacity-60 rounded-t-3xl" />
  <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#4faaff] to-transparent opacity-60 rounded-b-3xl" />
  <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#4faaff]/40 to-transparent opacity-40 rounded-l-3xl" />
  <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#4faaff]/40 to-transparent opacity-40 rounded-r-3xl" />
  
  {/* Animated Glow Effect */}
  <div
    className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[250%] h-[180%] 
    bg-[radial-gradient(ellipse_120%_60%_at_50%_100%,rgba(255,255,255,0.28)_0%,rgba(30,90,150,0.15)_40%,rgba(0,0,0,0)_75%)] 
    opacity-0 blur-2xl animate-[flashGradient_6s_ease-in-out_infinite]"
  />
  
  {/* Bottom Glow Effect */}
  <div className="
    absolute 
    bottom-0 
    w-3/4     
    h-48      
    bg-gradient-to-br from-blue-500 to-black
    rounded-[50%_50%_0_0/100%_100%_0_0] 
    opacity-80 
    filter blur-3xl 
  "></div>

  {/* Content */}
  <div className='flex flex-col gap-2 absolute top-20 left-5'>
    <div className="flex items-center justify-center ml-10">
      <motion.img 
        src="/security3.png" 
        alt="Security Shield" 
        className="w-48 h-48 md:w-50 md:h-15"
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      />
    </div>
    <div className="flex items-center justify-center ml-10">
      <motion.img 
        src="/security4.png" 
        alt="Security Shield" 
        className="w-48 h-48 md:w-50 md:h-15"
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      />
    </div>
  </div>
  <div className="flex items-center justify-center absolute right-[-35px] bottom-[-8px]">
    <motion.img 
      src="/security2.png" 
      alt="Security Shield" 
      className="w-48 h-48 md:w-100 md:h-100"
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
    />
  </div>
</motion.div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Security;