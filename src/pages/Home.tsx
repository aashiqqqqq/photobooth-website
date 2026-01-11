import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { ArrowRight } from 'lucide-react'
import Logo from '../components/Logo'

const Home = () => {
    return (
        <PageTransition className="flex items-center justify-center p-4 sm:p-8 overflow-hidden h-[100dvh]">
            <div className="relative w-full max-w-lg min-h-[500px] aspect-[3/4] theme-card flex flex-col items-center justify-center p-8 sm:p-12 overflow-hidden">

                {/* Soft Background Blob for depth */}
                <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-current opacity-5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-current opacity-10 rounded-full blur-3xl pointer-events-none" />

                {/* Decorative Top Pill */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-current opacity-20 rounded-b-xl" />

                {/* Content Area */}
                <div className="flex-1 w-full flex flex-col items-center justify-center gap-6 z-10 text-center">

                    {/* New Colored Vintage Camera Hero */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center gap-8 max-w-2xl w-full"
                    >

                        {/* Minimalist Hero */}
                        <div className="w-full p-8 theme-card flex flex-col items-center text-center gap-6 bg-white/80 backdrop-blur-sm">
                            <div className="border-b-2 border-[#78350f] pb-4 mb-2 w-full max-w-md">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-theme-heading text-[#2a2a2a] uppercase">
                                    Little Photo Studio
                                </h1>
                            </div>
                            <p className="text-xl md:text-2xl text-theme-body italic opacity-80 max-w-lg">
                                "Capture your moment in timeless black & white."
                            </p>

                            <Link to="/select" className="w-full max-w-xs group">
                                <button className="w-full py-4 text-xl font-bold bg-[#2a2a2a] text-white border-2 border-transparent hover:bg-white hover:text-[#2a2a2a] hover:border-[#2a2a2a] transition-all rounded-lg shadow-lg uppercase tracking-widest">
                                    Start Booth
                                </button>
                            </Link>
                        </div>

                        {/* Simple Footer/Decor */}
                        <div className="flex gap-4 opacity-40">
                            <div className="w-2 h-2 rounded-full bg-current"></div>
                            <div className="w-2 h-2 rounded-full bg-current"></div>
                            <div className="w-2 h-2 rounded-full bg-current"></div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </PageTransition>
    )
}

export default Home
