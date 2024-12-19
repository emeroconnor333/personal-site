export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
    {
        title: "Advanced Calculator",
        year: 2024,
        description: "Developed an advanced calculator in a college project, featuring root-finding algorithms, differentiation, matrix operations, complex number calculations, and algebraic solutions.",
        url: "https://github.com/tom-byrn/Block-2-Project"
    },
    {
      title: "Well-Quest",
      year: 2024,
      description:
        "A wellness platform designed to foster healthier workplaces by creating a community-driven approach to employee health, featuring step challenges, streamlined event organization, and personalized health tracking.",
      url: "/blog/ndrc-hackathon",
    },
    {
        title: "Plate Planner",
        year: 2024,
        description: "Plate Planner is a React-based meal planning web app that allows users to organize meals for each day of the week and automatically generates a shopping list based on selected recipes.",
        url: "https://plate-planner-smoky.vercel.app/"
    },
  {
    title: "EmpowerHer Website",
    year: 2024,
    description:
      "I built this website to support my sister’s vision of launching wellness workshops for women. The site serves as a platform to promote events, share details, and connect with participants.",
    url: "https://emeroconnor333.github.io/EmpowerHer/index.html",
  },

];
