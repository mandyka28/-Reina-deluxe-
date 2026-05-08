export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-gold/10 mt-auto">
      <p className="text-xs text-white/30 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Reina Deluxe Agence. Discrétion absolue.
      </p>
    </footer>
  );
}
