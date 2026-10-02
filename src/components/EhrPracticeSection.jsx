import React from 'react';
import { 
  Mic, 
  Sparkles, 
  FileText, 
  Play, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Languages,
  Activity,
  Send,
  Clock,
  Video
} from 'lucide-react';

export default function EhrPracticeSection({ onGetStarted, onWatchVideo }) {
  return (
    <section id="ehr-section" className="py-20 bg-slate-50/70 border-t border-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Background Video Card with Softened Green Opacity */}
        <div className="bg-[#007e43] rounded-3xl p-8 sm:p-14 lg:p-16 shadow-xl mb-20 relative overflow-hidden text-white min-h-[420px] flex items-center">
          
          {/* Looping HTML5 Video with Clearer Visibility */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
            className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none scale-105"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-doctor-checking-a-patient-41484-large.mp4" 
              type="video/mp4" 
            />
          </video>

          {/* Softened Green Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00a859]/80 via-[#00a859]/70 to-[#007e43]/65 pointer-events-none backdrop-blur-[1px]" />

          {/* Foreground Content */}
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/30 text-white text-xs font-bold border border-white/30 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#00f076] animate-pulse" />
              <span>ELECTRONIC HEALTH RECORDS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-xs">
              Making healthcare more accessible & affordable
            </h2>

            <p className="text-base sm:text-lg text-emerald-50 font-normal leading-relaxed max-w-2xl drop-shadow-xs">
              Cari Medical is a modern electronic health record platform. We've created a pleasant, effortless experience giving clinicians more focused time with their patients.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onGetStarted}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-emerald-50 text-[#00a859] text-sm font-bold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                Get started free
              </button>
              <button
                onClick={onWatchVideo}
                className="px-7 py-3.5 rounded-full bg-black/30 hover:bg-black/40 text-white text-sm font-semibold border border-white/40 transition-all flex items-center gap-2 backdrop-blur-xs"
              >
                <Play className="w-4 h-4 fill-white text-white" />
                <span>Full video tour</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 space-y-2">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything you need to run your practice.
          </h3>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            From managing your patient records to keeping track of your finances, we're there for you every step of the way.
          </p>
        </div>

        {/* 3 Enhanced Core Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Audio notes */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#eefaf2] text-[#00a859] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Mic className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-slate-900">Audio notes</h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#eefaf2] text-[#00a859] px-2 py-0.5 rounded-md">
                    AI Voice
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  Regain hours by recording your notes instead of typing. We transcribe the audio and translate it into multiple languages.
                </p>
              </div>
            </div>

            {/* Visual Live Snippet */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#00a859] animate-pulse" />
                  <span>Voice Transcription</span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono">0:38</span>
              </div>

              <div className="p-2.5 bg-white rounded-xl border border-slate-200/70 text-slate-700 italic font-normal text-[11px] leading-relaxed">
                "Patient follow-up: BP stable at 128/82. Continued on current regimen. Advised routine lipid panel."
              </div>

              <div className="flex items-center gap-1 text-[10px] text-slate-500 pt-1">
                <Languages className="w-3 h-3 text-[#00a859]" />
                <span>Auto-translated to English, French, Yoruba & Hausa</span>
              </div>
            </div>
          </div>

          {/* Card 2: AI-assisted diagnosis */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#eefaf2] text-[#00a859] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-slate-900">AI-assisted diagnosis</h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#eefaf2] text-[#00a859] px-2 py-0.5 rounded-md">
                    Clinical CDS
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  We use machine learning to help you detect early signs of problems more accurately and reduce medication errors.
                </p>
              </div>
            </div>

            {/* Visual Live Snippet */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700 font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#00a859]" />
                  <span>Clinical Safety Check</span>
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                  ✓ Safe
                </span>
              </div>

              <div className="p-2.5 bg-white rounded-xl border border-slate-200/70 text-[11px] space-y-1">
                <div className="font-bold text-slate-800">Prescription Verification</div>
                <div className="text-slate-500">Zero adverse drug-drug interactions detected with patient's active therapy.</div>
              </div>

              <div className="flex items-center gap-1 text-[10px] text-slate-500 pt-1">
                <Activity className="w-3 h-3 text-[#00a859]" />
                <span>Guideline checks aligned with WHO clinical standards</span>
              </div>
            </div>
          </div>

          {/* Card 3: Digital requests */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#eefaf2] text-[#00a859] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-slate-900">Digital requests</h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#eefaf2] text-[#00a859] px-2 py-0.5 rounded-md">
                    Paperless
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  We make it easy for you to request prescriptions, labs, and image studies directly from the patient's record.
                </p>
              </div>
            </div>

            {/* Visual Live Snippet */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700 font-bold">
                  <Send className="w-3.5 h-3.5 text-[#00a859]" />
                  <span>Direct Electronic Dispatch</span>
                </span>
                <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-1.5 py-0.5 rounded">
                  Connected
                </span>
              </div>

              <div className="p-2.5 bg-white rounded-xl border border-slate-200/70 text-[11px] space-y-1">
                <div className="font-bold text-slate-800">Lab & Rx Orders</div>
                <div className="text-slate-500">Fast 1-click dispatch to accredited partner diagnostic labs and pharmacies.</div>
              </div>

              <div className="flex items-center gap-1 text-[10px] text-slate-500 pt-1">
                <Clock className="w-3 h-3 text-[#00a859]" />
                <span>Results stream directly back into the EHR timeline</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
