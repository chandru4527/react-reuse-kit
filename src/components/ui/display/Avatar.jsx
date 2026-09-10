import React from "react";
import Button from "../buttons/Button";
import Badge from "../feedback/Badge";
import { MdPerson, MdEdit } from "react-icons/md";
import { twMerge } from "tailwind-merge";

const Avatar = ({
    src,
    name = "",
    alt = "Avatar",
    icon,
    size = "md",
    shape = "circle",
    status,
    ring = false,
    gradient = false,
    badge,
    editable = false,
    onEdit,
    onClick,
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
        pillSm: "h-8 w-16 text-xs",
        pillMd: "h-10 w-20 text-sm",
        pillLg: "h-12 w-24 text-base",
    };

    const shapeClass = {
        circle: "rounded-full",
        rounded: "rounded-lg",
        soft: "rounded-2xl",
        square: "rounded-none",
        pill: "rounded-full",
        hex: "",
    };

    const statusColor = {
        online: "bg-green-500",
        offline: "bg-gray-400",
        busy: "bg-red-500",
        away: "bg-yellow-500",
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
        shapeClass[shape] || shapeClass.circle,
        "flex items-center justify-center overflow-hidden border border-gray-200",
        gradient
            ? "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white"
            : "bg-gray-100 text-gray-700",
        ring && "ring-2 ring-blue-500 ring-offset-2",
        onClick && "cursor-pointer"
    );

    const renderIcon = () => {
        if (!icon) {
            return <MdPerson className="text-xl" />;
        }

        if (React.isValidElement(icon)) {
            return icon;
        }

        const Icon = icon;
        return <Icon className="text-xl" />;
    };

    return (
        <div
            className={twMerge("relative inline-block", className)}
            onClick={onClick}
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

            {/* Status */}
            {status && statusColor[status] && (
                <span
                    className={twMerge(
                        "absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white",
                        statusColor[status]
                    )}
                />
            )}

            {/* Badge */}
            {badge !== undefined && badge !== null && (
                <Badge
                    value={badge}
                    variant="danger"
                    size="xs"
                    className="absolute -right-1 -top-1 min-w-4.5 px-1"
                />
            )}

            {/* Edit */}
            {editable && (
                <Button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit?.();
                    }}
                    leftIcon={MdEdit}
                    iconSize={14}
                    variant="secondary"
                    size="xs"
                    className="absolute bottom-0 right-0 h-6 w-6 rounded-full border border-gray-200 p-0 shadow hover:bg-gray-50"
                    aria-label="Edit avatar"
                />
            )}
        </div>
    );
};

export default Avatar;