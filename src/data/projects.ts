import { Project } from "@/types";

export const projects: Project[] = [
  
  {
    id: "gym-management",
    title: "Gym Management Application",
    subtitle: "Fitness Tracking System",
    description:
    "Full stack gym management system to track workouts, memberships, and user fitness progress.",
    detailedDescription: [
      "Developed gym management system with member registration and workout tracking.",
      "Implemented dashboard to monitor fitness activities and membership status.",
      "Built backend services using Node.js and Express.",
      "Stored user fitness records and membership details in MongoDB.",
      "Designed responsive interface for smooth user interaction.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yashwanthmk11/Gym-Application",
    live: "https://gym-application-lx8n.vercel.app/",
     gradient: "from-blue-600 to-cyan-600",
      },
    
    {
       id: "student-room-rentals",
      title: "Student Room Rentals",
      subtitle: "Student Accommodation Platform",
      description:
        "Web application that helps students search, view, and rent rooms easily with filtering and booking options.",
      detailedDescription: [
        "Built a full stack application for students to find and rent rooms easily.",
        "Implemented room listings with search filters based on price, location, and availability.",
        "Developed responsive UI using React for seamless user experience.",
        "Created backend APIs using Node.js and Express for managing room listings and users.",
        "Used MongoDB to store property details and user information.",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
      github: "https://github.com/yashwanthmk11/Student-Room-Rentals",
      live: "",
     
    },


  {
    id: "finance-tracker",
    title: "Finance Tracker",
    subtitle: "Personal Expense Manager",
    description:
      "Application for tracking personal income, expenses, and financial insights with an intuitive dashboard.",
    detailedDescription: [
      "Built a finance tracking application to manage daily income and expenses.",
      "Implemented dashboard displaying financial statistics and summaries.",
      "Developed backend APIs for storing transactions securely.",
      "Used MongoDB database for financial records management.",
      "Designed responsive interface for easy financial tracking.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yashwanthmk11/Finance-Tracker",
    live: "https://finance-tracker-b7xq.vercel.app/",
   
  },

  {
    id: "passop",
    title: "PassOP",
    subtitle: "Password Manager",
    description:
      "Secure password manager application for storing and managing user credentials safely.",
    detailedDescription: [
      "Developed password manager for securely storing login credentials.",
      "Implemented authentication and encryption for secure data handling.",
      "Created user-friendly dashboard to manage stored passwords.",
      "Built backend APIs using Node.js and Express.",
      "Stored encrypted credentials in MongoDB database.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Encryption"],
    github: "https://github.com/yashwanthmk11/-PassOp-",
    live: "https://passop-tau-lake.vercel.app/",
    gradient: "from-emerald-600 to-teal-600",
  },

  {
    id: "user-dashboard",
    title: "User Dashboard",
    subtitle: "Analytics Dashboard Interface",
    description:
      "Modern responsive dashboard displaying user data, statistics, and analytics.",
    detailedDescription: [
      "Developed interactive dashboard interface for displaying analytics.",
      "Designed responsive UI with modern layout components.",
      "Implemented charts and statistics panels for data visualization.",
      "Focused on clean UI and smooth user experience.",
    ],
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/yashwanthmk11/user-dashboard",
    live: "https://user-dashboard-weld-eta.vercel.app/",
    gradient: "from-violet-600 to-indigo-600",
  },

  {
    id: "porsche-clone",
    title: "Porsche Website Clone",
    subtitle: "Luxury Car Website Clone",
    description:
      "Frontend clone of the Porsche website with deployment on AWS EC2 using Apache Tomcat.",
    detailedDescription: [
      "Developed responsive clone of Porsche landing page.",
      "Replicated layout, sections, and styling of the original website.",
      "Deployed the application on AWS EC2 instance.",
      "Configured Apache Tomcat server for hosting the project.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "AWS", "Tomcat"],
    github: "https://github.com/yashwanthmk11/porche",
    live: "",
   
  },

 {
  id: "gd-platform",
  title: "Group Discussion Platform",
  subtitle: "AI Integrated GD System",
  description:
    "AI-integrated MERN platform enabling real-time voice and video group discussions with automated AI-generated feedback.",
  detailedDescription: [
    "Built a real-time group discussion platform where users can create or join voice/video GD sessions.",
    "Integrated WebRTC and Socket.IO for seamless real-time communication.",
    "Implemented AI feedback generation using OpenAI GPT to summarize discussion performance.",
    "Developed session scheduling with join codes and dashboard for GD history tracking.",
    "Deployed frontend on Vercel and backend on Render with MongoDB Atlas database."
  ],
  technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "WebRTC", "OpenAI API"],
  github: "https://github.com/yashwanthmk11/gd-platform",
  live: "https://groupdiscussion.vercel.app",
},
   
  {
  id: "health-tracker",
  title: "Health Tracking App",
  subtitle: "Personal Health Monitoring System",
  description:
    "MERN stack application that allows users to track daily health metrics like temperature, blood pressure, and heart rate.",
  detailedDescription: [
    "Developed full stack health monitoring system using MERN stack.",
    "Implemented dashboard to track and visualize health metrics.",
    "Users can add, edit, delete, and filter health records by date.",
    "Designed responsive UI using Tailwind CSS for a clean modern interface.",
    "Deployed frontend on Netlify and backend API on Render."
  ],
  technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  github: "https://github.com/yashwanthmk11/health-tracking-app",
  live: "https://health-tracking-app1.netlify.app",
 gradient: "from-orange-600 to-red-600",
  },
];
