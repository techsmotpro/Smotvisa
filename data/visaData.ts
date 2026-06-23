export interface VisaInfo {
    id: string;
    name: string;
    flag: string;
    title: string;
    description: string;
    processingTime: string;
    validity: string;
    entryType: string;
    price: string;
    requirements: string[];
    steps: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
}

export const visaData: Record<string, VisaInfo> = {
    us: {
        id: "us",
        name: "United States",
        flag: "🇺🇸",
        title: "USA Visa for Indians",
        description: "Get your USA visa approval within days of applying. Our service ensures you get your visa on time through helping you in the application process and reliable support.",
        processingTime: "Varies (Appointment Based)",
        validity: "Up to 10 Years",
        entryType: "Multiple Entry",
        price: "$249",
        requirements: [
            "Passport valid for at least six months beyond your travel, plus any old passports",
            "DS-160 confirmation page and appointment confirmation",
            "Recent US-spec photograph (51mm x 51mm, white background)",
            "MRV fee payment receipt",
            "Proof of funds bank statements, income tax returns, salary slips",
            "Proof of ties to India employment letter, business proof, property or family commitments",
            "Travel itinerary or purpose evidence (invitation letter, conference details, family details)",
            "For business travel company letter, invitation from the US host, event registration",
        ],
        steps: [
            { title: "Consultation & Profile Review", description: "We understand your travel purpose, history and ties to India, then confirm the right visa category." },
            { title: "DS-160 Preparation", description: "We help you complete the online application accurately — the most common source of avoidable errors." },
            { title: "Fee Payment & Appointment Booking", description: "We guide you through the MRV fee payment and securing the earliest realistic interview slot." },
            { title: "Document Compilation", description: "We build a clean, logical document file that tells your story clearly." },
            { title: "Interview Preparation", description: "Personalised mock interview and coaching on how to answer truthfully and confidently." },
            { title: "Biometrics & Interview Support", description: "Guidance for your VAC biometrics visit and consulate interview day." },
            { title: "Post-Decision Support", description: "Passport collection guidance and next steps once your visa is approved." },
        ],
        faqs: [
            { question: "What is a B1/B2 visa?", answer: "It is a combined US non-immigrant visitor visa. B1 covers short business visits and B2 covers tourism, family visits and medical travel. Most Indian applicants receive both together." },
            { question: "How long is the US B1/B2 visa valid?", answer: "For most Indian citizens it is issued for up to ten years with multiple entries, though each individual stay is usually limited to six months as decided by the officer at the port of entry." },
            { question: "Do I need to attend an interview?", answer: "Most first-time applicants attend an in-person interview at a US consulate. Eligible renewal applicants may qualify for the interview waiver (dropbox) route." },
            { question: "How much does the US visa cost?", answer: "The MRV application fee is currently around US $185 (about ₹15,500). Our consultancy fee is separate and quoted upfront with no hidden charges." },
            { question: "Can SmotVisa guarantee my visa approval?", answer: "No. The decision rests entirely with the US consulate. What we guarantee is a meticulously prepared application and thorough interview preparation that gives you the strongest possible case." },
            { question: "How early should I apply?", answer: "Because interview waits can run into months, we recommend starting as soon as your travel is on the horizon — ideally two to four months ahead." },
            { question: "I have never travelled abroad. Can I still get a US visa?", answer: "Yes. A first-time traveller with stable finances, clear ties to India and an honest purpose is a perfectly valid applicant. We specialise in presenting first-time profiles well." },
            { question: "What is the DS-160 form?", answer: "It is the mandatory online application for US non-immigrant visas. Accuracy here is critical — small inconsistencies are a common cause of refusal, which is why we help you complete it carefully." },
            { question: "Can I apply for a business visa to attend a conference?", answer: "Yes, that falls under B1 business visitor activity. We help prepare invitation letters, event registration and supporting company documents." },
            { question: "What happens if my visa is refused?", answer: "You can reapply. We review what likely went wrong, strengthen the weak areas and help you prepare a better application for the next attempt." },
            { question: "Do you help with the visa interview?", answer: "Yes. We run a personalised mock interview and coach you to answer honestly and confidently — never to memorise scripted lines." },
            { question: "Can my whole family apply together?", answer: "Yes. Families can apply together, and we organise each applicant’s documents while keeping the family’s travel purpose consistent." },
            { question: "Which consulate should I choose in India?", answer: "Generally the one closest to your residence, though appointment availability can influence the choice. We advise you based on current wait times." },
            { question: "Is travel insurance required for the US?", answer: "It is not mandatory for the visa, but it is strongly recommended for US travel given healthcare costs. We can arrange suitable cover." },
            { question: "Does SmotVisa handle immigration or green cards?", answer: "No. We are strictly a tourist and business visitor-visa consultancy. We do not handle immigration, permanent residency, work or student visas." },
        ]
    },
    uk: {
        id: "uk",
        name: "United Kingdom",
        flag: "🇬🇧",
        title: "Expert UK Visa Visit Visa Consultants in India",
        description: "India files more UK visa applications than any other country in the world, and the grant rate for visitor visas is around 82% when applications are complete, honest and well presented. SmotVisa takes the guesswork out of it.",
        processingTime: "Standard: ~3 weeks; Priority: ~5 working days",
        validity: "6 months / 2 years / 5 years / 10 years",
        entryType: "Multiple Entry",
        price: "₹16,500",
        requirements: [
            "Current passport plus any previous passports",
            "Recent digital photograph meeting UK specifications",
            "Bank statements for the last six months",
            "Proof of employment or business ownership",
            "Income tax returns / salary slips",
            "Travel itinerary and accommodation details",
            "Invitation letter (for family visits or business meetings)",
            "Evidence of ties to India showing intent to return",
        ],
        steps: [
            { title: "Consultation", description: "We confirm your purpose and recommend the right validity period." },
            { title: "Online Application", description: "Accurate completion of the GOV.UK Standard Visitor application." },
            { title: "Fee Payment Guidance", description: "Visa fee and any priority-service options explained clearly." },
            { title: "Document & Bank Statement", description: "We assemble and sense-check your bank statements, employment proof and itinerary." },
            { title: "VFS Appointment", description: "Biometrics appointment booked at your nearest VFS Global centre." },
            { title: "Submission & Tracking", description: "We guide you through document upload and keep you informed until a decision." },
        ],
        faqs: [
            { question: "What is the UK Standard Visitor visa?", answer: "It is a single visa covering tourism, family visits, business meetings and short courses for stays of up to six months." },
            { question: "Can I do business activities on this visa?", answer: "Yes — meetings, conferences, negotiations and training are permitted. Paid or unpaid work is not." },
            { question: "How long does it take to get a UK visa?", answer: "Standard processing is around three weeks; a priority service can decide in about five working days." },
            { question: "How much does the UK visitor visa cost?", answer: "The six-month visa is roughly ₹16,500 in 2026, plus VFS service charges. Long-term visas cost more." },
            { question: "Should I apply for a 2, 5 or 10-year visa?", answer: "If you travel to the UK frequently, a long-term visitor visa can save money and effort. We advise based on your travel pattern." },
            { question: "Do I need to attend a VFS centre?", answer: "Yes, to give your biometrics (fingerprints and photo). We book the appointment for you." },
            { question: "What bank balance do I need?", answer: "There is no fixed figure — your funds must credibly cover the trip. We help you present six months of clean statements." },
            { question: "Can a first-time traveller get a UK visa?", answer: "Absolutely. With clear finances and ties to India, first-time applicants are approved regularly." },
            { question: "Can my family apply together?", answer: "Yes. Each applicant submits their own application, and we coordinate the family's documents and travel plan." },
            { question: "What if a relative in the UK is inviting me?", answer: "We help prepare the invitation letter and any sponsor documents to support a family-visit application." },
            { question: "Is travel insurance required?", answer: "It is not mandatory for the visa but is strongly recommended. We can arrange it." },
            { question: "What causes most UK visa refusals?", answer: "Financial issues — insufficient funds or unexplained large deposits — top the list, followed by weak ties to home." },
            { question: "Can you guarantee approval?", answer: "No. UK Visas and Immigration makes the decision. We guarantee a complete, honest, well-prepared application." },
            { question: "What happens if I'm refused?", answer: "You can reapply addressing the refusal reasons. We review your case and strengthen the weak points." },
            { question: "Does SmotVisa handle work or student visas?", answer: "No. We focus only on tourist and business visitor visas, not work, study, PR or immigration." },
        ]
    },
    uae: {
        id: "uae",
        name: "UAE",
        flag: "🇦🇪",
        title: "UAE Tourist Visa",
        description: "Explore the vibrant cities of Dubai, Abu Dhabi and beyond with a UAE tourist visa.",
        processingTime: "3-5 Working Days",
        validity: "30 Days / 60 Days",
        entryType: "Single / Multiple Entry",
        price: "$89",
        requirements: [
            "Clear passport copy",
            "Passport-sized photograph",
            "Flight ticket (optional for some nationalities)",
            "National ID copy"
        ],
        steps: [
            { title: "Submit Docs", description: "Send your passport details and photo to our team." },
            { title: "Application Proof", description: "We process your application through licensed partners." },
            { title: "Approval", description: "Receive your E-Visa via email within 3-5 days." }
        ],
        faqs: [
            { question: "Is insurance mandatory for UAE visa?", answer: "Yes, travel insurance with COVID-19 coverage is currently mandatory." }
        ]
    },
    canada: {
        id: "canada",
        name: "Canada",
        flag: "🇨🇦",
        title: "Canada Tourist Visa in India",
        description: "A Canada Temporary Resident Visa (TRV) opens the door to tourism, family visits and business travel. SmotVisa handles your online application and document file end to end — always as a genuine short-term visitor.",
        processingTime: "3–5 weeks after biometrics (varies)",
        validity: "Up to 10 Years (or passport expiry)",
        entryType: "Multiple Entry",
        price: "CAD $100 + CAD $85",
        requirements: [
            "Passport valid for the duration of travel",
            "Recent photograph meeting Canadian specifications",
            "Bank statements for the last six months",
            "Income tax returns and proof of employment or business",
            "Purpose-of-travel letter and itinerary",
            "Invitation letter from a Canadian host or business (if applicable)",
            "Proof of ties to India — job, business, family, property",
        ],
        steps: [
            { title: "Consultation & Eligibility Check", description: "We confirm the visitor route fits your purpose and advise on your profile." },
            { title: "Online TRV Application", description: "Accurate completion of the IRCC application, reviewed line by line." },
            { title: "Purpose-of-Travel Letter", description: "A clear, honest letter explaining your trip and your ties to India — central to a strong file." },
            { title: "Financial & Supporting File", description: "Bank statements, employment proof, itinerary and invitation letters assembled and sense-checked." },
            { title: "Biometrics", description: "We guide you to your VFS appointment for fingerprints and photo within 30 days of your instruction letter." },
            { title: "Submission & Tracking", description: "We keep you informed from biometrics through to a decision." },
        ],
        faqs: [
            { question: "What is a Canada TRV?", answer: "The Temporary Resident Visa is the official visitor visa for tourism, family visits and business travel to Canada." },
            { question: "Is it tourist and business in one?", answer: "Yes. The visitor visa covers both leisure and short business activities like meetings and conferences." },
            { question: "Do I need to give biometrics?", answer: "Yes, applicants aged 14 to 79 give fingerprints and a photo at a VFS centre after applying." },
            { question: "How long does a Canada visa take?", answer: "Often around three to five weeks after biometrics for fresh files, though it can be longer in busy seasons." },
            { question: "How much does it cost?", answer: "The IRCC fee is CAD $100 plus a CAD $85 biometrics fee. Our consultancy fee is separate and quoted upfront." },
            { question: "How long is the visa valid?", answer: "Many applicants receive multiple-entry visas valid up to ten years or until the passport expires." },
            { question: "Can a first-time traveller get a Canada visa?", answer: "Yes, with clear finances, a genuine purpose and strong ties to India." },
            { question: "What is the purpose-of-travel letter?", answer: "A letter explaining why you are visiting, your plans and your ties to India. It's central to a strong application, and we draft it with you." },
            { question: "Can family members apply together?", answer: "Yes. We coordinate the family's documents and a consistent travel plan." },
            { question: "What if I'm visiting relatives in Canada?", answer: "We help prepare the invitation letter and any host documents to support a family visit." },
            { question: "Is travel insurance needed?", answer: "Not mandatory for the visa but strongly recommended for Canada. We can arrange it." },
            { question: "What's the main reason for refusal?", answer: "Doubts about whether you'll return home and weak finances are the most common reasons." },
            { question: "Can you guarantee my visa?", answer: "No. IRCC decides. We guarantee a thorough, honest, well-built application." },
            { question: "What if my application is refused?", answer: "You can reapply. We review the likely reasons and strengthen your next application." },
            { question: "Do you handle Canada PR or work permits?", answer: "No. We assist only with tourist and business visitor visas, never PR, work or study." },
        ]
    },
    australia: {
        id: "australia",
        name: "Australia",
        flag: "🇦🇺",
        title: "Australia Visa for Indians – Tourist & Business Visa Assistance",
        description: "Planning a holiday in Australia or traveling for a business meeting? SmotVisa makes your Australia Tourist Visa and Business Visa process fast, simple and stress-free. With multiple branches across India, our visa experts help you prepare the right documents, avoid errors, and submit a complete application for the best chance of approval.",
        processingTime: "10-25 Working Days",
        validity: "3 Months to 12 Months",
        entryType: "Single / Multiple Entry",
        price: "$219",
        requirements: [
            "Valid passport (at least 6 months validity)",
            "Passport-size photos",
            "Completed visa application form",
            "Travel itinerary (plan & dates)",
            "Bank statements",
            "Income proof (ITR / salary slips / business proof)",
            "Sponsorship letter (if someone else funds your trip)",
            "Invitation letter from Australian company (for business visa)",
            "Company registration / business proof in India (for business visa)",
            "Travel purpose letter from employer or self-declaration (for business visa)",
            "Accommodation confirmations",
            "Travel insurance (optional but recommended)"
        ],
        steps: [
            { title: "Free assessment", description: "We check your travel purpose & eligibility." },
            { title: "Tailored document checklist", description: "You get a simplified list specific to Tourist or Business Visa." },
            { title: "Document preparation", description: "We help arrange, format, and review your financial, travel, and supporting documents." },
            { title: "Visa application filing", description: "We help you with your ImmiAccount submission & VFS steps." },
            { title: "Biometrics guidance", description: "We schedule your biometrics at the nearest VFS center." },
            { title: "Application tracking", description: "We track the file & update you on every movement." }
        ],
        faqs: [
            { question: "Do I need confirmed flight tickets before applying?", answer: "No, we guide you on safe travel planning without losing money." },
            { question: "Is biometrics mandatory for Indian applicants?", answer: "Yes, biometrics is generally required at VFS India." },
            { question: "Can I get multiple-entry?", answer: "Yes, many applicants receive multiple-entry visas depending on eligibility and history." }
        ]
    },
    schengen: {
        id: "schengen",
        name: "Schengen",
        flag: "🇪🇺",
        title: "Schengen Visa from India | Apply Schengen Visa with Expert Assistance – SmotVisa",
        description: "Planning a trip to Europe? SmotVisa helps travellers with end-to-end Schengen visa assistance from document checks and application preparation to appointment booking and post-submission tracking. Our team specialises in B2C visa support for short-stay (up to 90 days) Schengen visas, tailored for tourists, business travellers, students on short courses, and transit passengers.",
        processingTime: "15 Calendar Days",
        validity: "Up to 90 Days in any 180-day period",
        entryType: "Single / Double / Multiple Entry",
        price: "$179",
        requirements: [
            "Valid passport (minimum three months validity after return and at least two blank pages)",
            "Completed and signed visa application form",
            "Two recent biometric photographs meeting Schengen specifications",
            "Proof of travel arrangements (flight itinerary, accommodation)",
            "Proof of financial means (bank statements, salary slips, sponsorship letter)",
            "Proof of travel medical insurance with minimum €30,000 coverage",
            "Proof of civil status (marriage certificate, birth certificate if applicable)",
            "Cover letter explaining purpose and duration of visit",
            "For minors: Birth certificate, consent letter from parents or legal guardians, copies of parents' passports and visas, school NOC"
        ],
        steps: [
            { title: "Personalised visa checklist", description: "Get a custom checklist for your purpose of travel (tourist, business, student, or transit)." },
            { title: "Document verification and review", description: "We verify and review all your documents to ensure compliance with consular standards." },
            { title: "Cover letter and invitation drafting", description: "Our experts draft professional cover letters and help with invitation letters." },
            { title: "Appointment booking", description: "We book your appointment at VFS or consulate for submission." },
            { title: "Photo and travel insurance guidance", description: "We provide guidance on photo specifications and recommend trusted insurance providers." },
            { title: "Application tracking", description: "We track your application until a decision is made." }
        ],
        faqs: [
            { question: "Is Schengen Visa available on arrival for Indian citizens?", answer: "No. There is no visa-on-arrival option for Indian passport holders in Schengen countries. Indians must obtain a valid Schengen visa prior to travelling." },
            { question: "What are the benefits of applying for a Schengen visa?", answer: "A Schengen visa allows non-EU nationals to travel to and move freely between 29 Schengen member countries for short stays (up to 90 days in any 180-day period) for tourism, business, study, or transit purposes." },
            { question: "Can I apply Schengen visa online?", answer: "Yes. Schengen visa applications can be made online through the official portal of the relevant embassy or consulate. SmotVisa assists with the entire online application process." },
            { question: "Where do I submit a Schengen visa application in India?", answer: "Applications must be made at the relevant embassy or authorised application centre (such as VFS Global or BLS International) in India. SmotVisa guides you through the correct mission selection." },
            { question: "How long can I stay with a Schengen Visa?", answer: "Schengen short-stay visas allow up to 90 days in any 180-day period. The exact duration is determined by the consulate based on your travel plans." },
            { question: "Is it possible to extend the Schengen Visa?", answer: "Extensions are rare and granted only in exceptional situations like serious illness, force majeure, or humanitarian reasons. Applications must be made to local immigration authorities in the Schengen country where you are staying." },
            { question: "Can I travel to more than one country with a Schengen Visa?", answer: "Yes. A single Schengen visa allows you to travel to and move freely between all Schengen member countries. However, you must apply to the embassy or consulate of the main destination or the country of first entry." },
            { question: "Who doesn't need to pay for a Schengen visa?", answer: "Children under 6 years of age, students and researchers, and certain other categories may be eligible for free or reduced-fee visas. SmotVisa can help you determine if you qualify for any fee exemptions." },
            { question: "Can a minor apply for a Schengen visa application?", answer: "Yes. Minors can apply for a Schengen visa. Additional documents are required, including birth certificate, consent letter from parents or legal guardians, copies of parents' passports and visas, and school NOC if travelling during academic term." },
            { question: "Who can apply for a Schengen visa in India?", answer: "Indian passport holders and foreign residents in India can apply for a Schengen visa from India. Applications must be made at least 15 calendar days before the intended travel date." },
            { question: "If my application for a Schengen visa is rejected, will I get a refund?", answer: "No. Schengen visa fees are non-refundable, even if your application is rejected. The fee covers the processing of your application, not the issuance of the visa." },
            { question: "What will happen if I extend my stay beyond my visa's validity?", answer: "Overstaying your Schengen visa is a serious offense that can result in fines, deportation, and future visa restrictions. If you need to extend your stay, you must apply for an extension before your current visa expires." },
            { question: "How many months prior to the trip should I apply for a Schengen visa?", answer: "Applications should be made between 6 months and 15 calendar days before the intended travel date. We recommend applying at least 4-6 weeks in advance to ensure enough processing time." },
            { question: "Is it mandatory for Indians to get travel insurance for a Schengen visa?", answer: "Yes. Travel medical insurance is a mandatory part of every Schengen visa application. The insurance must cover at least €30,000 for medical emergencies and repatriation, be valid throughout the Schengen Area, and be active for the entire duration of your trip." }
        ]
    }
};
