"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function ImageGallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {images.map((img, i) => (
          <div 
            key={i} 
            onClick={() => openModal(i)}
            style={{ 
              position: 'relative', 
              aspectRatio: '1', 
              borderRadius: '0', // Brutalist
              overflow: 'hidden', 
              cursor: 'pointer',
              background: 'var(--primary)',
              border: '3px solid var(--primary)'
            }}
            className="gallery-thumb"
          >
            <Image
              src={`/conciertos/${img}`}
              alt={`Concierto ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
              style={{ objectFit: 'contain', transition: 'transform 0.3s ease' }}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div 
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <button 
            onClick={closeModal}
            style={{ position: "absolute", top: "20px", right: "20px", background: "none", border: "none", color: "white", cursor: "pointer", zIndex: 10000 }}
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={prevImage}
            style={{ position: "absolute", left: "20px", background: "rgba(255,255,255,0.1)", border: "none", color: "white", cursor: "pointer", padding: "10px", borderRadius: "50%", zIndex: 10000 }}
          >
            <ChevronLeft size={32} />
          </button>
          
          <div style={{ position: "relative", width: "90%", height: "90%", maxWidth: "1200px" }}>
            <Image
              src={`/conciertos/${images[selectedIndex]}`}
              alt={`Concierto ${selectedIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="100vw"
            />
          </div>

          <button 
            onClick={nextImage}
            style={{ position: "absolute", right: "20px", background: "rgba(255,255,255,0.1)", border: "none", color: "white", cursor: "pointer", padding: "10px", borderRadius: "50%", zIndex: 10000 }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
}
