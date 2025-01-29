import { motion } from "framer-motion"
import {ReactNode} from "react"

interface CardProps {
  title: string
  description: string
  image: string
  children?: ReactNode 
}

const Card: React.FC<CardProps> = ({ title, description, image, children }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img className="w-full h-48 object-cover" src={image || "/placeholder.svg"} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
        {children}
      </div>
    </motion.div>
  )
}

export default Card

