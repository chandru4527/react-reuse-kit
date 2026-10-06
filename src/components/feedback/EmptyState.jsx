import React from "react";
import { MdInbox } from "react-icons/md";
import { twMerge } from "tailwind-merge";

/**
 * Reusable Empty State Component
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.title="No Data Found"]
 * @param {React.ReactNode} [props.description="There is nothing to display here."]
 * @param {React.ElementType | React.ReactElement} [props.icon]
 * @param {number} [props.iconSize]
 * @param {string} [props.iconClassName]
 * @param {React.ReactNode} [props.action]
 * @param {"sm" | "md" | "lg"} [props.size="md"]
 * @param {"default" | "bordered" | "minimal" | "primary" | "success" | "warning" | "danger"} [props.variant="default"]
 * @param {string} [props.titleClassName]
 * @param {string} [props.descriptionClassName]
 * @param {string} [props.className]
 */

const EmptyState = ({
    title = "No Data Found",
    description = "There is nothing to display here.",

    icon: Icon = MdInbox,
    iconSize,
    iconClassName = "",

    action,

    size = "md",
    variant = "default",

    titleClassName = "",
    descriptionClassName = "",
    className = "",

    ...props
}) => {
    const sizes = {
        sm: {
            container: "px-4 py-6",
            icon: 40,
            iconWrapper: "mb-3",
            title: "text-base",
            description: "text-xs",
            action: "mt-4",
        },
        md: {
            container: "px-6 py-10",
            icon: 56,
            iconWrapper: "mb-4",
            title: "text-lg",
            description: "text-sm",
            action: "mt-5",
        },
        lg: {
            container: "px-8 py-14",
            icon: 72,
            iconWrapper: "mb-5",
            title: "text-xl",
            description: "text-base",
            action: "mt-6",
        },
    };

    const variants = {
        default: {
            container: "border border-gray-200 bg-white",
            icon: "text-gray-300",
            title: "text-gray-800",
            description: "text-gray-500",
        },
        bordered: {
            container: "border-2 border-dashed border-gray-200 bg-white",
            icon: "text-gray-300",
            title: "text-gray-800",
            description: "text-gray-500",
        },
        minimal: {
            container: "border-0 bg-transparent",
            icon: "text-gray-300",
            title: "text-gray-800",
            description: "text-gray-500",
        },
        primary: {
            container: "border border-blue-100 bg-blue-50/50",
            icon: "text-blue-500",
            title: "text-blue-900",
            description: "text-blue-700",
        },
        success: {
            container: "border border-green-100 bg-green-50/50",
            icon: "text-green-500",
            title: "text-green-900",
            description: "text-green-700",
        },
        warning: {
            container: "border border-amber-100 bg-amber-50/50",
            icon: "text-amber-500",
            title: "text-amber-900",
            description: "text-amber-700",
        },
        danger: {
            container: "border border-red-100 bg-red-50/50",
            icon: "text-red-500",
            title: "text-red-900",
            description: "text-red-700",
        },
    };

    const currentSize = sizes[size] || sizes.md;
    const currentVariant = variants[variant] || variants.default;

    const renderIcon = () => {
        if (React.isValidElement(Icon)) {
            return React.cloneElement(Icon, {
                size: iconSize ?? Icon.props.size ?? currentSize.icon,
                className: twMerge(
                    currentVariant.icon,
                    Icon.props.className,
                    iconClassName
                ),
                "aria-hidden": true,
            });
        }

        const IconComponent = Icon || MdInbox;

        return (
            <IconComponent
                size={iconSize ?? currentSize.icon}
                className={twMerge(currentVariant.icon, iconClassName)}
                aria-hidden="true"
            />
        );
    };

    return (
        <div
            role="status"
            aria-live="polite"
            className={twMerge(
                "flex w-full flex-col items-center justify-center rounded-xl text-center",
                currentSize.container,
                currentVariant.container,
                className
            )}
            {...props}
        >
            <div className={twMerge("flex items-center justify-center", currentSize.iconWrapper)}>
                {renderIcon()}
            </div>

            {title && (
                <h3
                    className={twMerge(
                        "font-semibold",
                        currentSize.title,
                        currentVariant.title,
                        titleClassName
                    )}
                >
                    {title}
                </h3>
            )}

            {description && (
                <p
                    className={twMerge(
                        "mt-2 max-w-md",
                        currentSize.description,
                        currentVariant.description,
                        descriptionClassName
                    )}
                >
                    {description}
                </p>
            )}

            {action && (
                <div className={currentSize.action}>
                    {action}
                </div>
            )}
        </div>
    );
};

export default EmptyState;