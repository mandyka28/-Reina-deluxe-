import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Forfaits from "./pages/Forfaits";
import Modalites from "./pages/Modalites";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-gold/30 selection:text-gold-light flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forfaits" element={<Forfaits />} />
            <Route path="/modalites" element={<Modalites />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
