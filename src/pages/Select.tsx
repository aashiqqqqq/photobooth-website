import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import BackButton from '../components/BackButton'
import PageTransition from '../components/PageTransition'
import { usePhotobooth } from '../context/PhotoboothContext'
import { Camera, Upload } from 'lucide-react'

const Select = () => {
    const { setIsUploading } = usePhotobooth()
    const navigate = useNavigate()

    const handleStartCamera = () => {
        setIsUploading(false)
        navigate('/frameSelection')
    }

    const handleStartUpload = () => {
        setIsUploading(true)
        navigate('/frameSelection')
    }

    return (
        <PageTransition className="flex items-center justify-center min-h-[100dvh] px-4 py-20 relative">
            <div className="absolute top-6 left-6 z-20">
                <BackButton />
            </div>

            <div className="theme-card w-full max-w-4xl p-8 md:p-12 flex flex-col items-center gap-10">

                <div className="text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-theme-heading">How would you like to start?</h1>
                    <p className="text-theme-body">Choose your source</p>
                </div>

                {/* Content Container */}
                <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-stretch z-10 px-4">

                    {/* Camera Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleStartCamera}
                        className="flex-1 cursor-pointer group"
                    >
                        <div className="theme-card h-full p-8 flex flex-col items-center justify-center gap-6 bg-white hover:border-[#2a2a2a] transition-colors">
                            <div className="w-20 h-20 rounded-full bg-[#f4f4f5] text-[#2a2a2a] flex items-center justify-center group-hover:bg-[#2a2a2a] group-hover:text-white transition-colors duration-300">
                                <Camera className="w-10 h-10" />
                            </div>
                            <div className="text-center">
                                <h2 className="text-2xl font-bold mb-2 text-theme-heading text-[#2a2a2a]">Use Camera</h2>
                                <p className="text-theme-body text-sm opacity-70">Take photos instantly</p>
                            </div>
                            <div className="w-full h-px bg-gray-200 group-hover:bg-[#2a2a2a] transition-colors mt-4"></div>
                        </div>
                    </motion.div>

                    {/* Upload Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleStartUpload}
                        className="flex-1 cursor-pointer group"
                    >
                        <div className="theme-card h-full p-8 flex flex-col items-center justify-center gap-6 bg-white hover:border-[#2a2a2a] transition-colors">
                            <div className="w-20 h-20 rounded-full bg-[#f4f4f5] text-[#2a2a2a] flex items-center justify-center group-hover:bg-[#2a2a2a] group-hover:text-white transition-colors duration-300">
                                <Upload className="w-10 h-10" />
                            </div>
                            <div className="text-center">
                                <h2 className="text-2xl font-bold mb-2 text-theme-heading text-[#2a2a2a]">Upload Photos</h2>
                                <p className="text-theme-body text-sm opacity-70">From your library</p>
                            </div>
                            <div className="w-full h-px bg-gray-200 group-hover:bg-[#2a2a2a] transition-colors mt-4"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </PageTransition>
    )
}

export default Select
