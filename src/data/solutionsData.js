export const EHR_FEATURES = [
  {
    id: "audio-notes",
    title: "AI Audio Voice Notes",
    subtitle: "Regain 2.5 hours daily with instant clinical voice transcription",
    badge: "AI Powered",
    icon: "Mic",
    description: "Simply speak during or after patient consultation. Cari's clinical voice engine captures medical terminology, translates local dialects (Hausa, Yoruba, Twi, French, Arabic), and structures notes automatically into standard SOAP formats.",
    metrics: "85% faster chart completion",
    bullets: [
      "Speech-to-text trained on African medical accents and regional vocabularies",
      "Automatic ICD-10 diagnostic coding and drug dosage extraction",
      "Real-time multi-lingual patient instructions generation"
    ]
  },
  {
    id: "ai-diagnosis",
    title: "AI-Assisted Diagnostic Copilot",
    subtitle: "Early warning detection and safety drug-interaction checks",
    badge: "Clinical CDS",
    icon: "Sparkles",
    description: "Machine learning assistance that surfaces early clinical indicators, flags contraindications, and compares symptom trajectories against millions of anonymized African clinical outcomes.",
    metrics: "40% reduction in diagnostic oversight",
    bullets: [
      "Real-time cross-checking for adverse drug-drug interactions",
      "Early warning alerts for maternal complications & sepsis",
      "Differential diagnosis suggestions linked to clinical literature"
    ]
  },
  {
    id: "finances-insurance",
    title: "Smart Finances & Insurance Claims",
    subtitle: "Automated HMO & NHIS claim pre-adjudication in seconds",
    badge: "Fintech for Health",
    icon: "CreditCard",
    description: "End-to-end revenue cycle management. Eliminate rejected claims with instant eligibility checks, automated tariff calculations, and direct integrations with Nigerian & Ghanaian HMO networks.",
    metrics: "94% first-pass claims approval rate",
    bullets: [
      "Instant pre-authorization with major private HMOs and NHIA/NHIS",
      "Patient co-pay collection via Bank Transfer, USSD, MoMo, Card & Pos",
      "Automated revenue reconciliation and doctor payout splits"
    ]
  },
  {
    id: "appointments-rooms",
    title: "Smart Queuing & Room Operations",
    subtitle: "Cut patient wait times and optimize clinic bed & room utilization",
    badge: "Clinic Ops",
    icon: "Users",
    description: "Live visual board for triage status, waiting rooms, consultation suites, and inpatient beds. Automated SMS/WhatsApp notifications ensure patients arrive just in time without overcrowding.",
    metrics: "48 min average wait reduction",
    bullets: [
      "Real-time color-coded room occupancy and sterilization tracking",
      "Automated SMS & WhatsApp queue position alerts for patients",
      "Emergency escalation triggers for critical vitals"
    ]
  },
  {
    id: "digital-requests",
    title: "Digital Labs & Pharmacy Dispatch",
    subtitle: "Direct paperless lab orders and e-prescriptions to partnered facilities",
    badge: "Interoperable",
    icon: "FileText",
    description: "Order blood panels, radiological imaging, or prescribe medications straight from the consultation view. Results flow back instantly to the patient's EHR timeline without physical paperwork.",
    metrics: "100% digital audit trail",
    bullets: [
      "Connected network of 400+ diagnostic labs and licensed pharmacies",
      "Barcode & QR verified e-prescriptions preventing drug fraud",
      "Instant push notifications to patient's Cari mobile app when results are ready"
    ]
  }
];

