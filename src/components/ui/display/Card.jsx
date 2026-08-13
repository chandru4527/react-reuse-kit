import React from "react";

const Card = ({
    title,
    subtitle,
    value,
    icon,
    image,
    footer,
    actions,
    children,

    // Layout
    size = "md",
    width = "full",
    orientation = "vertical",

    // Colors
    titleColor = "text-gray-800",
    subtitleColor = "text-gray-500",
    valueColor = "text-gray-900",
    iconColor = "text-blue-600",
    iconBg = "bg-blue-100",

    className = "",
}) => {
    const sizes = {
        sm: "p-3",
        md: "p-5",
        lg: "p-6",
        xl: "p-8",
    };

    const widths = {
        auto: "w-auto",
        full: "w-full",
        sm: "w-64",
        md: "w-80",
        lg: "w-96",
        xl: "w-[28rem]",
    };

    return (
        <div
            className={`rounded border border-gray-300 bg-white shadow-sm hover:shadow-md transition
        ${sizes[size]} ${widths[width]} ${className}`}
        >
            {orientation === "horizontal" ? (
                <div className="flex gap-4">
                    {image && (
                        <img
                            src={image}
                            alt={title}
                            className="h-24 w-24 rounded object-cover"
                        />
                    )}

                    <div className="flex-1">
                        {(title || icon) && (
                            <div className="mb-3 flex items-center justify-between">
                                <div>
                                    {title && (
                                        <h3 className={`text-lg font-semibold ${titleColor}`}>
                                            {title}
                                        </h3>
                                    )}
                                    {subtitle && (
                                        <p className={`text-sm ${subtitleColor}`}>
                                            {subtitle}
                                        </p>
                                    )}
                                </div>

                                {icon && (
                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}
                                    >
                                        {icon}
                                    </div>
                                )}
                            </div>
                        )}

                        {value && (
                            <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
                        )}

                        {children}

                        {(actions || footer) && (
                            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>{footer}</div>
                                <div className="flex gap-2">{actions}</div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <>
                    {image && (
                        <img
                            src={image}
                            alt={title}
                            className="mb-4 h-70 w-full rounded object-cover"
                        />
                    )}

                    {(title || icon) && (
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                {title && (
                                    <h3 className={`text-lg font-semibold ${titleColor}`}>
                                        {title}
                                    </h3>
                                )}
                                {subtitle && (
                                    <p className={`mt-1 text-sm ${subtitleColor}`}>
                                        {subtitle}
                                    </p>
                                )}
                            </div>

                            {icon && (
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} ${iconColor} text-2xl`}
                                >
                                    {icon}
                                </div>
                            )}
                        </div>
                    )}

                    {value && (
                        <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
                    )}

                    {children}

                    {(actions || footer) && (
                        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                            <div>{footer}</div>
                            <div className="flex gap-2">{actions}</div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Card;