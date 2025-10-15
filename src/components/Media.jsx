import React from 'react'
import { motion } from 'framer-motion'

const Media = () => {
  const mediaPartners = [
    { id: 1, src: "/i1.png", alt: "Triangle Ventures Logo" },
    { id: 2, src: "/i2.png", alt: "Omni Logo" },
    { id: 3, src: "/i3.png", alt: "Movement Logo" },
    { id: 4, src: "/i4.png", alt: "Manta Network Logo" },
    { id: 5, src: "/i5.png", alt: "Taiko Logo" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section 
      className="bg-black py-16 px-4 sm:px-6 lg:px-4 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="text-center mb-12"
        variants={itemVariants}
      >
        <h2 className="text-3xl sm:text-5xl font-semibold text-white">Media Partners</h2>
      </motion.div>

      <motion.div 
        className="w-full flex flex-wrap justify-center items-center gap-x-8 gap-y-12 sm:gap-x-12 lg:gap-x-16"
        variants={containerVariants}
      >
        {mediaPartners.map((partner, index) => (
          <motion.div 
            key={partner.id}
            className="w-32 sm:w-40 lg:w-48 h-auto flex items-center justify-center"
            variants={logoVariants}
            whileHover="hover"
            custom={index}
          >
            <motion.img 
              src={partner.src} 
              alt={partner.alt} 
              className="max-h-full max-w-full object-contain"
              whileHover={{
                filter: "brightness(1.2) drop-shadow(0 0 10px rgba(79, 170, 255, 0.5))",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Media