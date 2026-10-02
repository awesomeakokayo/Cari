import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail } from 'lucide-react';

export default function BookingModal({ doctor, isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(doctor?.nextSlot || 'Today at 2:30 PM');

  if (!isOpen || !doctor) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs font-bold text-[#00a859] uppercase tracking-wider">
                Book Appointment
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                {doctor.name}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {doctor.specialty} • {doctor.clinic}
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                <Clock className="w-4 h-4 text-[#00a859]" />
                <span>Next Available: {doctor.nextSlot}</span>
              </div>
              <div className="text-slate-500 font-mono text-[11px]">
                License: {doctor.license}
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Your Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Samuel Adeleke"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00a859] font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Phone / WhatsApp Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+234 803 123 4567"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00a859] font-medium"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#00a859] hover:bg-[#00924d] active:bg-[#007e43] text-white text-sm font-semibold transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm Appointment</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#eefaf2] text-[#00a859] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900">
              Appointment Scheduled!
            </h3>

            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your appointment with <strong className="text-slate-900">{doctor.name}</strong> has been received. A confirmation SMS with consultation details has been sent to {patientPhone || 'your mobile number'}.
            </p>

            <button
              onClick={handleClose}
              className="mt-4 px-8 py-2.5 rounded-full bg-[#00a859] text-white text-xs font-semibold hover:bg-[#00924d] transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
