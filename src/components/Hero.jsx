import React from 'react';
import { Search, Stethoscope, MapPin, ChevronDown, Heart, ShieldCheck, Star, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero({
  searchTerm,
  onSearchChange,
  selectedSpecialty,
  onSpecialtyChange,
  selectedLocation,
  onLocationChange,
  specialties,
  locations,
  onScrollToDoctors
}) {
  return (
    <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid: Text/Search Left vs Warm Human Medical Photo Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Compassionate Messaging */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Friendly Trust Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eefaf2] text-[#00a859] text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-[#00a859]" />
              <span>Compassionate care from verified African specialists</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Making healthcare more accessible & affordable
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              Cari Medical connects you with licensed, empathetic doctors across Africa. Giving clinicians modern EHR tools so you get more personalized, dedicated time.
            </p>

            {/* Human Social Proof Stack */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex -space-x-2">
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-2xs" 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150" 
                  alt="Doctor" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-2xs" 
                  src="https://images.unsplash.com/photo-1594824813637-450f3c559850?auto=format&fit=crop&q=80&w=150" 
                  alt="Doctor" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-2xs" 
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150" 
                  alt="Doctor" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-2xs" 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150" 
                  alt="Doctor" 
                />
              </div>

              <div className="text-xs">
                <div className="flex items-center gap-1 font-bold text-slate-900">
                  <span className="text-amber-500">★★★★★</span>
                  <span>4.9/5 Rating</span>
                </div>
                <div className="text-slate-500 text-[11px]">
                  120,000+ patient consultations delivered
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Warm Human Photography Card with Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Main Photo Card */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 aspect-4/3 sm:aspect-square relative group">
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=900" 
                  alt="Compassionate healthcare professionals caring for patient" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-emerald-300 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Real Doctors · Genuine Care</span>
                  </div>
                  <div className="text-sm font-bold mt-0.5">
                    Consult in clinic or via secure video
                  </div>
                </div>
              </div>

              {/* Floating Reassurance Pill Top-Right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white rounded-2xl p-3 shadow-lg border border-slate-200/80 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-2">
                <div className="w-8 h-8 rounded-xl bg-[#eefaf2] text-[#00a859] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">MDCN & MDCG Verified</div>
                  <div className="text-[10px] text-slate-500">Accredited Councils</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Integrated Clean Search Bar (Full Width beneath 2-column hero) */}
        <div className="mt-12 bg-white p-3 sm:p-4 rounded-2xl sm:rounded-full border border-slate-200/90 shadow-md hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Input 1: Search Name or Specialty */}
            <div className="md:col-span-5 relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by name or specialty..."
                className="w-full pl-11 pr-3 py-3 text-sm bg-transparent rounded-full focus:outline-none text-slate-900 placeholder:text-slate-400 font-medium"
              />
            </div>

            <div className="hidden md:block w-px h-7 bg-slate-200" />

            {/* Input 2: Specialty Selector */}
            <div className="md:col-span-3 relative flex items-center">
              <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <select
                value={selectedSpecialty}
                onChange={(e) => onSpecialtyChange(e.target.value)}
                className="w-full pl-9 pr-8 py-3 text-sm bg-transparent rounded-full focus:outline-none text-slate-900 font-medium appearance-none cursor-pointer"
              >
                {specialties.map((spec) => (
                  <option key={spec} value={spec} className="text-slate-900">{spec}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>

            <div className="hidden md:block w-px h-7 bg-slate-200" />

            {/* Input 3: Location Selector */}
            <div className="md:col-span-4 relative flex items-center">
              <MapPin className="w-4 h-4 text-[#00a859] absolute left-3 pointer-events-none" />
              <select
                value={selectedLocation}
                onChange={(e) => onLocationChange(e.target.value)}
                className="w-full pl-9 pr-8 py-3 text-sm bg-transparent rounded-full focus:outline-none text-slate-900 font-medium appearance-none cursor-pointer"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc} className="text-slate-900">{loc}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
