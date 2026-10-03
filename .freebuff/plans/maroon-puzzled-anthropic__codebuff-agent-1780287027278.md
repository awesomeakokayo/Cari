# Cari Medical — Copy & Content Pass Plan

Copy only. No layout, styling, color or component-structure changes except where a fix requires it (image fallback, removed badge/rating rows).

Rendering note: only these files are on the rendered page — `index.html`, `App.jsx`, `Navbar`, `Hero`, `DoctorSection`, `EhrPracticeSection`, `PracticeOperationsSection`, `DownloadAppSection`, `Footer`, `BookingModal`, `ProfileModal`, `doctorsData.js`, `translations.js`. The other components (`TrustMetrics`, `SolutionsSection`, `MobileAppSection`, `EhrFeatures`, `AiVoiceScribeDemo`, `DoctorDirectory`, `DoctorDetailModal`, `CaseStudyDrawer`, `solutionsData.js`) are **not imported anywhere**; they still get the flagged terms removed (task says whole codebase) plus a visible TODO header, but no rewrite of their placeholder stats.

Verified facts from research:
- Emily Rodriguez's photo `photo-1594824813637-450f3c559850` returns **404** (all other doctor/hero images return 200).
- Replacement candidate `photo-1612349317150-e413f6a5b16d` returns 200 (subject to visual check in preview; initials fallback covers any miss).
- No "inreased"-style typo found anywhere; only copy issue found is repetition in `PracticeOperationsSection`.
- "Get started free" appears in `EhrPracticeSection` and `DownloadAppSection`; `translations.getStarted` says "Free"/"Gratuit"/"Gratis" (ar already has no "free").
- `translations.js` is currently **not wired** to the UI (`currentLang` only changes the navbar label) — still updated per task item 5.

---

## 1. `index.html` — meta/OG

| | old | new |
|---|---|---|
| `<title>` | `Cari Medical \| Modern Healthcare Platform & AI Clinical EHR for Africa` | `Cari Medical \| Making healthcare more accessible & affordable` |
| `meta description` | `Cari Medical is Africa's premier healthcare operating system. Connect with verified doctors, book appointments, and empower your clinic with AI voice EHR, digital prescriptions, and automated claims.` | `Cari Medical connects you with licensed, empathetic doctors and gives clinicians a modern EHR platform that creates more focused, personal time with every patient.` |

Add (none exist today): `og:title`, `og:description`, `og:type`, `og:url`, `og:site_name`, `twitter:card` reusing the same two strings. **TODO comment**: confirm live URL and add `og:image` before launch.

## 2. `src/components/Hero.jsx`

| old | new |
|---|---|
| badge `Compassionate care from verified African specialists` | `Compassionate care from verified doctors` |
| subhead `Cari Medical connects you with licensed, empathetic doctors across Africa. Giving clinicians modern EHR tools so you get more personalized, dedicated time.` | `Cari Medical connects you with licensed, empathetic doctors. Our modern EHR tools give clinicians more focused, personal time with every patient.` |
| caption `Consult in clinic or via secure video` | `Book an appointment with a verified doctor` |
| floating badge `MDCN & MDCG Verified` / `Accredited Councils` | single line `Verified doctors` (badge kept so the image-card layout is unchanged) |

- Delete the whole social-proof row: avatar stack + `★★★★★ 4.9/5 Rating` + `120,000+ patient consultations delivered`.
- Keep `Real Doctors · Genuine Care` (still fits).
- Headline `Making healthcare more accessible & affordable` stays (their real positioning).

## 3. `src/components/EhrPracticeSection.jsx`

- Body → `Cari Medical is a modern electronic health record platform. We've created a pleasant, effortless experience that gives clinicians more focused time with their patients.`
- Button `Get started free` → `Get started`.
- **`Full video tour` button stays exactly as it is** (your call) — it keeps opening the walkthrough modal in `App.jsx`; no hiding, no URL change.
- Feature cards tightened to parallel 2-sentence / similar length:
  - Audio notes: `Regain hours by recording your notes instead of typing. We transcribe the audio and translate it into multiple languages.` → `Record your notes instead of typing them. We transcribe the audio and translate it into multiple languages.`
  - AI-assisted diagnosis: `We use machine learning to help you detect early signs of problems more accurately and reduce medication errors.` → `Machine learning helps you spot early signs of problems and reduce medication errors.`
  - Digital requests: `We make it easy for you to request prescriptions, labs, and image studies directly from the patient's record.` → `Request prescriptions, labs, and imaging directly from the patient's record.`

## 4. `src/components/PracticeOperationsSection.jsx` (exact copy from brief)

Keeps current h3 + bold lead + body structure (no layout change):

- **Finances & Insurance** — bold: `Manage your finances and insurance claims in one place.` body: `Track the status of your claims and payments, along with your patients and staff.` (old body: `We make it easy to monitor the status of your claims and payments. We also make it easy to monitor the status of your patients and staff.`)
- **Appointments & Rooms** — bold: `Manage your appointments and rooms in one place.` body: `Monitor and reduce patient wait times, and keep an eye on critical situations.` (old body: `We give you a simple and easy way to monitor and reduce the wait time of your patients and keep an eye on critical situations.`)
- **Communication & Sharing** — bold: `Keep your team and patients in the loop.` body: `Clear communication tools lead to better productivity and better patient outcomes.` (old: `Keep your team and patients in the loop with our communication tools.` + `We make it easy to communicate with your team and patients. This allows for increased productivity and better patient outcomes.`)

## 5. Find a Doctor — `DoctorSection.jsx` + `ProfileModal.jsx` + `doctorsData.js`

- **Image fallback**: add a small `DoctorAvatar` helper (defined in `DoctorSection.jsx`, exported, reused by `ProfileModal.jsx`): `onError` → neutral initials (`ER` from "Dr. Emily Rodriguez") on brand green `#00a859`, white text. No alt-text/broken-icon fallback anywhere on the page.
- **Emily photo**: `photo-1594824813637-450f3c559850` (404) → `photo-1612349317150-e413f6a5b16d` (200). Confirm visually in preview after implementation.
- **Truncation**: descriptions keep `line-clamp-2` (clean ellipsis at word boundary); data descriptions are full sentences; grid cards already stretch to equal height per row — no structural change.
- **Demo-data TODO** placed directly above `DOCTORS`:
  ```
  // TODO(cari): ALL doctor records below are demo/sample data.
  // License numbers in particular must be replaced with real data (or clearly
  // labelled as samples) before this page is shown as live. Locations, clinics,
  // fees, education and slots are also sample values.
  ```
- Remove unverifiable `rating` / `reviewsCount` fields (flagged `4.9`); drop the corresponding rating display lines in the unused `DoctorDirectory.jsx` / `DoctorDetailModal.jsx` so nothing renders `undefined`.
- Michael Chen bio: `...cardiovascular wellness across West Africa.` → `...cardiovascular wellness.`
- `LOCATIONS[0]`: `Near me (Ibadan, Nigeria)` → `Near me` (matches App default below).

## 6. `src/App.jsx`

- Default location `'Near me (Ibadan, Nigeria)'` → `'Near me'`.
- Video-modal body: `...and instant clinic operations across Africa.` → `...and simpler clinic operations.` (modal and its trigger button both stay as they are).

## 7. `src/components/Footer.jsx`

| old | new |
|---|---|
| `Modern electronic health record platform and doctor network for Africa.` | `Modern electronic health record platform and doctor network.` |
| `Cari — Modern Healthcare Platform for Africa \| Cari` | `Cari Medical — Making healthcare more accessible & affordable` |
| `© 2021 – 2026 Cari Finance, Inc. All rights reserved.` | `© 2021 – 2026 Cari Medical. All rights reserved.` + `// TODO(cari): confirm exact legal entity name` |

## 8. `src/components/DownloadAppSection.jsx`

- Bottom CTA `Get started free` → `Get started` (consistent with item 2; "free" is unconfirmed everywhere).
- `// TODO(cari): confirm published claims — MedGemma/Claude, LiveKit, HIPAA/GDPR compliance — before launch` above the `features` list.

## 9. `src/data/translations.js` — all four locales

Header TODO: `// TODO(cari): these strings are NOT wired into the UI yet (the language switcher only changes its own label). All claims removed below; verify wording per locale before wiring.`

