
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CoverSlide from './components/slides/CoverSlide';
import AboutThales from './components/slides/AboutThales';
import Expertise from './components/slides/Expertise';
import Markets from './components/slides/Markets';
import Trends from './components/slides/Trends';
import WhyFactorial from './components/slides/WhyFactorial';
import Synergy from './components/slides/Synergy';
import CaseStudies from './components/slides/CaseStudies';
import Collaboration from './components/slides/Collaboration';
import Vision from './components/slides/Vision';

const TOTAL_SLIDES = 10;

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slides = [
    <CoverSlide />,
    <AboutThales />,
    <Expertise />,
    <Markets />,
    <Trends />,
    <WhyFactorial />,
    <Synergy />,
    <CaseStudies />,
    <Collaboration />,
    <Vision />,
  ];

  return (
    <div className="relative w-screen h-screen bg-slate-900 overflow-hidden select-none">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-400 blur-[120px] rounded-full" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full flex items-center justify-center p-4 md:p-8"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 z-50">
        <div className="text-white/50 text-sm font-medium mr-4">
          {currentSlide + 1} / {TOTAL_SLIDES}
        </div>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full border border-white/20 text-white transition-all hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent`}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === TOTAL_SLIDES - 1}
          className={`p-3 rounded-full bg-blue-600 text-white transition-all hover:bg-blue-500 shadow-lg shadow-blue-900/40 disabled:opacity-30`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </div>
  );
};

export default App;
