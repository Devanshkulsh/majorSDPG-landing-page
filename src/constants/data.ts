import {
  FaBookOpen,
  FaDumbbell,
  FaFlask,
  FaHospital,
  FaLeaf,
  FaPeopleGroup,
  FaSchool,
  FaUserDoctor,
  FaBed,
  FaUtensils,
} from "react-icons/fa6";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 40, suffix: "+", label: "Years of Excellence", icon: "🏥" },
  { value: 5000, suffix: "+", label: "Alumni Doctors", icon: "👨‍⚕️" },
  { value: 3, suffix: "", label: "Specialized Programs", icon: "🎓" },
  { value: 100, suffix: "%", label: "CCIM Approved", icon: "✅" },
];

export const ABOUT_STATS = [
  { value: 40, suffix: "+", label: "Years Established" },
  { value: 200, suffix: "+", label: "Beds Hospital" },
  { value: 50, suffix: "+", label: "Expert Faculty" },
  { value: 5000, suffix: "+", label: "Graduates" },
];

export const COURSES = [
  {
    icon: "🌿",
    iconBg: "bg-gold",
    badge: "UNDERGRADUATE",
    title: "Bachelor of Ayurvedic Medicine & Surgery (BAMS)",
    duration: "5½ Years (including 1-year internship)",
    description:
      "The flagship undergraduate program providing comprehensive training in classical Ayurvedic texts, modern anatomy, physiology, pharmacology, and clinical practice. Graduates are eligible to practice as licensed Ayurvedic physicians.",
    highlights: [
      "Ayurvedic Samhitas & Philosophy",
      "Dravyaguna (Ayurvedic Pharmacology)",
      "Kriya Sharira & Rachana Sharira",
      "Panchakarma & Rasayana",
      "Clinical Training in Attached Hospital",
    ],
    eligibility: "10+2 with Biology | NEET qualified",
    cta: "Enquire for BAMS",
    ctaClass: "bg-gold text-charcoal hover:bg-gold-dark",
  },
  {
    icon: "🌸",
    iconBg: "bg-sky",
    badge: "POSTGRADUATE · MS",
    title: "Prasuti Tantra Avum Stri Rog (MS)",
    duration: "3 Years",
    description:
      "Advanced postgraduate specialization in Ayurvedic gynecology and obstetrics. Master ancient Stri Rog protocols alongside modern clinical gynecology for holistic women's healthcare.",
    highlights: [
      "Garbhini Paricharya & Prasava",
      "Yoni Vyapad Chikitsa",
      "Stri Roga diagnosis & management",
      "Clinical postings in OBG ward",
      "Research dissertation",
    ],
    eligibility: "BAMS from recognized university",
    cta: "Enquire for MS (Prasuti)",
    ctaClass: "bg-sky text-white hover:bg-sky-dark",
  },
  {
    icon: "⚕️",
    iconBg: "bg-green",
    badge: "POSTGRADUATE · MS",
    title: "Shalya Tantra (MS)",
    duration: "3 Years",
    description:
      "Postgraduate specialization in Ayurvedic surgery — one of the world's oldest surgical traditions. Master Sushruta's surgical techniques alongside contemporary operative procedures.",
    highlights: [
      "Sushruta Samhita & Yantra-Shastra",
      "Ksharasutra therapy (Ayurvedic para-surgical)",
      "OT exposure & surgical postings",
      "Wound management & Agnikarma",
      "Research dissertation",
    ],
    eligibility: "BAMS from recognized university",
    cta: "Enquire for MS (Shalya)",
    ctaClass: "bg-green text-white hover:bg-green-light",
  },
];

