import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    unity,
    bihler,
    carrent,
    jobit,
    tripguide,
    threejs,
    c,
    cpp,
    csharp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Unity Developer",
      icon: web,
    },
    {
      title: ".NET Developer",
      icon: mobile,
    },
    {
      title: "Graphics Enthusiast",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "CSharp",
      icon: csharp,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C",
      icon: c,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Otto Bihler Maschinenfabrik GmbH \& Co. KG",
      icon: bihler,
      iconBg: "#c0c0c3",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Writing multi platform Applications that interactively presented the complex behaviours of punching and bending technology using game engines.",
        "Develop salable automation tools to simplify the production workflow of creating usable 3D data. This ranges from converting and optimizing to creating UVs and custom data.",
        "Efficiently manage a small team in delivering both, software and art projects.",
        "Facilitate communication between customers, artists and developers.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Otto Bihler Maschinenfabrik GmbH \& Co. KG",
      icon: bihler,
      iconBg: "#c0c0c3",
      date: "October 2021 - February 2022",
      points: [
        "Created multi platform Applications that interactively presented the complex behaviours of punching and bending technology.",
        "Helped the company evaluate the benefit of using game engines to present their data virtually.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };