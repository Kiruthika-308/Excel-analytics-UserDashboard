import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Activity,
  FileBarChart,
  Settings,
  Moon,
  Sun,
  Menu,
} from "lucide-react";
import { motion } from "framer-motion";

const DashboardLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { path: "/", label: "Overview", icon: LayoutDashboard },
    { path: "/users", label: "Users", icon: Users },
    { path: "/activity", label: "Activity Logs", icon: Activity },
    { path: "/reports", label: "Reports", icon: FileBarChart },
    { path: "/settingspage", label: "Settings", icon: Settings },
  ];

  const navLinkStyle = ({ isActive }) =>
    `flex items-center ${
      isSidebarOpen ? "justify-start" : "justify-center"
    } gap-4 px-4 py-2 rounded-lg transition-all duration-200
    ${
      isActive
        ? "bg-indigo-600 text-white"
        : "text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700"
    }`;

  return (
    <div className={`flex min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Sidebar */}
      <aside
        className={`flex flex-col ${
          isSidebarOpen ? "w-64" : "w-20"
        } p-4 transition-all duration-300 bg-white dark:bg-gray-800 shadow-md`}
      >
        {/* Sidebar Top */}
        <div className="flex justify-start">
          <button onClick={toggleSidebar} className="p-2">
            <Menu size={24} className={` ${isDarkMode ? "text-white" : "text-black"}`} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 mt-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.path} to={item.path} className={navLinkStyle}>
                <Icon size={24} className={`${isDarkMode ? "text-white" : "text-black"}`} />
                {isSidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-white shadow-md dark:bg-gray-800 dark:text-white">
          <h1 className="text-2xl font-semibold">User Analytics Dashboard</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
