import React from 'react';
import { CreditCard, Calendar, MessageSquare } from 'lucide-react';

export default function PracticeOperationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simplify everyday operating tasks.
          </h2>
          <p className="text-base text-slate-600 mt-2 font-normal">
            We set out to make your life easier and remove the stress of running a practice.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Finances & Insurance */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#eefaf2] text-[#00a859] flex items-center justify-center">
              <CreditCard className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900">
              Finances & Insurance
            </h3>

            <p className="text-sm font-semibold text-slate-800">
              Manage your finances and insurance claims in one place.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Track the status of your claims and payments, along with your patients and staff.
            </p>
          </div>

          {/* Card 2: Appointments & Rooms */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#eefaf2] text-[#00a859] flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Appointments & Rooms
            </h3>

            <p className="text-sm font-semibold text-slate-800">
              Manage your appointments and rooms in one place.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Monitor and reduce patient wait times, and keep an eye on critical situations.
            </p>
          </div>

          {/* Card 3: Communication & Sharing */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#eefaf2] text-[#00a859] flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Communication & Sharing
            </h3>

            <p className="text-sm font-semibold text-slate-800">
              Keep your team and patients in the loop.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Clear communication tools lead to better productivity and better patient outcomes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
