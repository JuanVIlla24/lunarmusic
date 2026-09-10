import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Artist } from "@/data/artists";

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <article className="artist-card">
      <div className="artist-photo">
        <Image
          src={artist.imageUrl}
          alt={artist.name}
          fill
          sizes="(max-width: 640px) 82vw, (max-width: 1000px) 45vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="artist-info">
        <span className="eyebrow">{artist.genre}</span>
        <h3>{artist.name}</h3>
        <p>{artist.shortBio}</p>
        <div className="artist-socials">
          {Object.entries(artist.socialLinks)
            .filter(([, url]) => url)
            .map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} de ${artist.name}`}
              >
                {name}
                <ArrowUpRight size={13} />
              </a>
            ))}
        </div>
        <a
          className="artist-booking"
          href={`mailto:contacto@lunarmusic.com.mx?subject=${encodeURIComponent(`Booking — ${artist.name}`)}`}
        >
          Contratar <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
