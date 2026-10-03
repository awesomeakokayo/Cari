import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Calendar, 
  Video, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Filter,
  UserCheck,
  Building2,
  Sparkles
} from 'lucide-react';

// TODO(cari): not currently rendered. Some fields referenced below
// (nextAvailable, feeLocal) don't exist in doctorsData — fix before use.
export default function DoctorDirectory({ 
  doctors, 
  specialties, 
  selectedSpecialty, 
  onSpecialtyChange, 
  selectedCity, 
  onCityChange, 
  onBookDoctor, 
  onViewProfile,
  t 
}) {
  return (
    <section id="doctors-section" className="py-16 bg-slate-50/80 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cari-100/90 text-cari-800 text-xs font-bold mb-2">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Verified Medical Specialists</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              {t.findDoctor}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              {t.findDoctorDesc}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
              Showing <strong className="text-slate-900 font-bold">{doctors.length}</strong> top verified doctors
            </span>
          </div>
        </div>

        {/* Specialty Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {specialties.map((spec) => {
            const isSelected = selectedSpecialty === spec.id;
            return (
              <button
                key={spec.id}
                onClick={() => onSpecialtyChange(spec.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'bg-cari-600 text-white shadow-md shadow-cari-600/25 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <span>{spec.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-cari-700 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {spec.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Doctor Cards Grid */}
        {doctors.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-xl mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 text-2xl">
              🔍
            </div>
            <h3 className="text-lg font-bold text-slate-900">No doctors match your exact filter</h3>
            <p className="text-sm text-slate-500 mt-1">Try resetting the specialty or city filter to view more available healthcare specialists.</p>
            <button
              onClick={() => { onSpecialtyChange('all'); onCityChange('all'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-cari-600 text-white text-xs font-bold hover:bg-cari-700 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc) => (
              <div 
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-cari-400 p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                {/* Card Top: Image + Info */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <img 
                        src={doc.avatar} 
                        alt={doc.name} 
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-cari-500/20 group-hover:border-cari-500 transition-colors shadow-inner"
                      />
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px]" title="Active & Verified">
                        ✓
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="text-base font-extrabold text-slate-900 truncate group-hover:text-cari-700 transition-colors">
                          {doc.name}
                        </h3>
                      </div>

                      <div className="text-xs font-bold text-cari-700 mt-0.5 flex items-center gap-1">
                        <span>{doc.specialty}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-medium">{doc.experienceYears}y exp</span>
                      </div>

                      {/* Verified Badge */}
                      <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cari-50 border border-cari-200/80 text-[10px] font-bold text-cari-800">
                        <ShieldCheck className="w-3 h-3 text-cari-600" />
                        <span>Verified MD</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio summary */}
                  <p className="mt-3.5 text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {doc.bio}
                  </p>

                  {/* Metadata Chips */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1.5 text-slate-500 truncate">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{doc.clinic}</span>
                      </span>
                      <span className="flex items-center gap-1 font-bold text-slate-800 shrink-0 pl-2">
                        <MapPin className="w-3.5 h-3.5 text-cari-600" />
                        <span>{doc.city}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-500">
                      <span className="text-[11px] font-mono text-slate-400 truncate">
                        {doc.license}
                      </span>
                    </div>

                    {/* Next slot badge */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        <Clock className="w-3 h-3" />
                        <span>Slot: {doc.nextAvailable}</span>
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        {doc.feeLocal} <span className="text-[10px] font-normal text-slate-400">/ session</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onViewProfile(doc)}
                    className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 text-xs font-bold transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Profile</span>
                  </button>

                  <button
                    onClick={() => onBookDoctor(doc)}
                    className="w-full py-2.5 px-3 rounded-xl bg-cari-600 hover:bg-cari-700 text-white text-xs font-bold shadow-sm shadow-cari-600/20 hover:shadow-cari-600/30 transition-all flex items-center justify-center gap-1.5 group-hover:scale-[1.02]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
