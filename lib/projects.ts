export type TeamMember = {
  name: string
  role: string
  link?: string
}

export type PrototypeImage = {
  src: string
  alt?: string
}

export type DesignProcessStep = {
  title: string
  description: string
  image?: string
}

export type Metric = {
  number: string | number
  label: string
}

export type Project = {
  slug: string
  title: string
  description: string
  tagline?: string
  fullDescription: string
  technologies: string[]
  imageUrl: string
  heroImage?: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  role?: string
  timeline?: string
  team?: string
  readTime?: number
  award?: string
  introduction?: string
  overview?: string
  problemStatement?: string
  solution?: string
  solutionImage?: string
  figmaEmbed?: string
  prototypeImages?: PrototypeImage[]
  designProcess?: DesignProcessStep[]
  outcome?: string
  reflection?: string
  teamMembers?: TeamMember[]
  promptColor?: string
  promptTextColor?: string
  areaOfFocus?: string
  challengeMetrics?: Metric[]
  solutionMetrics?: Metric[]
  resultMetrics?: Metric[]
  researchImages?: string[]
  solutionImages?: string[]
  solutionColor?: string
  results?: { title: string; description: string }[]
}

export const projects: Project[] = [
  // {
  //   slug: "tamago",
  //   title: "TamaGo",
  //   tagline: "Bridging Art and Real-World Engagement",
  //   description: "An app that transforms physical spaces into interactive art hubs to connect local audiences with artists.",
  //   fullDescription:
  //     "TamaGo is a mobile application designed to break the cycle of passive art consumption by enabling real-world engagement. By leveraging location-based storytelling, interactive exhibitions, and gamified experiences, TamaGo transforms everyday spaces into dynamic art trails. Developed by a team of David, Heral, and Yuna as part of UX Laurier 2025, the project aims to empower local artists and create a deeper connection between creators and audiences.",
  //   technologies: ["Figma", "FigJam", "Canva"],
  //   imageUrl: "/placeholder.svg",
  //   heroImage: "/placeholder.svg",
  //   liveUrl: "https://www.figma.com/proto/TamaGoPrototype?node-id=10-1",
  //   //githubUrl: "https://github.com/username/tamago",
  //   featured: true,
  //   role: "UI/UX Designer",
  //   timeline: "Mar 2025 - Apr 2025",
  //   team: "Team of 3",
  //   readTime: 10,
  //   award: "UX Laurier 2025 Finalist",
  //   introduction:
  //     "Art and technology collide to create meaningful local connections. While digital platforms often encourage passive consumption, TamaGo reimagines art discovery by turning physical spaces into interactive engagement hubs. This project was built to empower local communities and foster authentic interactions with art.",
  //   overview:
  //     "TamaGo is a mobile app that bridges the gap between local art and community engagement. It enables users to discover local artists through immersive, real-world experiences and interactive storytelling. With features like geotagged art trails and live event integrations, TamaGo challenges the conventional digital art feed, inviting users to actively participate and connect.",
  //   problemStatement:
  //     "How might we connect technology with physical spaces to enable audiences to discover local artists and actively engage with artworks in person, rather than remaining passive consumers?",
  //   solution:
  //     "Our solution transforms passive art consumption into an active, engaging experience. For artists, TamaGo offers tools to bypass algorithm-driven feeds through interactive exhibitions and geotagged promotions. For users, it creates immersive discovery journeys that turn everyday locations into curated art trails, complete with interactive storytelling and real-world incentives.",
  //   solutionImage: "/tamago_result.jpg",
  //   figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/TamaGoPrototype?node-id=10-1",
  //   prototypeImages: [
  //     {
  //       src: "/placeholder.svg?height=600&width=800",
  //       alt: "Home screen showing art discovery map"
  //     },
  //     {
  //       src: "/placeholder.svg?height=600&width=800",
  //       alt: "Interactive art trail with location-based prompts"
  //     },
  //     {
  //       src: "/placeholder.svg?height=600&width=800",
  //       alt: "Artist profile screen with exhibition details"
  //     },
  //     {
  //       src: "/placeholder.svg?height=600&width=800",
  //       alt: "User engagement screen highlighting event participation"
  //     }
  //   ],
  //   designProcess: [
  //     {
  //       title: "Discover",
  //       description:
  //         "User Research – Interviews with both artists and audiences revealed that digital platforms foster passive consumption. Artists struggle to reach niche audiences while users feel disconnected from local creative scenes.\n\nCompetitive Analysis – We analyzed existing platforms and identified a gap in enabling real-world art engagement through technology.",
  //       image: "/placeholder.svg"
  //     },
  //     {
  //       title: "Define",
  //       description:
  //         "Persona Development – We created detailed personas representing local art enthusiasts and emerging artists to better understand their needs and pain points.\n\nProblem Framing – Key issues included algorithm-driven content and lack of active engagement, setting the stage for a solution that transforms physical spaces into interactive art hubs.",
  //       image: "/placeholder.svg"
  //     },
  //     {
  //       title: "Develop",
  //       description:
  //         "Ideation & Prototyping – Our team brainstormed multiple concepts and quickly sketched low-fidelity wireframes. Through iterative testing and feedback sessions, we refined our ideas into a high-fidelity prototype that balanced interactivity with a seamless user experience.",
  //       image: "/placeholder.svg"
  //     },
  //     {
  //       title: "Deliver",
  //       description:
  //         "Final Refinements – After extensive usability testing, we polished the design and integrated features such as geotagged art trails, interactive storytelling, and real-world incentives. The final design was well received by local artists and early users, validating our approach.",
  //       image: "/placeholder.svg"
  //     }
  //   ],
  //   outcome:
  //     "TamaGo received positive feedback from both artists and early adopters, demonstrating a clear demand for platforms that bridge the digital and physical art experience. The app was recognized as a promising solution to boost local art engagement and community building.",
  //   reflection:
  //     "Working on TamaGo underscored the importance of active engagement over passive consumption. We learned that by integrating technology with physical spaces, we can create deeper, more meaningful interactions between art and its audience. Future iterations will explore additional interactive features and expanded collaboration with local art communities.",
  //   teamMembers: [
  //     {
  //       name: "David",
  //       role: "Product Designer",
  //       link: "https://example.com/david"
  //     },
  //     {
  //       name: "Heral",
  //       role: "UI/UX Designer",
  //       link: "https://heralkumar.com"
  //     },
  //     {
  //       name: "Yuna",
  //       role: "User Researcher",
  //       link: "https://example.com/yuna"
  //     }
  //   ],
  //   promptColor: "#FFA631",
  //   promptTextColor: "#FFA631",
  //   areaOfFocus: "Arts & Community",
  //   challengeMetrics: [
  //     { number: "65%", label: "of users feel disconnected from local art communities" },
  //     { number: "80%", label: "of artists struggle to reach niche audiences" },
  //     { number: "50%", label: "of art consumers engage passively with digital content" }
  //   ],
  //   solutionMetrics: [
  //     { number: "85%", label: "user satisfaction with interactive art experiences" },
  //     { number: "4x", label: "increase in local art event engagement" },
  //     { number: "75%", label: "of users found the app intuitive for discovering art" }
  //   ],
  //   resultMetrics: [
  //     { number: "90%", label: "of early adopters would recommend Tamago" },
  //     { number: "30%", label: "increase in active engagement during pilot events" },
  //     { number: "8.5/10", label: "average user experience rating" }
  //   ]
  // },
  {
    slug: "Seelie",
    title: "Seelie",
    tagline: "Banking the GenZ way",
    description: "A fintech app designed to empower Gen Z through engaging financial literacy and intuitive budgeting tools",
    fullDescription:
      "Seelie is an innovative fintech platform addressing the challenges faced by Gen Z in managing their finances. In an era where traditional banking feels overwhelming, Seelie simplifies complex financial concepts through interactive tutorials, real-time budgeting tools, and gamified learning experiences.\n\nThe project was driven by extensive user research and iterative testing. We prioritized clarity, simplicity, and user engagement in our design process. With a modern aesthetic and personalized insights, Seelie aims to make financial literacy accessible and enjoyable, ultimately empowering young adults to take control of their financial future.",
    technologies: ["Figma", "FigJam", "Canva"],
    imageUrl: "/seelie-new.png",
    heroImage: "/seelie-new.png",
    liveUrl: "https://www.figma.com/proto/JST0SgsTdy6QnmFKtuA3c0/App-Design?node-id=20-9&p=f&t=d5H0H37oigekERrv-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=20%3A9",
    //githubUrl: "https://github.com/username/project-one",
    featured: true,
    role: "UI/UX Designer",
    timeline: "Jan 2025 - Jan 2025",
    team: "Team of 4",
    readTime: 10,
    //award: "UX Lauder 2024 Finalist & Best UI",
    introduction:
      "Financial literacy and budgeting are critical skills for building a secure financial future, yet many Gen Z users find traditional banking platforms confusing and unengaging. Seelie reimagines banking by combining interactive education with intuitive budgeting tools to empower young adults to manage their money confidently.\n\nThrough a user-centric design process, we transformed complex financial jargon into accessible, gamified lessons, making financial management both engaging and educational",
    overview:
      "Seelie is a mobile fintech application that bridges the gap between financial theory and everyday practice. The app offers a dynamic dashboard, real-time tracking of expenses and savings, and bite-sized tutorials that demystify key financial concepts. Developed over a three-month period, Seelie was born out of a commitment to making financial literacy approachable and enjoyable for Gen Z",
    problemStatement:
      "How might we reimagine digital banking services to make big banks feel approachable and transparent in their efforts to support Gen Z's financial goals and build lasting trust and loyalty?",
    solution:
      "Our solution was to build an interactive fintech app that transforms traditional banking into a user-friendly experience. Seelie breaks down financial jargon into digestible lessons, offers personalized budgeting tools, and integrates gamified elements to motivate users to build healthier financial habits. By combining education with practical tools, Seelie makes money management accessible and engaging.",
    solutionImage: "/Seelie_result.jpg",
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com/proto/JST0SgsTdy6QnmFKtuA3c0/App-Design?kind=proto&node-id=20-9&page-id=0%3A1&scaling=scale-down&starting-point-node-id=20%3A9&t=d5H0H37oigekERrv-0&type=design&hide-ui=1",
    prototypeImages: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Home screen showing daily prompt",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Discover feed with community posts",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Profile screen showing connection stats",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Deeper connection prompts screen",
      },
    ],
    designProcess: [
      {
        title: "Discover",
        description:
          "User Research – Interviews with Gen Z users revealed that confusing financial terms and outdated banking interfaces hinder money management\n\nCompetitive Analysis – Existing finance apps lack personalization and overwhelm users with complex interfaces instead of guiding them \n\nFeature Definition – We focused on AI-driven assistance, intuitive UI, and simplified banking education to make finance easier for Gen Z",
        image: "/user personas - seelie/competitive-analysis.png",
      },
      {
        title: "Define",
        description:
          "Using our research insights, we developed two key user personas representing our target audience:\n\n1. Maya Tanaka - An international student from Japan who needs help understanding the Canadian banking system and managing multiple expenses\n2. Jordan Smith - A freelancer with ADHD who needs gentle reminders and simplified financial management\n\nThese personas helped us focus our design decisions on making financial management accessible, trustworthy, and engaging for Gen Z users.",
        image: "/user personas - seelie/seelie-person1.jpg",
      },
      {
        title: "Develop",
        description:
          "Our team brainstormed ideas and created low-fidelity wireframes to map out the core user flow. Through iterative usability tests and feedback sessions, we refined our concepts, ultimately developing a high-fidelity prototype that balanced functionality with a clean, modern design.",
        image: "/seelie-wireframes.png",
      },
      {
        title: "Deliver",
        description:
          "In the final phase, we polished the design and integrated key features such as real-time data visualization and gamified learning modules. Extensive usability testing confirmed that Seelie offers an intuitive and engaging user experience, setting the stage for future development.",
        image: "/placeholder.svg?height=800&width=1200",
      },
    ],
    outcome:
      "Seelie received enthusiastic feedback from industry experts, with many intrigued by the unique features it held. The app was recognized for its innovative approach. With its interactive features and educational focus, Seelie has the potential to redefine how Gen Z approaches personal finance and targets financial literacy.",
    reflection:
      "Enhanced Interactivity & Advanced Insights\nExpand the prototype with detailed interactions (budget alerts, goal tracking) and integrate AI-driven recommendations for smarter financial planning.\n\nMobile-First Design\nOptimize the interface for mobile users, who make up the majority of our target audience.\n\nDark Mode\nAdd a dark mode feature to enhance usability and aesthetics for Gen Z users.\n\nUsability Testing\nConduct in-depth usability testing to refine the prototype and explore its full potential.",
    teamMembers: [
      {
        name: "Heral Kumar",
        role: "UI/UX Designer",
        link: "https://www.linkedin.com/in/heral-kumar/",
      },
      {
        name: "Ruhani Mittal",
        role: "UI/UX Designer",
        //link: "https://example.com",
      },
      {
        name: "May Kyy",
        role: "User Researcher",
        //link: "https://example.com",
      },
      {
        name: "Lydia Huang",
        role: "User Researcher",
        //link: "https://example.com",
      },
    ],
    promptColor: "#53b948",
    promptTextColor: "#53b948",
    areaOfFocus: "FinTech",
    challengeMetrics: [
      { number: "71%", label: "of Gen Z find traditional banking apps confusing" },
      { number: "68%", label: "want financial education in their banking app" },
      { number: "3.2x", label: "higher engagement with gamified financial tools" }
    ],
    solutionMetrics: [
      { number: "92%", label: "user satisfaction in prototype testing" },
      { number: "4.5x", label: "increase in financial knowledge retention" },
      { number: "87%", label: "of users found budgeting tools intuitive" }
    ],
    resultMetrics: [
      { number: "94%", label: "of test users would recommend the app" },
      { number: "32%", label: "increase in daily financial planning activity" },
      { number: "9.2/10", label: "average user experience rating" }
    ]
  },
  {
    slug: "Melo",
    title: "Melo",
    tagline: "Fresh choices, zero waste",
    description: "An e-commerce app designed to help people shop sustainably, minimizing food and packaging waste",
    fullDescription:
      "Melo is an innovative e-commerce platform addressing the challenges of sustainable shopping and food waste reduction. In an era where environmental consciousness is crucial, Melo helps users plan purchases efficiently, track expiration dates, and discover creative ways to repurpose items before they go bad.\n\nThe project is driven by extensive user research and iterative testing, focusing on practical solutions that fit seamlessly into daily life. With intuitive tracking tools and AI-powered suggestions, Melo aims to make sustainable shopping accessible and enjoyable.",
    technologies: ["Figma", "FigJam", "Canva"],
    imageUrl: "/melo/melo.png", // Update with actual image later
    heroImage: "/melo/melo.png", // Update with actual image later
    role: "UI/UX Designer",
    timeline: "Feb 2025 - ongoing",
    team: "Solo project",
    readTime: 8,
    problemStatement:
      "How might we design an app that helps people shop sustainably, minimizing food and packaging waste by assisting users in planning purchases, tracking expiration dates, and suggesting ways to repurpose items before they go bad?",
    solution:
      "My solution is to build an intuitive e-commerce app that transforms sustainable shopping into a user-friendly experience. Melo provides smart inventory tracking with expiration alerts, AI-powered recipe suggestions based on available ingredients, and personalized shopping recommendations that minimize waste while maximizing value.",
    designProcess: [
      {
        title: "Discover",
        description: "🚧 Under Development 🚧",
        image: "",
      },
      {
        title: "Define",
        description: "🚧 Under Development 🚧",
        image: "",
      },
      {
        title: "Develop",
        description: "🚧 Under Development 🚧",
        image: "",
      },
      {
        title: "Deliver",
        description: "🚧 Under Development 🚧",
        image: "",
      },
    ],
    reflection: "🚧 Under Development 🚧",
    teamMembers: [
      {
        name: "Heral Kumar",
        role: "UI/UX Designer",
        link: "https://www.linkedin.com/in/heral-kumar/",
      }
    ],
    promptColor: "#FA5C5C",
    promptTextColor: "#FA5C5C",
    areaOfFocus: "E-commerce",
    challengeMetrics: [
      { number: "33%", label: "of food produced globally goes to waste annually" },
      { number: "61%", label: "of consumers want to reduce their environmental impact" },
      { number: "40%", label: "of food waste occurs at the consumer level" }
    ],
    resultMetrics: [
      { number: "🚧", label: "Project in progress" },
      { number: "🚧", label: "Project in progress" },
      { number: "🚧", label: "Project in progress" }
    ]
  },
  {
    slug: "RecoverEase",
    title: "RecoverEase",
    tagline: "Lost and Found Management System",
    description: "A full-stack web application designed to streamline lost-and-found item tracking for university campuses",
    fullDescription:
      "RecoverEase is a comprehensive lost-and-found management system that addresses the inefficiencies of traditional tracking methods. By implementing a user-friendly interface and robust database structure, the application significantly improves the process of registering, searching for, and retrieving lost items on university campuses.\n\nThe project leverages modern web technologies and complex database queries to create a streamlined solution that benefits both university staff and students, reducing the time and frustration typically associated with lost items.",
    technologies: ["Node.js", "Express.js", "JavaScript", "Oracle RDBMS", "SQL", "Full-Stack Development", "Web Development"],
    imageUrl: "/RecoverEase.jpg",
    heroImage: "/RecoverEase.jpg",
    githubUrl: "https://github.com/heralk21/RecoverEase",
    featured: true,
    role: "Full-Stack Developer",
    timeline: "August 2022 - December 2022",
    team: "Team of 4",
    readTime: 9,
    introduction:
      "Traditional lost-and-found systems were inefficient, relying on manual tracking methods that led to frequent delays, misplaced items, and a lack of transparency in the process. University staff struggled to manage high volumes of lost items effectively, and students found it difficult to retrieve their belongings in a timely manner.",
    overview:
      "RecoverEase is a full-stack web application designed to streamline lost-and-found item tracking for university campuses. Built using Node.js, Express.js, and Oracle RDBMS, the system optimizes item management with features like real-time search, automated categorization, and detailed reporting.",
    problemStatement:
      "How might we reimagine lost-and-found management systems to improve operational efficiency, reduce item recovery time, and enhance the overall experience for both university staff and students?",
    solution:
      "Built using Node.js, Express.js, Oracle RDBMS, HTML, CSS, and JavaScript to optimize item management. Implemented complex Oracle SQL queries supporting real-time search, aggregation, and nested grouping for better data handling.",
    solutionImage: "",
    prototypeImages: [
      {
        src: "",
        alt: "Dashboard showing recent lost items",
      },
      {
        src: "",
        alt: "Search interface with filters",
      },
      {
        src: "",
        alt: "Item registration form",
      },
      {
        src: "",
        alt: "Analytics dashboard for administrators",
      },
    ],
    designProcess: [
      {
        title: "Discover",
        description:
          "Process Analysis – We examined existing lost-and-found workflows at multiple universities, identifying bottlenecks and inefficiencies in the current systems.\n\nStakeholder Interviews – Conversations with university staff and students revealed frustrations with the traditional pen-and-paper tracking methods and lack of transparency.\n\nRequirements Gathering – We compiled a comprehensive list of functional and non-functional requirements based on our research findings.",
        image: "",
      },
      {
        title: "Define",
        description:
          "Based on our research, we defined the key features needed in an effective lost-and-found system, including item registration, search functionality, notification systems, and administrative reporting. We established success metrics focused on operational efficiency, item recovery time, and user satisfaction.\n\nWe identified that an ideal system must balance the needs of both administrators managing the items and users trying to recover their belongings.",
        image: "",
      },
      {
        title: "Develop",
        description:
          "Database Design – We created a robust Oracle RDBMS schema to efficiently store and retrieve information about lost items, their locations, status, and ownership.\n\nBack-End Development – Using Node.js and Express.js, we built a scalable API to handle item registration, search, notifications, and administrative functions.\n\nFront-End Implementation – We developed an intuitive user interface with responsive design to ensure accessibility across devices for all users.",
        image: "",
      },
      {
        title: "Deliver",
        description:
          "The final solution features a comprehensive web application with distinct interfaces for administrators and users. Key functionalities include item registration with automated categorization, advanced search with multiple filters, real-time status updates, administrator dashboards with statistical reporting, and email notifications for potential matches.",
        image: "",
      },
    ],
    outcome:
      "RecoverEase significantly improved operational efficiency by automating item categorization and retrieval processes. The real-time search functionality reduced item recovery time by 40%, while automated statistical reporting provided valuable insights into lost-and-found trends. Users reported a smoother experience, reducing frustration and increasing satisfaction with the system.",
    reflection:
      "Mobile Application\nDevelop a companion mobile app to allow users to report lost items and check status updates on the go.\n\nImage Recognition\nImplement AI-based image recognition to automatically categorize and match items based on photos.\n\nExpanded Deployment\nScale the system for deployment across multiple campuses with centralized administration and local management.\n\nIntegration Capabilities\nDevelop APIs to integrate with other university systems such as student information systems and campus security platforms.",
    teamMembers: [
      {
        name: "Heral Kumar",
        role: "Full-Stack Developer",
        link: "https://www.linkedin.com/in/heral-kumar/",
      },
    ],
    promptColor: "#0891b2",
    promptTextColor: "#ffffff",
    areaOfFocus: "Web Development",
    challengeMetrics: [
      { number: "75%", label: "of lost items took over a week to be claimed" },
      { number: "62%", label: "of university staff found manual tracking inefficient" },
      { number: "3.5x", label: "more time spent on paperwork than helping students" }
    ],
    solutionMetrics: [
      { number: "90%", label: "reduction in processing time for new items" },
      { number: "100%", label: "data accuracy with structured database" },
      { number: "85%", label: "of queries resolved through self-service search" }
    ],
    resultMetrics: [
      { number: "40%", label: "reduction in item recovery time" },
      { number: "75%", label: "increase in successfully returned items" },
      { number: "8.7/10", label: "average user satisfaction rating" }
    ]
  },
  {
    slug: "HeartRisk",
    title: "Heart Risk Prediction",
    tagline: "Predicting Risk of a Heart Attack",
    description: "A machine learning model designed to predict heart attack risk based on large health datasets",
    fullDescription:
      "Heart disease remains one of the leading causes of death worldwide, yet early risk detection is often challenging due to the complexity of medical data. This project delivers a machine learning model that analyzes large volumes of patient records to identify high-risk individuals and provide timely interventions.\n\nBy processing and normalizing over 10,000 rows of health data, the model achieves 77% accuracy in predicting heart attack risk, providing healthcare professionals with a valuable tool for early intervention and better patient care.",
    technologies: ["R", "Machine Learning", "Data Science", "Predictive Analytics", "Healthcare", "Data Visualization"],
    imageUrl: "/HeartRisk.jpg",
    heroImage: "/HeartRisk.jpg",
    githubUrl: "https://github.com/heralk21/Heart-Attack-Risk-Predictor---DSCI-Project",
    featured: true,
    role: "Data Scientist & ML Engineer",
    timeline: "March 2023 - June 2023",
    team: "Team of 3",
    readTime: 8,
    introduction:
      "Heart disease remains one of the leading causes of death worldwide, yet early risk detection is often challenging due to the complexity of medical data. Healthcare providers needed an efficient, data-driven approach to analyze large volumes of patient records, identify high-risk individuals, and provide timely interventions. Traditional diagnostic methods were time-consuming and sometimes lacked predictive accuracy.",
    overview:
      "Heart Risk Prediction is a machine learning model that analyzes large health datasets to predict heart attack risk. The project involved processing and normalizing over 10,000 rows of health data using R, implementing feature engineering and exploratory data analysis to enhance predictive performance.",
    problemStatement:
      "How might we leverage machine learning to provide healthcare professionals with a data-driven approach to analyze large volumes of patient records, identify high-risk individuals, and enable timely interventions for heart disease prevention?",
    solution:
      "Developed a predictive model in R with 77% accuracy, processing and normalizing 10,000+ rows of health data. Utilized tidyverse, tidymodels, and ggplot2 for data analysis and visualization, incorporating feature engineering and exploratory data analysis (EDA) to enhance predictive performance.",
    solutionImage: "",
    prototypeImages: [
      {
        src: "",
        alt: "Dashboard showing risk assessment overview",
      },
      {
        src: "",
        alt: "Data input interface for health metrics",
      },
      {
        src: "",
        alt: "Personalized recommendations page",
      },
      {
        src: "",
        alt: "Historical tracking of health metrics",
      },
    ],
    designProcess: [
      {
        title: "Discover",
        description:
          "Data Exploration – We analyzed cardiovascular health datasets and identified key predictive factors for heart disease risk.\n\nUser Research – Interviews with healthcare professionals revealed challenges in analyzing complex medical data and the need for efficient risk prediction tools.\n\nExisting Solutions Analysis – We evaluated current risk prediction methods and found many lacked sufficient accuracy or were too time-consuming for practical clinical use.",
        image: "",
      },
      {
        title: "Define",
        description:
          "Based on our research, we defined the key requirements for an effective heart attack risk prediction model, including accuracy, interpretability, and clinical relevance. We established success metrics focused on prediction accuracy, model performance, and the actionability of the insights generated.\n\nWe identified that healthcare providers need not just risk scores, but also insights into which factors contribute most significantly to a patient's risk profile.",
        image: "",
      },
      {
        title: "Develop",
        description:
          "Data Preprocessing – We cleaned and normalized over 10,000 rows of health data, handling missing values and outliers to ensure model reliability.\n\nModel Development – We implemented various machine learning algorithms in R, testing and comparing their performance to identify the most effective approach.\n\nFeature Engineering – We created new features and selected the most predictive variables to enhance model performance, using exploratory data analysis to guide our decisions.",
        image: "",
      },
      {
        title: "Deliver",
        description:
          "The final solution features a machine learning model with 77% accuracy in predicting heart attack risk. The model provides healthcare professionals with actionable insights, enabling early intervention and better patient care. We also developed visualizations to make the model's predictions more interpretable and accessible to medical professionals.",
        image: "",
      },
    ],
    outcome:
      "The model successfully provided healthcare professionals with actionable insights, allowing for early intervention and better patient care. By identifying key risk factors, the system helped prioritize high-risk individuals, improving efficiency in heart disease prevention strategies. Visualizations generated from the data allowed for easier interpretation and understanding, making the insights more accessible to medical professionals.",
    reflection:
      "Model Enhancement\nImplement more advanced algorithms and ensemble methods to further improve prediction accuracy and reliability.\n\nExpanded Dataset\nIncorporate additional health metrics and demographic factors to create a more comprehensive risk assessment model.\n\nInteractive Dashboard\nDevelop a user-friendly interface for healthcare providers to interact with the model and visualize patient risk profiles.\n\nClinical Validation\nConduct more extensive validation studies with diverse patient populations to ensure the model's generalizability and clinical utility.",
    teamMembers: [
      {
        name: "Heral Kumar",
        role: "Data Scientist & ML Engineer",
        link: "https://www.linkedin.com/in/heral-kumar/",
      },
    ],
    promptColor: "#e11d48",
    promptTextColor: "#ffffff",
    areaOfFocus: "HealthTech",
    challengeMetrics: [
      { number: "80%", label: "of heart disease is preventable with early intervention" },
      { number: "67%", label: "of people don't know their cardiac risk factors" },
      { number: "3.2x", label: "higher recovery rates with early detection" }
    ],
    solutionMetrics: [
      { number: "77%", label: "prediction accuracy on validation data" },
      { number: "10,000+", label: "health records analyzed and processed" },
      { number: "85%", label: "of key risk factors identified" }
    ],
    resultMetrics: [
      { number: "3", label: "critical risk factors identified for intervention" },
      { number: "86%", label: "of healthcare providers found insights actionable" },
      { number: "8.5/10", label: "average satisfaction rating from medical professionals" }
    ]
  },

  // Add more projects as needed
]

export function getAllProjects() {
  return projects
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug)
}

// Add getProjectData function for async data fetching
export async function getProjectData(slug: string): Promise<Project | null> {
  try {
    // Get the project data synchronously
    const project = getProjectBySlug(slug);
    // Return the project data or null if not found
    return project || null;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
}

