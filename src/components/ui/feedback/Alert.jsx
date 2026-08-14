import {
    MdCheckCircleOutline,
    MdErrorOutline,
    MdWarningAmber,
    MdInfoOutline,
    MdClose,
} from "react-icons/md";

const Alert = ({
    type = "info",
    title,
    message,

    // Position
    position = "static",

    // Style
    size = "md",
    rounded = "md",
    bgColor,

    // Icon
    icon = true,
    customIcon,

    // Close
    closable = false,
    onClose,
}) => {

    // Alert Types
    const types = {
        success: {
            icon: MdCheckCircleOutline,
            bg: "bg-green-50",
            text: "text-green-700",
            iconColor: "text-green-600",
            border: "border-green-200",
        },

        danger: {
            icon: MdErrorOutline,
            bg: "bg-red-50",
            text: "text-red-700",
            iconColor: "text-red-600",
            border: "border-red-200",
        },

        warning: {
            icon: MdWarningAmber,
            bg: "bg-yellow-50",
            text: "text-yellow-700",
            iconColor: "text-yellow-600",
            border: "border-yellow-200",
        },

        info: {
            icon: MdInfoOutline,
            bg: "bg-blue-50",
            text: "text-blue-700",
            iconColor: "text-blue-600",
            border: "border-blue-200",
        },
    };

    const currentType = types[type] || types.info;
    const Icon = customIcon || currentType.icon;

    // Sizes
    const sizes = {
        sm: "p-3 text-xs",
        md: "p-4 text-sm",
        lg: "p-5 text-base",
    };

    // Rounded
    const roundedStyles = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
    };

    // -------------------------
    // Position
    // -------------------------

    const positions = {
        static: "relative",

        top: "fixed top-5 left-1/2 -translate-x-1/2",
        "top-left": "fixed top-5 left-5",
        "top-right": "fixed top-5 right-5",

        bottom: "fixed bottom-5 left-1/2 -translate-x-1/2",
        "bottom-left": "fixed bottom-5 left-5",
        "bottom-right": "fixed bottom-5 right-5",
    };

    return (
        <div
            role="alert"
            className={` z-50 flex w-full max-w-lg items-start gap-3 border shadow-sm
        ${positions[position]}
        ${sizes[size]}
        ${roundedStyles[rounded]}
        ${bgColor || currentType.bg}
        ${currentType.border}
      `}
        >
            {/* Icon */}

            {icon && (
                <Icon
                    size={size === "sm" ? 18 : size === "lg" ? 24 : 20}
                    className={`
            mt-0.5 shrink-0
            ${currentType.iconColor}
          `}
                />
            )}

            {/* Content */}

            <div className="min-w-0 flex-1">
                {title && (
                    <h4
                        className={`
              font-semibold
              ${currentType.text}
            `}
                    >
                        {title}
                    </h4>
                )}

                {message && (
                    <p
                        className={`
              ${title ? "mt-1" : ""}
              ${currentType.text}
            `}
                    >
                        {message}
                    </p>
                )}
            </div>

            {/* Close */}

            {closable && (
                <button
                    type="button"
                    onClick={onClose}
                    className={` shrink-0 rounded-md p-1 transition hover:bg-black/5 ${currentType.text}`}
                    aria-label="Close alert"
                >
                    <MdClose size={20} />
                </button>
            )}
        </div>
    );
};

export default Alert;
