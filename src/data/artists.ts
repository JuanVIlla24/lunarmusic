export interface Artist {
  id: string;
  name: string;
  genre: string;
  shortBio: string;
  imageUrl: string;
  socialLinks: { spotify?: string; instagram?: string; youtube?: string };
}

// Add confirmed artist information and photos when supplied by the agency.
export const artists: Artist[] = [];