export const CLINICAL_AUDIO_PRESETS = [
  {
    id: "preset-1",
    label: "Adult Hypertension & Diabetes Review",
    doctor: "Dr. Michael Chen",
    specialty: "Internal Medicine",
    audioDuration: "0:42",
    transcript: "Patient is a 54-year-old male presenting for 3-month routine follow-up of Type 2 Diabetes and Essential Hypertension. Complains of occasional morning dizziness when standing rapidly. Home BP readings averaging 142/90 mmHg. Fasting blood glucose log shows values between 110 and 135 mg/dL. Denies chest pain, palpitations, or visual changes. Current meds: Amlodipine 5mg daily, Metformin 1000mg BID.",
    soap: {
      subjective: "54yo male with T2D & HTN follow-up. Reports mild orthostatic dizziness. Home BP ~142/90 mmHg, Fasting BG 110-135 mg/dL.",
      objective: "BP: 138/88 mmHg, HR: 72 bpm, SpO2: 98% room air. BMI: 27.4 kg/m². Feet exam: Bilateral monofilament sensation intact, pedal pulses 2+ equal.",
      assessment: "1. Essential Hypertension (ICD-10 I10) - suboptimally controlled.\n2. Type 2 Diabetes Mellitus without complications (ICD-10 E11.9) - fair glycemic control.\n3. Possible mild orthostatic hypotension.",
      plan: "1. Adjust Amlodipine to 10mg PO daily.\n2. Continue Metformin 1000mg BID.\n3. Order HbA1c, Serum Electrolytes, Urea, Creatinine.\n4. Advise gradual posture changes, adequate hydration.\n5. Follow-up in clinic in 6 weeks."
    },
    translations: {
      hausa: "Majiyyaci yana da shekaru 54, yana fama da ciwon sukari da hawan jini. An canza magani zuwa Amlodipine 10mg kullum, sannan a ci gaba da Metformin.",
      yoruba: "Alaisan naa jẹ ọkunrin ẹni ọdun 54 ti o ni ifunpa giga ati suga. A ti mu iwọn oogun Amlodipine pọ si 10mg lojoojumọ, ki o si tẹsiwaju pẹlu Metformin.",
      french: "Patient de 54 ans suivi pour HTA essentielle et Diabète de type 2. Ajustement d'Amlodipine à 10mg/jour et maintien de Metformine.",
      arabic: "مريض يبلغ من العمر 54 عاماً للمتابعة الدورية لضغط الدم والسكري. تم تعديل جرعة الأملوديبين إلى 10 ملغ يومياً."
    }
  },
  {
    id: "preset-2",
    label: "Maternal Antenatal 28-Week Checkup",
    doctor: "Dr. Amina Patel",
    specialty: "Obstetrics & Gynecology",
    audioDuration: "0:36",
    transcript: "Gravida 2, Para 1 at 28 weeks gestation by early scan. Reports active fetal movements. Mild bilateral lower limb edema at end of day, resolves with leg elevation. No headache, epigastric pain, or blurry vision. Symphysis fundal height measures 28 cm. Fetal heart rate 146 bpm, regular. Urinalysis negative for protein and glucose.",
    soap: {
      subjective: "G2P1 at 28 weeks gestation. Good fetal movement reported. Mild dependent edema. No preeclampsia symptoms.",
      objective: "BP: 112/70 mmHg, SFH: 28cm, FHR: 146 bpm regular. Urine dipstick: Protein negative, Glucose negative.",
      assessment: "Normal intrauterine pregnancy at 28 weeks with satisfactory fetal growth and well-being.",
      plan: "1. Repeat Complete Blood Count (CBC) and 50g Glucose Challenge Test.\n2. Continue Prenatal Multivitamins + Ferrous Sulfate + Calcium.\n3. Anti-D immunoglobulin administration if Rh negative.\n4. Routine follow-up in 3 weeks."
    },
    translations: {
      hausa: "Mace mai juna biyu ta wata 7. Jariri yana cikin koshin lafiya tare da bugun zuciya mai kyau. A ci gaba da shan magungunan bitamin na ciki.",
      yoruba: "Iwoye alaboyun ọsẹ 28. Ọmọ inu wa ni ilera to dara pẹlu lilu ọkan deede. Tẹsiwaju awọn oogun ajẹsara.",
      french: "Grossesse intra-utérine normale de 28 SA. Mouvements fœtaux et RCF réguliers à 146 bpm. Bilan sanguin prescrit.",
      arabic: "متابعة حمل طبيعية في الأسبوع 28. نبض الجنين سليم والنمو طبيعي. الاستمرار على فيتامينات الحمل والحديد."
    }
  }
];

export const SOLUTIONS_LIST = [
  {
    id: "hospitals",
    name: "Hospitals & Medical Centres",
    category: "Enterprise",
    desc: "Complete multi-department inpatient & outpatient management, ICU tracking, and central billing.",
    stats: "Up to 500+ beds"
  },
  {
    id: "clinics",
    name: "Private & Group Clinics",
    category: "Clinics",
    desc: "Fast digital intake, appointment scheduling, electronic chart management, and instant patient receipts.",
    stats: "1 to 50 physicians"
  },
  {
    id: "physicians",
    name: "Solo Practitioners & Specialists",
    category: "Practitioners",
    desc: "Lightweight mobile-ready EHR with voice note transcription and built-in telehealth video suites.",
    stats: "Zero IT setup required"
  },
  {
    id: "therapists",
    name: "Therapists & Rehab",
    category: "Allied Health",
    desc: "Longitudinal progress trackers, encrypted teletherapy, and customized care plans.",
    stats: "Flexible session logs"
  },
  {
    id: "nurses",
    name: "Nurses & Triage Teams",
    category: "Clinical Care",
    desc: "Rapid triage scoring, bedside vital signs recording via tablet, and doctor alert escalation.",
    stats: "Instant vitals sync"
  },
  {
    id: "community-health-workers",
    name: "Community Health Workers",
    category: "Field Health",
    desc: "100% offline mobile app for rural outreach, maternal monitoring, and sync when back online.",
    stats: "Offline-first architecture"
  },
  {
    id: "labs",
    name: "Diagnostic Laboratories",
    category: "Diagnostics",
    desc: "Automated LIMS integration, barcode sample tracking, and instant push of test results to patient EHR.",
    stats: "Automated result sync"
  },
  {
    id: "governments",
    name: "Public Health & Ministries",
    category: "Public Sector",
    desc: "Anonymized real-time epidemiology dashboards, disease surveillance, and national health metrics.",
    stats: "National health security"
  },
  {
    id: "pharmacies",
    name: "Pharmacies & Dispensaries",
    category: "Pharmacy",
    desc: "Direct e-prescription reception, inventory management, batch expiry alerts, and patient refill reminders.",
    stats: "Zero paper error"
  },
  {
    id: "insurance",
    name: "HMOs & Insurance Payers",
    category: "Payers",
    desc: "Real-time pre-authorization API, fraud detection algorithms, and automated claim adjudication.",
    stats: "Instant settlement"
  }
];
