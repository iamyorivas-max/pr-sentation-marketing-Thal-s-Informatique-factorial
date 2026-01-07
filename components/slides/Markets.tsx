
import React from 'react';
import { Building2, Factory, Package, HardHat, Store } from 'lucide-react';

const Markets: React.FC = () => {
  const sectors = [
    { icon: <Factory />, label: "Industrie" },
    { icon: <Store />, label: "Services" },
    { icon: <Package />, label: "Distribution" },
    { icon: <HardHat />, label: "BTP / Projets" },
  ];

  return (
    <div className="max-w-6xl w-full text-white">
      <div className="mb-12">
        <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2">Portefeuille Clients</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Une présence sur tous les segments</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="space-y-4">
          <h4 className="text-xl font-bold border-b border-white/10 pb-4">Segments servis</h4>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>PME en forte croissance</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>ETI structurées</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Grandes Entreprises (GE)</span>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
          <h4 className="text-xl font-bold mb-6">Secteurs Clés</h4>
          <div className="grid grid-cols-2 gap-4">
            {sectors.map((s, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors">
                <div className="text-blue-500">{s.icon}</div>
                <span className="text-lg font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <p className="text-slate-400 font-medium italic">Confiance accordée par des leaders du marché marocain</p>
        <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
           {/* Placeholder for Logos */}
           <div className="flex items-center gap-2"><Building2 className="text-white" size={32} /> <span className="text-2xl font-bold">CLIENT_A</span></div>
           <div className="flex items-center gap-2"><Building2 className="text-white" size={32} /> <span className="text-2xl font-bold">CLIENT_B</span></div>
           <div className="flex items-center gap-2"><Building2 className="text-white" size={32} /> <span className="text-2xl font-bold">CLIENT_C</span></div>
        </div>
      </div>
    </div>
  );
};

export default Markets;
