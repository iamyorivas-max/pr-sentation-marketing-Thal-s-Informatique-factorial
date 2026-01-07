
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CreditCard, Users, Settings, Headphones } from 'lucide-react';

const Expertise: React.FC = () => {
  const areas = [
    { icon: <CreditCard />, title: "ERP Finance & Comptabilité", desc: "Gestion budgétaire et fiscale avancée." },
    { icon: <Users />, title: "RH & Paie", desc: "Digitalisation du capital humain." },
    { icon: <Briefcase />, title: "Gestion Commerciale & Projets", desc: "Pilotage d'activité en temps réel." },
    { icon: <Settings />, title: "Industrie & Logistique", desc: "Optimisation des processus de production." },
    { icon: <Headphones />, title: "Support Long Terme", desc: "Accompagnement et maintenance évolutive." },
  ];

  return (
    <div className="max-w-6xl w-full text-white">
      <div className="mb-12">
        <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2">Notre Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Un Savoir-Faire Multidimensionnel</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {areas.map((area, idx) => (
          <motion.div 
            key={idx}
            className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              {React.cloneElement(area.icon as React.ReactElement, { className: "text-white" })}
            </div>
            <h4 className="text-lg font-bold mb-2">{area.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{area.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-600/10 border border-blue-500/30 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-semibold">
          <span className="text-blue-500">Atout Clé :</span> Expertise Métier + Expertise Technologique
        </div>
        <div className="px-6 py-2 bg-blue-600 rounded-full font-medium">
          Approche 360°
        </div>
      </div>
    </div>
  );
};

export default Expertise;
