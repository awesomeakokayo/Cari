import React from 'react';
import { 
  Smartphone, 
  ShieldCheck, 
  QrCode, 
  Download, 
  Heart, 
  Video, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Star,
  Sparkles
} from 'lucide-react';

// TODO(cari): not currently rendered. Placeholder store badge and rating copy —
// confirm or remove before this section is used.
export default function MobileAppSection({ t }) {
  return (
    <section id="mobile-app-section" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Copy & Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cari-100 text-cari-800 text-xs font-bold">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Cari Patient Health Mobile App</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {t.patientAppHeadline}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Book in-person and video consultations in seconds, receive instant digital prescriptions, view encrypted lab reports, and maintain your family's lifelong health timeline with zero paperwork.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-cari-50 text-cari-700 flex items-center justify-center mb-2 font-bold">
                  📱
                </div>
                <h4 className="text-sm font-bold text-slate-900">1-Tap HD Telehealth</h4>
                <p className="text-xs text-slate-500 mt-1">High quality encrypted video calls optimized for 3G/4G networks.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-2 font-bold">
                  📄
                </div>
                <h4 className="text-sm font-bold text-slate-900">QR-Verified e-Prescriptions</h4>
                <p className="text-xs text-slate-500 mt-1">Direct digital refills sent to accredited neighborhood pharmacies.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-2 font-bold">
                  🧪
                </div>
                <h4 className="text-sm font-bold text-slate-900">Instant Lab Result Push</h4>
                <p className="text-xs text-slate-500 mt-1">Blood test and ultrasound results direct to your secure vault.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2 font-bold">
                  🆘
                </div>
                <h4 className="text-sm font-bold text-slate-900">Offline Emergency Pass</h4>
                <p className="text-xs text-slate-500 mt-1">Critical blood group, allergies, and contacts accessible without data.</p>
              </div>
            </div>

            {/* App Store Download Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button 
                onClick={() => alert('Download Cari Patient App for iOS from App Store (Available in Nigeria, Ghana, Kenya)')}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-md"
              >
                <div className="text-2xl"></div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Download on the</div>
                  <div className="text-xs font-bold leading-tight">Apple App Store</div>
                </div>
              </button>

              <button 
                onClick={() => alert('Download Cari Patient App for Android from Google Play')}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-md"
              >
                <div className="text-2xl">▶</div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Get it on</div>
                  <div className="text-xs font-bold leading-tight">Google Play</div>
                </div>
              </button>


            </div>

          </div>

          {/* Right Side: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-[320px] sm:w-[350px] bg-slate-950 rounded-[44px] p-4 shadow-2xl border-4 border-slate-800 shadow-cari-500/15 relative">
              {/* Dynamic Island / Speaker */}
              <div className="w-28 h-5 bg-slate-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2" />
                <div className="w-10 h-1.5 rounded-full bg-slate-800" />
              </div>

              {/* Screen Content */}
              <div className="bg-slate-900 rounded-[34px] p-4 text-white overflow-hidden space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div>
                    <div className="text-[10px] text-slate-400">Good Morning</div>
                    <div className="text-xs font-bold text-white">Chinedu Okafor</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-cari-600 text-white text-xs font-bold flex items-center justify-center">
                    CO
                  </div>
                </div>

                {/* Upcoming Appointment Card */}
                <div className="bg-gradient-to-br from-cari-600 to-emerald-700 p-3.5 rounded-2xl text-white space-y-2 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] bg-white/20 font-bold px-2 py-0.5 rounded-full">Today at 3:30 PM</span>
                    <span className="text-[10px] text-cari-200">Room 101</span>
                  </div>
                  <div className="text-xs font-bold">Consultation with Dr. Michael Chen</div>
                  <div className="text-[10px] text-cari-100">Hypertension & Metabolic Follow-up</div>
                  <button className="w-full py-1.5 bg-white text-cari-900 rounded-xl text-[11px] font-extrabold mt-1">
                    Join Video Call / Check-in
                  </button>
                </div>

                {/* Quick Shortcuts */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700">
                    <div className="text-base mb-1">💊</div>
                    <div className="font-semibold text-slate-300">My Rx (2)</div>
                  </div>
                  <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700">
                    <div className="text-base mb-1">🧪</div>
                    <div className="font-semibold text-slate-300">Labs (Ready)</div>
                  </div>
                  <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700">
                    <div className="text-base mb-1">🛡️</div>
                    <div className="font-semibold text-slate-300">HMO Active</div>
                  </div>
                </div>

                {/* Recent Health Records Stream */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-slate-400">Recent Records</div>
                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white text-[11px]">Lipid Profile & HbA1c</div>
                      <div className="text-[10px] text-slate-400">SYNLAB • Sept 28</div>
                    </div>
                    <span className="text-[10px] text-cari-400 font-bold">View PDF</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white text-[11px]">Amlodipine 10mg Refill</div>
                      <div className="text-[10px] text-slate-400">Medplus Pharmacy</div>
                    </div>
                    <span className="text-[10px] text-cyan-400 font-bold">Dispatched</span>
                  </div>
                </div>

              </div>

              {/* Home indicator bar */}
              <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-3" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
