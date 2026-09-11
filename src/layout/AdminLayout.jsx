import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import ScrollToTop from "../components/ScrollToTop";

const AdminLayout = () => {
  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">

      <AdminSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <ScrollToTop />

        <AdminNavbar />

        <main
          id="admin-main"
          className="flex-1 overflow-y-auto scrollbar-none"
        >
          <Outlet />
        </main>

        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;