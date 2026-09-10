import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Artist } from "@/data/artists";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function SpotifyIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <article className="artist-card">
      <div className="artist-image">
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
                {name === "spotify" && <SpotifyIcon size={14} />}
                {name === "instagram" && <InstagramIcon size={14} />}
                {name}
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
