import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return `small-caps hover:text-white transition-colors duration-300 ${
      location.pathname === path ? 'text-white border-b border-gold' : 'text-white/70'
    }`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-gold/10 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <Link to="/" className="title-text text-xl md:text-2xl tracking-wide text-gold hover:text-gold-light transition-colors">
        Reina Deluxe
      </Link>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <Link to="/" className={getLinkClass('/')}>Accueil</Link>
        <Link to="/forfaits" className={getLinkClass('/forfaits')}>Forfaits & Honoraires</Link>
        <Link to="/modalites" className={getLinkClass('/modalites')}>Modalités</Link>
        <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
      </div>
    </nav>
  );
}
