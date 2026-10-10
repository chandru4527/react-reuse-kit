import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import useModalStore from "../../store/modalStore";
import Button from "../buttons/Button";

const Modal = () => {
    const { isOpen, title, content, size, rounded, action, closeModal } = useModalStore();

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, closeModal]);

    if (!isOpen) return null;

    const sizes = {
        sm: "max-w-sm",
        md: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-[95vw]",
    };

    const roundedStyles = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
    };

    const handleAction = () => {
        action.onClick ? action.onClick() : closeModal();
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div
            onMouseDown={handleOverlayClick}
            className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 p-4 animate-fade-in"
        >
            <div
                className={`flex max-h-[90vh] w-full flex-col overflow-hidden bg-white shadow-xl ${sizes[size]}
                 ${roundedStyles[rounded]} animate-modal-drop`}
            >
                <div className="flex items-center justify-between px-5 py-3">
                    <h2 className="text-lg font-bold text-gray-900">
                        {title}
                    </h2>

                    <Button
                        type="button"
                        variant="ghost"
                        leftIcon={<MdClose size={20} />}
                        onClick={closeModal}
                        className="p-1.5! text-black"
                    />
                </div>

                <div className="flex-1 overflow-y-auto p-5">
                    {content}
                </div>

                <div className="flex justify-end gap-3 border-t border-gray-100 px-5 py-3">
                    <Button
                        variant="secondary"
                        onClick={closeModal}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant={action.variant}
                        loading={action.loading}
                        disabled={action.disabled}
                        onClick={handleAction}
                        className={action.className}
                    >
                        {action.label}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;