import { twMerge } from "tailwind-merge";

const ProgressBar = ({
    value = 0,
    max = 100,

    label,
    showValue = true,

    size = "md",
    color = "bg-blue-600",
    trackColor = "bg-gray-200",

    rounded = "rounded-full",
    animated = false,

    className = "",
    barClassName = "",

    ...props
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const sizes = {
        sm: "h-1.5",
        md: "h-2.5",
        lg: "h-4",
        xl: "h-6",
    };

    return (
        <div className={twMerge("w-full", className)} {...props}>
            {(label || showValue) && (
                <div className="mb-1 flex items-center justify-between text-sm">
                    {label && <span className="font-medium text-gray-700">{label}</span>}

                    {showValue && (
                        <span className="font-medium text-gray-600">
                            {Math.round(percentage)}%
                        </span>
                    )}
                </div>
            )}

            <div className={twMerge("w-full overflow-hidden", sizes[size], trackColor, rounded)}>
                <div
                    className={twMerge(
                        "h-full transition-all duration-500 ease-in-out",
                        color,
                        rounded,
                        animated && "animate-pulse",
                        barClassName
                    )}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;