export const FACILITIES = [
  {
    icon: FaHospital,
    title: "Teaching Hospital",
    desc: "200+ bed hospital with OPD, IPD, OT, and specialty clinics for hands-on clinical exposure from day one.",
    image: "/facilities/teaching.webp",
    tag: "Clinical",
  },
  {
    icon: FaBookOpen,
    title: "Central Library",
    desc: "10,000+ volumes of Ayurvedic classics, modern medical journals, and curated digital databases.",
    image: "/facilities/library.webp",
    tag: "Academic",
  },
  {
    icon: FaFlask,
    title: "Modern Laboratories",
    desc: "Fully equipped pharmacognosy, biochemistry, and anatomy dissection labs for immersive practical learning.",
    image: "/facilities/lab.webp",
    tag: "Research",
  },
  {
    icon: FaLeaf,
    title: "Herbal Garden",
    desc: "On-campus medicinal plant garden with 300+ species — a living classroom for Dravyaguna and pharmacognosy.",
    image: "/facilities/herbalgarden.webp",
    tag: "Nature",
  },
  {
    icon: FaBed,
    title: "Hostel Facility",
    desc: "Secure, comfortable on-campus hostels for boys and girls with 24/7 wardens and all essential amenities.",
    image: "/facilities/hostel.webp",
    tag: "Living",
  },
  {
    icon: FaDumbbell,
    title: "Gymnasium",
    desc: "A well-equipped fitness center designed to support student wellness, strength, and daily physical training.",
    image: "/facilities/gym.webp",
    tag: "Wellness",
  },
  {
    icon: FaPeopleGroup,
    title: "Sports & Clubs",
    desc: "Active sports programs, cultural clubs, and student bodies that foster teamwork, creativity, and leadership.",
    image: "/facilities/sports.webp",
    tag: "Community",
  },
  {
    icon: FaUtensils,
    title: "Mess & Dining",
    desc: "Nutritious, hygienic meals served in a spacious dining hall — fuel for rigorous academic and clinical days.",
    image: "/facilities/mess.webp",
    tag: "Living",
  },
  {
    icon: FaUserDoctor,
    title: "Expert Faculty",
    desc: "50+ qualified Vaidyas and professors with decades of combined clinical practice and academic excellence.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=70",
    tag: "Academic",
  },
];

export const STEPS = [
  {
    icon: "✅",
    title: "Check Eligibility",
    desc: "Verify your academic qualifications and NEET/entrance scores",
  },
  {
    icon: "📋",
    title: "Fill Application",
    desc: "Complete the online enquiry form below or download the application",
  },
  {
    icon: "📞",
    title: "Counselling Call",
    desc: "Our admissions team will contact you for guidance and document verification",
  },
  {
    icon: "🎓",
    title: "Confirm Admission",
    desc: "Submit documents, pay fees, and secure your seat",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "MSDS AMCH gave me the foundation I needed. The clinical exposure in the attached hospital was unparalleled, and my professors were true Vaidyas in every sense.",
    name: "Dr. Ankit Verma",
    role: "BAMS 2019, Practicing in Lucknow",
  },
  {
    quote:
      "The MS Shalya Tantra program here is exceptional. The Ksharasutra training and OT postings prepared me for real surgical practice.",
    name: "Dr. Rekha Singh",
    role: "MS Shalya Tantra 2022",
  },
  {
    quote:
      "From the herbal garden to the hospital wards — this campus gave me both knowledge and confidence. Best decision of my life.",
    name: "Dr. Meena Gupta",
    role: "BAMS 2020, Now in Delhi",
  },
  {
    quote:
      "The faculty's depth in classical texts combined with modern clinical training is rare. I owe my career to MSDS AMCH.",
    name: "Dr. Priya Sharma",
    role: "MS Prasuti Tantra 2021",
  },
];

export const FAQS = [
  {
    q: "What is the eligibility for BAMS admission?",
    a: "10+2 with Physics, Chemistry, Biology; minimum 50% marks; NEET-UG qualified.",
  },
  {
    q: "Is NEET required for MS (PG) admissions?",
    a: "Yes, candidates must have cleared AIAPGET (All India Ayush PG Entrance Test) for PG programs.",
  },
  {
    q: "Is the college CCIM approved?",
    a: "Yes, the college is fully approved by CCIM (Central Council of Indian Medicine) and affiliated with the state university.",
  },
  {
    q: "Are hostel facilities available?",
    a: "Yes, separate hostel facilities for boys and girls are available on campus with mess and sports amenities.",
  },
  {
    q: "What is the course duration for BAMS?",
    a: "5½ years including a compulsory one-year internship.",
  },
  {
    q: "How do I apply?",
    a: "Fill the enquiry form above or call our admissions office directly. Our counsellors will guide you through the process.",
  },
];

export const TRUST_ITEMS = [
  "CCIM Approved",
  "University Affiliated",
  "40+ Years Legacy",
  "State-of-the-Art Hospital",
  "Experienced Faculty",
  "Lush Campus",
  "Residential Facilities",
  "BAMS + PG Programs",
];
