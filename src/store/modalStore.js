import { create } from "zustand";

const defaultAction = {
    label: "Close",
    variant: "primary",
    onClick: null,
    loading: false,
    disabled: false,
    className: "",
};

const useModalStore = create((set) => ({
    isOpen: false,
    title: "",
    content: null,
    size: "md",
    rounded: "lg",
    action: defaultAction,

    openModal: ({ title = "", content = null, size = "md", rounded = "lg", action = {}, }) =>
        set({
            isOpen: true,
            title,
            content,
            size,
            rounded,
            action: {
                label: action.label || "Close",
                variant: action.variant || "primary",
                onClick: action.onClick || null,
                loading: action.loading || false,
                disabled: action.disabled || false,
                className: action.className || "",
            },
        }),

    closeModal: () =>
        set({
            isOpen: false,
            title: "",
            content: null,
            size: "md",
            rounded: "lg",
            action: defaultAction,
        }),
}));

export default useModalStore;