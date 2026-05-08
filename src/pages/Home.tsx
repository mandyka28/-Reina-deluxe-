import { motion } from "motion/react";
import { Sparkles, Crown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-12">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ 
               background: 'radial-gradient(circle at 50% 40%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
             }} 
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="z-10 text-center flex flex-col items-center"
        >
          <div className="small-caps mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-gold/50"></span>
            Escorte Indépendante
            <span className="w-8 h-[1px] bg-gold/50"></span>
          </div>
          
          <h1 className="title-text text-5xl md:text-7xl lg:text-8xl mb-2 font-light tracking-tight">
            Reina Deluxe
          </h1>
          <h2 className="title-text text-3xl md:text-5xl text-white/50 italic mb-8">
            Agence
          </h2>

          <p className="max-w-md text-white/70 font-light text-sm md:text-base leading-relaxed mb-12">
            L'élégance à la rencontre de l'exception. Un service d'accompagnement exclusif, raffiné et sur mesure, basé dans la grande région de Québec.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contact"
              className="flex items-center gap-2 border border-gold/40 rounded-full px-8 py-3 text-sm font-light tracking-widest uppercase hover:bg-gold/10 transition-colors"
            >
              Organiser une rencontre
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy / Experience Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <Crown className="w-10 h-10 text-gold mb-6 stroke-1" />
            <h3 className="title-text text-3xl md:text-5xl mb-6">L'Art de <br/><span className="italic text-gold">la Compagnie</span></h3>
            <div className="w-12 h-[1px] bg-gold/30 mb-8"></div>
            <p className="text-white/70 font-light leading-relaxed mb-6">
              Je suis Reina, votre hôte et escorte indépendante. Mon approche est centrée sur l'authenticité, le raffinement et la création de moments inoubliables. Chaque rencontre est conçue pour répondre à vos désirs de compagnie dans un cadre respectueux et luxueux.
            </p>
            <p className="text-white/70 font-light leading-relaxed">
              Que ce soit pour un événement mondain, un dîner intime ou une parenthèse d'évasion, j'offre une présence élégante et une conversation captivante, garantissant votre entière satisfaction et la plus absolue des discrétions.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-t-full border border-gold/20 relative overflow-hidden bg-zinc-900 flex items-center justify-center group">
              <img 
                src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?q=80&w=1200&auto=format&fit=crop" 
                alt="Ambiance luxueuse"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="h-[40vh] min-h-[300px] relative w-full overflow-hidden border-y border-gold/5 mt-auto">
        <motion.div
           initial={{ scale: 1.1 }}
           whileInView={{ scale: 1 }}
           transition={{ duration: 10, ease: "linear" }}
           className="absolute inset-0 w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1549471186-de66d7ad1963?q=80&w=2000&auto=format&fit=crop"
            alt="Lustre luxueux"
            className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#050505] opacity-60 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h3 className="title-text text-3xl md:text-5xl text-gold/20 tracking-[0.3em] text-center font-light">S O P H I S T I C A T I O N</h3>
        </div>
      </section>
    </div>
  );
}
