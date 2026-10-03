import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DoctorSection from './components/DoctorSection';
import EhrPracticeSection from './components/EhrPracticeSection';
import PracticeOperationsSection from './components/PracticeOperationsSection';
import DownloadAppSection from './components/DownloadAppSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ProfileModal from './components/ProfileModal';

import { DOCTORS, SPECIALTIES, LOCATIONS } from './data/doctorsData';
import { X, Play } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All specialties');
  const [selectedLocation, setSelectedLocation] = useState('Near me');

  // Modals
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState(null);
  const [selectedDoctorForProfile, setSelectedDoctorForProfile] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Filtered doctors
  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter((doctor) => {
      // Specialty filter
      const matchesSpecialty =
        selectedSpecialty === 'All specialties' ||
        doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase();

      // Search filter
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !query ||
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialty.toLowerCase().includes(query) ||
        doctor.description.toLowerCase().includes(query);

      return matchesSpecialty && matchesSearch;
    });
  }, [searchTerm, selectedSpecialty]);

  const handleNavigate = (elementId) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00a859] selection:text-white">
      
      {/* Navigation */}
      <Navbar
        currentLang={currentLang}
        onLangChange={setCurrentLang}
        onGetStarted={() => handleNavigate('doctors-section')}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main>
        {/* Proper Hero Section */}
        <Hero
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedSpecialty={selectedSpecialty}
          onSpecialtyChange={setSelectedSpecialty}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          specialties={SPECIALTIES}
          locations={LOCATIONS}
          onScrollToDoctors={() => handleNavigate('doctors-section')}
        />

        {/* Doctor Directory Section */}
        <DoctorSection
          doctors={filteredDoctors}
          onBookNow={(doc) => setSelectedDoctorForBooking(doc)}
          onViewProfile={(doc) => setSelectedDoctorForProfile(doc)}
        />

        {/* EHR Platform & Core Features */}
        <EhrPracticeSection
          onGetStarted={() => handleNavigate('doctors-section')}
          onWatchVideo={() => setVideoModalOpen(true)}
        />

        {/* Practice Operations Section */}
        <PracticeOperationsSection />

        {/* Download App Section */}
        <DownloadAppSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Booking Modal */}
      <BookingModal
        doctor={selectedDoctorForBooking}
        isOpen={!!selectedDoctorForBooking}
        onClose={() => setSelectedDoctorForBooking(null)}
      />

      {/* Doctor Profile Modal */}
      <ProfileModal
        doctor={selectedDoctorForProfile}
        isOpen={!!selectedDoctorForProfile}
        onClose={() => setSelectedDoctorForProfile(null)}
        onBookNow={(doc) => setSelectedDoctorForBooking(doc)}
      />

      {/* Watch Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">
                Cari Medical Platform Overview
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video bg-slate-950 rounded-2xl flex flex-col items-center justify-center text-center p-6 text-white space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#00a859] flex items-center justify-center shadow-md">
                <Play className="w-6 h-6 fill-white text-white ml-0.5" />
              </div>
              <div>
                <h4 className="text-sm font-bold">Cari EHR & Audio Notes Walkthrough</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-sm">
                  Demonstrating audio voice dictation, digital prescriptions, and simpler clinic operations.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
