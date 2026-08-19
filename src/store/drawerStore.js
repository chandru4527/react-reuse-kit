import { create } from "zustand";

const useDrawerStore = create((set) => ({
  isOpen: false,

  position: "right",
  title: "",
  content: null,
  size: "md",

  showClose: true,
  closeText: "Close",

  showAction: false,
  actionText: "",
  actionClassName: "",
  actionLoading: false,
  actionDisabled: false,
  onAction: null,

  openDrawer: (options = {}) =>
    set({
        isOpen: true,

        position: options.position || "right",
        title: options.title || "",
        content: options.content || null,

        size: options.size || "md",

        showClose: options.showClose ?? true,
        closeText: options.closeText || "Close",

        showAction: options.showAction ?? false,
        actionText: options.actionText || "Save",
        actionClassName: options.actionClassName || "",

        actionLoading: options.actionLoading ?? false,
        actionDisabled: options.actionDisabled ?? false,

        onAction: options.onAction || null,
    }),

  closeDrawer: () =>
    set({
      isOpen: false,
    }),
}));

export default useDrawerStore;