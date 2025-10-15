import React from "react";
import { motion } from "framer-motion";

const Features = () => {
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="bg-black py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
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

      <motion.div 
        className="text-center mb-12"
        variants={itemVariants}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white relative inline-block pb-2">
          Core Features
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Hear firsthand how our solutions have boosted online success for users like you.
        </p>
      </motion.div>

      <motion.div 
        className="w-full flex flex-col gap-6 text-white"
        variants={containerVariants}
      >
        <motion.div 
          className="flex gap-6 justify-center flex-wrap"
          variants={containerVariants}
        >
          <FeatureCard title="Fast" width="w-[55rem]" delay={0} />
          <FeatureCard title="Reliable" width="w-[28rem]" delay={0.1} />
        </motion.div>
        <motion.div 
          className="flex gap-6 justify-center flex-wrap"
          variants={containerVariants}
        >
          <FeatureCard title="Efficient" width="w-[20rem]" delay={0.2} />
          <FeatureCard title="Secure" width="w-[20rem]" delay={0.3} />
          <FeatureCard title="Decentralized" width="w-[42rem]" delay={0.4} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const FeatureCard = ({ title, width, delay }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: delay
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay + 0.2
      }
    }
  };

  return (
    <motion.div
      className={`relative text-4xl font-bold text-white rounded-3xl flex flex-col items-center justify-center 
      ${width} h-[20rem] overflow-hidden bg-[#06152a] shadow-[0_0_25px_rgba(0,0,0,0.8)]`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0a1b33] to-[#0c2342]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.85)_60%,rgba(0,0,0,1)_90%)] opacity-90" />
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rounded-t-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rounded-b-3xl" />
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#4faaff]/40 to-transparent opacity-40 rounded-l-3xl" />
      <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#4faaff]/40 to-transparent opacity-40 rounded-r-3xl" />
      <div
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[250%] h-[180%] 
        bg-[radial-gradient(ellipse_120%_60%_at_50%_100%,rgba(255,255,255,0.28)_0%,rgba(30,90,150,0.15)_40%,rgba(0,0,0,0)_75%)] 
        opacity-0 blur-2xl animate-[flashGradient_6s_ease-in-out_infinite]"
      />
      <motion.div 
        className="absolute top-10 z-10"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {title}
      </motion.div>
      <div class="
        absolute 
        top-50 
        w-3/4     
        h-48      
        bg-gradient-to-br from-blue-500 to-black
        rounded-[50%_50%_0_0/100%_100%_0_0] 
        opacity-80 
        filter blur-3xl 
        ">
  </div>
    </motion.div>
  );
};

export default Features;