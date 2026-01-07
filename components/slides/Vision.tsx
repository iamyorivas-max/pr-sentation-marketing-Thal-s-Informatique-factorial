
import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Play, CalendarCheck, Handshake } from 'lucide-react';

const Vision: React.FC = () => {
  const steps = [
    { icon: <Flag />, label: "Q1 2025", text: "Définition du cadre contractuel & technique." },
    { icon: <Play />, label: "Q1 2025", text: "Projets pilotes sur 5-10 clients clés." },
    { icon: <CalendarCheck />, label: "2025+", text: "Lancement du plan marketing commun." },
  ];

  return (
    <div className="max-w-6xl w-full text-white text-center flex flex-col items-center">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-12"
      >
        <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-4">Conclusion</h2>
        <h3 className="text-5xl font-extrabold mb-6">Notre Vision Commune</h3>
        <p className="text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          Accélérer la transformation digitale des entreprises marocaines par l'excellence opérationnelle.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 w-full">
        {steps.map((s, idx) => (
          <div key={idx} className="relative pt-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10">
               {React.cloneElement(s.icon as React.ReactElement, { size: 20 })}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 pt-12 h-full">
              <span className="text-blue-500 font-bold text-sm block mb-2">{s.label}</span>
              <p className="text-slate-300">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="p-4 bg-white/10 rounded-full border border-white/20">
          <Handshake size={64} className="text-blue-500" />
        </div>
        <h4 className="text-3xl font-bold">Construisons une collaboration durable</h4>
        <p className="text-slate-400">Merci de votre attention.</p>
      </motion.div>
    </div>
  );
};

export default Vision;
