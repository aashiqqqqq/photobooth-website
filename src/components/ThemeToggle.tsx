import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Moon, Camera, Star, Sun } from 'lucide-react'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    const isNikaah = theme === 'nikaah'

    return (
        <button
            onClick={toggleTheme}
            className="group relative flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 z-[100]"
            style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--bg-card-border)',
                boxShadow: 'var(--shadow-type)'
            }}
        >
            <div className="relative w-6 h-6 overflow-hidden">
                <AnimatePresence mode='wait'>
                    {isNikaah ? (
                        <motion.div
                            key="moon"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            className="text-emerald-700"
                        >
                            <Star className="w-6 h-6 fill-current" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            className="text-amber-700"
                        >
                            <Camera className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <span className="hidden md:block font-bold text-xs uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--col-text)' }}>
                {isNikaah ? 'Nikaah Mode' : 'Vintage Studio'}
            </span>
        </button>
    )
}

export default ThemeToggle
