export interface Artist {
  id: string;
  name: string;
  genre: string;
  shortBio: string;
  imageUrl: string;
  socialLinks: {
    spotify?: string;
    instagram?: string;
    youtube?: string;
  };
}

export const mockArtists: Artist[] = [
  {
    id: "1",
    name: "Artista Ejemplo",
    genre: "Electrónica",
    shortBio: "Productor y DJ con más de 5 años en la escena local.",
    imageUrl: "/placeholder.jpg",
    socialLinks: {
      instagram: "https://instagram.com",
      spotify: "https://spotify.com"
    }
  },
  // Aquí agregaremos más artistas cuando tu amigo responda
];
