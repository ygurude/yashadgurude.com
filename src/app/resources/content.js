import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Yashad",
  lastName: "Gurude",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software & Hardware Engineer",
  avatar: "/images/avatar.png",
  //location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Marathi"], // optional: Leave the array empty if you don't want to display languages
};

// const newsletter = {
//   display: true,
//   title: <>Subscribe to {person.firstName}'s Newsletter</>,
//   description: (
//     <>
//       I occasionally write about design, technology, and share thoughts on the intersection of
//       creativity and engineering.
//     </>
//   ),
// };

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ygurude",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/yashad-gurude/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/y_gurude21/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ygurude@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi! My name is Yashad</>,
  subline: (
    <>
      I am a computer engineering student at <InlineCode>Georgia Tech</InlineCode> Professionally, I am interested in Software and Hardware Engineering, Embedded Software Engineering, ASIC Engineering, Tech Consulting, and Banking.
      Outside of that, I love playing and watching basketball, playing pickleball, watching football, and enjoying a good movie.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Passionate Computer Engineering major at Georgia Tech with a focus on Information 
        Internetworks and Computing Hardware/Emerging Architecture. Experienced in a 
        myriad of software languages and honed skills through involvement in multiple 
        organizations. Well-versed in engineering programs such as Python, Java, C, 
        System Verilog, MATLAB, and Assembly Language. Currently seeking Engineering 
        Internships to apply my diverse skill set and contribute to innovative projects. 

      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SIP Neuroengineering Lab",
        timeframe: "May 2024 - Present",
        role: "Undergraduate Research Assistant",
        achievements: [
          <>
            Developed a real-time multi-stream data acquisition system using MATLAB and Lab Streaming Layer , synchronizing
            EEG, Pupil Labs eye-tracking, and other biosignal streams across 5+ devices with sub-millisecond precision
          </>,
          <>
            Designed a GUI-based control interface in MATLAB with start, stop, pause, resume functions, and an event marker
            system, improving data segmentation efficiency by 40%
          </>,
          <>
            Processed and analyzed 70,000+ EEG data points using MATLAB, Python, applying signal processing techniques for
            artifact reduction and feature extractions
          </>,
          <>
            Implemented a Python-based LSL data stream via Conda and pylsl for synchronized stimulus presentation and
            automated event tracking, enhancing cognitive response analysis
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Keller Williams",
        timeframe: "June 2024 - August 2024",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Developed a secure web portal using Next.js, automating document management for 100+ real estate agents and
            reducing paperwork processing time by 50%
          </>,
          <>
            Implemented a RESTful API for seamless integration between the web platform and internal databases, enabling real-time
            retrieval and storage of contracts, listings, and compliance documents
          </>,
          <>
            Collaborated with the IT team to optimize backend infrastructure which improved query performance by 40% and
            enhancing overall user experience
          </>,
        ],
        images: [],
      },
      {
        company: "EcoCAR EV Team",
        timeframe: "January 2024 - May 2024",
        role: "Propulsion Controls and Automation Engineer",
        achievements: [
          <>
            Developed electrical vehicle models with Software-in-Loop and Hardware -in-Loop simulations by developing in Simulink
          </>,
          <>
            Elevated Adaptive Cruise Control capabilities by conducting comprehensive testing and comparative simulations
          </>,
          <>
            Executed the innovation of human-machine and driver monitoring interfaces for steady autonomous vehicle connectivity
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Georgia Institute of Technology",
        description: <><b>Major:</b> Computer Engineering
        <br /> <b>Concentration:</b> Computing Hardware/Emerging Architecture & Information Internetworks
        <br /> <b>Minor:</b> Engineering & Business through the Denning T&M Program</>,
      },
    ],
  },
  courses: {
    display: true,
    title: "Courses",
    names: [
      {
        name: "ECE 4180",
        description:
        <>
          Embedded Systems Design
        </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        // description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },

      {
        title: "Java",
        images: [],
      },

      {
        title: "C/C++",
        images: [],
      },

      {
        title: "SQL",
        images: [],
      },

      {
        title: "Next.js",
        // description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },

      {
        title: "MATLAB",
        images: [],
      },

      {
        title: "System Verilog",
        images: [],
      },

      {
        title: "VHDL",
        images: [],
      },

      {
        title: "ARM",
        images: [],
      },

      {
        title: "RISC-V",
        images: [],
      },

      {
        title: "MIPS",
        images: [],
      },

      {
        title: "",
        images: [],
      },
    ],
  },
};

// const blog = {
//   label: "Blog",
//   title: "",
//   description: ``,
//   // Create new blog posts by adding a new .mdx file to app/blog/posts
//   // All posts will be listed on the /blog route
// };

const projects = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  // title: "My photo gallery",
  // description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  // images: [
    // {
    //   src: "/images/gallery/img-01.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-02.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-03.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-04.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-05.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-06.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-07.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-08.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-09.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-10.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-11.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/img-12.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-13.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/img-14.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
  // ],
};

export { person, social, home, about, projects, gallery };
