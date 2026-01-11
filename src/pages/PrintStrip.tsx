import { useRef, useState, useEffect } from 'react'
import { toPng } from 'html-to-image'
import BackButton from '../components/BackButton'
import PageTransition from '../components/PageTransition'
import { usePhotobooth } from '../context/PhotoboothContext'
import { Download, RefreshCw, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { frames } from './FrameSelection'

const PrintStrip = () => {
    const { photos, frame: frameId, clearPhotos } = usePhotobooth()
    const stripRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    // States for the "Developing" process
    const [status, setStatus] = useState<'developing' | 'ready' | 'error'>('developing')
    const [finalImage, setFinalImage] = useState<string | null>(null)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const config = frames.find(f => f.id === frameId) || frames[0]
    const textColor = (config.id.includes('black') || config.id.includes('film')) ? 'text-white' : 'text-gray-900'

    // Auto-generate on mount
    useEffect(() => {
        let mounted = true

        const generate = async () => {
            // Wait for images to load + fonts
            await new Promise(r => setTimeout(r, 1500))

            if (!stripRef.current) {
                console.error("Ref is null")
                return
            }

            try {
                // Generate the image
                // skipFonts: true is CRITICAL here to prevent the "trim" error
                // It stops html-to-image from trying to parse web fonts manually
                const dataUrl = await toPng(stripRef.current, {
                    cacheBust: true,
                    pixelRatio: 2,
                    quality: 0.95,
                    skipAutoScale: true,
                    skipFonts: true
                })

                if (mounted) {
                    setFinalImage(dataUrl)
                    setStatus('ready')
                }
            } catch (err: any) {
                console.error("Failed to generate strip full error:", err)
                if (mounted) {
                    setErrorMessage(err.message || 'Unknown error')
                    setStatus('error')
                }
            }
        }

        generate()

        return () => { mounted = false }
    }, [frameId, photos])

    const downloadImage = () => {
        if (!finalImage) return
        const link = document.createElement('a')
        link.download = `mysketchbooth-${Date.now()}.png`
        link.href = finalImage
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleRetake = () => {
        clearPhotos()
        navigate('/select')
    }

    return (
        <PageTransition className="w-full min-h-[100dvh] flex flex-col items-center p-4 pt-4 relative overflow-x-hidden">
            <div className="absolute top-6 left-6 z-20">
                <BackButton />
            </div>

            <div className="theme-card md:px-16 md:py-12 px-6 py-8 rounded-[2rem] flex flex-col items-center gap-8 my-auto w-full max-w-2xl text-center relative z-10 mt-20 md:mt-0">

                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-theme-heading mb-2">
                        {status === 'developing' && 'Developing...'}
                        {status === 'ready' && 'Your Strip is Ready!'}
                        {status === 'error' && 'Darkroom Error'}
                    </h1>
                    {status === 'ready' && (
                        <p className="text-theme-body text-sm">Long-press photo or click Download</p>
                    )}
                </div>

                {/* State: Developing (Loading) */}
                {status === 'developing' && (
                    <div className="flex flex-col items-center justify-center p-12 bg-white/50 rounded-2xl border border-white/60">
                        <Loader2 className="w-12 h-12 animate-spin mb-4" style={{ color: 'var(--col-primary)' }} />
                        <p className="text-theme-body font-mono text-sm">Processing your look...</p>
                    </div>
                )}

                {/* State: Ready (Show Image) */}
                {status === 'ready' && finalImage && (
                    <div className="relative group animate-in fade-in zoom-in duration-500">
                        <img
                            src={finalImage}
                            alt="Final Photostrip"
                            className="w-auto h-auto max-w-full max-h-[60vh] rounded-sm shadow-2xl ring-4 ring-white"
                        />
                        <div className="mt-3 text-xs text-theme-body font-mono">
                            (Image saved to memory)
                        </div>
                    </div>
                )}

                {/* State: Error */}
                {status === 'error' && (
                    <div className="p-8 bg-red-50 text-red-600 rounded-xl border border-red-200 max-w-md">
                        <p className="font-bold mb-2">Oops! We couldn't generate the strip.</p>
                        <p className="text-xs font-mono bg-red-100 p-2 rounded mb-4 overflow-x-auto">
                            {errorMessage}
                        </p>
                        <button onClick={() => window.location.reload()} className="px-4 py-2 bg-red-100 hover:bg-red-200 rounded-lg text-sm font-bold transition-colors">
                            Try Again
                        </button>
                    </div>
                )}

                {/* Actions */}
                {status === 'ready' && (
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm px-4 mt-2">
                        <button
                            onClick={handleRetake}
                            className="btn-theme-secondary flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold"
                        >
                            <RefreshCw className="w-5 h-5" />
                            New Booth
                        </button>

                        <button
                            onClick={downloadImage}
                            className="btn-theme-primary flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold"
                        >
                            <Download className="w-5 h-5" />
                            Download
                        </button>
                    </div>
                )}
            </div>

            {/* 
                THE SOURCE ELEMENT
                1. Fixed z-index -50 to hide from user but visible to DOM
                2. Explicit width
            */}
            <div className="fixed top-0 left-0 -z-50 opacity-0 pointer-events-none">
                <div
                    ref={stripRef}
                    className={`flex flex-col ${config.bg} ${config.innerPadding}`}
                    style={{ width: '320px' }} // Explicit width is key
                >
                    {photos.map((photo, index) => (
                        <div key={index} className="w-full aspect-[4/3] overflow-hidden bg-gray-100 relative">
                            <img
                                src={photo}
                                alt={`capture-${index}`}
                                className="w-full h-full object-cover block"
                                style={{ filter: config.filter }}
                            />
                        </div>
                    ))}
                    <div className={`text-center font-mono ${textColor} pt-4 pb-2`}>
                        <span className="text-[10px] tracking-[0.15em] uppercase font-bold block flex items-center justify-center gap-1">
                            Little Photo Studio
                        </span>
                        <span className="text-[9px] opacity-70 font-light block mt-1">
                            {new Date().toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>

        </PageTransition>
    )
}

export default PrintStrip
