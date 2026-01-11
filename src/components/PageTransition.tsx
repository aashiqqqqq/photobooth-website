import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

const PageTransition = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`w-full min-h-screen ${className}`}
        >
            {children}
        </motion.div>
    )
}

export default PageTransition
