const projects = [
  {
    id: 1,
    title: "Cyber Security Learning Platform - SkodCyber",
    description:
      "A fully-fledged cyber security education platform designed for learners to enhance their skills through video-based learning, interactive quizzes, structured modules, and insightful blogs. Users can progress through courses, test their understanding with assessments, and stay updated with the latest in cyber security.",
    image: "/assets/projectSkod.png",
    technologies: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Socket.io",
      "Cloudinary",
    ],
    category: "EdTech / Cyber Security",
    borderColor: "from-red-500 to-amber-600",
    live: "https://skod-cyber.vercel.app/",
  },
  {
    id: 2,
    title: "Upskill Academy – Professional IT Training Platform",
    description:
      "Upskill Academy offers industry-focused training programs designed to equip learners with in-demand skills in Web Development, Cloud Computing, Business Analytics, Digital Media, Database Management, Networking, and more. Courses range from 2 to 6 months with a focus on hands-on learning and real-world application.",
    image: "/assets/upskill.png",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Chart.js"],
    category: "EdTech / IT Training",
    borderColor: "from-sky-500 to-indigo-600",
    live: "https://upskilldigitalacademy.vercel.app/",
  },
  {
    id: 3,
    title: "MediCare – Hospital Management System",
    description:
      "MediCare is a comprehensive hospital management system built using the MERN stack. It streamlines hospital operations with secure authentication, appointment scheduling, patient records, real-time doctor-patient communication, and a powerful admin dashboard. Designed for scalability and ease of use, MediCare enhances healthcare efficiency and improves the overall patient experience.",
    image: "/assets/medicare.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    category: "Healthcare / Management System",
    borderColor: "from-green-500 to-cyan-600",
    live: "https://medicare-ai-frontend.vercel.app/",
  },
  {
    id: 4,
    title: "SmartRecruit: AI-Powered Recruitment System",
    description:
      "SmartRecruit is an open-source recruitment platform that revolutionizes the hiring process using automation and intelligent technologies. It features aptitude auto-validation with cheat detection, a multi-language coding assessment system, HR video interviews, real-time face monitoring, and automated candidate communication. Designed to eliminate inefficiencies and ensure assessment integrity.",
    image: "/assets/projectSmartrecruit.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
    ],
    category: "Recruitment Tech / Automation",
    borderColor: "from-rose-500 to-indigo-600",
    live: "https://smartrecruit.vercel.app/",
  },
  {
    id: 5,
    title: "Monely: Pixel-Perfect Frontend Clone",
    description:
      "Monely is a frontend-only project built as an exact clone of the official Monely website, delivered for a client with high attention to UI accuracy and performance. We replicated every detail to match the original while adding minor content customizations to meet specific business needs.",
    image: "/assets/monely.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    category: "Frontend Clone / UI Design",
    borderColor: "from-yellow-400 to-pink-500",
    live: "#",
  },
  {
    id: 6,
    title: "Rainbox: AI-Powered Newsletter Reader",
    description:
      "Rainbox is a thoughtfully designed newsletter reader app built for power readers. It offers a clean, focused inbox just for newsletters, and integrates features like Gmail/Outlook sync, mobile apps, a dedicated email, AI-generated summaries, and text-to-speech. Designed as a more affordable and user-centric alternative to Readwise Reader.",
    image: "/assets/rainbox.jpg",
    technologies: [
      "React Native",
      "Firebase",
      "Node.js",
      "AI APIs",
      "Tailwind CSS",
    ],
    category: "Productivity / AI Tools",
    borderColor: "from-sky-500 to-purple-600",
    live: "#",
  },
  {
    id: 7,
    title: "Component 101: Parts Search + Chrome Extension",
    description:
      "Component 101 is a subdomain project developed for the components-radar ecosystem. We implemented frontend features by integrating with an existing database and developed a Chrome extension that allows users to search for electronic components directly from any page across the Component101 network, streamlining component sourcing.",
    image: "/assets/components101.jpg",
    technologies: ["React.js", "Chrome Extension API", "MongoDB", "Express.js"],
    category: "Electronics / Developer Tools",
    borderColor: "from-green-400 to-blue-600",
    live: "#",
  },
  {
    id: 8,
    title: "DriveNow: Car Booking Platform MVP",
    description:
      "DriveNow is a minimum viable product (MVP) built for a client to streamline car booking experiences. The platform features an interactive map to browse available cars, real-time data updates, multilingual support, and secure payment integration. Designed with a focus on speed, accessibility, and ease of use for users across regions.",
    image: "/assets/carbooking.jpg",
    technologies: [
      "React.js",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Google Maps API",
      "Stripe",
    ],
    category: "Mobility / Real-Time Platforms",
    borderColor: "from-teal-500 to-cyan-600",
    live: "#",
  },
  {
    id: 9,
    title: "TripBud: Hotel And Flight Booking Platform",
    description:
      "TripBud is an all-in-one travel platform that lets users seamlessly book hotels and flights, while also enabling them to discover and connect with travel buddies. Whether you’re planning a solo trip or looking for companions with shared destinations and interests, TripBud helps you plan smarter, travel safer, and explore better — together.",
    image: "/assets/tripbud.png",
    technologies: ["React.js", "Node.js", "MongoDB", "Hotel API", "Flight API"],
    category: "Mobility / Real-Time Platforms",
    borderColor: "from-teal-500 to-cyan-600",
    live: "https://tripbud.vercel.app/",
  },
  {
    id: 10,
    title: "Manashakti: Dr Conusltation Website",
    description:
      "A modern and responsive web application designed to simplify doctor-patient interactions by allowing users to easily book medical appointments online. Patients can browse available doctors, view their profiles and availability, and schedule consultations with just a few clicks.",
    image: "/assets/manashakti.png",
    technologies: ["React.js","Tailwind CSS"],
    category: "Mobility / Real-Time Platforms",
    borderColor: "from-teal-500 to-cyan-600",
    live: "https://manashakti.info/",
  },
];

export default projects;
