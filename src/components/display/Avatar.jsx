import React from "react";
import Badge from "../feedback/Badge";
import { MdPerson } from "react-icons/md";
import { twMerge } from "tailwind-merge";

/**
 * @param {Object} props
 * @param {string} [props.src]
 * @param {string} [props.name=""]
 * @param {string} [props.alt="Avatar"]
 * @param {React.ElementType | React.ReactElement} [props.icon]
 * @param {"xs" | "sm" | "md" | "lg" | "xl" | "2xl"} [props.size="md"]
 * @param {"circle" | "rounded" | "soft" | "square" | "pill" | "hex"} [props.shape="circle"]
 * @param {"online" | "offline" | "busy" | "away"} [props.status]
 * @param {"top-right" | "top-left" | "bottom-right" | "bottom-left"} [props.statusPosition="bottom-right"]
 * @param {string} [props.statusClassName=""]
 * @param {boolean} [props.ring=false]
 * @param {boolean} [props.gradient=false]
 * @param {React.ReactNode} [props.badge]
 * @param {"normal" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark"} [props.badgeVariant="danger"]
 * @param {string} [props.badgeClassName=""]
 * @param {string} [props.className=""]
 */

const Avatar = ({
    src,
    name = "",
    alt = "Avatar",
    icon,
    size = "md",
    shape = "circle",
    status,
    statusPosition = "bottom-right",
    statusClassName = "",
    ring = false,
    gradient = false,
    badge,
    badgeVariant = "danger",
    badgeClassName = "",
    className = "",
    ...props
}) => {
    const sizes = {
        xs: "h-8 w-8 text-xs",
        sm: "h-10 w-10 text-sm",
        md: "h-12 w-12 text-base",
        lg: "h-16 w-16 text-lg",
        xl: "h-20 w-20 text-xl",
        "2xl": "h-24 w-24 text-2xl",
    };

    const shapes = {
        circle: "rounded-full",
        rounded: "rounded-lg",
        soft: "rounded-2xl",
        square: "rounded-none",
        pill: "rounded-full",
        hex: "",
    };

    const statusColors = {
        online: "bg-green-500",
        offline: "bg-gray-400",
        busy: "bg-red-500",
        away: "bg-yellow-500",
    };

    const statusPositions = {
        "top-right": "-right-0.5 -top-0.5",
        "top-left": "-left-0.5 -top-0.5",
        "bottom-right": "-bottom-0.5 -right-0.5",
        "bottom-left": "-bottom-0.5 -left-0.5",
    };

    const initials = name
        ? name
            .trim()
            .split(/\s+/)
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()
        : "";

    const avatarClass = twMerge(
        sizes[size] || sizes.md,
        shapes[shape] || shapes.circle,
        "flex items-center justify-center overflow-hidden border border-gray-200",
        gradient
            ? "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white"
            : "bg-gray-100 text-gray-700",
        ring && "ring-2 ring-blue-500 ring-offset-2"
    );

    const renderIcon = () => {
        if (!icon) {
            return <MdPerson className="h-1/2 w-1/2" />;
        }

        if (React.isValidElement(icon)) {
            return React.cloneElement(icon, {
                className: twMerge(
                    "h-1/2 w-1/2",
                    icon.props.className
                ),
            });
        }

        const Icon = icon;

        return <Icon className="h-1/2 w-1/2" />;
    };

    return (
        <div
            className={twMerge("relative inline-block", className)}
            {...props}
        >
            <div
                className={avatarClass}
                style={
                    shape === "hex"
                        ? {
                            clipPath:
                                "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%)",
                        }
                        : undefined
                }
            >
                {src ? (
                    <img
                        src={src}
                        alt={alt}
                        className="h-full w-full object-cover"
                    />
                ) : initials ? (
                    <span className="font-semibold">{initials}</span>
                ) : (
                    renderIcon()
                )}
            </div>

            {status && statusColors[status] && (
                <span
                    className={twMerge(
                        "absolute h-3.5 w-3.5 rounded-full border-2 border-white",
                        statusPositions[statusPosition] ||
                        statusPositions["bottom-right"],
                        statusColors[status],
                        statusClassName
                    )}
                />
            )}

            {badge !== undefined && badge !== null && (
                <Badge
                    value={badge}
                    variant={badgeVariant}
                    size="xs"
                    className={twMerge(
                        "absolute -right-1 -top-1 min-w-4.5 px-1",
                        badgeClassName
                    )}
                />
            )}
        </div>
    );
};

export default Avatar;