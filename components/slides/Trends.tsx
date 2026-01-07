
import React from 'react';
import { TrendingUp, Cloud, Zap, UserCheck } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Trends: React.FC = () => {
  const data = [
    { year: '2020', val: 30 },
    { year: '2021', val: 45 },
    { year: '2022', val: 65 },
    { year: '2023', val: 80 },
    { year: '2024', val: 95 },
  ];

  return (
    <div className="max-w-6xl w-full text-white">
      <div className="mb-12">
        <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2">Contexte Marché</h2>
        <h3 className="text-4xl md:text-5xl font-bold">L'accélération de la Digitalisation RH</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center shrink-0">
              <Cloud size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Cloud-First</h4>
              <p className="text-slate-400">Demande croissante pour des solutions SaaS agiles et rapides à déployer.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center shrink-0">
              <UserCheck size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Expérience Collaborateur</h4>
              <p className="text-slate-400">Passage d'une RH administrative à une RH orientée humain et bien-être.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center shrink-0">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Efficacité Opérationnelle</h4>
              <p className="text-slate-400">Suppression des tâches manuelles via l'automatisation intelligente.</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-bold">Demande Digitale RH (MAROC)</h4>
            <div className="flex items-center text-green-400 text-sm gap-1">
              <TrendingUp size={16} /> +35% / an
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="val" stroke="#3b82f6" fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-6 text-center text-slate-400 text-sm italic">
            "Une transition naturelle et urgente vers Factorial"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trends;
