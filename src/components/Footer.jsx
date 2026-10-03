import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-slate-900 leading-none font-sans">
                cari
              </span>
              <span className="text-[9px] font-bold tracking-[0.25em] text-slate-900 uppercase leading-none mt-0.5">
                MEDICAL
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
              Modern electronic health record platform and doctor network.
            </p>
          </div>

          {/* Solutions Col */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs">Solutions</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Hospitals</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Clinics</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Physicians</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Therapists</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Nurses</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Health Workers</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Labs</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Governments</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Pharmacies</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Distributors</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Developers</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Insurance</a></li>
            </ul>
          </div>

          {/* Support Col */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs">Support</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs">Company</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Legal Col */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs">Legal</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Claim</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright matching exact website text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          {/* TODO(cari): confirm exact legal entity name before launch */}
          <div>
            © 2021 – 2026 Cari Medical. All rights reserved.
          </div>
          <div>
            Cari Medical — Making healthcare more accessible &amp; affordable
          </div>
        </div>

      </div>
    </footer>
  );
}
