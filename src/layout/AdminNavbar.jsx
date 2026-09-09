import React, { useState, useRef, useEffect } from "react";
import { MdFullscreen, MdFullscreenExit, MdMenu, MdLogout, MdPerson, } from "react-icons/md";
import { useMatches, useNavigate } from "react-router-dom";
// import { showSuccess } from "../utils/toast";
import useSidebarStore from "../store/useSidebarStore";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const matches = useMatches();

  const { isCollapsed, toggleCollapse, toggleMobileSidebar } =
    useSidebarStore();

  const title = matches[matches.length - 1]?.handle?.title || "Dashboard";

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);


  useEffect(() => {
    const handleChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleChange);

    return () =>
      document.removeEventListener("fullscreenchange", handleChange);
  }, []);


  const toggleFullScreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  const handleMenuClick = () => {
    if (window.innerWidth < 1024) {
      toggleMobileSidebar();
    } else {
      toggleCollapse();
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    // showSuccess("logout Successfully");
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 flex h-17 items-center justify-between border-b border-gray-200 bg-white px-2">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleMenuClick}
          className="cursor-pointer p-2"
        >
          <MdMenu className="text-2xl" />
        </button>

        <h1 className="text-lg font-bold capitalize text-gray-800">
          {title}
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleFullScreen}
          className="rounded p-2 hover:bg-gray-100 cursor-pointer"
        >
          {isFullScreen ? (
            <MdFullscreenExit size={24} />
          ) : (
            <MdFullscreen size={24} />
          )}
        </button>

      </div>
    </header>
  );
};

export default AdminNavbar;