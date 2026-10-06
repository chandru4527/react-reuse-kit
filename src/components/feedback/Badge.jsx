import { twMerge } from "tailwind-merge";

/**
 * Reusable Badge Component
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children] - Badge content
 * @param {string} [props.text] - Badge text
 * @param {"default" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "purple" | "pink" | "dark"} [props.variant="default"]
 * @param {"soft" | "solid" | "outline" | "light"} [props.appearance="soft"]
 * @param {"xs" | "sm" | "md" | "lg" | "xl"} [props.size="md"]
 * @param {"none" | "sm" | "md" | "lg" | "full"} [props.rounded="full"]
 * @param {boolean} [props.dot=false] - Show status dot
 * @param {boolean} [props.border=true] - Show border
 * @param {string} [props.className=""] - Additional CSS classes
 */

const Badge = ({
    children,
    text,
    variant = "default",
    appearance = "soft",
    size = "md",
    rounded = "full",
    dot = false,
    border = true,
    className = "",
    ...props
}) => {
    const colors = {
        default: {
            soft: "bg-gray-100 text-gray-700",
            solid: "bg-gray-700 text-white",
            outline: "border-gray-300 bg-transparent text-gray-700",
            light: "bg-gray-50 text-gray-600",
            dot: "bg-gray-500",
        },
        primary: {
            soft: "bg-blue-100 text-blue-700",
            solid: "bg-blue-600 text-white",
            outline: "border-blue-500 bg-transparent text-blue-600",
            light: "bg-blue-50 text-blue-600",
            dot: "bg-blue-500",
        },
        secondary: {
            soft: "bg-slate-100 text-slate-700",
            solid: "bg-slate-600 text-white",
            outline: "border-slate-400 bg-transparent text-slate-700",
            light: "bg-slate-50 text-slate-600",
            dot: "bg-slate-500",
        },
        success: {
            soft: "bg-green-100 text-green-700",
            solid: "bg-green-600 text-white",
            outline: "border-green-500 bg-transparent text-green-700",
            light: "bg-green-50 text-green-700",
            dot: "bg-green-500",
        },
        danger: {
            soft: "bg-red-100 text-red-700",
            solid: "bg-red-600 text-white",
            outline: "border-red-500 bg-transparent text-red-600",
            light: "bg-red-50 text-red-600",
            dot: "bg-red-500",
        },
        warning: {
            soft: "bg-yellow-100 text-yellow-800",
            solid: "bg-yellow-500 text-white",
            outline: "border-yellow-500 bg-transparent text-yellow-700",
            light: "bg-yellow-50 text-yellow-700",
            dot: "bg-yellow-500",
        },
        info: {
            soft: "bg-cyan-100 text-cyan-700",
            solid: "bg-cyan-600 text-white",
            outline: "border-cyan-500 bg-transparent text-cyan-700",
            light: "bg-cyan-50 text-cyan-700",
            dot: "bg-cyan-500",
        },
        purple: {
            soft: "bg-purple-100 text-purple-700",
            solid: "bg-purple-600 text-white",
            outline: "border-purple-500 bg-transparent text-purple-700",
            light: "bg-purple-50 text-purple-700",
            dot: "bg-purple-500",
        },
        pink: {
            soft: "bg-pink-100 text-pink-700",
            solid: "bg-pink-600 text-white",
            outline: "border-pink-500 bg-transparent text-pink-700",
            light: "bg-pink-50 text-pink-700",
            dot: "bg-pink-500",
        },
        dark: {
            soft: "bg-gray-800 text-gray-100",
            solid: "bg-gray-950 text-white",
            outline: "border-gray-700 bg-transparent text-gray-800",
            light: "bg-gray-200 text-gray-800",
            dot: "bg-gray-600",
        },
    };

    const sizes = {
        xs: "px-1.5 py-0.5 text-[10px]",
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
        lg: "px-3 py-1.5 text-base",
        xl: "px-3.5 py-2 text-lg",
    };

    const roundedStyles = {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
    };

    const selectedColor = colors[variant] || colors.default;
    const selectedAppearance =
        selectedColor[appearance] || selectedColor.soft;

    return (
        <span
            className={twMerge(
                "inline-flex w-fit shrink-0 items-center gap-1.5 font-medium leading-none",
                border && appearance !== "outline" && "border border-transparent",
                appearance === "outline" && "border",
                selectedAppearance,
                sizes[size] || sizes.md,
                roundedStyles[rounded] || roundedStyles.full,
                className
            )}
            {...props}
        >
            {dot && (
                <span
                    className={twMerge(
                        "h-1.5 w-1.5 shrink-0 rounded-full",
                        selectedColor.dot
                    )}
                />
            )}

            {children ?? text}
        </span>
    );
};

export default Badge;