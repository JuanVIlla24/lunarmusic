export interface Artist {
  id: string;
  name: string;
  genre: string;
  shortBio: string;
  imageUrl: string;
  socialLinks: { spotify?: string; instagram?: string; youtube?: string };
}

export const artists: Artist[] = [
  {
    id: "valsian",
    name: "VALSIAN",
    genre: "Pop",
    shortBio: "Dúo pop de la Ciudad de México 🇲🇽",
    imageUrl: "/artists/petite_amie.jpeg",
    socialLinks: {
      spotify: "https://open.spotify.com/artist/4f8uwOhcAdzozAkqq6AEwa?si=ekrSL-riQEuESROdLsmzyg",
    }
  },
  {
    id: "petite-amie",
    name: "PETITE AMIE",
    genre: "Dream Pop",
    shortBio: "Banda dream pop en francés.",
    imageUrl: "/artists/valsian.png",
    socialLinks: {
      spotify: "https://open.spotify.com/artist/79C3hxvHZM7O041gO8YQmw?si=tNnZPa0ZSFCsHa6gJ7UCpw",
      instagram: "https://www.instagram.com/__petiteamie",
    }
  },
  {
    id: "los-vaguens",
    name: "LOS VAGUENS",
    genre: "Rock / Pop",
    shortBio: "Banda mexicana.",
    imageUrl: "/artists/manager.png",
    socialLinks: {
      spotify: "https://open.spotify.com/artist/0cE1FRPmspxRadK6z3zQb2",
      instagram: "https://www.instagram.com/losvaguens"
    }
  }
];
