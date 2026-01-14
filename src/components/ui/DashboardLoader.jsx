import { motion } from "framer-motion";

const DashboardLoader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950">

      {/* ICON */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="w-80 h-35">
          <img
            src="/rupee.png"
            
          />
        </div>
      </motion.div>

      {/* APP NAME */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6"
      >
       
      </motion.h2>

      {/* LOADING BAR */}
      <div className="w-64 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-full bg-blue-600 rounded-full"
        />
      </div>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Preparing your space...
      </p>
    </div>
  );
};

export default DashboardLoader;
