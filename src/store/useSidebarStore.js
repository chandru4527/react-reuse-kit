import { create } from "zustand";

const useSidebarStore = create((set) => ({
  isCollapsed: false,
  isMobileOpen: false,

  toggleCollapse: () =>
    set((state) => ({
      isCollapsed: !state.isCollapsed,
    })),

  toggleMobileSidebar: () =>
    set((state) => ({
      isMobileOpen: !state.isMobileOpen,
    })),

  closeMobileSidebar: () =>
    set({
      isMobileOpen: false,
    }),
}));

export default useSidebarStore;