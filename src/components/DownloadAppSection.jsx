import React, { useState } from 'react';
import { 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Mic, 
  Eye, 
  WifiOff, 
  Video, 
  Pill, 
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Info,
  Monitor
} from 'lucide-react';

// Official OS SVG Icons
function WindowsIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.849" />
    </svg>
  );
}

function AppleIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.58.67-.99 1.74-.85 2.76.99.08 2.01-.51 2.56-1.26z" />
    </svg>
  );
}

function LinuxIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.012 0c-3.414 0-5.319 2.278-5.319 5.316 0 1.25.32 3.125.758 4.417C6.012 11.238 5 13.567 5 16.035c0 3.824 2.64 5.965 7.012 5.965s7.012-2.141 7.012-5.965c0-2.468-1.012-4.797-2.451-6.302.438-1.292.758-3.167.758-4.417C17.331 2.278 15.426 0 12.012 0zm-1.898 4.316c.492 0 .891.492.891 1.098 0 .605-.399 1.097-.891 1.097s-.891-.492-.891-1.097c0-.606.399-1.098.891-1.098zm3.796 0c.492 0 .891.492.891 1.098 0 .605-.399 1.097-.891 1.097s-.891-.492-.891-1.097c0-.606.399-1.098.891-1.098z" />
    </svg>
  );
}

export default function DownloadAppSection({ onGetStarted }) {
  const [showAllDownloads, setShowAllDownloads] = useState(false);

  // TODO(cari): confirm published claims before launch — partner/model names
  // (MedGemma, Claude, LiveKit) and the HIPAA/GDPR compliance statement.
  const features = [
    {
      title: "Full EHR",
      desc: "Complete patient records — vitals, labs, imaging, clinical history.",
      icon: Activity
    },
    {
      title: "AI Clinical Support",
      desc: "MedGemma and Claude-powered diagnosis assistance and risk scoring.",
      icon: Sparkles
    },
    {
      title: "Voice Dictation",
      desc: "Speak your notes. Automatic transcription with entity extraction.",
      icon: Mic
    },
    {
      title: "DICOM Imaging",
      desc: "View, annotate, and report on medical imaging studies.",
      icon: Eye
    },
    {
      title: "Works Offline",
      desc: "Full functionality without internet. Syncs when you reconnect.",
      icon: WifiOff
    },
    {
      title: "Telemedicine",
      desc: "HD video consultations with LiveKit — built right in.",
      icon: Video
    },
    {
      title: "E-Prescriptions",
      desc: "Send prescriptions electronically with drug interaction checking.",
      icon: Pill
    },
    {
      title: "HIPAA / GDPR Compliant",
      desc: "End-to-end encrypted. Auditable. Certified.",
      icon: ShieldCheck
    }
  ];

  const downloadLinks = [
    { os: "Windows", name: "Cari.Medical_0.2.0_x64-setup.exe", arch: "x64 Installer" },
    { os: "macOS", name: "Cari.Medical_0.2.0_universal.dmg", arch: "arm64 + Intel Universal" },
    { os: "Debian / Ubuntu", name: "Cari.Medical_0.2.0_amd64.deb", arch: "deb package" },
    { os: "RHEL / Fedora", name: "Cari.Medical-0.2.0-1.x86_64.rpm", arch: "rpm package" },
    { os: "Generic Linux", name: "Cari.Medical_0.2.0_amd64.AppImage", arch: "AppImage binary" }
  ];

  const handleDownload = (fileName) => {
    alert(`Starting download for ${fileName} (Version 0.2.0)`);
  };

  return (
    <section id="download-section" className="py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Hero Showcase */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eefaf2] text-[#00a859] text-xs font-bold">
            <Monitor className="w-3.5 h-3.5" />
            <span>Cari Medical Desktop</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            The full clinical platform on your desktop
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            EHR, AI diagnostics, telemedicine, and offline access. Built for clinicians who need it to just work.
          </p>

          {/* Primary Download Button & Version Badge */}
          <div className="pt-2 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleDownload("Cari.Medical_0.2.0_x64-setup.exe")}
                className="px-7 py-3.5 rounded-full bg-[#00a859] hover:bg-[#00924d] active:bg-[#007e43] text-white text-sm font-semibold transition-all shadow-xs hover:shadow-md flex items-center gap-2.5"
              >
                <WindowsIcon className="w-4 h-4 fill-white text-white" />
                <span>Download for Windows</span>
              </button>

              <button
                onClick={() => handleDownload("Cari.Medical_0.2.0_universal.dmg")}
                className="px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold border border-slate-200 transition-all flex items-center gap-2 shadow-2xs"
              >
                <AppleIcon className="w-4 h-4 fill-slate-800 text-slate-800" />
                <span>macOS — Universal</span>
              </button>

              <button
                onClick={() => handleDownload("Cari.Medical_0.2.0_amd64.AppImage")}
                className="px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold border border-slate-200 transition-all flex items-center gap-2 shadow-2xs"
              >
                <LinuxIcon className="w-4 h-4 fill-slate-800 text-slate-800" />
                <span>Linux</span>
              </button>
            </div>

            <div className="text-xs text-slate-500 font-normal flex flex-wrap items-center gap-2 pt-1">
              <span><strong>Version 0.2.0</strong> · Released April 29, 2026</span>
              <span className="text-slate-300">•</span>
              <span>Requires Windows 10 or later · 4 GB RAM · 1 GB disk</span>
            </div>
          </div>
        </div>

        {/* Everything Included Section */}
        <div className="pt-10 border-t border-slate-200/80 mb-14">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Everything included
            </h3>
            <p className="text-sm text-slate-600 mt-1 font-normal">
              One app. Every tool your practice needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => {
              const IconComp = feat.icon;
              return (
                <div 
                  key={feat.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#eefaf2] text-[#00a859] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{feat.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* What's New & Direct Package Downloads */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs mb-14 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h4 className="text-base font-bold text-slate-900">What's new in v0.2.0</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Internal infrastructure release. Includes the restored macOS and Windows desktop builds.
              </p>
            </div>
            <button
              onClick={() => setShowAllDownloads(!showAllDownloads)}
              className="text-xs font-semibold text-[#00a859] hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              <span>{showAllDownloads ? 'Hide package list' : 'View all download packages'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showAllDownloads ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {showAllDownloads && (
            <div className="space-y-2 text-xs">
              <div className="font-bold text-slate-900 mb-2">Direct Package Binaries:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {downloadLinks.map((link) => (
                  <div 
                    key={link.name} 
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-slate-900">{link.os} ({link.arch})</div>
                      <code className="text-[11px] text-slate-500">{link.name}</code>
                    </div>
                    <button
                      onClick={() => handleDownload(link.name)}
                      className="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 transition-colors flex items-center gap-1"
                    >
                      <Download className="w-3 h-3 text-[#00a859]" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3.5 bg-slate-50 rounded-xl text-[11px] text-slate-500 space-y-1">
                <p><strong>Note for macOS:</strong> The macOS <code>.dmg</code> is unsigned in this release. Right-click → Open to bypass the first-launch warning. Signed builds resume in a follow-up.</p>
                <p>For technical support or issues, contact: <span className="text-[#00a859] font-medium">support@cari.care</span></p>
              </div>
            </div>
          )}
        </div>

        {/* Try the web platform first - Green Background with White Text */}
        <div className="bg-[#00a859] text-white rounded-3xl p-8 sm:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-1 relative z-10">
            <h4 className="text-2xl font-black text-white">Try the web platform first</h4>
            <p className="text-sm text-emerald-100">No download required. Full EHR directly in your web browser.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <button
              onClick={onGetStarted}
              className="px-7 py-3 rounded-full bg-white hover:bg-emerald-50 text-[#00a859] text-sm font-bold transition-all shadow-sm hover:scale-[1.02]"
            >
              Get started
            </button>
            <button
              onClick={onGetStarted}
              className="px-7 py-3 rounded-full bg-black/15 hover:bg-black/25 text-white text-sm font-semibold border border-white/30 transition-all backdrop-blur-xs"
            >
              Sign in
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
