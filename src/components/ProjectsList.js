export const ProjectsList = [
  {
    title: "Husky Market",
    subheader: "Android Application – Secondhand Items Exchange Platform",
    image: "husky_market1",
    tools: "Java, Android XML, Firebase",
    github: "https://github.com/WeixinLiu618/NUMAD23sp_Team7",
    link: null,
    details: [
      "Led the complete development cycle of a second-hand commodity exchange platform.",
      "Crafted an intuitive user interface using Android XML, utilizing RecyclerView for efficient list operations and Fragments for modular app design.",
      "Ensured user security with Firebase Authentication.",
      "Architected a comprehensive data model tailored for Firestore integration, facilitating effective product management, real-time chat capabilities, and user-data relations. Amplified user engagement with timely notifications via Firebase Cloud Messaging."
    ],
  },

  {
    title: "Paws To Hands",
    subheader: "Full Stack Web Application – Pet Adoption Platform",
    image: "pet_adoption_platform",
    tools: "MongoDB, Express, React, Node.js",
    github: "https://github.com/WeixinLiu618/PetAdoptionWebApp",
    link: "https://paws-to-hands-frontend.herokuapp.com/",
    details: [
      "Designed and developed an a full-stack application to allow users browsing, searching, filtering pets, with user authentication function using MERN (MongoDB, Express, React, Node.js) stack and deployed onto Heroku.",
      "Created a database with MongoDB including 4 collections and deployed it to MongoDB Atlas.",
      "Assembled a React app using Hooks and Router to present an interactive single-page web application (SPA).",
      "Utilized DAOs to handle CRUD operations and implemented RESTful APIs with node.js, Express.js and AJAX to handle HTTP requests and responses.",
    ],
  },

  {
    title: "Easy Animator",
    subheader: "Object-Oriented Programming Application – Animation Generator",
    image: "easy_animator",
    tools: "Java, OOD, MVC",
    github: "https://github.com/WeixinLiu618/EasyAnimator",
    link: null,
    details: [
      "Implemented an animation application using Java with a command line tool based on the MVC architecture.",
      "Utilized Java Swing to create GUI which supports animation playback and configurable settings.",
      "Enabled input and output file options which take and save the animation in different formats like text and SVG.",
      "Refactored the project by introducing Singleton Pattern which facilitates resource allocation, and Factory Pattern which encapsulates object creation.",
    ],
  },

  {
    title: "IP Filter System",
    subheader:
      "An IP filter system which filters IP based on range for both IPv4 and IPv6",
    image: "ip_filter_system",
    tools: "AWS Lambda, AWS WAF",
    github: null,
    link: null,
    details: [
      "Configured API-Gateway for HTTP requests and set up DNS for public endpoint.",
      "Created backend service using AWS Lambda with authentication and throttle.",
      "Implemented asynchronous in-memory IPTree to store IP range and provide quick look up and added LRU cache for IP entries to reduce latency.",
      "Introduced AWS WAF in front of API-Gateway to avoid DDoS and filtered bad IP and bot IP.",
    ],
  },
];
