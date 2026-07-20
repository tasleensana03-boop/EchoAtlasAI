import { motion } from "framer-motion";

const stars = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 45}%`,      // Only upper part of the sky
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,         // 1px–3px
  opacity: Math.random() * 0.6 + 0.2,
  duration: Math.random() * 4 + 2,
}));

function Stars() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: "0 0 6px rgba(255,255,255,0.8)",
          }}
          animate={{
            opacity: [star.opacity, 1, star.opacity],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default Stars;