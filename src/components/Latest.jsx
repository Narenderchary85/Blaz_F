import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Latest = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    focus: {
      scale: 1.02,
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
      transition: {
        duration: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#f3f4f6",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.7,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      setIsError(true);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address');
      setIsError(true);
      return;
    }

    setLoading(true);
    setMessage('');
    setIsError(false);

    try {
      const response = await axios.post(`https://blaz-b.onrender.com/latest/latestemail`, { email });
      
      if (response.data.status) {
        setMessage(response.data.message);
        setIsError(false);
        setEmail('');
      } else {
        setMessage(response.data.message || 'Something went wrong');
        setIsError(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMessage(error.response.data.message || 'You are already on our waitlist');
      } else {
        setMessage('Failed to join waitlist. Please try again.');
      }
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section 
      className="bg-black py-20 px-4 w-full sm:px-6 relative lg:px-8 flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
        <div class="
        absolute 
        top-[-20px]
        w-full     
        h-48      
        bg-gradient-to-br from-black to-blue-500
        rounded-[50%_50%_0_0/100%_100%_0_0] 
        opacity-80 
        filter blur-3xl 
        ">
  </div>

      <motion.div 
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div> 

      <motion.div 
        className="relative z-10 text-center max-w-2xl mx-auto"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-5xl sm:text-6xl font-semibold text-white mb-6"
          variants={itemVariants}
        >
          Latest Updates
        </motion.h2>
        
        <form onSubmit={handleSubmit}>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-6"
            variants={containerVariants}
          >
            <motion.input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full sm:w-80 px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              variants={inputVariants}
              whileFocus="focus"
            />
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
              variants={buttonVariants}
              whileHover={!loading ? "hover" : {}}
              whileTap={!loading ? "tap" : {}}
            >
              {loading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Joining...
                </div>
              ) : (
                'Join waitlist'
              )}
            </motion.button>
          </motion.div>
        </form>

        <AnimatePresence>
          {message && (
            <motion.div
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`mt-4 p-3 rounded-lg ${
                isError 
                  ? 'bg-red-500/20 border border-red-500/50 text-red-300' 
                  : 'bg-green-500/20 border border-green-500/50 text-green-300'
              }`}
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p 
          className="text-gray-400 text-md sm:text-lg mt-4"
          variants={itemVariants}
        >
          No credit card required &bull; 7-days free trial
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Latest;