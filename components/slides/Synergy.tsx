
import React from 'react';
import { Plus, Check, MonitorCheck } from 'lucide-react';

const Synergy: React.FC = () => {
  return (
    <div className="max-w-6xl w-full text-white">
      <div className="mb-12">
        <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2">L'Alliance Stratégique</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Une Synergie à Haute Valeur Ajoutée</h3>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
        {/* Thalès Side */}
        <div className="w-full md:w-1/3 p-8 bg-slate-800 rounded-3xl border-2 border-slate-700 shadow-xl text-center space-y-4">
          <h4 className="text-2xl font-bold uppercase italic text-white">THALÈS</h4>
          <div className="h-[1px] bg-white/10 w-full" />
          <ul className="text-slate-400 space-y-2 text-sm">
            <li>ERP Finance & Gestion</li>
            <li>Pilotage de Projets</li>
            <li>Expertise Métier Locale</li>
          </ul>
        </div>

        {/* The Connector */}
        <div className="bg-blue-600 p-4 rounded-full shadow-lg shadow-blue-500/50 z-10">
          <Plus size={32} />
        </div>

        {/* Factorial Side */}
        <div className="w-full md:w-1/3 p-8 bg-slate-800 rounded-3xl border-2 border-slate-700 shadow-xl text-center space-y-4">
          <h4 className="text-2xl font-bold text-red-400">FACTORIAL</h4>
          <div className="h-[1px] bg-white/10 w-full" />
          <ul className="text-slate-400 space-y-2 text-sm">
            <li>Expérience Collaborateur</li>
            <li>Onboarding & Performance</li>
            <li>Agilité Cloud Native</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <MonitorCheck />, title: "Vision Unique", desc: "Un écosystème digital harmonisé." },
          { icon: <Check />, title: "Accompagnement", desc: "Expertise locale Thalès + Innovation." },
          { icon: <Check />, title: "Global & Local", desc: "Solution internationale, support Maroc." }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
            </div>
            <div>
              <h5 className="font-bold mb-1">{item.title}</h5>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Synergy;
