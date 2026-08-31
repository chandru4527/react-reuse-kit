import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import useSidebarStore from "../store/useSidebarStore";

const AdminLayout = () => {
  const { isCollapsed } = useSidebarStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />

      <div
        className={`transition-all duration-300 ${isCollapsed ? "lg:ml-20" : "lg:ml-64"
          }`}
      >
        <AdminNavbar />

        <main className="pt-16 ">
          <div className="">
            <Outlet />
          </div>
          <AdminFooter />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;