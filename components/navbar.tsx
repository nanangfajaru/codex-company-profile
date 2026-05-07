'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <a href="#home" className="font-serif text-xl font-bold text-brownLight dark:text-orange-200">Ayna Food</a>
        <div className="hidden gap-5 text-sm md:flex">
          {['about', 'menu', 'why-us', 'testimonials', 'gallery', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} className="capitalize transition hover:text-orangeSoft">{item.replace('-', ' ')}</a>
          ))}
        </div>
        <button onClick={() => setDark((v) => !v)} aria-label="toggle dark mode" className="rounded-full p-2 hover:bg-white/40">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
}
