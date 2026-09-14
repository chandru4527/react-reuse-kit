import { useEffect, useLayoutEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import useDrawerStore from "../../../store/drawerStore";
import Button from "../buttons/Button";

const Drawer = () => {
    const {
        isOpen,
        position,
        title,
        content,
        size,
        rounded,
        className,
        showClose,
        showAction,
        actionText,
        actionVariant,
        actionLeftIcon,
        actionRightIcon,
        actionIconSize,
        actionIconClassName,
        actionClassName,
        actionLoading,
        actionLoadingText,
        actionDisabled,
        onAction,
        closeDrawer,
    } = useDrawerStore();

    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useLayoutEffect(() => {
        if (isOpen) {
            setShouldRender(true);

            const frame = requestAnimationFrame(() => {
                setIsVisible(true);
            });

            return () => cancelAnimationFrame(frame);
        }

        setIsVisible(false);

        const timeout = setTimeout(() => {
            setShouldRender(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, [isOpen, position]);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                closeDrawer();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, closeDrawer]);

    const horizontalSizes = {
        sm: "w-80",
        md: "w-96",
        lg: "w-[32rem]",
        xl: "w-[40rem]",
        full: "w-full",
    };

    const verticalSizes = {
        sm: "h-64",
        md: "h-80",
        lg: "h-96",
        xl: "h-[32rem]",
        full: "h-full",
    };

    const roundedSizes = {
        none: {
            right: "",
            left: "",
            top: "",
            bottom: "",
        },
        sm: {
            right: "rounded-l-sm",
            left: "rounded-r-sm",
            top: "rounded-b-sm",
            bottom: "rounded-t-sm",
        },
        md: {
            right: "rounded-l-md",
            left: "rounded-r-md",
            top: "rounded-b-md",
            bottom: "rounded-t-md",
        },
        lg: {
            right: "rounded-l-lg",
            left: "rounded-r-lg",
            top: "rounded-b-lg",
            bottom: "rounded-t-lg",
        },
        xl: {
            right: "rounded-l-xl",
            left: "rounded-r-xl",
            top: "rounded-b-xl",
            bottom: "rounded-t-xl",
        },
        "2xl": {
            right: "rounded-l-2xl",
            left: "rounded-r-2xl",
            top: "rounded-b-2xl",
            bottom: "rounded-t-2xl",
        },
        "3xl": {
            right: "rounded-l-3xl",
            left: "rounded-r-3xl",
            top: "rounded-b-3xl",
            bottom: "rounded-t-3xl",
        },
        full: {
            right: "rounded-l-full",
            left: "rounded-r-full",
            top: "rounded-b-full",
            bottom: "rounded-t-full",
        },
    };

    const positionConfig = {
        right: {
            positionClass: "right-0 top-0 h-full",
            sizeClass: horizontalSizes[size] || horizontalSizes.md,
            openClass: "translate-x-0",
            closedClass: "translate-x-full",
        },

        left: {
            positionClass: "left-0 top-0 h-full",
            sizeClass: horizontalSizes[size] || horizontalSizes.md,
            openClass: "translate-x-0",
            closedClass: "-translate-x-full",
        },

        top: {
            positionClass: "top-0 left-0 w-full",
            sizeClass: verticalSizes[size] || verticalSizes.md,
            openClass: "translate-y-0",
            closedClass: "-translate-y-full",
        },

        bottom: {
            positionClass: "bottom-0 left-0 w-full",
            sizeClass: verticalSizes[size] || verticalSizes.md,
            openClass: "translate-y-0",
            closedClass: "translate-y-full",
        },
    };

    const currentPosition =
        positionConfig[position] || positionConfig.right;

    const roundedClass =
        roundedSizes[rounded]?.[position] || "";

    const transformClass = isVisible
        ? currentPosition.openClass
        : currentPosition.closedClass;

    if (!shouldRender) return null;

    return (
        <div className="fixed inset-0 z-100">
            {/* Overlay */}
            <div
                onClick={closeDrawer}
                className={twMerge(
                    "absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out",
                    isVisible ? "opacity-100" : "opacity-0"
                )}
            />

            {/* Drawer */}
            <div
                className={twMerge(
                    "fixed flex transform flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
                    currentPosition.positionClass,
                    currentPosition.sizeClass,
                    roundedClass,
                    transformClass,
                    className
                )}
            >
                {/* Header */}
                <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-5 py-2">
                    <h2 className="text-lg font-semibold text-gray-900">
                        {title}
                    </h2>

                    {showClose && (
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={closeDrawer}
                            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                            aria-label="Close drawer"
                        >
                            <MdClose size={22} />
                        </Button>
                    )}
                </div>

                {/* Content */}
                <div className="min-h-0 flex-1 overflow-y-auto p-5">
                    {content}
                </div>

                {/* Footer */}
                {showClose && (
                    <div className="flex shrink-0 items-center justify-end gap-3 border-t border-gray-100 px-5 py-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={closeDrawer}
                        >
                            Cancel
                        </Button>

                        {showAction ? (
                            <Button
                                type="button"
                                variant={actionVariant}
                                leftIcon={actionLeftIcon}
                                rightIcon={actionRightIcon}
                                iconSize={actionIconSize}
                                iconClassName={actionIconClassName}
                                className={actionClassName}
                                loading={actionLoading}
                                loadingText={actionLoadingText}
                                disabled={actionDisabled}
                                onClick={onAction}
                            >
                                {actionText}
                            </Button>
                        ) : (
                            <Button
                                type="button"
                                onClick={closeDrawer}
                            >
                                Close
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Drawer;