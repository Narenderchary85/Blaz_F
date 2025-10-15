import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PieChartStat = ({ percentage, title, description, color }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-32 h-32 mb-4">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
            stroke="#1a202c" 
            strokeWidth="15"
          />
        </svg>

        <motion.svg 
          className="absolute top-0 left-0 w-full h-full -rotate-90" 
          viewBox="0 0 120 120"
        >
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth="15"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">
              {percentage}%
            </span>
          </div>
        </div>
      </div>
      <h4 className="text-xl font-bold text-white mb-1 text-center">{title}</h4>
      <p className="text-gray-400 text-sm text-center">{description}</p>
    </div>
  );
};

const Stats = () => {
  const statsData = [
    {
      id: 1,
      title: "1.2M users",
      description: "Active users on our platform",
      percentage: 75, 
      color: "#3B82F6" 
    },
    {
      id: 2,
      title: "12M+ transactions",
      description: "Successfully processed transactions",
      percentage: 85, 
      color: "#3B82F6" 
    },
    {
      id: 3,
      title: "30+ chain support",
      description: "Blockchain networks supported",
      percentage: 60, 
      color: "#3B82F6" 
    },
    {
      id: 4,
      title: "99.9% uptime",
      description: "Platform reliability",
      percentage: 99, 
      color: "#3B82F6" 
    },
    {
      id: 5,
      title: "< 2s speed",
      description: "Average transaction time",
      percentage: 90, 
      color: "#3B82F6" 
    }
  ];

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[600px] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Stats
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Meet our fabulous team who makes dreams<br />come true
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 justify-items-center">
          {statsData.slice(0, 3).map((stat) => ( 
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: stat.id * 0.1 }}
              viewport={{ once: true }}
            >
              <PieChartStat 
                percentage={stat.percentage} 
                title={stat.title} 
                description={stat.description} 
                color={stat.color}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full opacity-20"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default Stats;