
import React from 'react';
import { Target, Lightbulb, Package, Megaphone } from 'lucide-react';

const Collaboration: React.FC = () => {
  const axes = [
    { icon: <Target />, title: "Apport d'Affaires", desc: "Mécanismes clairs de recommandation mutuelle." },
    { icon: <Megaphone />, title: "Co-Marketing", desc: "Événements, webinars et contenus experts 2025." },
    { icon: <Package />, title: "Offres Packagées", desc: "Bundles 'Digital Transformation' exclusifs." },
    { icon: <Lightbulb />, title: "Démos Conjointes", desc: "Expertise métier Thalès + UX Factorial." },
  ];

  return (
    <div className="max-w-6xl w-full text-white">
      <div className="mb-12">
        <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2">Route Vers le Succès</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Modèle de Collaboration</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {axes.map((a, idx) => (
          <div key={idx} className="flex gap-6 items-center p-6 bg-slate-800/50 rounded-2xl border border-white/5">
            <div className="w-16 h-16 shrink-0 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/40">
              {React.cloneElement(a.icon as React.ReactElement, { size: 28 })}
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">{a.title}</h4>
              <p className="text-slate-400">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around gap-8 p-10 bg-white/5 rounded-3xl border border-white/10">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-500 mb-2">🎯 Leads</div>
          <p className="text-slate-400 text-sm uppercase tracking-widest">Génération Qualifiée</p>
        </div>
        <div className="w-[1px] h-12 bg-white/10 hidden md:block" />
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-500 mb-2">🎯 Croissance</div>
          <p className="text-slate-400 text-sm uppercase tracking-widest">Objectifs Mutuels</p>
        </div>
        <div className="w-[1px] h-12 bg-white/10 hidden md:block" />
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-500 mb-2">🎯 Valeur</div>
          <p className="text-slate-400 text-sm uppercase tracking-widest">Client Final</p>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
