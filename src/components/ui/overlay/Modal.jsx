import { useEffect } from "react";
import { MdClose } from 'react-icons/md'
import useModalStore from "../../../store/modalStore";

import Button from "../buttons/Button";

const Modal = () => {
    const { isOpen, title, content, size, action, closeModal, } = useModalStore();

    // Close with Escape
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            // Prevent background scrolling
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, closeModal]);

    // Don't render
    if (!isOpen) {
        return null;
    }

    // Modal sizes
    const sizes = {
        sm: "max-w-sm",
        md: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-[95vw]",
    };

    // Action button
    const handleAction = () => {
        action.onClick?.();
    };

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    return (

        <div onMouseDown={handleOverlayClick}
            className=" fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4  animate-fade-in" >

            <div className={`flex max-h-[90vh] w-full flex-col overflow-hidden rounded-xl bg-white shadow-xl ${sizes[size]} 
            animate-modal-drop`}>

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4">
                    <h2 className="text-lgfont-semibold text-gray-900">
                        {title}
                    </h2>

                    <button
                        type="button"
                        onClick={closeModal}
                        className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100"
                    >
                        <MdClose size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-5">
                    {content}
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-gray-200 px-5 py-4">

                    {/* Fixed Cancel button */}
                    <Button
                        variant="outline"
                        onClick={closeModal}
                    >
                        Cancel
                    </Button>

                    {/* Dynamic button */}
                    <Button
                        variant={action.variant}
                        loading={action.loading}
                        disabled={action.disabled}
                        onClick={handleAction}
                    >
                        {action.label}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;