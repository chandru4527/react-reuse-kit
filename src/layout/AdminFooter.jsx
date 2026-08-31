import React from "react";

const AdminFooter = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-3">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
            CK
          </span>

          <div>
            <p className="text-sm font-semibold text-gray-800">
              CK Admin
            </p>
            <p className="text-xs text-gray-400">
              Management Dashboard
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} CK. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default AdminFooter;