import React from 'react'
import BackButton from '../components/BackButton'

const FAQ = () => {
    const faqs = [
        {
            q: "How does the online photobooth work?",
            a: "Click \"Enter\" on the homepage, allow camera access when prompted, and follow the on-screen instructions to take your photos. The photobooth will guide you through the process and create a vintage-style photostrip that you can download instantly."
        },
        {
            q: "Do I need to create an account or sign up?",
            a: "No! The photobooth is completely free to use and doesn't require any registration, account creation, or personal information. Just visit the site and start taking photos!"
        },
        {
            q: "Are my photos stored or saved anywhere?",
            a: "No, your photos are never stored anywhere. All photo processing happens locally in your browser, and photos only exist on your device unless you choose to download them. The website does not have access to any of your images."
        },
        {
            q: "What devices and browsers are supported?",
            a: "The photobooth works on most modern devices including phones, tablets, and computers. It's compatible with Chrome, Safari, Firefox, and Edge browsers. You'll need a working camera and internet connection."
        },
        {
            q: "How do I download my photostrip?",
            a: "After taking your photos, you'll see a preview of your photo strip. Click the download button to save it to your device and on mobile devices and tables, you also can press and hold on the image to save directly to your photo library! The image will be saved in high quality and ready to print or share."
        },
        {
            q: "Is there a limit to how many photos I can take?",
            a: "No limits! You can use the photobooth as many times as you want. Each session creates a new photostrip, so feel free to experiment with different poses!"
        },
        {
            q: "What if my camera isn't working?",
            a: "Make sure you've granted camera permissions when prompted. If you're still having issues, try refreshing the page or try using a different browser. The photobooth needs camera access to function."
        },
        {
            q: "Can I share my photos on social media?",
            a: "Absolutely! Once you download your photostrip, you can share it anywhere you like - Instagram, TikTok, Twitter, or any other platform. I would love to see your photostrips so please feel free to tag or message me with with your photos @visarchivess on Instagram or TikTok !"
        },
        {
            q: "How can I get featured on the homepage?",
            a: "Send me a DM with your photobooth photostrip on Instagram or TikTok and you might see yourself featured on the homepage!"
        },
        {
            q: "Are you going to be making an app version of the photobooth?",
            a: "No, I am not currently planning to make an app version of the photobooth but you can add the website to your home screen to make it easier to access. I have a tutorial on how to do so on my TikTok linked here !"
        },
        {
            q: "Is it free to use the website?",
            a: "Yes, this website will be kept free and not monetized in any way as I want to keep it available for everyone to use and enjoy!"
        },
        {
            q: "Would you accept any form of payment or donations for the website?",
            a: "No, I am not accepting form of payment or donations for this project but if you would like to show your support, feel free to follow me or shoot me a message on Instagram or TikTok at @visarchivess, I would really appreciate it!"
        },
        {
            q: "Would you make a customized online photobooth for my event?",
            a: "Unfortunately, I am currently not accepting any requests at the moment, thank you for understanding!"
        }
    ]

    return (
        <div className="relative w-full min-h-[100dvh] p-4 md:p-8">
            <BackButton />
            <div className="max-w-4xl mx-auto pt-16 px-6 sm:px-8 md:px-12 lg:px-16">
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">FAQ</h1>
                </div>
                <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-base md:text-lg font-semibold text-gray-800">Q: {faq.q}</h3>
                            <p className="text-gray-600">A: {faq.a}</p>
                        </div>
                    ))}
                    <div className="space-y-2 mb-16"></div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
