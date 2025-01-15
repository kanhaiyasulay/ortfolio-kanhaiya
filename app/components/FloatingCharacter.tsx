import { motion } from 'framer-motion'

export default function FloatingCharacter() {
  return (
    <motion.div
      className="fixed bottom-20 right-20 text-4xl"
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      🎮
    </motion.div>
  )
}

