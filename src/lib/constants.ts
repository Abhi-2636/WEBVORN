export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 7, suffix: " Days", label: "Fastest Delivery" },
  { value: 4, suffix: "+", label: "Team Members" },
] as const;

export const SERVICES = [
  {
    icon: "Code",
    title: "Fully Furnished Rooms",
    description:
      "Spacious, modern rooms equipped with premium bedding, wardrobes, and study tables for a comfortable stay.",
  },
  {
    icon: "Palette",
    title: "High-Speed Wi-Fi",
    description:
      "Uninterrupted high-speed internet access across the entire building to support your studies and entertainment.",
  },
  {
    icon: "Smartphone",
    title: "Home-Like Meals",
    description:
      "Nutritious and delicious vegetarian meals prepared under strict hygiene standards served daily.",
  },
  {
    icon: "Brain",
    title: "24/7 CCTV Security",
    description:
      "Round-the-clock security surveillance, smart entry systems, and guard patrol to ensure absolute safety.",
  },
  {
    icon: "Gem",
    title: "Professional Housekeeping",
    description:
      "Daily cleaning of common areas and regular room maintenance to keep your environment spotless.",
  },
  {
    icon: "TrendingUp",
    title: "Power Backup & AC",
    description:
      "24/7 power backup support and fully air-conditioned rooms to beat the summer heat.",
  },
  {
    icon: "Clapperboard",
    title: "Laundry & Water Purifier",
    description:
      "On-premise laundry services and clean RO drinking water systems available for all residents.",
  },
] as const;

export const WHY_CHOOSE = [
  {
    icon: "Rocket",
    title: "Premium Living",
    description: "High-end student housing near LPU.",
  },
  {
    icon: "Diamond",
    title: "Outstanding Amenities",
    description: "Fully furnished rooms and clean facilities.",
  },
  {
    icon: "IndianRupee",
    title: "Affordable Pricing",
    description: "Perfect for students seeking comfort on a budget.",
  },
  {
    icon: "Handshake",
    title: "Dedicated Support",
    description: "Prompt service, clean meals, and warden support.",
  },
  {
    icon: "Zap",
    title: "Modern Facilities",
    description: "High-speed Wi-Fi, CCTV, and 24/7 power backup.",
  },
  {
    icon: "BarChart3",
    title: "Student Comfort First",
    description: "Focused on providing a peaceful study environment.",
  },
] as const;

export const PORTFOLIO = [
  {
    id: "ambey-apartment-1",
    title: "Ambey Apartment 1",
    category: "Featured Property",
    tag: "property",
    icon: "🏢",
    description: "Premium student accommodation near LPU Law Gate. Features spacious double sharing rooms, dedicated study tables, high-speed Wi-Fi, and 24/7 CCTV surveillance.",
    highlight: null,
    tech: ["Double Sharing", "Attached Washroom", "Wi-Fi", "CCTV"],
    liveUrl: "https://shreeshyamliving.com",
    accentColor: "#7c3aed",
    featured: true,
  },
  {
    id: "ambey-apartment-2",
    title: "Ambey Apartment 2",
    category: "Standard Property",
    tag: "property",
    icon: "🏢",
    description: "Comfortable and cozy student rooms with excellent ventilation, complete security, and housekeeping. Located in a student-friendly neighborhood close to transit.",
    highlight: "Student-friendly neighborhood.",
    tech: ["Double Sharing", "Housekeeping", "Wi-Fi", "AC Option"],
    liveUrl: null,
    accentColor: "#ef4444",
    featured: false,
  },
  {
    id: "comfort-corner",
    title: "Comfort Corner",
    category: "Premium Property",
    tag: "property",
    icon: "🏠",
    description: "Our flagship residency featuring fully furnished luxury rooms, home-like premium vegetarian meals, active laundry service, full power backup, and dedicated warden support.",
    highlight: "Premium meals included.",
    tech: ["Single Room", "Double Sharing", "All Meals", "Laundry"],
    liveUrl: null,
    accentColor: "#10b981",
    featured: false,
  },
  {
    id: "skg-apartment",
    title: "SKG Apartment",
    category: "Budget Property",
    tag: "property",
    icon: "🏢",
    description: "Affordable shared PG accommodation with essential student amenities. Ideal for budget-conscious students seeking clean, double or triple sharing rooms.",
    highlight: "Affordable student rooms.",
    tech: ["Double Sharing", "Triple Sharing", "Wi-Fi", "Power Backup"],
    liveUrl: null,
    accentColor: "#38bdf8",
    featured: false,
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We analyze your business goals, target audience, and competition to create a winning strategy.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Our designers create stunning, user-centric interfaces that convert visitors into customers.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our engineers build robust, scalable solutions using the latest technologies and best practices.",
  },
  {
    number: "04",
    title: "Testing & QA",
    description:
      "Rigorous testing ensures your product works flawlessly across all devices and browsers.",
  },
  {
    number: "05",
    title: "Launch & Deployment",
    description:
      "We deploy your product with zero downtime and ensure smooth transitions to production.",
  },
  {
    number: "06",
    title: "Support & Growth",
    description:
      "Ongoing maintenance, analytics monitoring, and growth optimization for long-term success.",
  },
] as const;

