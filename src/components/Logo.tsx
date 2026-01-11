import React from 'react'
import { Camera } from 'lucide-react'

interface LogoProps {
    className?: string
    iconSize?: number
    textSize?: string
}

const Logo: React.FC<LogoProps> = ({ className = "", iconSize = 24, textSize = "text-xl" }) => {
    return (
        <div className={`flex items-center gap-2 font-bold text-gray-900 ${className}`}>
            <div className="relative">
                <Camera size={iconSize} strokeWidth={1.5} />
                {/* Little artistic dot */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </div>
            <span className={`${textSize} tracking-tight font-serif italic relative`}>
                Little Photo Studio
            </span>
        </div>
    )
}

export default Logo
