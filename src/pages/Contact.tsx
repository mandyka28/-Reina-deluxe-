import { motion } from "motion/react";
import { Mail, MessageSquare } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      {/* Contact Section */}
      <section className="px-6 max-w-4xl mx-auto text-center flex-grow flex flex-col justify-center">
        <h1 className="title-text text-5xl md:text-7xl mb-8">Contactez<span className="italic text-gold">-moi</span></h1>
        <div className="w-12 h-[1px] bg-gold/30 mx-auto mb-10"></div>
        <p className="text-white/70 font-light mb-6 max-w-xl mx-auto text-lg leading-relaxed">
          Pour planifier une rencontre ou pour toute demande de renseignements, je vous invite à communiquer avec moi en privilégiant les SMS ou les courriels.
        </p>
        <p className="text-gold/80 font-light mb-16 max-w-xl mx-auto">
          Si vous avez des questions concernant des informations ou détails qui ne sont pas renseignés ici, n'hésitez pas à utiliser ces mêmes moyens pour me contacter.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <ContactButton 
            href="sms:4186172467" 
            icon={<MessageSquare className="w-6 h-6" />} 
            label="418-617-2467"
            sub="Par message texte"
          />
          <ContactButton 
            href="mailto:jadegaudreault22@gmail.com" 
            icon={<Mail className="w-6 h-6" />} 
            label="jadegaudreault22@gmail.com"
            sub="Par courriel"
          />
        </div>
      </section>
    </div>
  );
}

function ContactButton({ href, icon, label, sub }: { href: string; icon: React.ReactNode; label: string; sub: string }) {
  return (
    <motion.a 
      whileHover={{ y: -5 }}
      href={href}
      className="flex flex-col items-center p-8 sm:py-10 sm:px-12 border border-gold/20 rounded-2xl bg-gold/5 hover:bg-gold/10 transition-colors w-full sm:w-auto min-w-[280px]"
    >
      <div className="text-gold mb-4">
        {icon}
      </div>
      <span className="font-light tracking-wide text-white mb-2 text-lg">{label}</span>
      <span className="text-xs text-white/40 uppercase tracking-wider">{sub}</span>
    </motion.a>
  );
}
