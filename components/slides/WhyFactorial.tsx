
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layout, Smartphone, PieChart } from 'lucide-react';

const WhyFactorial: React.FC = () => {
  const points = [
    { icon: <Layout />, title: "Moderne & Intuitive", text: "Une interface 'user-friendly' qui favorise l'adoption immédiate." },
    { icon: <Zap />, title: "Cloud & Rapide", text: "Déploiement en quelques semaines, pas quelques mois." },
    { icon: <Smartphone />, title: "Mobile Ready", text: "Accessibilité totale pour les collaborateurs nomades." },
    { icon: <PieChart />, title: "Data-Driven", text: "Tableaux de bord RH puissants pour les dirigeants." },
  ];

  return (
    <div className="max-w-6xl w-full text-white">
      <div className="mb-12">
        <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2">Vision Partenaire</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Pourquoi Factorial pour Thalès ?</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {points.map((p, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="flex gap-6 p-8 bg-white/5 rounded-2xl border border-white/10"
          >
            <div className="text-blue-500 shrink-0">{React.cloneElement(p.icon as React.ReactElement, { size: 32 })}</div>
            <div>
              <h4 className="text-xl font-bold mb-2">{p.title}</h4>
              <p className="text-slate-400 leading-relaxed">{p.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center p-8 bg-gradient-to-r from-blue-600/20 to-blue-500/10 rounded-3xl border border-blue-500/30">
        <p className="text-2xl font-light italic text-slate-200">
          "Factorial complète notre offre ERP de manière <span className="text-blue-400 font-bold italic">intelligente</span> en adressant le chaînon manquant de l'expérience collaborateur."
        </p>
      </div>
    </div>
  );
};

export default WhyFactorial;
