"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export function PressCarousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  return (
    <div style={{ position: "relative" }}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={`/conciertos/${src}`}
                alt={`Noticia ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
              />
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
  );
}
