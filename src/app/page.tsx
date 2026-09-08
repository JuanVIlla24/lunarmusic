import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white font-sans">
      <main className="flex flex-col items-center justify-center gap-8 text-center px-4">
        <Image src="/lunar_logo_nobg.png" alt="Lunar Music Logo" width={200} height={200} className="mb-4" />
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-zinc-100 uppercase drop-shadow-lg">
          Lunar Music
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide max-w-2xl">
          Booking & Management.
        </p>
        <div className="mt-8 border border-zinc-800 bg-zinc-950/50 rounded-full px-8 py-3 text-sm tracking-widest text-zinc-300">
          WEBSITE COMING SOON
        </div>
      </main>
      
      <footer className="absolute bottom-8 text-sm text-zinc-600">
        &copy; {new Date().getFullYear()} Lunar Music.
      </footer>
    </div>
  );
}
