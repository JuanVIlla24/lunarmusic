import React from "react";
import Image from "next/image";
import { Artist } from "@/data/artists";
import { Button } from "./Button";

interface ArtistCardProps {
  artist: Artist;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-secondary transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/20">
      {/* Aspect ratio container for the image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
        <Image
          src={artist.imageUrl}
          alt={artist.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-widest text-accent uppercase">
          {artist.genre}
        </span>
        <h3 className="text-2xl font-bold text-white">{artist.name}</h3>
        <p className="text-sm text-zinc-300 line-clamp-2">{artist.shortBio}</p>
        
        <div className="mt-4 flex gap-3 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Button variant="primary" size="sm" className="w-full">
            Ver Perfil
          </Button>
        </div>
      </div>
    </div>
  );
};