export const TECH_STACK = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Node.js", color: "#339933" },
  { name: "Express", color: "#ffffff" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Flutter", color: "#02569B" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "OpenAI", color: "#412991" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    role: "Student",
    company: "LPU",
    content:
      "Shree Shyam Living offers the best student rooms near LPU. The amenities, fully furnished rooms, and quick support exceeded my expectations. Highly recommend!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Student",
    company: "LPU",
    content:
      "The high-speed Wi-Fi and laundry services are a lifesaver for students. Shree Shyam Living truly understands premium student accommodation.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Student",
    company: "LPU",
    content:
      "Outstanding safety, 24/7 security, and home-like meals. The staff is professional, prompt, and incredibly supportive. Best place to stay near LPU.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Student",
    company: "LPU",
    content:
      "Living at Shree Shyam Living has been a game-changer for my studies. The environment is quiet and the community is great. 10/10 accommodation.",
    rating: 5,
  },
] as const;

export const PRICING_PLANS = [
  {
    name: "Triple Sharing",
    price: "6,500",
    description: "Affordable shared living for students",
    features: [
      "Fully furnished rooms",
      "High-speed Wi-Fi",
      "Daily delicious meals",
      "24/7 security & CCTV",
      "Regular housekeeping",
      "Power backup & RO water",
    ],
    highlighted: false,
  },
  {
    name: "Double Sharing",
    price: "8,500",
    description: "Perfect balance of privacy and budget",
    features: [
      "Spacious twin sharing",
      "All premium amenities",
      "Attached washroom",
      "Individual wardrobes",
      "Dedicated study desks",
      "Hygienic environment & AC",
      "Meals and laundry included",
    ],
    highlighted: true,
  },
  {
    name: "Single Room",
    price: "12,000",
    description: "Maximum privacy and quiet study space",
    features: [
      "Private single room",
      "Attached private bathroom",
      "Premium quiet study setup",
      "Air conditioning included",
      "24/7 power backup",
      "All premium amenities",
      "Daily housekeeping & maintenance",
      "Direct landlord support",
    ],
    highlighted: false,
  },
] as const;

export const FAQS = [
  {
    question: "How long does a project take?",
    answer:
      "Project timelines range from 7 days for simple landing pages to 6 weeks for complex platforms. During our discovery call, we'll provide a detailed timeline specific to your project requirements.",
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes, ongoing maintenance and support are available. Our Premium plan includes 3 months of free support. We also offer monthly support packages for continued maintenance, updates, and optimization.",
  },
  {
    question: "Can you build AI-powered applications?",
    answer:
      "Absolutely! We specialize in AI integrations and automation. From chatbots and recommendation systems to custom AI agents using OpenAI, we build intelligent solutions that transform businesses.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, industry-standard technologies including React, Next.js, Node.js, Flutter, Firebase, AWS, Docker, and more. Our tech stack is chosen to ensure scalability, performance, and maintainability.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! While we're based in India with India-focused pricing, we work with clients worldwide. Our team is experienced in remote collaboration across different time zones.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain transparent communication through dedicated WhatsApp groups, weekly progress reports, and regular video calls. You'll always know exactly where your project stands.",
  },
] as const;

export const CONTACT_INFO = {
  phone: "+91 91422 72776",
  phoneRaw: "+919142272776",
  whatsapp: "+91 91422 72776",
  whatsappRaw: "919142272776",
  email: "ssliving.official@gmail.com",
  linkedin: "https://www.facebook.com/people/Shree-Shyam-Living/61560784594052/",
  instagram: "https://www.instagram.com/shree_shyam_living?igsh=bmEwZ2F3OHkyZ3pj&utm_source=qr",
  github: "https://wa.me/919142272776",
} as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Fully Furnished Rooms", href: "#services" },
    { label: "High-Speed Wi-Fi", href: "#services" },
    { label: "Home-Like Meals", href: "#services" },
    { label: "24/7 CCTV Security", href: "#services" },
    { label: "Professional Housekeeping", href: "#services" },
    { label: "Power Backup & AC", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Properties", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "WhatsApp", href: `https://wa.me/${CONTACT_INFO.whatsappRaw}`, icon: "MessageCircle" },
    { label: "Instagram", href: CONTACT_INFO.instagram, icon: "Instagram" },
    { label: "Email", href: `mailto:${CONTACT_INFO.email}`, icon: "Mail" },
  ],
} as const;

export const BLOG_POSTS = [
  {
    title: "Why Every Startup Needs a Premium Website in 2026",
    excerpt:
      "In the digital age, your website is your first impression. Learn why investing in premium design pays off.",
    date: "2026-06-15",
    category: "Business",
    slug: "why-startups-need-premium-website",
    readTime: "5 min read",
  },
  {
    title: "The Power of AI Integration in Modern Web Applications",
    excerpt:
      "Discover how AI chatbots, automation, and intelligent systems can transform your business operations.",
    date: "2026-06-10",
    category: "Technology",
    slug: "ai-integration-web-applications",
    readTime: "7 min read",
  },
  {
    title: "React vs Next.js: Choosing the Right Framework for Your Project",
    excerpt:
      "A comprehensive comparison to help you make the right technology choice for your next project.",
    date: "2026-06-05",
    category: "Development",
    slug: "react-vs-nextjs-comparison",
    readTime: "6 min read",
  },
] as const;
