import React from "react";
import { MdInbox } from "react-icons/md";
import { twMerge } from "tailwind-merge";

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.title="No Data Found"]
 * @param {React.ReactNode} [props.description="There is nothing to display here."]
 * @param {React.ElementType | React.ReactElement} [props.icon]
 * @param {number} [props.iconSize=56]
 * @param {string} [props.iconClassName=""]
 * @param {React.ReactNode} [props.action]
 * @param {"sm" | "md" | "lg"} [props.size="md"]
 * @param {"default" | "bordered" | "minimal"} [props.variant="default"]
 * @param {string} [props.titleClassName=""]
 * @param {string} [props.descriptionClassName=""]
 * @param {string} [props.className=""]
 */

const EmptyState = ({
    title = "No Data Found",
    description = "There is nothing to display here.",

    icon: Icon = MdInbox,
    iconSize = 56,
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
            container: "px-4 py-8",
            icon: 44,
            title: "text-base",
            description: "text-xs",
        },
        md: {
            container: "px-6 py-10",
            icon: 56,
            title: "text-lg",
            description: "text-sm",
        },
        lg: {
            container: "px-8 py-14",
            icon: 72,
            title: "text-xl",
            description: "text-base",
        },
    };

    const variants = {
        default: "border border-gray-200 bg-white",
        bordered: "border-2 border-dashed border-gray-200 bg-white",
        minimal: "border-0 bg-transparent",
    };

    const currentSize = sizes[size] || sizes.md;

    const renderIcon = () => {
        if (React.isValidElement(Icon)) {
            return React.cloneElement(Icon, {
                size: Icon.props.size || iconSize || currentSize.icon,
                className: twMerge(
                    "text-gray-300",
                    Icon.props.className,
                    iconClassName
                ),
            });
        }

        const IconComponent = Icon || MdInbox;

        return (
            <IconComponent
                size={iconSize || currentSize.icon}
                className={twMerge(
                    "text-gray-300",
                    iconClassName
                )}
            />
        );
    };

    return (
        <div
            className={twMerge(
                "flex w-full flex-col items-center justify-center rounded-xl text-center",
                currentSize.container,
                variants[variant] || variants.default,
                className
            )}
            {...props}
        >
            <div className="mb-4 flex items-center justify-center">
                {renderIcon()}
            </div>

            {title && (
                <h3
                    className={twMerge(
                        "font-semibold text-gray-800",
                        currentSize.title,
                        titleClassName
                    )}
                >
                    {title}
                </h3>
            )}

            {description && (
                <p
                    className={twMerge(
                        "mt-2 max-w-md text-gray-500",
                        currentSize.description,
                        descriptionClassName
                    )}
                >
                    {description}
                </p>
            )}

            {action && (
                <div className="mt-5">
                    {action}
                </div>
            )}
        </div>
    );
};

export default EmptyState;