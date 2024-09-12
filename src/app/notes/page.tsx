import * as motion from "framer-motion/client";

export default function page() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.3 } },
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  dark:bg-gray-800 text-gray-900 dark:text-gray-100">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-center my-5 py-5"
    >
      <motion.h1
        variants={textVariants}
        className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl"
      >
        Notes
      </motion.h1>
      <motion.p
        variants={textVariants}
        className="my-4 text-lg"
      >
        Recent Updates, Notes
      </motion.p>
    </motion.div>
    
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full my-12 flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
    >
      <motion.div
        variants={textVariants}
        className="text-center text-lg text-gray-500 dark:text-gray-400"
      >
        <p>Currently, there are no updates!</p>
      </motion.div>
      
      {/* Add a button or link to encourage interaction */}
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#4A90E2" }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
      >
        Check Back Later
      </motion.button>
    </motion.div>
  </div>
  );
}
