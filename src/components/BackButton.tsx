import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const BackButton = () => {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => navigate(-1)}
            className="fixed top-5 md:top-10 left-5 md:left-10 z-50 px-3 py-1.5 bg-gray-100 border-2 border-gray-800 font-medium text-gray-800 text-sm hover:bg-gray-900 hover:text-white transition-colors flex items-center gap-1.5 group"
        >
            <ArrowLeft className="w-4 h-4 transform transition-transform group-hover:-translate-x-1" />
            back
        </button>
    )
}

export default BackButton
