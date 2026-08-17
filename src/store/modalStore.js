import { create } from "zustand";

const useModalStore = create((set) => ({

    isOpen: false,
    title: "",
    content: null,
    size: "md",

    // Dynamic action button
    action: {
        label: "Save",
        variant: "primary",
        onClick: null,
        loading: false,
        disabled: false,
    },

    // Open Modal
    openModal: ({
        title = "",
        content = null,
        size = "md",
        action = {},
    }) =>
        set({
            isOpen: true,
            title,
            content,
            size,
            action: {
                label: action.label || "Save",
                variant: action.variant || "primary",
                onClick: action.onClick || null,
                loading: action.loading || false,
                disabled: action.disabled || false,
            },
        }),

    // Close Modal

    closeModal: () =>
        set({
            isOpen: false,
            title: "",
            content: null,
            size: "md",
            action: {
                label: "Save",
                variant: "primary",
                onClick: null,
                loading: false,
                disabled: false,
            },
        }),
}));

export default useModalStore;