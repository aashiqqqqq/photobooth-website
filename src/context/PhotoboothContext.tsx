import React, { createContext, useContext, useState, ReactNode } from 'react'

interface PhotoboothContextType {
    frame: string
    setFrame: (frame: string) => void
    photos: string[]
    addPhoto: (photo: string) => void
    clearPhotos: () => void
    isUploading: boolean
    setIsUploading: (isUploading: boolean) => void
}

const PhotoboothContext = createContext<PhotoboothContextType | undefined>(undefined)

export const PhotoboothProvider = ({ children }: { children: ReactNode }) => {
    const [frame, setFrame] = useState<string>('classic')
    const [photos, setPhotos] = useState<string[]>([])
    const [isUploading, setIsUploading] = useState(false)

    const addPhoto = (photo: string) => {
        setPhotos(prev => [...prev, photo])
    }

    const clearPhotos = () => {
        setPhotos([])
    }

    return (
        <PhotoboothContext.Provider value={{ frame, setFrame, photos, addPhoto, clearPhotos, isUploading, setIsUploading }}>
            {children}
        </PhotoboothContext.Provider>
    )
}

export const usePhotobooth = () => {
    const context = useContext(PhotoboothContext)
    if (context === undefined) {
        throw new Error('usePhotobooth must be used within a PhotoboothProvider')
    }
    return context
}
