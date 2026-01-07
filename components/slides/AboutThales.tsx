
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';

const AboutThales: React.FC = () => {
  const stats = [
    { icon: <Award className="w-8 h-8 text-blue-500" />, value: "29 Ans", label: "D'expérience" },
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: "+500", label: "Clients accompagnés" },
    { icon: <Globe className="w-8 h-8 text-blue-500" />, value: "Maroc", label: "Présence nationale forte" },
  ];

  return (
    <div className="max-w-6xl w-full text-white">
      <div className="mb-12">
        <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2">Profil Entreprise</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Qui est Thalès Informatique ?</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
          >
            <div className="mb-4">{item.icon}</div>
            <div className="text-4xl font-bold mb-1">{item.value}</div>
            <div className="text-slate-400 text-sm uppercase tracking-wide">{item.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xl text-slate-300 leading-relaxed italic border-l-4 border-blue-500 pl-6">
            "Un partenaire local solide, fiable et reconnu pour l'intégration de solutions de gestion critiques."
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 shrink-0" size={20} />
              <span>Intégrateur ERP Expert de référence au Maroc</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 shrink-0" size={20} />
              <span>Maîtrise complète de la chaîne de valeur digitale</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 grayscale hover:grayscale-0 transition-all duration-700">
           <img src="https://picsum.photos/id/101/800/400" alt="Corporate" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AboutThales;
