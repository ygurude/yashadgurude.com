import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Yashad",
  lastName: "Gurude",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer @ AT&T",
  avatar: "/images/headshot.jpeg",
  resume: "/Yashad_Gurude.pdf",
  location: "America/New_York",
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
  headline: <>{person.name}</>,
  subline: <>Software Engineer @ AT&T</>,
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Computer Engineering major at Georgia Tech focused on Information Internetworks
        and Computing Hardware / Emerging Architecture. I work across Python, Java, C,
        SystemVerilog, MATLAB, and assembly — and I&apos;m looking for engineering
        internships where I can ship real systems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        slug: "att",
        company: "AT&T",
        timeframe: "",
        role: "Software Engineer",
        logo: "/images/logos/att.svg",
        description: "",
        achievements: [],
        images: [],
      },
      {
        slug: "american-express",
        company: "American Express",
        timeframe: "",
        role: "",
        logo: "/images/logos/american-express.svg",
        description: "",
        achievements: [],
        images: [],
      },
      {
        slug: "ncr-voyix",
        company: "NCR Voyix",
        timeframe: "",
        role: "",
        logo: "/images/logos/ncr-voyix.svg",
        description: "",
        achievements: [],
        images: [],
      },
      {
        slug: "georgia-tech",
        company: "Georgia Tech",
        timeframe: "May 2024 - Present",
        role: "Undergraduate Research Assistant",
        logo: "/images/logos/sip.png",
        description: "",
        achievements: [],
        images: [],
      },
      {
        slug: "keller-williams",
        company: "Keller Williams",
        timeframe: "June 2024 - August 2024",
        role: "Software Engineering Intern",
        logo: "/images/logos/keller-williams.png",
        description: "",
        achievements: [],
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
  label: "Work",
  title: "Work",
  description: `Experience and work by ${person.name}`,
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
