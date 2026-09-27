import { twMerge } from "tailwind-merge";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {"default" | "primary" | "success" | "danger" | "warning" | "info" | "purple" | "pink"} [props.variant="default"]
 * @param {"xs" | "sm" | "md" | "lg"} [props.size="md"]
 * @param {"none" | "sm" | "md" | "lg" | "full"} [props.rounded="full"]
 * @param {boolean} [props.dot=false]
 * @param {boolean} [props.border=true]
 * @param {string} [props.className=""]
 */

const Badge = ({
    children,
    variant = "default",
    size = "md",
    rounded = "full",
    dot = false,
    border = true,
    className = "",
    ...props
}) => {
    const variants = {
        default: "bg-gray-100 text-gray-800 border-gray-200",
        primary: "bg-blue-100 text-blue-700 border-blue-200",
        success: "bg-green-100 text-green-700 border-green-200",
        danger: "bg-red-100 text-red-700 border-red-200",
        warning: "bg-yellow-100 text-yellow-700 border-yellow-200",
        info: "bg-cyan-100 text-cyan-700 border-cyan-200",
        purple: "bg-purple-100 text-purple-700 border-purple-200",
        pink: "bg-pink-100 text-pink-700 border-pink-200",
    };

    const sizes = {
        xs: "px-1.5 py-0.5 text-[10px]",
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-base",
    };

    const roundedStyles = {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
    };

    const dotColors = {
        default: "bg-gray-500",
        primary: "bg-blue-500",
        success: "bg-green-500",
        danger: "bg-red-500",
        warning: "bg-yellow-500",
        info: "bg-cyan-500",
        purple: "bg-purple-500",
        pink: "bg-pink-500",
    };

    const currentVariant = variants[variant] || variants.default;
    const currentDotColor = dotColors[variant] || dotColors.default;

    return (
        <span
            className={twMerge(
                "inline-flex w-fit items-center gap-1 font-medium",
                border && "border",
                currentVariant,
                sizes[size] || sizes.md,
                roundedStyles[rounded] || roundedStyles.full,
                className
            )}
            {...props}
        >
            {dot && (
                <span
                    className={twMerge(
                        "h-2 w-2 shrink-0 rounded-full",
                        currentDotColor
                    )}
                />
            )}

            {children}
        </span>
    );
};

export default Badge;