import { forwardRef } from "react";

const Button = forwardRef(
    (
        {
            children,
            type = "button",
            variant = "primary",
            size = "md",
            loading = false,
            disabled = false,
            leftIcon,
            rightIcon,
            fullWidth = false,
            className = "",
            onClick,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

        const variants = {
            primary:
                "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
            secondary:
                "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
            success:
                "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
            danger:
                "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
            warning:
                "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400",
            outline:
                "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
            ghost:
                "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
        };

        const sizes = {
            xs: "px-2.5 py-1.5 text-xs",
            sm: "px-3 py-2 text-sm",
            md: "px-4 py-2.5 text-sm",
            lg: "px-5 py-3 text-base",
            xl: "px-6 py-3.5 text-lg",
        };

        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled || loading}
                onClick={onClick}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className} cursor-pointer`}
                {...props}
            >
                {loading ? (
                    <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Loading...
                    </>
                ) : (
                    <>
                        {leftIcon && <span className="flex items-center">{leftIcon}</span>}

                        {children}

                        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
                    </>
                )}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;