import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'

const HomeButton = () => {
    const navigate = useNavigate()
    const location = useLocation()

    // Don't show on home page
    if (location.pathname === '/') return null

    return (
        <button
            onClick={() => navigate('/')}
            className="fixed top-5 md:top-10 right-5 md:right-10 z-50 px-3 py-1.5 bg-gray-100 border-2 border-gray-800 font-medium text-gray-800 text-sm hover:bg-gray-900 hover:text-white transition-colors flex items-center gap-1.5 group"
            title="Go to Home"
        >
            <HomeIcon className="w-4 h-4" />
            <span className="hidden md:inline">Home</span>
        </button>
    )
}

export default HomeButton
