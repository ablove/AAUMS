export const navItems = [
    {
      id: 1,
      title: "Home",
      path: "./",
      cName: "nav-item",
    },
    {
      id: 2,
      title: "Latest",
      path: "./latest",
      cName: "nav-item",
      submenu: [
        { title: "Recent News", path: "./recent-news" },
        { title: "Updates", path: "./updates" },
        { title: "Events", path: "./events" }
      ]
    },
    {
      id: 3,
      title: "Academic",
      path: "./academic",
      cName: "nav-item",
      submenu: [
        { title: "Courses", path: "./courses" },
        { title: "Programs", path: "./programs" },
        { title: "Faculty", path: "./faculty" }
      ]
    },
    {
      id: 4,
      title: "Admissions",
      path: "./admissions",
      cName: "nav-item",
      submenu: [
        { title: "Apply", path: "./apply" },
        { title: "Requirements", path: "./requirements" },
        { title: "Fees", path: "./fees" }
      ]
    },
    {
      id: 5,
      title: "Research",
      path: "./research",
      cName: "nav-item",
      submenu: [
        { title: "Projects", path: "./projects" },
        { title: "Publications", path: "./publications" },
        { title: "Collaborations", path: "./collaborations" }
      ]
    },
    {
      id: 6,
      title: "Library",
      path: "./library",
      cName: "nav-item",
      submenu: [
        { title: "Catalog", path: "./catalog" },
        { title: "E-books", path: "./ebooks" },
        { title: "Services", path: "./services" }
      ]
    },
    {
      id: 7,
      title: "Office",
      path: "./office",
      cName: "nav-item",
      submenu: [
        { title: "Staff Directory", path: "./staff" },
        { title: "HR", path: "./hr" },
        { title: "Support", path: "./support" }
      ]
    },
    {
      id: 8,
      title: "Service",
      path: "#",
      cName: "nav-item",
      submenu: [
        { title: "Marketing", path: "./marketing" },
        { title: "Consulting", path: "./consulting" },
        { title: "Development", path: "./development" }
      ]
    },
  ];