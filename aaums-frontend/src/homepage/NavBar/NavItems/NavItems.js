import { FaHome, FaNewspaper, FaGraduationCap, FaDoorOpen, FaFileAlt, FaList, FaDollarSign } from 'react-icons/fa'; // Import icons

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    cName: "nav-item",
    icon: <FaHome />, // React icon component
  },
  {
    id: 2,
    title: "Latest",
    path: "./latest",
    cName: "nav-item",
    icon: <FaNewspaper />, // React icon component
    submenu: [
      { title: "Recent News", path: "./recent-news", icon: <FaNewspaper /> },
      { title: "Updates", path: "./updates", icon: <FaFileAlt /> },
      { title: "Events", path: "./events", icon: <FaDollarSign /> },
    ],
  },
  {
    id: 3,
    title: "Academic",
    path: "./academic",
    cName: "nav-item",
    icon: <FaGraduationCap />,
    submenu: [
      { title: "Courses", path: "./courses", icon: <FaList /> },
      { title: "Programs", path: "./programs", icon: <FaFileAlt /> },
      { title: "Faculty", path: "./faculty", icon: <FaGraduationCap /> },
    ],
  },
  {
    id: 4,
    title: "Admissions",
    path: "./admissions",
    cName: "nav-item",
    icon: <FaDoorOpen />,
    submenu: [
      { title: "Apply", path: "./apply", icon: <FaFileAlt /> },
      { title: "Requirements", path: "./requirements", icon: <FaList /> },
      { title: "Fees", path: "./fees", icon: <FaDollarSign /> },
    ],
  },
];
