import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

export default function Projects() {
  const [gameScore, setGameScore] = useState(0)

  const projects = [
    { id: 1, title: "Space Invaders Clone", description: "A modern take on the classic arcade game" },
    { id: 2, title: "RPG Game Engine", description: "A custom game engine for creating 2D RPGs" },
    { id: 3, title: "VR Escape Room", description: "An immersive VR escape room experience" },
  ]

  const handleStarClick = () => {
    setGameScore(score => score + 1)
  }

  return (
    <div className="max-w-2xl mx-auto px-2 sm:px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Project Levels</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="border border-green-400 p-3 sm:p-4 rounded"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="font-bold flex items-center text-sm sm:text-base">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={handleStarClick}
              >
                <FaStar className="mr-2 cursor-pointer" />
              </motion.div>
              Level {index + 1}: {project.title}
            </h3>
            <p className="text-xs sm:text-sm mt-1">{project.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm sm:text-base">Mini-Game Score: {gameScore}</p>
        <p className="text-xs sm:text-sm">Click the stars to increase your score!</p>
      </motion.div>
    </div>
  )
}

