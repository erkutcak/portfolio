import {
    mobile,
    backend,
    creator,
    erkut,
    linkedintext,
    githubtext,
    instagramtext,
    mediumtext,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    unlogo,
    flatiron,
    mysa,
    bcs,
    highroller,
    dibs,
    hangman,
    cocktailrater,
    quoted,
    audiohouse,
    threejs,
    prisma,
    postgresql,
    nextjs,
    python,
    flask,
    vitelogo,
    linkedin,
    github,
    medium,
    instagram,
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: linkedintext,
      icon: linkedin,
      profile: "https://www.linkedin.com/in/erkutcakmak/",
    },
    {
      title: githubtext,
      icon: github,
      profile: "https://github.com/erkutcak",
    },
    {
      title: mediumtext,
      icon: medium,
      profile: "https://medium.com/@cakmak.erkut1",
    },
    {
      title: instagramtext,
      icon: instagram,
      profile: "https://www.instagram.com/erkutcakmak/",
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
      name: "Next.js",
      icon: nextjs,
    },
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "Vite",
      icon: vitelogo,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Prisma",
      icon: prisma,
    },
    {
      name: "Three.js",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Flask",
      icon: flask,
    },
  ];
  
  const experiences = [
    {
      title: "test",
      company_name: "test company",
      icon: flatiron,
      iconBg: "#383E56",
      date: "test",
      points: [
        "test",
      ],
    },
    {
      title: "test",
      company_name: "test company",
      icon: flatiron,
      iconBg: "#383E56",
      date: "test",
      points: [
        "test",
      ],
    },
    {
      title: "test",
      company_name: "test company",
      icon: flatiron,
      iconBg: "#383E56",
      date: "test",
      points: [
        "test",
      ],
    },
    {
      title: "test",
      company_name: "test company",
      icon: flatiron,
      iconBg: "#383E56",
      date: "test",
      points: [
        "test",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "CSS Flexbox: A Comprehensive Guide",
      link: "https://medium.com/@cakmak.erkut1/flexbox-a-comprehensive-guide-5a77c2d1eba2",
      profile: "https://medium.com/@cakmak.erkut1",
      name: "cakmak.erkut1",
      designation: "Medium",
      image: erkut,
    },
    {
      testimonial:
        "CRUD Operations in Flask with RESTful",
      link: "https://medium.com/@cakmak.erkut1/crud-operations-in-flask-with-restful-9de3148f32de",
      profile: "https://medium.com/@cakmak.erkut1",
      name: "cakmak.erkut1",
      designation: "Medium",
      image: erkut,
    },
    {
      testimonial:
        "Basic CRUD Operations in SQL",
      link: "https://medium.com/@cakmak.erkut1/basic-crud-operations-in-sql-38931234c5e8",
      profile: "https://medium.com/@cakmak.erkut1",
      name: "cakmak.erkut1",
      designation: "Medium",
      image: erkut,
    },
    {
      testimonial:
        "Quick Guide to Client-Side Routing with React Router",
      link: "https://medium.com/@cakmak.erkut1/quick-guide-to-client-side-routing-with-react-router-a4e1dc1c569",
      profile: "https://medium.com/@cakmak.erkut1",
      name: "cakmak.erkut1",
      designation: "Medium",
      image: erkut,
    },
    {
      testimonial:
        "Arrow Function Expressions for Beginners",
      link: "https://medium.com/@cakmak.erkut1/arrow-function-expressions-for-beginners-ad0b849b80fb",
      profile: "https://medium.com/@cakmak.erkut1",
      name: "cakmak.erkut1",
      designation: "Medium",
      image: erkut,
    },
  ];
  
  const projects = [
    {
      name: "The HighRoller",
      description:
        "A full stack mini-games app that contains 3 different games, user authentication, a personalized wallet, dynamic in-game coin tracking, and leaderboard stats.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "prisma",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "orange-text-gradient",
        },
      ],
      image: highroller,
      source_code_link: "https://github.com/erkutcak/capstone/tree/main/casino-app",
      production_link: "https://casino-app-dun.vercel.app/",
    },
    {
      name: "DIBS",
      description:
        "A full-stack e-commerce app where the user is authenticated and able to create and edit a listing, add items to cart, purchase items, and see past transactions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "RESTapi",
          color: "green-text-gradient",
        },
        {
          name: "SQLAlchemy",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "orange-text-gradient",
        },
      ],
      image: dibs,
      source_code_link: "https://github.com/erkutcak/project4-group1/tree/erkut",
      production_link: "",
    },
    {
      name: "Audio House",
      description:
        "A music app that lets users; search for a track or an artist, play the preview of a track, create a playlist, display the top 50 tracks worldwide, and see randomized genres",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "framer-motion",
          color: "orange-text-gradient",
        },
      ],
      image: audiohouse,
      source_code_link: "https://github.com/mad-jane/phase-2-project/tree/main/music-project",
      production_link: "https://audio-house-git-main-mad-jane.vercel.app/",
    },
    {
      name: "-quoted.",
      description:
        "A full-stack quote app that authenticates and lets users create and edit their account, display, submit, edit, like, and delete quotes. Backend handled by Firebase.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "noSQL",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
        },
      ],
      image: quoted,
      source_code_link: "https://github.com/erkutcak/quoted",
      production_link: "https://quoted-seven.vercel.app/",
    },
    {
      name: "Hangman",
      description:
        "A fun CLI hangman game that has 6 difficulty levels, keeps scores based on the user, displays the leaderboard, and has hidden animations.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "CLI",
          color: "green-text-gradient",
        },
        {
          name: "SQLite",
          color: "pink-text-gradient",
        },
      ],
      image: hangman,
      source_code_link: "https://github.com/Sanoho/phase-3-python-project",
      production_link: "",
    },
    {
      name: "Cocktail Rater",
      description:
        "A single page web application that helps user to select and view various cocktail recipes, likes, dislikes, and comments. User can also like, dislike, and comment on the recipes.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "flexbox",
          color: "pink-text-gradient",
        },
      ],
      image: cocktailrater,
      source_code_link: "https://github.com/aubrey-loudy29/phase-1-group-5-project",
      production_link: "",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };