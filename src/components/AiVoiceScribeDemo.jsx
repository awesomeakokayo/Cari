import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  MicOff, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  Copy, 
  Globe, 
  Send, 
  FileCheck, 
  AlertCircle,
  Stethoscope,
  Volume2
} from 'lucide-react';
import { CLINICAL_AUDIO_PRESETS } from '../data/solutionsData';

// TODO(cari): not currently rendered. Placeholder claims (time saved, engine
// names, dialect list) — confirm or remove before this demo is used.
export default function AiVoiceScribeDemo({ t }) {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingProgress, setRecordingProgress] = useState(0);
  const [activeTranslation, setActiveTranslation] = useState('english');
  const [copied, setCopied] = useState(false);
  const [savedToEhr, setSavedToEhr] = useState(false);

  const currentPreset = CLINICAL_AUDIO_PRESETS[selectedPresetIndex];

  // Simulation timer for audio dictation
  useEffect(() => {
    let interval = null;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingProgress((prev) => {
          if (prev >= 100) {
            setIsRecording(false);
            return 100;
          }
          return prev + 10;
        });
      }, 400);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleStartSimulation = () => {
    setRecordingProgress(0);
    setSavedToEhr(false);
    setIsRecording(true);
  };

  const handleReset = () => {
    setIsRecording(false);
    setRecordingProgress(0);
    setSavedToEhr(false);
  };

  const handleCopyNote = () => {
    const textToCopy = `SUBJECTIVE:\n${currentPreset.soap.subjective}\n\nOBJECTIVE:\n${currentPreset.soap.objective}\n\nASSESSMENT:\n${currentPreset.soap.assessment}\n\nPLAN:\n${currentPreset.soap.plan}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveToEhr = () => {
    setSavedToEhr(true);
    setTimeout(() => setSavedToEhr(false), 3500);
  };

  return (
    <section id="ai-voice-section" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background radial medical glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cari-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cari-500/20 border border-cari-500/30 text-cari-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-cari-400" />
            <span>Clinical NLP Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Audio Notes & AI Clinical Copilot
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Doctors regain time every day. Dictate naturally in clinic or on ward rounds — Cari transcribes, extracts ICD-10 diagnostic codes, structures SOAP charts, and auto-translates patient discharge instructions into multiple languages.
          </p>
        </div>

        {/* Interactive Workspace / Simulator */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-4 sm:p-8 shadow-2xl backdrop-blur-xl">
          
          {/* Preset Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-700">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-xs font-bold text-slate-400 shrink-0 mr-1">Clinical Case:</span>
              {CLINICAL_AUDIO_PRESETS.map((preset, idx) => (
                <button
                  key={preset.id}
                  onClick={() => {
                    setSelectedPresetIndex(idx);
                    handleReset();
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    selectedPresetIndex === idx
                      ? 'bg-cari-500 text-slate-950 shadow-md shadow-cari-500/25'
                      : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700 border border-slate-600'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Model: <strong className="text-white">Cari-MedVoice v3.2 (Offline Capable)</strong></span>
            </div>
          </div>

          {/* Core Simulator Grid: Audio Recording Left vs Structured SOAP Output Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            
            {/* Left Column: Voice Recording Console */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-5 border border-slate-700/70 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Stethoscope className="w-3.5 h-3.5 text-cari-400" />
                    <span>Physician: {currentPreset.doctor}</span>
                  </span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-[11px] font-mono text-cari-300">
                    {currentPreset.specialty}
                  </span>
                </div>

                {/* Simulated Audio Visualizer Waveform */}
                <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col items-center justify-center min-h-[140px] relative overflow-hidden">
                  {isRecording ? (
                    <div className="flex items-center gap-1.5 h-10">
                      <div className="w-1.5 bg-cari-400 rounded-full animate-eq-1" />
                      <div className="w-1.5 bg-cyan-400 rounded-full animate-eq-2" />
                      <div className="w-1.5 bg-cari-300 rounded-full animate-eq-3" />
                      <div className="w-1.5 bg-emerald-400 rounded-full animate-eq-4" />
                      <div className="w-1.5 bg-cari-400 rounded-full animate-eq-5" />
                      <div className="w-1.5 bg-cyan-300 rounded-full animate-eq-6" />
                      <div className="w-1.5 bg-cari-500 rounded-full animate-eq-7" />
                      <div className="w-1.5 bg-emerald-300 rounded-full animate-eq-2" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                      <Volume2 className="w-4 h-4" />
                      <span>{recordingProgress === 100 ? 'Recording Processed (0:42)' : 'Ready for Audio Dictation'}</span>
                    </div>
                  )}

                  {/* Progress bar */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-cari-500 to-cyan-400 h-full transition-all duration-300 rounded-full"
                      style={{ width: `${isRecording ? recordingProgress : (recordingProgress === 100 ? 100 : 0)}%` }}
                    />
                  </div>
                </div>

                {/* Raw Audio Transcription Stream */}
                <div className="mt-4">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>Speech-to-Text Stream</span>
                    <span className="text-[10px] text-cari-400 lowercase font-mono">accent: west-african-en</span>
                  </div>
                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono min-h-[95px]">
                    {recordingProgress > 0 ? (
                      <span>
                        {currentPreset.transcript.slice(0, Math.floor((currentPreset.transcript.length * (isRecording ? recordingProgress : 100)) / 100))}
                        {isRecording && <span className="inline-block w-2 h-3.5 bg-cari-400 ml-1 animate-pulse" />}
                      </span>
                    ) : (
                      <span className="text-slate-500 italic">Click "Simulate Live Dictation" below to test the clinical voice transcription engine...</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Dictation Trigger Controls */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                {!isRecording ? (
                  <button
                    onClick={handleStartSimulation}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cari-500 to-emerald-500 hover:from-cari-400 hover:to-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cari-500/20 transition-all hover:scale-[1.02]"
                  >
                    <Mic className="w-4 h-4 text-slate-950" />
                    <span>{recordingProgress === 100 ? 'Re-run Dictation' : 'Simulate Live Dictation'}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setIsRecording(false)}
                    className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Pause className="w-4 h-4" />
                    <span>Processing Audio Note...</span>
                  </button>
                )}

                <button
                  onClick={handleReset}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Reset"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Structured SOAP Output & Multi-lingual Dialect Translation */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl p-5 border border-slate-700/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-cari-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Auto-Structured Clinical SOAP Note
                    </span>
                  </div>

                  <button
                    onClick={handleCopyNote}
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                {/* Structured SOAP Sections */}
                <div className="mt-3 space-y-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-0.5">
                      S • Subjective
                    </span>
                    <p className="text-slate-200 leading-relaxed font-mono">
                      {currentPreset.soap.subjective}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="text-[10px] font-bold text-cari-400 uppercase tracking-wider block mb-0.5">
                      O • Objective (Vitals & Physical)
                    </span>
                    <p className="text-slate-200 leading-relaxed font-mono">
                      {currentPreset.soap.objective}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
                      A • Assessment & ICD-10 Coding
                    </span>
                    <p className="text-slate-200 leading-relaxed font-mono whitespace-pre-line">
                      {currentPreset.soap.assessment}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">
                      P • Plan & Rx Dispatch
                    </span>
                    <p className="text-slate-200 leading-relaxed font-mono whitespace-pre-line">
                      {currentPreset.soap.plan}
                    </p>
                  </div>
                </div>

                {/* Multi-language Local Dialect Translation */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Globe className="w-3.5 h-3.5 text-cari-400" />
                      <span className="font-semibold text-white">Patient Dialect Translation:</span>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px]">
                      {['english', 'hausa', 'yoruba', 'french', 'arabic'].map((langKey) => (
                        <button
                          key={langKey}
                          onClick={() => setActiveTranslation(langKey)}
                          className={`px-2 py-0.5 rounded capitalize transition-colors ${
                            activeTranslation === langKey
                              ? 'bg-cari-500 text-slate-950 font-bold'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {langKey}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-cari-950/40 border border-cari-800/40 text-xs text-cari-200 leading-relaxed">
                    {activeTranslation === 'english' && currentPreset.soap.plan}
                    {activeTranslation === 'hausa' && currentPreset.translations.hausa}
                    {activeTranslation === 'yoruba' && currentPreset.translations.yoruba}
                    {activeTranslation === 'french' && currentPreset.translations.french}
                    {activeTranslation === 'arabic' && currentPreset.translations.arabic}
                  </div>
                </div>
              </div>

              {/* EHR Dispatch Button */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cari-400" />
                  <span>HIPAA & NDPR Encrypted</span>
                </span>

                <button
                  onClick={handleSaveToEhr}
                  className="py-2.5 px-5 rounded-xl bg-cari-600 hover:bg-cari-500 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-cari-600/30 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{savedToEhr ? '✓ Synced with Patient EHR Timeline' : 'Push to Practice EHR'}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
