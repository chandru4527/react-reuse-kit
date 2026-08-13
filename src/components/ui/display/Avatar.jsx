import React from "react";
import { MdPerson, MdEdit } from "react-icons/md";

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
}) => {
    const sizes = {
        xs: "h-8 w-8 text-xs",
        sm: "h-10 w-10 text-sm",
        md: "h-12 w-12 text-base",
        lg: "h-16 w-16 text-lg",
        xl: "h-20 w-20 text-xl",
        "2xl": "h-24 w-24 text-2xl",

        // pill sizes
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
        hex: "", // handled with clipPath
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
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()
        : "";

    const avatarClass = `
    ${sizes[size]}
    ${shapeClass[shape]}
    overflow-hidden
    flex items-center justify-center
    ${gradient
            ? "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white"
            : "bg-gray-100 text-gray-700"
        }
    ${ring ? "ring-2 ring-blue-500 ring-offset-2" : ""}
    border border-gray-200
    ${onClick && onEdit ? "cursor-pointer" : ""}
  `;

    return (
        <div className={`relative inline-block ${className}`} onClick={onClick}>
            <div
                className={avatarClass}
                style={
                    shape === "hex"
                        ? {
                            clipPath:
                                "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%)",
                        }
                        : {}
                }
            >
                {src ? (
                    <img
                        src={src}
                        alt={alt}
                        className="h-full w-full object-cover"
                    />
                ) : icon ? (
                    icon
                ) : initials ? (
                    <span className="font-semibold cursor-pointer">{initials}</span>
                ) : (
                    <MdPerson className="text-xl" />
                )}
            </div>

            {/* Status Indicator */}
            {status && (
                <span
                    className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white ${statusColor[status]}`}
                />
            )}

            {/* Notification Badge */}
            {badge !== undefined && badge !== null && (
                <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {badge}
                </span>
            )}

            {/* Edit Button */}
            {editable && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit?.();
                    }}
                    className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                >
                    <MdEdit className="text-gray-600 text-sm" />
                </button>
            )}
        </div>
    );
};

export default Avatar;