import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const goToPrevious = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  return (
    <div>
      {/* Grid affichant images et vidéos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative rounded-lg overflow-hidden h-48 cursor-pointer"
            onClick={() => openLightbox(index)}
            whileHover={{ scale: 1.03 }}
          >
            {image.endsWith('.mp4') ? (
              <video
                src={image}
                muted
                autoPlay
                loop
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={image}
                alt={`Image galerie ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
            {/* Overlay léger au survol */}
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeLightbox}
          >
            {/* Bouton fermer */}
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Fermer la galerie"
            >
              <X size={24} />
            </button>

            {/* Bouton précédent */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              aria-label="Image précédente"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Bouton suivant */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              aria-label="Image suivante"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image ou vidéo affichée */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-11/12 h-5/6 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {images[selectedImageIndex].endsWith('.mp4') ? (
                <video
                  src={images[selectedImageIndex]}
                  controls
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <img
                  src={images[selectedImageIndex]}
                  alt={`Image pleine taille ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </motion.div>

            {/* Indicateur de position */}
            <div className="absolute bottom-4 text-white text-sm select-none">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;