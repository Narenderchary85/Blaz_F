import React from 'react'
import { motion } from 'framer-motion'

const Keynote = () => {
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
  }

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: -50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      className="bg-black py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="text-center mb-12"
        variants={textVariants}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white relative inline-block pb-2">
          Keynote from the Founder
        </h2>
      </motion.div>

      <div className="w-[85rem] h-[450px]">
        <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-center"> 
        <motion.div 
        className="relative flex-shrink-0 mb-8 md:mb-0 md:mr-12 flex justify-center items-center rounded-3xl overflow-hidden" // Added relative and overflow-hidden
        variants={imageVariants}
        initial="initial" // Add initial and animate if you want these variants to apply
        animate="animate"
        whileHover="hover"
    >
        <div className="w-64 h-64 md:w-85 md:h-85 flex items-center justify-center"> {/* Increased size for better visual */}
            <motion.img 
                src="/men.jpg" // Make sure this path is correct for your project
                alt="Founder Example Name" 
                className="w-full h-full object-cover rounded-3xl" // Changed to w-full h-full object-cover
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 }
                }}
            />
        </div>
        
        {/* Gradient Overlay and Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-transparent to-transparent rounded-3xl flex items-end p-6">
            <div>
                <p className="text-white text-sm font-semibold mb-1 opacity-80">FOUNDER</p>
                <h3 className="text-white text-2xl font-bold">EXAMPLE NAME</h3>
            </div>
        </div>
    </motion.div>
          <motion.div 
            className="text-center md:text-left flex-grow ml-5"
            variants={textVariants}
          >
            <motion.p 
              className="text-xl text-gray-300 mb-48"
              variants={paragraphVariants}
            >
              Peace of mind supported by multiple audits by the world's leading security firms. Peace of mind supported by multiple audits by the world's leading security firms. Peace of mind supported by multiple audits by the world's leading security firms. Peace of mind supported by multiple audits by the world's leading security firms. Peace of mind supported by multiple audits by the world's leading security firms.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Keynote