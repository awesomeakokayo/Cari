import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Building2, 
  GraduationCap, 
  Globe2, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Award,
  BookOpen
} from 'lucide-react';

export default function DoctorDetailModal({ doctor, isOpen, onClose, onBookNow }) {
  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Photo & Verification */}
        <div className="relative p-6 bg-gradient-to-r from-cari-900 to-slate-900 text-white rounded-t-3xl">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pt-2">
            <img 
              src={doctor.avatar} 
              alt={doctor.name} 
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-white/20 shadow-xl"
            />
            <div className="text-center sm:text-left space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="bg-cari-500/20 text-cari-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-cari-400/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-cari-400" />
                  Verified Specialist
                </span>
                <span className="text-slate-300 text-xs">{doctor.experienceYears} Years Practice</span>
              </div>

              <h2 className="text-2xl font-black">{doctor.name}</h2>
              <p className="text-cari-200 text-sm font-semibold">{doctor.title}</p>
              
              <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cari-400" />
                  {doctor.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-amber-300 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {doctor.rating} ({doctor.reviewsCount} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1 text-slate-700">
          
          {/* License & Verification Panel */}
          <div className="p-3.5 rounded-2xl bg-cari-50/70 border border-cari-200/80 flex items-center justify-between text-xs">
            <div>
              <div className="text-[10px] uppercase font-bold text-cari-900 tracking-wider">Accreditation Body</div>
              <div className="font-bold text-cari-950 mt-0.5">{doctor.council}</div>
              <div className="text-slate-600 font-mono text-[11px] mt-0.5">License ID: {doctor.license}</div>
            </div>
            <div className="w-9 h-9 rounded-xl bg-cari-600 text-white flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
          </div>

          {/* Biography */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">About Doctor</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {doctor.bio}
            </p>
          </div>

          {/* Clinical Expertise & Sub-specialties */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Clinical Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {doctor.subSpecialties?.map((sub, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-lg border border-slate-200">
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Hospital Affiliations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                <GraduationCap className="w-4 h-4 text-cari-600" />
                <span>Education & Fellowships</span>
              </div>
              <p className="text-xs text-slate-600 font-normal leading-normal">
                {doctor.education}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                <Building2 className="w-4 h-4 text-cari-600" />
                <span>Hospital Affiliations</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1">
                {doctor.hospitalAffiliations?.map((hosp, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cari-500" />
                    <span>{hosp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Languages Spoken */}
          <div className="flex items-center gap-2 text-xs">
            <Globe2 className="w-4 h-4 text-slate-400" />
            <span className="font-bold text-slate-700">Languages:</span>
            <span className="text-slate-600">{doctor.languages?.join(", ")}</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between rounded-b-3xl">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Consultation Fee</div>
            <div className="text-base font-black text-slate-900">{doctor.feeLocal} <span className="text-xs font-normal text-slate-500">({doctor.feeUSD})</span></div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button 
              onClick={() => {
                onClose();
                onBookNow(doctor);
              }}
              className="px-6 py-2.5 rounded-xl bg-cari-600 hover:bg-cari-700 text-white text-xs font-bold shadow-md shadow-cari-600/20 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
