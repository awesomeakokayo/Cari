import React, { useState } from 'react';
import { 
  Building2, 
  Stethoscope, 
  FlaskConical, 
  Landmark, 
  Pill, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  Sparkles,
  Smartphone,
  Cpu
} from 'lucide-react';
import { SOLUTIONS_LIST } from '../data/solutionsData';

export default function SolutionsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Enterprise', 'Clinics', 'Practitioners', 'Field Health', 'Diagnostics', 'Pharmacy', 'Payers', 'Public Sector'];

  const filteredSolutions = activeCategory === 'All' 
    ? SOLUTIONS_LIST 
    : SOLUTIONS_LIST.filter(s => s.category === activeCategory);

  return (
    <section id="solutions-section" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
            <Layers className="w-3.5 h-3.5" />
            <span>Pan-African Health Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Tailored Healthcare Solutions for Africa
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you run a 500-bed teaching hospital in Ibadan, a private fertility clinic in Lagos, a diagnostic laboratory in Accra, or a rural outreach program, Cari equips your organization with specialized digital health tooling.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-cari-500 text-slate-950 font-bold shadow-md shadow-cari-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((sol) => (
            <div 
              key={sol.id}
              className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 hover:border-cari-400 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cari-400 bg-cari-950/60 px-2.5 py-1 rounded-md border border-cari-800/50">
                    {sol.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {sol.stats}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cari-300 transition-colors">
                  {sol.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {sol.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 group-hover:text-cari-300 transition-colors font-semibold">
                  Explore Enterprise Architecture
                </span>
                <ArrowRight className="w-4 h-4 text-cari-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
