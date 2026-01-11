import React from 'react'
import BackButton from '../components/BackButton'

const PrivacyPolicy = () => {
    return (
        <div className="relative w-full min-h-[100dvh] p-4 md:p-8">
            <BackButton />
            <div className="max-w-4xl mx-auto pt-16 px-6 sm:px-8 md:px-12 lg:px-16">
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
                </div>
                <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-6">
                    <section>
                        <p>This Privacy Policy explains how the website collects, uses, and safeguards your information when you use the free online vintage photobooth service.</p>
                    </section>
                    <section>
                        <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Data Collection and Storage</h2>
                        <h3 className="text-base md:text-lg font-medium text-gray-800 mb-2 mt-4">What The Website Does NOT Store</h3>
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Photos and Images:</strong> All photos taken through the photobooth are processed locally in your browser. It does not store, save, or transmit any of your photos to any servers/databases.</li>
                            <li><strong>Personal Information:</strong> The website does not collect or store any personal information such as names, email addresses, or contact details.</li>
                        </ul>
                        <h3 className="text-base md:text-lg font-medium text-gray-800 mb-2 mt-4">What The Website DOES Collect</h3>
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Analytics Data:</strong> The website uses Vercel Analytics which collects anonymous data including page views, device type, and browser info. No cookies are used and visitor sessions are discarded after 24 hours.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2">How The Website Uses Your Data</h2>
                        <h3 className="text-base md:text-lg font-medium text-gray-800 mb-2">Analytics</h3>
                        <p>The analytics data helps the website understand user interactions, improve performance, and make informed decisions about feature development.</p>
                        <h3 className="text-base md:text-lg font-medium text-gray-800 mb-2 mt-4">Local Processing</h3>
                        <p>All photo processing happens entirely in your browser - camera access, image editing, filter application, and downloads are all handled locally on your device.</p>
                    </section>
                    <section>
                        <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Third-Party Services</h2>
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Vercel Analytics:</strong> Privacy-focused analytics that doesn't use cookies, doesn't collect personal identifiers, and automatically discards visitor sessions after 24 hours.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Your Rights</h2>
                        <p>You have the right to use my service without providing personal information, disable JavaScript to prevent analytics collection, and use browser settings to block cookies.</p>
                    </section>
                    <section>
                        <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Data Security</h2>
                        <ul className="list-disc pl-4 space-y-1">
                            <li>All data transmission uses HTTPS encryption</li>
                            <li>No personal data is stored on any server</li>
                            <li>Photos remain on your device unless you choose to download them</li>
                            <li>Analytics data is processed by Vercel's secure infrastructure</li>
                        </ul>
                    </section>
                    <section className="mb-16">
                        <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Contact Us</h2>
                        <p>If you have questions about this Privacy Policy, please contact me at visarchivess@gmail.com or @visarchivess on <a href="https://www.instagram.com/visarchivess" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 underline">Instagram</a> and <a href="https://www.tiktok.com/@visarchivess" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 underline">TikTok</a>.</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
