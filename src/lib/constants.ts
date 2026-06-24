export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 7, suffix: "-Day", label: "Fastest Delivery" },
  { value: 15, suffix: "+", label: "Team Members" },
] as const;

export const SERVICES = [
  {
    icon: "Code",
    title: "Full Stack Web Development",
    description:
      "Modern websites and web applications using React, Next.js, Node.js, Express, MongoDB.",
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Beautiful and user-centric interfaces that increase engagement and conversions.",
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "Android, iOS, Flutter, and cross-platform apps built for performance.",
  },
  {
    icon: "Brain",
    title: "AI Integration",
    description:
      "Chatbots, automation, AI agents, OpenAI integration, recommendation systems.",
  },
  {
    icon: "Gem",
    title: "Branding & Identity",
    description:
      "Logo design, brand strategy, visual identity, and social media branding.",
  },
  {
    icon: "TrendingUp",
    title: "Digital Marketing & SEO",
    description:
      "SEO optimization, Google ranking, content marketing, and growth strategies.",
  },
  {
    icon: "Clapperboard",
    title: "3D Animation & Motion Graphics",
    description:
      "Product animations, explainer videos, interactive visuals.",
  },
] as const;

export const WHY_CHOOSE = [
  {
    icon: "Rocket",
    title: "Fast Delivery",
    description: "Delivery in 7 days to 6 weeks.",
  },
  {
    icon: "Diamond",
    title: "Premium Quality",
    description: "Clean code and world-class design.",
  },
  {
    icon: "IndianRupee",
    title: "Affordable Pricing",
    description: "Perfect for Indian startups and businesses.",
  },
  {
    icon: "Handshake",
    title: "Dedicated Support",
    description: "Transparent communication and long-term partnership.",
  },
  {
    icon: "Zap",
    title: "Latest Technologies",
    description: "React, Next.js, Node.js, Flutter, AI, AWS.",
  },
  {
    icon: "BarChart3",
    title: "Growth-Oriented",
    description: "Focused on business outcomes and ROI.",
  },
] as const;

export const PORTFOLIO = [
  {
    title: "SaaS Dashboard",
    description: "Analytics platform with real-time data visualization and user management.",
    image: "/images/portfolio/saas-dashboard.webp",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    category: "Web App",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration and inventory management.",
    image: "/images/portfolio/ecommerce.webp",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    category: "E-Commerce",
  },
  {
    title: "AI Chatbot System",
    description: "Intelligent conversational AI with natural language processing and automation.",
    image: "/images/portfolio/ai-chatbot.webp",
    tags: ["OpenAI", "Python", "React", "WebSocket"],
    category: "AI/ML",
  },
  {
    title: "Restaurant Website",
    description: "Online ordering platform with menu management and reservation system.",
    image: "/images/portfolio/restaurant.webp",
    tags: ["Next.js", "Firebase", "Stripe", "Tailwind"],
    category: "Website",
  },
  {
    title: "Healthcare App",
    description: "Telemedicine platform with appointment booking and health metrics tracking.",
    image: "/images/portfolio/healthcare.webp",
    tags: ["Flutter", "Firebase", "Node.js", "WebRTC"],
    category: "Mobile App",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing marketplace with map integration and virtual tours.",
    image: "/images/portfolio/realestate.webp",
    tags: ["React", "Node.js", "MongoDB", "Google Maps"],
    category: "Web App",
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
    role: "Founder",
    company: "TechNova Startup",
    content:
      "Webvorn delivered our project in just 3 weeks with exceptional quality. The UI design and development exceeded all our expectations. Highly recommend!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO",
    company: "GreenLeaf Commerce",
    content:
      "The UI and branding exceeded our expectations. Our conversion rate increased by 40% after the redesign. Webvorn truly understands modern design.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "CTO",
    company: "DataFlow Analytics",
    content:
      "Professional, fast, and incredibly talented. They built our entire SaaS platform from scratch in just 6 weeks. The quality is outstanding.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Marketing Director",
    company: "Bloom Digital",
    content:
      "Working with Webvorn was a game-changer for our brand. The website they built drives 3x more leads than our previous one.",
    rating: 5,
  },
] as const;

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "15,000",
    description: "Landing pages & small websites",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "3 rounds of revisions",
      "1 week delivery",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "50,000",
    description: "Business websites & applications",
    features: [
      "Multi-page website (up to 10)",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "CMS integration",
      "Analytics dashboard",
      "Payment integration",
      "2-3 weeks delivery",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "1,50,000",
    description: "Custom platforms, AI solutions & mobile apps",
    features: [
      "Full-stack web application",
      "Mobile app (iOS + Android)",
      "AI/ML integration",
      "Custom API development",
      "Cloud deployment (AWS/GCP)",
      "Dedicated project manager",
      "3-6 weeks delivery",
      "3 months free support",
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
  phone: "+91 99999 99999",
  phoneRaw: "+919999999999",
  whatsapp: "+91 99999 99999",
  whatsappRaw: "919999999999",
  email: "hello@webvorn.com",
  linkedin: "https://linkedin.com/company/webvorn",
  instagram: "https://instagram.com/webvorn",
  github: "https://github.com/webvorn",
} as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Web Development", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "AI Integration", href: "#services" },
    { label: "Branding", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "WhatsApp", href: `https://wa.me/${CONTACT_INFO.whatsappRaw}`, icon: "MessageCircle" },
    { label: "LinkedIn", href: CONTACT_INFO.linkedin, icon: "Linkedin" },
    { label: "Instagram", href: CONTACT_INFO.instagram, icon: "Instagram" },
    { label: "GitHub", href: CONTACT_INFO.github, icon: "Github" },
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
