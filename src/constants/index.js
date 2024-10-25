import {
  figma,
  canva,
  unity,
  blender,
  javascript,
  html,
  css,
  reactjs,
  git,
  login,
  matchbox,
  amongus,
  spotify,
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
    title: "Blender",
    icon: blender,
  },
  {
    title: "Figma",
    icon: figma,
  },
  {
    title: "Canva",
    icon: canva,
  },
  {
    title: "Unity",
    icon: unity,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Tasty Bites",
    work_name: "Figma",
    icon: figma,
    iconBg: "#E6DEDD",
    date: "March 2024",
    points: [
      "Designed an intuitive and attractive user interface, ensuring ease of navigation and a seamless ordering experience for users.",
      "Created detailed interactive prototypes to visualize user journeys and app functionality, facilitating stakeholder reviews and user testing.",
      "Developed a consistent design system, including reusable components and styles, to maintain uniformity and streamline the design process.",
      "Engaged in collaborative sessions with stakeholders and users to gather feedback and iteratively improve the design, aligning it with user needs and business goals.",
    ],
  },
  {
    title: "Match Box",
    work_name: "Blender",
    icon: blender,
    iconBg: "#E6DEDD",
    date: "April 2024",
    points: [
      "Developed an intricate and accurate 3D model of a matchbox, including all essential components.",
      "Applied high-quality textures and materials to achieve a lifelike appearance for the matchbox and matches.",
      "Implemented a well-planned lighting arrangement to highlight the design features and enhance the overall visual presentation.",
      "Produced high-resolution renders to showcase the matchbox design in a polished and professional manner.",
    ],
  },
  {
    title: "Spotify",
    work_name: "Figma",
    icon: figma,
    iconBg: "#E6DEDD",
    date: "May 2024",
    points: [
      "Created an intuitive and visually appealing user interface for Spotify, focusing on usability and user experience.",
      "Developed a comprehensive component library to ensure consistency and streamline the design process across different sections of the app.",
      "Built interactive prototypes to demonstrate the flow and functionality of the Spotify app, allowing for user testing and feedback.",
      "Worked closely with stakeholders to iterate on designs based on feedback, ensuring the final product met user needs and expectations.",
    ],
  },
  {
    title: "Among Us",
    work_name: "Blender",
    icon: blender,
    iconBg: "#E6DEDD",
    date: "June 2024",
    points: [
      "Created a detailed and accurate 3D model of an Among Us character, capturing the unique design elements and proportions of the game’s characters.",
      "Applied vibrant colors and textures to bring the character to life, ensuring it matches the game's aesthetic and style.",
      "Implemented rigging and basic animations (if applicable) to enable the character to move and interact within the game environment.",
      "Produced high-quality renders to showcase the character design, highlighting its features and ensuring it meets the visual standards of the game.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The best animator I've known, and has great creativity.",
    name: "Henry A S Arrovin",
    designation: "Software Developer",
    company: "Self Employed",
    image: "https://rb.gy/3ge2io",
  },
  {
    testimonial:
      "A visionary developer with a knack for blending technology and creativity seamlessly.",
    name: "Ajay Pravin E",
    designation: "Software Developer",
    company: "Self Employed",
    image: "https://shorturl.at/dWOMu",
  },
  {
    testimonial:
      "A skilled innovator who turns complex challenges into elegant, user-friendly solutions.",
    name: "Esmond Tony S",
    designation: "Software Developer",
    company: "Centizen Inc",
    image: "https://shorturl.at/TE4Dx",
  },
];

const projects = [
  {
    name: "Login Page",
    description:
      "A simple yet secure gateway that seamlessly connects users to their personalized experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: login,
    source_code_link: "https://github.com/",
  },
  {
    name: "Spotify Login",
    description:
      "Ready to dive back into your playlists? Sign in to Spotify and let the music play!",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "CLone",
        color: "green-text-gradient",
      },
      {
        name: "Design",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/",
  },
  {
    name: "Match Box",
    description:
      "Match Box is a stunning blend of art and technology, showcasing 3D design at its finest.",
    tags: [
      {
        name: "Blender",
        color: "blue-text-gradient",
      },
      {
        name: "3D Model",
        color: "green-text-gradient",
      },
      {
        name: "Texture",
        color: "pink-text-gradient",
      },
    ],
    image: matchbox,
    source_code_link: "https://github.com/",
  },
  {
    name: "Among Us",
    description:
      "A distinctive, colorful character in a spacesuit, adding mystery and excitement to Among Us.",
    tags: [
      {
        name: "Blender",
        color: "blue-text-gradient",
      },
      {
        name: "3D Model",
        color: "green-text-gradient",
      },
      {
        name: "Texture",
        color: "pink-text-gradient",
      },
    ],
    image: amongus,
    source_code_link: "https://github.com/",
  },
];
export { services, technologies, experiences, testimonials, projects };
