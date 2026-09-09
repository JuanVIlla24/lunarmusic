import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4 text-center">
      <Image 
        src="/lunar_logo_nobg.png" 
        alt="Lunar Music" 
        width={150} 
        height={150} 
        className="mb-8 opacity-80 object-contain" 
      />
      <h1 className="text-6xl font-bold tracking-widest text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-secondary-foreground mb-6 uppercase tracking-wider">
        Página perdida en el espacio
      </h2>
      <p className="text-zinc-500 max-w-md mb-8">
        La URL a la que intentas acceder no existe o fue movida. Regresa a la base para seguir descubriendo talento.
      </p>
      <Link href="/">
        <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
          Volver al Inicio
        </Button>
      </Link>
    </div>
  );
}
