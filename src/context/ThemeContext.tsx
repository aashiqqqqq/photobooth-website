import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'nikaah' | 'vintage'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        // Check local storage or default to 'nikaah'
        const saved = localStorage.getItem('app-theme')
        return (saved === 'nikaah' || saved === 'vintage') ? saved : 'nikaah'
    })

    useEffect(() => {
        // Update HTML class
        const root = window.document.documentElement
        root.classList.remove('theme-nikaah', 'theme-vintage')
        root.classList.add(`theme-${theme}`)

        // Save to local storage
        localStorage.setItem('app-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'nikaah' ? 'vintage' : 'nikaah')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
