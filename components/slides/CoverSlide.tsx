
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, MapPin } from 'lucide-react';

const CoverSlide: React.FC = () => {
  return (
    <div className="max-w-6xl w-full h-full flex flex-col justify-center items-center text-center text-white p-6">
      {/* Section Logos */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-12 mb-16"
      >
        {/* Thalès Informatique Logo Stylisé */}
        <div className="flex flex-col items-center">
          <div className="bg-black px-6 py-4 rounded-lg border border-white/10 flex flex-col items-center justify-center min-w-[200px]">
            <span className="text-3xl font-extrabold tracking-[0.2em] text-white leading-none">THALÈS</span>
            <span className="text-[10px] tracking-[0.5em] text-white/80 mt-1 uppercase">INFORMATIQUE</span>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-12 w-[1px] bg-white/20" />

        {/* Factorial Logo Stylisé */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#FF3366] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF3366]/20">
            <svg viewBox="0 0 100 100" className="w-10 h-10 fill-white">
              <circle cx="50" cy="35" r="15" />
              <path d="M50 60c-20 0-35 10-35 25h70c0-15-15-25-35-25z" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="8" />
            </svg>
          </div>
          <span className="text-3xl font-bold tracking-tight text-white">factorial</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Partenariat <span className="text-blue-500">Stratégique</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          L'alliance de l'expertise locale et de l'innovation RH internationale pour transformer les entreprises marocaines.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl mt-20"
      >
        <div className="flex items-center justify-center gap-3 text-slate-400 bg-white/5 py-4 rounded-2xl border border-white/5">
          <ShieldCheck className="text-blue-500" size={20} />
          <span className="text-sm font-medium">Visite Officielle</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-slate-400 bg-white/5 py-4 rounded-2xl border border-white/5">
          <Calendar className="text-blue-500" size={20} />
          <span className="text-sm font-medium uppercase">{new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-slate-400 bg-white/5 py-4 rounded-2xl border border-white/5">
          <MapPin className="text-blue-500" size={20} />
          <span className="text-sm font-medium">Casablanca, Maroc</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CoverSlide;
