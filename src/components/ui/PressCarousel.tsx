"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function PressCarousel({ images }: { images: { src: string; caption: string }[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const openModal = (index: number) => {
    setModalIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIndex(null);
    document.body.style.overflow = "";
  };

  const modalNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % images.length);
    }
  };

  const modalPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images.map((img, index) => (
              <div 
                className="embla__slide" 
                key={index} 
                onClick={() => openModal(index)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={`/conciertos/${img.src}`}
                  alt={`Noticia ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  padding: "15px",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  fontSize: "14px",
                  textAlign: "center",
                  borderTop: "3px solid var(--primary)"
                }}>
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Controls */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <button 
              onClick={scrollPrev}
              style={{ width: "40px", height: "40px", border: "2px solid var(--primary)", background: "var(--background)", fontWeight: "900" }}
            >
              ←
            </button>
            <button 
              onClick={scrollNext}
              style={{ width: "40px", height: "40px", border: "2px solid var(--primary)", background: "var(--background)", fontWeight: "900" }}
            >
              →
            </button>
          </div>
          
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            {images.map((_, index) => (
              <div 
                key={index} 
                style={{ 
                  width: "10px", 
                  height: "10px", 
                  border: "2px solid var(--primary)",
                  background: index === selectedIndex ? "var(--accent)" : "transparent"
                }} 
              />
            ))}
          </div>
        </div>
      </div>

      {modalIndex !== null && (
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
            onClick={modalPrev}
            style={{ position: "absolute", left: "20px", background: "rgba(255,255,255,0.1)", border: "none", color: "white", cursor: "pointer", padding: "10px", borderRadius: "50%", zIndex: 10000 }}
          >
            <ChevronLeft size={32} />
          </button>
          
          <div style={{ position: "relative", width: "90%", height: "90%", maxWidth: "1200px" }}>
            <Image
              src={`/conciertos/${images[modalIndex].src}`}
              alt={`Noticia ${modalIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="100vw"
            />
          </div>

          <button 
            onClick={modalNext}
            style={{ position: "absolute", right: "20px", background: "rgba(255,255,255,0.1)", border: "none", color: "white", cursor: "pointer", padding: "10px", borderRadius: "50%", zIndex: 10000 }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
}
