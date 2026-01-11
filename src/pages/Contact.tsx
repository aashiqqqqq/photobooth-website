import React from 'react'
import BackButton from '../components/BackButton'

const Contact = () => {
    return (
        <div className="relative w-full min-h-[100dvh] p-4 md:p-8">
            <BackButton />
            <div className="max-w-3xl mx-auto pt-16 px-6 sm:px-8 md:px-12 lg:px-16">
                <div className="text-center mb-8 md:mb-10">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-5">Contact Me</h1>
                    <p className="text-gray-600">Have a question, feedback, or suggestion? I'd love to hear from you!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="space-y-4">
                        <h2 className="text-base md:text-lg font-semibold text-gray-800">Get in touch</h2>
                        <div className="text-gray-700 space-y-2">
                            <p>Email: <a href="mailto:visarchivess@gmail.com" className="text-gray-500 hover:text-gray-800 underline">visarchivess@gmail.com</a></p>
                            <p>Instagram: <a href="https://www.instagram.com/visarchivess" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 underline">@visarchivess</a></p>
                            <p>TikTok: <a href="https://www.tiktok.com/@visarchivess" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 underline">@visarchivess</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
