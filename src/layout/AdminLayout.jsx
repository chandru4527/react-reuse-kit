import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import useSidebarStore from "../store/useSidebarStore";
import ScrollToTop from "../components/ScrollToTop";

const AdminLayout = () => {
  const { isCollapsed } = useSidebarStore();

  return (
    <div className="min-h-screen bg-gray-50">

      <ScrollToTop/>
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div
        className={`min-h-screen transition-all duration-300 ${
          isCollapsed ? "lg:ml-20" : "lg:ml-64"
        }`}
      >
        {/* Navbar */}
        <AdminNavbar />

        {/* Page Content */}
        <main className="pt-16">
          <div className="min-h-[calc(100vh-4rem)]">
            <Outlet />
          </div>

          {/* Footer */}
          <AdminFooter />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
