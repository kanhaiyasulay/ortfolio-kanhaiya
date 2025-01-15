import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const educationItems = [
    { 
      id: 1, 
      title: "B.S. in Computer Science", 
      year: "2018-2022",
      details: "Focused on game development and computer graphics. Completed projects in Unity and Unreal Engine."
    },
    { 
      id: 2, 
      title: "Game Development Bootcamp", 
      year: "2022",
      details: "Intensive 12-week program covering advanced game design principles and industry-standard tools."
    },
    { 
      id: 3, 
      title: "Master's in Game Design", 
      year: "2023-Present",
      details: "Specializing in VR/AR game development and advanced AI for games."
    },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Education Skill Tree</h2>
      <div className="space-y-4">
        {educationItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex items-center space-x-4 cursor-pointer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
          >
            <FaGraduationCap className="text-2xl" />
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.year}</p>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: expandedItem === item.id ? 'auto' : 0,
                  opacity: expandedItem === item.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-sm">{item.details}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

