import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Webcam from 'react-webcam'
import { motion, AnimatePresence } from 'framer-motion'
import BackButton from '../components/BackButton'
import PageTransition from '../components/PageTransition'
import { usePhotobooth } from '../context/PhotoboothContext'
import { Upload, ArrowRight } from 'lucide-react'

const Capture = () => {
    const { isUploading, addPhoto, photos, clearPhotos } = usePhotobooth()
    const navigate = useNavigate()
    const webcamRef = useRef<Webcam>(null)
    const [countdown, setCountdown] = useState<number | null>(null)
    const [uploadedImage, setUploadedImage] = useState<string | null>(null)

    // Clear previous photos on mount
    useEffect(() => {
        clearPhotos()
    }, []) // eslint-disable-line

    useEffect(() => {
        if (photos.length === 4) {
            setTimeout(() => {
                navigate('/printStrip')
            }, 1000)
        }
    }, [photos, navigate])

    const finalisePhotos = () => {
        navigate('/printStrip')
    }

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot()
        if (imageSrc) {
            addPhoto(imageSrc)
        }
    }, [webcamRef, addPhoto])

    const startCountdown = () => {
        if (photos.length >= 4) return
        setCountdown(3)
    }

    // Alias for the button
    const handleCapture = startCountdown

    useEffect(() => {
        if (countdown === null) return

        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
            return () => clearTimeout(timer)
        } else {
            capture()
            setCountdown(null)
        }
    }, [countdown, capture])

    // Auto-trigger next photo in sequence
    // CHANGED: Reduced delay from 2000 to 1000ms
    useEffect(() => {
        if (photos.length > 0 && photos.length < 4 && countdown === null && !isUploading) {
            const nextTimer = setTimeout(() => {
                setCountdown(3)
            }, 1000)
            return () => clearTimeout(nextTimer)
        }
    }, [photos, countdown, isUploading])


    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            Array.from(e.target.files).forEach(file => {
                const reader = new FileReader()
                reader.onloadend = () => {
                    if (typeof reader.result === 'string') {
                        setUploadedImage(reader.result) // Show preview
                        addPhoto(reader.result)
                    }
                }
                reader.readAsDataURL(file)
            })
        }
    }

    return (
        <PageTransition className="flex flex-col items-center justify-center min-h-[100dvh] py-16 px-4 relative overflow-y-auto">
            <div className="absolute top-6 left-6 z-20">
                <BackButton />
            </div>

            <div className="theme-card w-full max-w-6xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-8 relative z-10">

                {/* Camera Viewfinder */}
                <div className="w-full max-w-2xl relative">
                    <div className="relative w-full max-w-2xl aspect-[3/4] md:aspect-[4/3] bg-black rounded-lg overflow-hidden shadow-2xl border-4" style={{ borderColor: 'var(--col-primary)' }}>
                        {!isUploading ? (
                            <>
                                <Webcam
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    videoConstraints={{ facingMode: 'user' }}
                                    className="w-full h-full object-cover"
                                />

                                {/* Countdown Overlay */}
                                <AnimatePresence>
                                    {countdown !== null && (
                                        <motion.div
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1.5, opacity: 1 }}
                                            exit={{ scale: 2, opacity: 0 }}
                                            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
                                        >
                                            <span className="text-9xl font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-heading">
                                                {countdown}
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        ) : (
                            /* File Upload Preview */
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 relative group">
                                {uploadedImage ? (
                                    <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="text-center p-8">
                                        <Upload className="w-16 h-16 mx-auto mb-4 text-[#78350f] opacity-50" />
                                        <p className="text-[#78350f] font-bold">Click below to select file</p>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Controls Side */}
                <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full">
                    {/* Photo Progress */}
                    <div className="flex flex-col gap-2 w-full max-w-xs">
                        <div className="flex justify-between text-theme-heading text-sm mb-1 uppercase tracking-wider">
                            <span>Exposures</span>
                            <span>{photos.length} / 4</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className={`aspect-[4/3] rounded border-2 ${i < photos.length ? 'border-[#2a2a2a] bg-[#2a2a2a]' : 'border-gray-300 bg-gray-50 border-dashed'}`}>
                                    {i < photos.length && <img src={photos[i]} className="w-full h-full object-cover opacity-90 grayscale" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shutter Button */}
                    <div className="flex flex-col items-center gap-4">
                        {!isUploading ? (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleCapture}
                                disabled={countdown !== null || photos.length >= 4}
                                className="w-24 h-24 rounded-full bg-[#f43f5e] shadow-xl flex items-center justify-center border-4 border-white transition-all disabled:opacity-50 hover:bg-[#e11d48]"
                            >
                                <div className="w-20 h-20 rounded-full border-2 border-white/30" />
                            </motion.button>
                        ) : (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={finalisePhotos}
                                disabled={photos.length === 0}
                                className="btn-theme-primary w-full max-w-xs py-4 text-xl"
                            >
                                Process Film
                            </motion.button>
                        )}

                        {!isUploading && (
                            <p className="text-theme-body font-mono text-sm opacity-60">
                                {countdown !== null ? 'Capturing...' : 'Press to Capture'}
                            </p>
                        )}
                    </div>

                    {/* Finalize Button (Camera Mode) */}
                    {!isUploading && photos.length > 0 && (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={finalisePhotos}
                            className="btn-theme-primary px-8 py-3 text-lg w-full max-w-xs"
                        >
                            Develop Photos ({photos.length}) <ArrowRight className="inline-block w-5 h-5 ml-2" />
                        </motion.button>
                    )}
                </div>

            </div>
        </PageTransition>
    )
}

export default Capture
