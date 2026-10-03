import React, { useState } from 'react';
import { 
  CreditCard, 
  Users, 
  Sparkles, 
  FileText, 
  MessageSquare, 
  Activity, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  ArrowRight,
  TrendingUp,
  Building,
  Bed,
  Send,
  Lock
} from 'lucide-react';
import { EHR_FEATURES } from '../data/solutionsData';

// TODO(cari): not currently rendered. Contains placeholder claims (HMO counts,
// wait-time and revenue figures) — confirm or remove before this is used.
export default function EhrFeatures({ t }) {
  const [activeTab, setActiveTab] = useState('finances');

  return (
    <section id="ehr-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cari-50 border border-cari-200 text-cari-800 text-xs font-bold">
            <Building className="w-3.5 h-3.5 text-cari-600" />
            <span>Practice Management & Clinical EHR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {t.practiceManagement}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From reducing patient wait times and auto-adjudicating HMO insurance claims to direct lab dispatches, Cari provides the complete operating system for modern health centres.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => setActiveTab('finances')}
            className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'finances'
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <CreditCard className="w-4 h-4 text-cari-400" />
            <span>Finances & HMO Claims</span>
          </button>

          <button
            onClick={() => setActiveTab('rooms')}
            className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'rooms'
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Users className="w-4 h-4 text-cyan-400" />
            <span>Appointments & Rooms Queue</span>
          </button>

          <button
            onClick={() => setActiveTab('diagnosis')}
            className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'diagnosis'
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>AI Diagnostic CDS</span>
          </button>

          <button
            onClick={() => setActiveTab('labs')}
            className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'labs'
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Digital Requests & Labs</span>
          </button>

          <button
            onClick={() => setActiveTab('comms')}
            className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'comms'
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-indigo-400" />
            <span>Encrypted Team Chat</span>
          </button>
        </div>

        {/* Dynamic Tab Content Workspace */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
          
          {/* TAB 1: FINANCES & INSURANCE CLAIMS */}
          {activeTab === 'finances' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-cari-700 uppercase tracking-wider bg-cari-100 px-2.5 py-1 rounded-md">
                  Revenue & Claims Engine
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Automate HMO Claims & Eliminate Payment Delays
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Monitor live claim approvals from Hygeia, Reliance, AXA Mansard, Acacia, and NHIS in real-time. Instantly verify patient coverage before consultation, collect co-pays via MoMo/Cards, and generate split settlements for clinicians automatically.
                </p>
                <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cari-600" />
                    <span>Instant pre-authorization with 40+ private HMOs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cari-600" />
                    <span>Multi-currency support (NGN ₦, GHS GH₵, USD $)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cari-600" />
                    <span>94% first-pass claim adjudication with zero paperwork</span>
                  </div>
                </div>
              </div>

              {/* Interactive Mockup: Claims Board */}
              <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                  <div className="font-bold text-slate-900">Live Claims & Billing Dashboard</div>
                  <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    98.2% Auto-Approved
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-900">Hygeia HMO • Claim #HYG-9021</div>
                      <div className="text-[11px] text-slate-500">Dr. Michael Chen • Consultation + HbA1c Panel</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-slate-900">₦45,000</div>
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded">
                        ✓ Approved (2.1s)
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-900">Reliance Health • Claim #REL-4819</div>
                      <div className="text-[11px] text-slate-500">Dr. Emily Rodriguez • Knee MRI & Arthroscopy Auth</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-slate-900">₦185,000</div>
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded">
                        ✓ Pre-Authorized
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-900">Direct Patient Co-Pay • POS / MoMo</div>
                      <div className="text-[11px] text-slate-500">Pharmacy Prescription Delivery</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-slate-900">₦12,500</div>
                      <span className="text-[10px] bg-cyan-100 text-cyan-800 font-bold px-1.5 py-0.5 rounded">
                        Paid via Transfer
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Today's Total Clinic Revenue:</span>
                  <span className="font-black text-slate-900 text-sm">₦1,420,000</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: APPOINTMENTS & ROOMS QUEUE */}
          {activeTab === 'rooms' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider bg-cyan-100 px-2.5 py-1 rounded-md">
                  Clinic Operations & Triage
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Real-Time Room Board & Wait Time Tracker
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Eliminate waiting room chaos. Visual occupancy boards keep nurses, triage, and doctors synchronized. Automated WhatsApp dispatch messages alert arriving patients right when their room is ready.
                </p>
                <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cari-600" />
                    <span>Average patient wait times dropped from 72 mins to 14 mins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cari-600" />
                    <span>Bed occupancy and sterilization logs for inpatient wards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cari-600" />
                    <span>One-click doctor room transfer and rapid triage escalation</span>
                  </div>
                </div>
              </div>

              {/* Interactive Mockup: Live Room Board */}
              <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                  <div className="font-bold text-slate-900">Floor 2 • Consultation Suites & Triage</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] text-slate-500">Live Room Telemetry</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-emerald-900">
                      <span>Room 101 • Dr. Chen</span>
                      <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded">In Progress</span>
                    </div>
                    <div className="text-[11px] text-emerald-700 mt-1">Patient: T. Adeyemi (18 min elapsed)</div>
                    <div className="text-[10px] text-emerald-600 mt-0.5">Next: O. Adeleke (In Triage)</div>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-50/60 border border-cyan-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-cyan-900">
                      <span>Room 102 • Dr. Patel</span>
                      <span className="text-[10px] bg-cyan-200 text-cyan-900 px-1.5 py-0.5 rounded">Ready / Cleaning</span>
                    </div>
                    <div className="text-[11px] text-cyan-700 mt-1">Sanitized at 10:40 AM</div>
                    <div className="text-[10px] text-cyan-600 mt-0.5">Calling: F. Ibrahim via SMS</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-800">
                      <span>Room 103 • Dr. Okoro</span>
                      <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">EEG Procedure</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Neurology Assessment</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Est. finish in 12 mins</div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-amber-900">
                      <span>Triage Bay B • Nurse Ngozi</span>
                      <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded">3 in Queue</span>
                    </div>
                    <div className="text-[11px] text-amber-800 mt-1">Avg Vitals Check: 4.2 mins</div>
                    <div className="text-[10px] text-amber-600 mt-0.5">BP & SpO2 streaming to EHR</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: AI DIAGNOSTIC CDS */}
          {activeTab === 'diagnosis' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-100 px-2.5 py-1 rounded-md">
                  Clinical Decision Support
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  AI-Assisted Early Diagnosis & Risk Prevention
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Machine learning trained on regional disease patterns helps doctors detect early signs of malaria complications, hypertensive crisis, diabetic nephropathy, and preeclampsia before severe symptoms arise.
                </p>
                <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cari-600" />
                    <span>Real-time contraindication and drug interaction alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cari-600" />
                    <span>Automated clinical guidelines (WHO)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cari-600" />
                    <span>Privacy-preserving on-device inference for low-bandwidth clinics</span>
                  </div>
                </div>
              </div>

              {/* Interactive Mockup: AI CDS Alert */}
              <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-3">
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <div className="font-bold text-amber-900">Clinical Warning: Adverse Drug Interaction Detected</div>
                    <div className="text-amber-800">
                      Prescribed <strong className="underline">Clarithromycin</strong> with patient's active <strong className="underline">Amlodipine</strong> increases risk of severe hypotension and QT prolongation.
                    </div>
                    <div className="text-[11px] font-semibold text-amber-900 pt-1">
                      Suggested Alternative: Switch to Azithromycin 500mg or Cefuroxime 500mg PO BID.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-cari-50 border border-cari-200 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-cari-600 shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <div className="font-bold text-cari-900">Diagnostic Risk Trajectory</div>
                    <div className="text-cari-800">
                      Patient's 6-month mean BP has escalated from 130/84 to 148/92 mmHg. Microalbuminuria detected in last urinalysis (Alb/Cr: 45 mg/g).
                    </div>
                    <div className="text-[11px] font-semibold text-cari-900 pt-1">
                      Recommendation: Initiate ACEi/ARB therapy & schedule renal function profile in 4 weeks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DIGITAL REQUESTS & LABS */}
          {activeTab === 'labs' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-100 px-2.5 py-1 rounded-md">
                  Connected Healthcare Grid
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Paperless Lab Orders & QR-Verified E-Prescriptions
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Dispatch lab investigations directly to diagnostic facilities (e.g., Lancet, Clina-Lancet, SYNLAB, Medbury). Results stream straight into the doctor's chart and notify the patient via WhatsApp and Cari App.
                </p>
                <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cari-600" />
                    <span>Cryptographically signed prescriptions preventing counterfeit drugs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cari-600" />
                    <span>Automated specimen barcode generation</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">Complete Lipid Profile + HbA1c</div>
                    <div className="text-[11px] text-slate-500">Ordered by Dr. Michael Chen • SYNLAB Nigeria</div>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-1 rounded-md">
                    ✓ Results In (EHR Synced)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900">Pelvic Ultrasound & Doppler Study</div>
                    <div className="text-[11px] text-slate-500">Ordered by Dr. Amina Patel • Radiant Diagnostics</div>
                  </div>
                  <span className="text-[10px] bg-cyan-100 text-cyan-800 font-bold px-2 py-1 rounded-md">
                    Sample Processing
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: ENCRYPTED TEAM CHAT */}
          {activeTab === 'comms' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider bg-indigo-100 px-2.5 py-1 rounded-md">
                  Clinical Messaging
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  End-to-End Encrypted Doctor & Patient Channels
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Replace vulnerable consumer chat apps with a HIPAA-compliant medical messaging system. Share DICOM X-rays, secure voice memos, and multidisciplinary case consults in one place.
                </p>
              </div>

              <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-3 text-xs">
                <div className="flex items-center gap-2 text-slate-400 pb-2 border-b border-slate-100 text-[11px]">
                  <Lock className="w-3.5 h-3.5 text-cari-600" />
                  <span>256-Bit Encrypted Clinical Channel: Ward 3 Triage Team</span>
                </div>

                <div className="space-y-2">
                  <div className="bg-slate-100 p-2.5 rounded-xl rounded-tl-none max-w-sm text-slate-800">
                    <span className="font-bold text-[10px] text-slate-500 block">Nurse Folake • 10:14 AM</span>
                    Dr. Okoro, Patient in Bed 4 EEG shows periodic sharp wave complexes. Vitals stable.
                  </div>

                  <div className="bg-cari-600 text-white p-2.5 rounded-xl rounded-tr-none ml-auto max-w-sm">
                    <span className="font-bold text-[10px] text-cari-200 block">Dr. James Okoro • 10:15 AM</span>
                    Reviewed trace on Cari tablet. Administer 1000mg Levetiracetam IV stat. I am heading to Room 103 now.
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
