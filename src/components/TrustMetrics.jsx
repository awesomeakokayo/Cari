import React from 'react';
import { 
  ShieldCheck, 
  Quote, 
  Star, 
  CheckCircle, 
  Building2, 
  Award, 
  Lock, 
  Globe2 
} from 'lucide-react';

export default function TrustMetrics() {
  const testimonials = [
    {
      id: 1,
      quote: "Cari's AI voice notes completely revolutionized our clinic workflow in Ibadan. We used to spend 3 hours every evening after clinics finishing paper charts. Now notes and prescriptions are logged before the patient even leaves the consultation room.",
      author: "Dr. Oluwaseun Adeleke",
      role: "Medical Director, Prime Care Specialist Clinics, Ibadan",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      id: 2,
      quote: "The instant HMO pre-authorization alone saved our hospital over ₦14M in rejected claims this quarter. The offline synchronization is a lifesaver during unpredictable fiber internet downtimes in Accra.",
      author: "Dr. Kofi Mensah",
      role: "Chief Operating Officer, Ridge Health Consortium, Accra",
      avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      id: 3,
      quote: "As an OB/GYN specialist in Lagos, having patients book seamlessly through Cari while having their prior ultrasound and lab history unified in one timeline has elevated our prenatal care outcomes tremendously.",
      author: "Dr. Fatima Bello",
      role: "Consultant Gynecologist, Victoria Island Maternal Hub, Lagos",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cari-100 text-cari-800 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>Trusted Across African Healthcare</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Proven Clinical & Financial Outcomes
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Over 1,200 healthcare institutions rely on Cari Medical to deliver high-reliability clinical operations across West Africa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t) => (
            <div 
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex text-amber-400 mb-4 text-sm">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-cari-500/30"
                />
                <div>
                  <div className="text-xs font-extrabold text-slate-900">{t.author}</div>
                  <div className="text-[11px] text-slate-500 line-clamp-1">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance & Security Strip */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
              <ShieldCheck className="w-5 h-5 text-cari-600" />
              <span>Enterprise Clinical Data Protection & Sovereign Privacy</span>
            </div>
            <p className="text-xs text-slate-500">
              Compliant with the Nigeria Data Protection Regulation (NDPR), Ghana Data Protection Act (Act 843), and global HIPAA security standards.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
              🛡️ NDPR Certified
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
              🔒 256-Bit Encrypted
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
              🏛️ MDCN / MDCG Compliant
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              ⚡ 99.98% SLA
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
