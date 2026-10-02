import React from 'react';
import { X, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

export default function ProfileModal({ doctor, isOpen, onClose, onBookNow }) {
  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Doctor Header */}
        <div className="flex items-center gap-4">
          <img
            src={doctor.avatar}
            alt={doctor.name}
            className="w-20 h-20 rounded-full object-cover border border-slate-200"
          />
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#00a859]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a859]" />
              <span>Verified Medical Provider</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
              {doctor.name}
            </h3>
            <p className="text-xs text-slate-600 font-medium">
              {doctor.specialty}
            </p>
          </div>
        </div>

        {/* Bio & Education */}
        <div className="space-y-4 text-xs text-slate-700">
          <div>
            <h4 className="font-bold text-slate-900 mb-1">About Doctor</h4>
            <p className="leading-relaxed text-slate-600">
              {doctor.bio}
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <Award className="w-4 h-4 text-[#00a859]" />
              <span>Medical License & Education</span>
            </div>
            <p className="text-slate-600 font-normal">{doctor.education}</p>
            <p className="text-slate-400 font-mono text-[11px]">License: {doctor.license}</p>
          </div>

          <div className="flex items-center gap-1.5 text-slate-600">
            <MapPin className="w-4 h-4 text-[#00a859]" />
            <span>{doctor.clinic} ({doctor.location})</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onBookNow(doctor);
            }}
            className="px-6 py-2.5 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white text-xs font-semibold transition-all flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book appointment</span>
          </button>
        </div>

      </div>
    </div>
  );
}
