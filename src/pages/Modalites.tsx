import { motion } from "motion/react";
import { ShieldCheck, MapPin, Clock, CreditCard, Heart } from "lucide-react";
import React from "react";

export default function Modalites() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      {/* Booking Terms */}
      <section className="px-6 relative flex-grow">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="title-text text-4xl md:text-6xl mb-6">Modalités & <span className="italic text-gold">Conditions</span></h1>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto mb-8"></div>
            <p className="text-white/60 font-light max-w-xl mx-auto">
              Afin de de garantir une expérience fluide, prestigieuse et sécuritaire pour nous deux, voici le fonctionnement de mes services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <DetailCard 
              icon={<MapPin />}
              title="Localisation"
              desc="Interventions principalement dans la grande région de Québec."
            />
            <DetailCard 
              icon={<Clock />}
              title="Disponibilités & Mode de Vie"
              desc="Les rencontres et toutes les demandes se font selon mes disponibilités, mes envies et ma situation actuelle. Celle-ci peut varier au fil du temps (ayant notamment habité en résidence d'assistance continue par le passé). Étant autiste et vivant maintenant de façon indépendante suite à la décision de mon psychiatre, j'organise mon temps scrupuleusement pour respecter mon propre rythme."
            />
             <DetailCard 
              icon={<ShieldCheck />}
              title="Privilège & Majorité"
              desc="Je n'accepte strictement aucun mineur (18 ans et plus). Je gère moi-même mon emploi du temps et je me réserve le droit, sans exception, de refuser toute demande ou rencontre si celle-ci ne me convient pas."
            />
            <DetailCard 
              icon={<CreditCard />}
              title="Règlement Discret"
              desc="Le paiement s'effectue discrètement par PayPal. Vous devez me contacter (toujours par SMS ou courriel) afin de recevoir mes coordonnées PayPal."
            />
            <div className="sm:col-span-2">
              <DetailCard 
                icon={<Heart />}
                title="Cadre Légal & Intimité"
                desc="Mes honoraires couvrent exclusivement mon temps de compagnie. Toute intimité physique éventuelle est un extra totalement gratuit qui ne fait jamais l'objet d'aucune tarification, et ce afin de respecter scrupuleusement la loi. Si une telle intimité survient, elle s'effectue strictement et sans aucune exception avec protection (préservatif)."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DetailCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group h-full"
    >
      <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5 stroke-1' })}
      </div>
      <h4 className="title-text text-xl mb-3 text-white/90">{title}</h4>
      <p className="text-white/50 text-sm font-light leading-relaxed">{desc}</p>
    </motion.div>
  );
}
