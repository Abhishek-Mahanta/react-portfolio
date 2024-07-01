import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/itodo.jpg";
import project6 from "../assets/projects/project6.jpeg";

export const HERO_CONTENT = `As a highly motivated Computer Science student, I possess a good understanding of programming principles and concepts. I am a quick learner and thrive in fast-paced environments. I have honed my problem-solving skills and have developed a keen eye for detail.I am enthusiastic, with excellent communication skills and the ability to work well in teams.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications.
I have worked with a variety of technologies, including ,HTML, Javascript, React, Node.js, MySQL, and MongoDB. My journey in web development began
   with a deep curiosity for how things work, and it has evolved into a career where I continuously strive
    to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex
     problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new
      technologies, AI tools, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "August 2023 - April 2024",
    role: "Web Developer Intern",
    company: " Petwale365",
    description: `Maintain web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Worked in OTP verfication.`,
    technologies: ["Javascript", "React.js", "MERN Stack", "MongoDB"],
  },
  {
    year: "Jan 2023 - May 2023",
    role: "Web Developer Intern",
    company: " Zephyr Solutions",
    description: `Designed and developed user interfaces for online developers community forum. Worked closely with backend developers to integrate frontend components. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    year: "Jan 2021 - May 2021",
    role: "Web Developer Intern",
    company: " Zephyr Solutions",
    description: `Developed and maintained web applications for online employee attendance syatem. Designed and implemented for data communication. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Forms Pagination",
    image: project1,
    description:
      "Made this project,worked on forms pagination also used toast,storing data in localstorage. In this project users can create their own project",
    technologies: ["HTML", "TailwindCSS", "ReactJS"],
    link: "https://elaborate-donut-e9b78c.netlify.app/",
  },
  {
    title: "Business Profile Page",
    image: project2,
    description:
      "Made this project,used toast,storing data in localstorage. In this project users can create their own business profile.",
    technologies: ["HTML", "TailwindCSS", "ReactJS"],
    link: "https://businessprofilepage.netlify.app/",
  },
  {
    title: "Login Functionality",
    image: project3,
    description:
      " Login functionality with otp verification.Where users, doctors and admins can login by providing the OTP.",
    technologies: ["HTML", "CSS", "ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
    link: "https://github.com/Abhishek-Mahanta/l_otp.git",
  },
  {
    title: "OTP verification",
    image: project4,
    description:
      "OTP verification,where users, doctors and admins will provide otp for login.",
    technologies: ["HTML", "CSS", "ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
    link: "https://github.com/Abhishek-Mahanta/l_otp.git",
  },
  {
    title: "Todo-List",
    image: project5,
    description:
      "Developed a todo list web page where users can add their daily todos,cut their todos(which will make the difference between marked and unmarked todos) and users can also edit and delete their todos.",
    technologies: ["HTML", "CSS", "ReactJS", "UUid"],
    link: "https://todolistwebsiteapplication.netlify.app",
  },
];

export const CONTACT = {
  address: "Jorhat,Assam ",
  phoneNo: "+91 7086714782 ",
  email: "amahanta04@gmail.com",
};
