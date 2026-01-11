import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import BackButton from '../components/BackButton'
import PageTransition from '../components/PageTransition'
import { usePhotobooth } from '../context/PhotoboothContext'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import HomeButton from '../components/HomeButton'

// Configuration for Frames
// Removed 'Cinematic' as requested.
export const frames = [
    {
        id: 'classic',
        name: 'Classic Color',
        bg: 'bg-white',
        border: 'border-2 border-gray-200',
        innerPadding: 'p-3 gap-3',
        photoBg: 'bg-gray-100',
        filter: 'none'
    },
    {
        id: 'bw-modern',
        name: 'Modern B&W',
        bg: 'bg-white',
        border: 'border-2 border-gray-200',
        innerPadding: 'p-3 gap-3',
        photoBg: 'bg-gray-200',
        filter: 'grayscale(1) contrast(1.2)'
    },
    {
        id: 'sepia-retro',
        name: 'Retro Cream',
        bg: 'bg-[#fdfbf7]',
        border: 'border-2 border-[#e6e2d6]',
        innerPadding: 'p-3 gap-3',
        photoBg: 'bg-[#ebe8e0]',
        filter: 'sepia(0.6) contrast(0.95) brightness(1.05)'
    },
    {
        id: 'black',
        name: 'Classic Black',
        bg: 'bg-black',
        border: 'border-2 border-gray-800',
        innerPadding: 'p-3 gap-3',
        photoBg: 'bg-gray-800',
        filter: 'none'
    },
    {
        id: 'black-bw',
        name: 'Black B&W',
        bg: 'bg-black',
        border: 'border-2 border-gray-800',
        innerPadding: 'p-3 gap-3',
        photoBg: 'bg-gray-800',
        filter: 'grayscale(1) contrast(1.2)'
    },
]

const FrameSelection = () => {
    const { setFrame } = usePhotobooth()
    const navigate = useNavigate()
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const handleSelectFrame = (frameId: string) => {
        setFrame(frameId)
        navigate('/upload')
    }

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return

        // Estimate clickable card width + gap
        // We can dynamically get the width of the first child if generic scrolling fails,
        // but a fixed smooth scroll usually snaps correctly with scroll-snap-type
        const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.6 : 300

        scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        })
    }

    return (
        <PageTransition className="w-full h-[100dvh] flex flex-col items-center justify-start md:justify-center pt-24 md:pt-0 relative overflow-hidden">

            <div className="absolute top-6 left-6 z-20">
                <BackButton />
            </div>

            <HomeButton />

            <div className="text-center mt-2 mb-2 flex-shrink-0 z-10 w-full px-4">
                <h1 className="text-2xl md:text-4xl font-bold text-theme-heading">Choose a Vibe</h1>
                <p className="text-xs md:text-sm text-theme-body mt-1 opacity-70">Swipe to find your style</p>
            </div>

            {/* Navigation Arrows for Mobile/Small Screens */}
            <div className="absolute top-1/2 left-2 z-20 -translate-y-1/2 md:hidden">
                <button
                    onClick={() => scroll('left')}
                    className="w-10 h-10 rounded-full bg-white/90 shadow-lg border border-gray-200 flex items-center justify-center text-gray-800 active:scale-90 transition-transform"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
            </div>
            <div className="absolute top-1/2 right-2 z-20 -translate-y-1/2 md:hidden">
                <button
                    onClick={() => scroll('right')}
                    className="w-10 h-10 rounded-full bg-white/90 shadow-lg border border-gray-200 flex items-center justify-center text-gray-800 active:scale-90 transition-transform"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Horizontal Scroll Container */}
            <div
                ref={scrollContainerRef}
                className="w-full flex-1 flex items-center overflow-x-auto px-8 md:px-12 pb-4 scrollbar-hide snap-x snap-mandatory"
            >
                <div className="flex flex-row items-center gap-6 md:gap-12 mx-auto min-w-min">
                    {frames.map((frame, i) => (
                        <motion.button
                            key={frame.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleSelectFrame(frame.id)}
                            className="flex flex-col items-center gap-3 group snap-center flex-shrink-0"
                        >
                            <div
                                className={`relative h-[55vh] md:h-[50vh] max-h-[600px] aspect-[1/3] ${frame.bg} ${frame.border} shadow-xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 flex flex-col ${frame.innerPadding} rounded-sm overflow-hidden`}
                            >
                                {/* Simulated Photos with Filter Preview */}
                                {[1, 2, 3, 4].map((box) => (
                                    <div key={box} className={`w-full h-full overflow-hidden relative`}>
                                        <div className={`w-full h-full ${frame.photoBg} relative`} style={{ filter: frame.filter }}>
                                            <img
                                                src="/src/assets/portrait_woman_color.png"
                                                alt="Placeholder"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                            {/* Subtle gradient pattern to mimic photo texture */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center px-6 py-2 rounded-full shadow-sm theme-card">
                                <span className="block font-semibold text-sm md:text-base text-theme-heading">
                                    {frame.name}
                                </span>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </PageTransition>
    )
}

export default FrameSelection
