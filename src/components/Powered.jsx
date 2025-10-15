import React from 'react';
import { motion } from 'framer-motion';

const Powered = () => {
  const partners = [
    { id: 1, src: "/p1.png", alt: "Triangle Ventures Logo" },
    { id: 2, src: "/p2.png", alt: "Omni Logo" },
    { id: 3, src: "/p3.png", alt: "Movement Logo" },
    { id: 4, src: "/p4.png", alt: "Manta Network Logo" },
    { id: 5, src: "/p5.png", alt: "Taiko Logo" },
    { id: 6, src: "/p6.png", alt: "Zetachain Logo" },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-4 flex flex-col items-center overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-2xl font-semibold text-white">Powered by (Tech Partners)</h2>
      </div>

      <div className="w-full relative">
        <motion.div 
          className="flex gap-x-8 gap-y-12 sm:gap-x-12 lg:gap-x-16"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`}
              className="w-32 sm:w-40 lg:w-48 h-auto flex items-center justify-center flex-shrink-0"
            >
              <img 
                src={partner.src} 
                alt={partner.alt} 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Powered;