import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 text-center">
      <Image 
        src="/lunar_logo_nobg.png" 
        alt="Lunar Music" 
        width={150} 
        height={150} 
        className="mb-8 invert brightness-0 opacity-50" 
      />
      <h1 className="text-6xl font-bold tracking-widest text-zinc-100 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-zinc-300 mb-6 uppercase tracking-wider">
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
