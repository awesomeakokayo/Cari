import React from 'react';
import { User, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function DoctorSection({ doctors, onBookNow, onViewProfile }) {
  return (
    <section id="doctors-section" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Find a Doctor
          </h2>
          <p className="text-sm text-slate-500 mt-1 font-normal">
            Schedule an appointment with a healthcare provider
          </p>
          <div className="mt-4 text-xs font-semibold text-slate-500">
            Showing {doctors.length} doctors
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-start gap-4">
                  <img
                    src={doctor.avatar}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover border border-slate-200"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 truncate">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-600 mt-0.5">
                      {doctor.specialty}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-[#00a859] mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00a859]" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {doctor.description}
                </p>

                {/* License Tag */}
                <div className="mt-3 text-[11px] font-mono text-slate-400">
                  License: {doctor.license}
                </div>
              </div>

              {/* Action Buttons matching Cari style */}
              <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                <button
                  onClick={() => onViewProfile(doctor)}
                  className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>View profile</span>
                </button>

                <button
                  onClick={() => onBookNow(doctor)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#00a859] hover:bg-[#00924d] active:bg-[#007e43] text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book now</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
