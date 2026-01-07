
import React from 'react';
import { Rocket, RefreshCw, ArrowUpRight, TrendingUp } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const scenarios = [
    {
      icon: <Rocket />,
      title: "PME en Croissance",
      scenario: "Besoin de structuration rapide.",
      solution: "ERP Finance + Factorial RH",
      badge: "Combo Gagnant"
    },
    {
      icon: <RefreshCw />,
      title: "Modernisation RH",
      scenario: "Gros volume sans changer d'ERP.",
      solution: "Modernisation RH Agile",
      badge: "Fast Track"
    },
    {
      icon: <TrendingUp />,
      title: "Base Client Thalès",
      scenario: "+500 clients ERP existants.",
      solution: "Upsell RH & Engagement",
      badge: "Cross-Sell"
    }
  ];

  return (
    <div className="max-w-6xl w-full text-white">
      <div className="mb-12">
        <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2">Opportunités Business</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Scénarios & Cas d'Usage</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {scenarios.map((s, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:border-blue-500/50 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center">
                {React.cloneElement(s.icon as React.ReactElement, { size: 28 })}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full">
                {s.badge}
              </span>
            </div>
            <h4 className="text-xl font-bold mb-4">{s.title}</h4>
            <div className="space-y-4 mb-8 flex-grow">
              <div>
                <span className="text-slate-500 text-xs uppercase font-bold">Problématique</span>
                <p className="text-slate-300 text-sm">{s.scenario}</p>
              </div>
              <div>
                <span className="text-blue-500 text-xs uppercase font-bold">Réponse Partenariat</span>
                <p className="text-slate-200 font-medium">{s.solution}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-500 text-sm font-bold group-hover:gap-4 transition-all cursor-pointer">
              Développer l'opportunité <ArrowUpRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
