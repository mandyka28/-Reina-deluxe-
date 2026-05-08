import { motion } from "motion/react";
import { Gem } from "lucide-react";

export default function Forfaits() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-12">
      {/* Packages Section */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="title-text text-4xl md:text-6xl mb-6">Les <span className="italic text-gold">Forfaits</span></h1>
          <div className="w-12 h-[1px] bg-gold/30 mx-auto mb-8"></div>
          <p className="text-white/70 font-light max-w-2xl mx-auto">
            Dix expériences distinctes conçues pour s'adapter à votre style de vie. Plusieurs autres forfaits existent, ces sélections représentent les demandes les plus prisées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-24">
          <PackageCard 
            title="Girlfriend Experience"
            desc="L'illusion parfaite (GFE). Complices, affectueux et sincère, simulant une véritable soirée en amoureux."
          />
          <PackageCard 
            title="Sexfriend Exclusif"
            desc="Une amitié récurrente avec bénéfices, sans attache émotionnelle mais dotée d'une grande complicité."
          />
          <PackageCard 
            title="Dîner Gastronomique"
            desc="Une compagne élégante pour vos sorties au restaurant, alliant conversation captivante et charme discret."
          />
          <PackageCard 
            title="Le 5 à 7 Chic"
            desc="L'évasion parfaite en fin d'après-midi ou après le travail pour décompresser en excellente compagnie."
          />
          <PackageCard 
            title="L'Évasion Nuitée"
            desc="Une nuit complète à vos côtés, de la soirée jusqu'au réveil tendre le lendemain matin."
          />
          <PackageCard 
            title="Événements Mondains"
            desc="Ma présence distinguée pour vos galas, mariages, ou soirées corporatives, faisant de vous un homme envié."
          />
          <PackageCard 
            title="Rencontre Express"
            desc="Pour les emplois du temps chargés. Un moment court, intense et revitalisant, sans compromis sur la qualité."
          />
          <PackageCard 
            title="Escapade Week-end"
            desc="Deux jours de détente absolue complice dans le lieu de votre choix, loin de votre routine habituelle."
          />
          <PackageCard 
            title="Compagne de Voyage"
            desc="Un accompagnement discret et raffiné lors de vos déplacements d'affaires ou vacances à l'étranger."
          />
          <PackageCard 
            title="Sur Mesure"
            desc="Une expérience entièrement personnalisée, où chacun de vos désirs et fantaisies guident le programme de la rencontre."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 relative bg-[#050505] w-full mt-auto">
        <div className="max-w-4xl mx-auto text-center border-t border-gold/10 pt-24">
          <h3 className="title-text text-3xl md:text-5xl mb-6">Honoraires <span className="italic text-gold">Sur Mesure</span></h3>
          <div className="w-12 h-[1px] bg-gold/30 mx-auto mb-8"></div>
          <p className="text-white/70 font-light leading-relaxed mb-10 max-w-2xl mx-auto text-lg">
            L'exclusivité ne s'enferme pas dans une grille tarifaire. Chaque rencontre est une création unique qui s'adapte à vos envies.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 border border-white/5 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none"></div>
            <Gem className="w-8 h-8 text-gold mx-auto mb-6 stroke-1 relative z-10" />
            <p className="text-white/80 font-light leading-relaxed mb-6 relative z-10">
              Mes tarifs sont <strong className="text-gold font-normal">variables, négociables et ne sont jamais fixes</strong>. Ils s'alignent avec fluidité selon vos désirs, la durée du moment partagé, et les paramètres spécifiques de votre demande.
            </p>
            <p className="text-white/60 font-light text-sm relative z-10">
              Une approche personnalisée pour s'assurer que notre entente nous convienne parfaitement à tous les deux. N'hésitez pas à en discuter lors de votre prise de contact.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function PackageCard({ title, desc }: { title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 border border-gold/10 hover:border-gold/30 rounded-xl bg-zinc-900/30 hover:bg-zinc-900/80 transition-all group flex flex-col h-full"
    >
      <h4 className="title-text text-lg mb-3 text-gold group-hover:text-gold-light transition-colors">{title}</h4>
      <p className="text-white/50 text-xs font-light leading-relaxed flex-grow">{desc}</p>
      <div className="w-6 h-[1px] bg-gold/20 mt-4 group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  );
}