| key | en (new) | fr | ar | es |
|---|---|---|---|---|
| `tagline` | Making healthcare more accessible & affordable | Rendre les soins de santé accessibles et abordables | رعاية صحية أكثر سهولة وفي متناول الجميع | Haciendo la atención médica más accesible y asequible |
| `heroTitlePrefix` | Making healthcare | Rendre les soins de santé | جعل الرعاية الصحية | Haciendo la atención médica |
| `heroTitleHighlight` | accessible & affordable | accessibles et abordables | أكثر سهولة وفي متناول الجميع | más accesible y asequible |
| `heroSubtitle` | Cari Medical connects you with licensed, empathetic doctors. Our modern EHR tools give clinicians more focused, personal time with every patient. | (same meaning in French) | (same meaning in Arabic) | (same meaning in Spanish) |
| `nearMe` | Near me | Près de moi | بالقرب مني | Cerca de mí |
| `getStarted` | Get Started | Commencer | ابدأ الآن | Empezar |
| `verifiedLicense` | Verified License | Licence vérifiée | ترخيص موثّق | Licencia verificada |

Removes: `Africa's Next-Generation...`, `African medical specialists`, `1,200 clinics`, `Ibadan/Abidjan/Dakar/Cairo/Khartoum`, `Free/Gratuit/Gratis`, `Council License` (MDCN-style). All other keys stay as-is.

## 10. Unused components/data — flagged terms only + TODO header

Each file gets `// TODO(cari): not currently rendered. Contains placeholder claims/stats — verify or remove before this component is used.`

- `TrustMetrics.jsx`: `Trusted Across African Healthcare` → `Trusted by healthcare teams`; `Over 1,200 healthcare institutions ... across West Africa.` → `Healthcare teams rely on Cari Medical for smooth clinical operations.`; delete the `MDCN / MDCG Compliant` badge; TODO notes testimonials (Ibadan/Accra/Lagos, ₦14M) and `99.98% SLA`/NDPR badges are unverified.
- `SolutionsSection.jsx`: `Pan-African Health Ecosystem` → `Healthcare Ecosystem`; `Tailored Healthcare Solutions for Africa` → `Tailored Healthcare Solutions`; city sentence → `Whether you run a large teaching hospital, a private clinic, a diagnostic laboratory, or a rural outreach program, Cari equips your organization with specialized digital health tooling.`
- `solutionsData.js`: `African medical accents` → `medical accents`; `anonymized African clinical outcomes` → `anonymized clinical outcomes`; TODO flags the invented metrics (2.5 h, 85%, 40%, 94%, 48 min).
- `EhrFeatures.jsx`: `modern African health centres` → `modern health centres`; `...disease patterns across Africa helps doctors` → `...disease patterns helps doctors`; `(WHO & West African Health Org)` → `(WHO)`.
- `AiVoiceScribeDemo.jsx`: `Proprietary African Clinical NLP Engine` → `Clinical NLP Engine`; drop invented `over 2.5 hours every day` → `Doctors regain time every day.`; `into local African dialects` → `into multiple languages`.
- `CaseStudyDrawer.jsx`: `Africa's modern digital health operating system` → `a modern digital health operating system`; `Verified MDCN/MDCG licensed doctor cards` → `Verified licensed doctor cards`; `Offline-First African Cloud Architecture` → `Offline-First Cloud Architecture`; `so patients in West Africa can book` → `so patients can book`. TODO: this is job-application/portfolio content — candidate for deletion.
- `MobileAppSection.jsx`: delete the `★★★★★ 4.9/5 Rating` block.

## 11. Verification

1. `npm run lint` (oxlint) and `npm run build` — no new warnings/unused imports.
2. `npm run dev` + preview screenshot: hero (badge/rows removed, layout intact), Find a Doctor (all 5 photos load; force-fail one img via console to confirm initials fallback), EHR section (copy updated, video button untouched), footer.
3. Repo-wide re-search for `Africa|African|MDCN|MDCG|4\.9|120,000|secure video|Accredited Councils` → zero hits (except dist/, regenerated by build).

## Needs your confirmation

1. **Emily's new photo** subject (URL works; visual check in preview).
3. Footer legal entity: `Cari Finance, Inc.` → `Cari Medical`? (TODO left in code).
4. `Get started free` → `Get started` also applied in DownloadAppSection (beyond the brief) — keep?
5. Doctor demo data (licenses, cities, clinics, fees, education) — replace or label as sample?
6. OG tags added from scratch — confirm live URL + og:image.
