import React from 'react';
import { motion } from 'framer-motion';

const What = () => {

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

  const cardVariants = {
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
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(37, 99, 235, 0.9), 0 0 30px rgba(37, 99, 235, 0.7)",
      transition: {
        duration: 0.3
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
      <motion.div 
        className="text-center mb-12"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-white relative inline-block pb-2"
          variants={itemVariants}
        >
          What is Blazpay
        </motion.h2>
        <motion.p 
          className="mt-4 text-lg text-gray-300"
          variants={itemVariants}
        >
          AI-powered Comprehensive DeFi Solution
        </motion.p>
      </motion.div>

      <motion.div 
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        <div className="absolute top-0 left-0 h-full border-l-2 border-blue-800 rounded-l-full" style={{width: "20px"}}></div>
        <div className="absolute top-0 right-0 h-full border-r-2 border-blue-800 rounded-r-full" style={{width: "20px"}}></div>
        
        <motion.div 
          className="relative rounded-3xl flex flex-col items-center justify-center border border-blue-600 shadow-lg w-[27rem] h-[28rem]"
          style={{ boxShadow: '0 0 0 1px rgba(37, 99, 235, 0.7), 0 0 20px rgba(37, 99, 235, 0.5)' }}
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div 
            className="text-white text-xl font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >

          </motion.div>
        </motion.div>


        <motion.div 
          className="relative rounded-3xl p-8 flex flex-col items-center justify-center border border-blue-600 shadow-lg"
          style={{ boxShadow: '0 0 0 1px rgba(37, 99, 235, 0.7), 0 0 20px rgba(37, 99, 235, 0.5)' }}
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div 
            className="text-white text-xl font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >

          </motion.div>
        </motion.div>

        <motion.div 
          className="relative rounded-3xl p-8 flex flex-col items-center justify-center border border-blue-600 shadow-lg"
          style={{ boxShadow: '0 0 0 1px rgba(37, 99, 235, 0.7), 0 0 20px rgba(37, 99, 235, 0.5)' }}
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div 
            className="text-white text-xl font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >

          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default What;