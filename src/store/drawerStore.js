import { create } from "zustand";

const useDrawerStore = create((set) => ({
  isOpen: false,

  position: "right",
  title: "",
  content: null,
  size: "md",
  rounded: "none",
  className: "",

  showClose: true,

  showAction: false,
  actionText: "Save",
  actionVariant: "primary",
  actionLeftIcon: null,
  actionRightIcon: null,
  actionIconSize: 18,
  actionIconClassName: "",
  actionClassName: "",
  actionLoading: false,
  actionLoadingText: "Loading...",
  actionDisabled: false,
  onAction: null,

  openDrawer: (options = {}) =>
    set({
      isOpen: true,

      position: options.position ?? "right",
      title: options.title ?? "",
      content: options.content ?? null,
      size: options.size ?? "md",
      rounded: options.rounded ?? "none",
      className: options.className ?? "",

      showClose: options.showClose ?? true,

      showAction: options.showAction ?? false,
      actionText: options.actionText ?? "Save",
      actionVariant: options.actionVariant ?? "primary",
      actionLeftIcon: options.actionLeftIcon ?? null,
      actionRightIcon: options.actionRightIcon ?? null,
      actionIconSize: options.actionIconSize ?? 18,
      actionIconClassName: options.actionIconClassName ?? "",
      actionClassName: options.actionClassName ?? "",
      actionLoading: options.actionLoading ?? false,
      actionLoadingText: options.actionLoadingText ?? "Loading...",
      actionDisabled: options.actionDisabled ?? false,
      onAction: options.onAction ?? null,
    }),

  closeDrawer: () =>
    set({
      isOpen: false,
    }),
}));

export default useDrawerStore;