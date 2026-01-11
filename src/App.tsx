import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Select from './pages/Select'
import FrameSelection from './pages/FrameSelection'
import Capture from './pages/Capture'
import PrintStrip from './pages/PrintStrip'
import { PhotoboothProvider } from './context/PhotoboothContext'
import HomeButton from './components/HomeButton'

function App() {
    const location = useLocation()

    return (
        <PhotoboothProvider>
            <div className="w-full min-h-screen relative overflow-hidden bg-gray-50">

                <HomeButton />

                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />

                        {/* Photobooth Routes */}
                        <Route path="/select" element={<Select />} />
                        <Route path="/frameSelection" element={<FrameSelection />} />
                        <Route path="/upload" element={<Capture />} />
                        <Route path="/printStrip" element={<PrintStrip />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </PhotoboothProvider>
    )
}

export default App
