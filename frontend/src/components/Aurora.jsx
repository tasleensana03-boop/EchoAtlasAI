import { motion } from "framer-motion";

function Aurora() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* Green Aurora */}
      <motion.div
        className="
          absolute
          top-0
          left-0
          w-[700px]
          h-[300px]
          rounded-full
          bg-[#00ffb3]
          opacity-30
          blur-[120px]
        "
        animate={{
          x: [0, 180, 320, 180, 0],
          y: [0, 50, 20, 60, 0],
          scale: [1, 1.15, 1.25, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* Pink Aurora */}
      <motion.div
        className="
          absolute
          top-20
          right-0
          w-[650px]
          h-[280px]
          rounded-full
          bg-[#ff4d8d]
          opacity-25
          blur-[120px]
        "
        animate={{
          x: [0, -180, -320, -180, 0],
          y: [0, -40, 50, -20, 0],
          scale: [1, 1.2, 1.1, 1.25, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* Blue Dream Glow */}
      <motion.div
        className="
          absolute
          top-10
          left-1/2
          w-[550px]
          h-[250px]
          rounded-full
          bg-blue-500
          opacity-15
          blur-[150px]
        "
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


    </div>
  );
}

export default Aurora;