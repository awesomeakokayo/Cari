import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar({ currentLang, onLangChange, onGetStarted, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'عربي' },
    { code: 'es', label: 'Español' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo matching original Cari layout */}
        <a href="#" className="flex items-center gap-1.5 focus:outline-none">
          <div className="flex flex-col">
            <span className="text-[28px] font-black tracking-tight text-slate-900 leading-none font-sans">
              cari
            </span>
            <span className="text-[10px] font-bold tracking-[0.25em] text-slate-900 uppercase leading-none mt-0.5">
              MEDICAL
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <button 
            onClick={() => onNavigate('doctors-section')} 
            className="hover:text-slate-900 transition-colors"
          >
            Find a Doctor
          </button>
          <button 
            onClick={() => onNavigate('ehr-section')} 
            className="hover:text-slate-900 transition-colors"
          >
            EHR Platform
          </button>
          <button 
            onClick={() => onNavigate('download-section')} 
            className="hover:text-slate-900 transition-colors"
          >
            Download App
          </button>
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-[#00a859] hover:text-[#00924d] transition-colors py-1.5 px-2"
            >
              <span>{languages.find(l => l.code === currentLang)?.label || 'English'}</span>
              <ChevronDown className="w-4 h-4 text-[#00a859]" />
            </button>

            {langDropdownOpen && (
              <div 
                onMouseLeave={() => setLangDropdownOpen(false)}
                className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLangChange(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-slate-50 transition-colors ${
                      currentLang === lang.code ? 'text-[#00a859] font-bold bg-[#eefaf2]' : 'text-slate-700'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary Action Button in Cari Green */}
          <button
            onClick={onGetStarted}
            className="px-6 py-2.5 rounded-full bg-[#00a859] hover:bg-[#00924d] active:bg-[#007e43] text-white text-sm font-semibold transition-all shadow-xs hover:shadow-sm"
          >
            Get started
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onGetStarted}
            className="px-4 py-2 rounded-full bg-[#00a859] text-white text-xs font-semibold"
          >
            Get started
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-4">
          <button
            onClick={() => { onNavigate('doctors-section'); setMobileMenuOpen(false); }}
            className="block w-full text-left text-base font-medium text-slate-800 py-1"
          >
            Find a Doctor
          </button>
          <button
            onClick={() => { onNavigate('ehr-section'); setMobileMenuOpen(false); }}
            className="block w-full text-left text-base font-medium text-slate-800 py-1"
          >
            EHR Platform
          </button>
          <button
            onClick={() => { onNavigate('download-section'); setMobileMenuOpen(false); }}
            className="block w-full text-left text-base font-medium text-slate-800 py-1"
          >
            Download App
          </button>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-sm">
            <span className="text-slate-500 font-medium">Language:</span>
            <div className="flex gap-2 text-xs font-semibold text-[#00a859]">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onLangChange(l.code)}
                  className={`px-2 py-1 rounded ${currentLang === l.code ? 'bg-[#eefaf2] font-bold' : 'text-slate-600'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
