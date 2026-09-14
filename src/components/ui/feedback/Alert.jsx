import {
    MdCheckCircleOutline,
    MdErrorOutline,
    MdWarningAmber,
    MdInfoOutline,
    MdClose,
} from "react-icons/md";
import Button from "../buttons/Button";
import { twMerge } from "tailwind-merge";

const Alert = ({
    type = "info",
    title,
    message,

    // Position
    position = "static",

    // Style
    size = "md",
    rounded = "md",
    bgColor,
    className = "",

    // Icon
    icon = true,
    customIcon,
    iconSize,
    iconClassName = "",

    // Content
    titleClassName = "",
    messageClassName = "",

    // Close
    closable = false,
    onClose,
    closeClassName = "",
    closeIconSize = 20,

    ...props
}) => {
    const types = {
        success: {
            icon: MdCheckCircleOutline,
            bg: "bg-green-50",
            text: "text-green-700",
            iconColor: "text-green-600",
            border: "border-green-200",
        },
        danger: {
            icon: MdErrorOutline,
            bg: "bg-red-50",
            text: "text-red-700",
            iconColor: "text-red-600",
            border: "border-red-200",
        },
        warning: {
            icon: MdWarningAmber,
            bg: "bg-yellow-50",
            text: "text-yellow-700",
            iconColor: "text-yellow-600",
            border: "border-yellow-200",
        },
        info: {
            icon: MdInfoOutline,
            bg: "bg-blue-50",
            text: "text-blue-700",
            iconColor: "text-blue-600",
            border: "border-blue-200",
        },
    };

    const currentType = types[type] || types.info;
    const Icon = customIcon || currentType.icon;

    const sizes = {
        sm: "p-3 text-xs",
        md: "p-4 text-sm",
        lg: "p-5 text-base",
    };

    const roundedStyles = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
    };

    const positions = {
        static: "relative",
        top: "fixed top-5 left-1/2 -translate-x-1/2",
        "top-left": "fixed top-5 left-5",
        "top-right": "fixed top-5 right-5",
        bottom: "fixed bottom-5 left-1/2 -translate-x-1/2",
        "bottom-left": "fixed bottom-5 left-5",
        "bottom-right": "fixed bottom-5 right-5",
    };

    const defaultIconSize = size === "sm" ? 18 : size === "lg" ? 24 : 20;

    return (
        <div
            role="alert"
            className={twMerge(
                "z-50 flex w-full max-w-lg items-start gap-3 border shadow-sm",
                positions[position],
                sizes[size],
                roundedStyles[rounded],
                bgColor || currentType.bg,
                currentType.border,
                className
            )}
            {...props}
        >
            {icon && (
                <Icon
                    size={iconSize || defaultIconSize}
                    className={twMerge(
                        "mt-0.5 shrink-0",
                        currentType.iconColor,
                        iconClassName
                    )}
                />
            )}

            <div className="min-w-0 flex-1">
                {title && (
                    <h4
                        className={twMerge(
                            "font-semibold",
                            currentType.text,
                            titleClassName
                        )}
                    >
                        {title}
                    </h4>
                )}

                {message && (
                    <p
                        className={twMerge(
                            title ? "mt-1" : "",
                            currentType.text,
                            messageClassName
                        )}
                    >
                        {message}
                    </p>
                )}
            </div>

            {closable && (
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    rounded="md"
                    leftIcon={MdClose}
                    iconSize={closeIconSize}
                    aria-label="Close alert"
                    onClick={onClose}
                    className={twMerge(
                        "shrink-0 p-1!",
                        currentType.text,
                        closeClassName
                    )}
                />
            )}
        </div>
    );
};

export default Alert;