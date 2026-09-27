import {
    MdCheckCircleOutline,
    MdErrorOutline,
    MdWarningAmber,
    MdInfoOutline,
    MdClose,
} from "react-icons/md";
import Button from "../buttons/Button";
import { twMerge } from "tailwind-merge";

/**
 * @param {Object} props
 * @param {"success" | "danger" | "warning" | "info"} [props.type="info"]
 * @param {React.ReactNode} [props.title]
 * @param {React.ReactNode} [props.message]
 * @param {React.ReactNode} [props.children]
 * @param {"static" | "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right"} [props.position="static"]
 * @param {"sm" | "md" | "lg"} [props.size="md"]
 * @param {"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"} [props.rounded="md"]
 * @param {string} [props.bgColor]
 * @param {string} [props.className=""]
 * @param {boolean} [props.icon=true]
 * @param {React.ElementType} [props.customIcon]
 * @param {number} [props.iconSize]
 * @param {string} [props.iconClassName=""]
 * @param {string} [props.titleClassName=""]
 * @param {string} [props.messageClassName=""]
 * @param {boolean} [props.closable=false]
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} [props.onClose]
 * @param {string} [props.closeClassName=""]
 * @param {number} [props.closeIconSize=20]
 */

const Alert = ({
    type = "info",
    title,
    message,
    children,

    position = "static",

    size = "md",
    rounded = "md",
    bgColor,
    className = "",

    icon = true,
    customIcon,
    iconSize,
    iconClassName = "",

    titleClassName = "",
    messageClassName = "",

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
        top: "fixed left-1/2 top-5 -translate-x-1/2",
        "top-left": "fixed left-5 top-5",
        "top-right": "fixed right-5 top-5",
        bottom: "fixed bottom-5 left-1/2 -translate-x-1/2",
        "bottom-left": "fixed bottom-5 left-5",
        "bottom-right": "fixed bottom-5 right-5",
    };

    const defaultIconSize =
        size === "sm" ? 18 : size === "lg" ? 24 : 20;

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
                            title && "mt-1",
                            currentType.text,
                            messageClassName
                        )}
                    >
                        {message}
                    </p>
                )}

                {children && (
                    <div className={twMerge(title || message ? "mt-2" : "")}>
                        {children}
                    </div>
                )}
            </div>

            {closable && (
                <Button
                    type="button"
                    variant="ghost"
                    size="xs"
                    shape="full"
                    aria-label="Close alert"
                    onClick={onClose}
                    className={twMerge(
                        "h-7 w-7 shrink-0 p-0",
                        currentType.text,
                        "hover:bg-black/5",
                        closeClassName
                    )}
                >
                    <MdClose size={closeIconSize} />
                </Button>
            )}
        </div>
    );
};

export default Alert;