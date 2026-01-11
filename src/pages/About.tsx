import React from 'react'
import BackButton from '../components/BackButton'

const About = () => {
    return (
        <div className="relative w-full min-h-[100dvh] p-4 md:p-8">
            <BackButton />
            <div className="max-w-4xl mx-auto pt-16 px-6 sm:px-8 md:px-12 lg:px-16">
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">About Me</h1>
                </div>
                <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-8">
                    <div className="space-y-5">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800"></h3>
                        <p className="text-gray-600">
                            Hihi! 👋 I'm V and I made this online vintage photobooth just because there was no vintage photobooths near me and I wanted to join in on the fun from the comfort of my own home. I had a lot of fun making this little passion project of mine so I hope you enjoy using it as much as I did! I am also the only person working on this project in my spare time so it is not in any means perfect but please shoot me a message me if you have any feedback/suggestions/issues with the website at all.
                        </p>
                        <p className="text-gray-600">
                            I am still constantly adding new features and improving the website so feel free to follow me on @visarchivess on TikTok and Instagram (linked below!) to be the first to know about the latest updates and improvements to the website! I also sometimes make other content on there and might be working on other projects soon so make sure to check it out to be notified if anything new comes up :)
                        </p>

                        <div className="flex items-center justify-center gap-6 mt-8 mb-16">
                            <a href="https://www.tiktok.com/@visarchivess" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors" title="TikTok">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                            </a>
                            <a href="https://www.instagram.com/visarchivess" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors" title="Instagram">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
