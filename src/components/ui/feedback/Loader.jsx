import React from "react";

const Loader = ({
    size = "md",
    fullscreen = false,
    text = "",
    className = "",
}) => {
    const sizes = {
        sm: "h-5 w-5 border-2",
        md: "h-8 w-8 border-[3px]",
        lg: "h-12 w-12 border-4",
        xl: "h-16 w-16 border-[5px]",
    };

    const content = (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <div
                className={`${sizes[size]} animate-spin rounded-full border-gray-300 border-t-blue-600`}
            />

            {text && (
                <p className="mt-3 text-sm text-gray-600 font-medium">
                    {text}
                </p>
            )}
        </div>
    );

    if (fullscreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                {content}
            </div>
        );
    }

    return content;
};

export default Loader;