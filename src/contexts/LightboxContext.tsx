import React, { createContext, useContext, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface LightboxContextType {
  openLightbox: (images: string[], startIndex: number) => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const openLightbox = (newImages: string[], startIndex: number = 0) => {
    setImages(newImages);
    setIndex(startIndex);
    setOpen(true);
  };

  // Optional: basic styling to ensure the close button is visible
  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map(src => ({ src }))}
        animation={{ swipe: 250 }}
      />
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) throw new Error('useLightbox must be used within LightboxProvider');
  return context;
}
