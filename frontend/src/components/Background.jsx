import { motion } from "framer-motion";

function Background() {
  const sparkleSymbols = ["✦", "✧", "✦"];

  const stars = [
    // Left Side
    ...Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 48,
      top: Math.random() * 35,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 4,
      size: 7 + Math.random() * 4,
      opacity: 0.4 + Math.random() * 0.6,
      symbol:
        sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)],
    })),

    // Right Side
    ...Array.from({ length: 30 }, (_, i) => ({
      id: i + 30,
      left: 52 + Math.random() * 48,
      top: Math.random() * 35,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 4,
      size: 7 + Math.random() * 4,
      opacity: 0.4 + Math.random() * 0.6,
      symbol:
        sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)],
    })),
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#040414]">

      {/* Purple Glow */}
      <div className="absolute -top-52 -left-44 w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-[180px]" />

      {/* Blue Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-700/15 blur-[170px]" />

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[150px]" />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute text-white select-none pointer-events-none"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            fontSize: `${star.size}px`,
            opacity: star.opacity,
            textShadow: "0 0 8px rgba(255,255,255,0.9)",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
            delay: star.delay,
          }}
        >
          {star.symbol}
        </motion.div>
      ))}
    </div>
  );
}

export default Background;