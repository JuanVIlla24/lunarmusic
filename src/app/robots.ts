import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // We will probably have a hidden admin panel later
    },
    sitemap: 'https://lunarmusic.com.mx/sitemap.xml',
  };
}
