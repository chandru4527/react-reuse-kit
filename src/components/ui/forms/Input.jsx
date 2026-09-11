import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Input = ({
    type = "text",
    label,
    labelClassName = "",
    icon: Icon,
    iconPosition = "left",
    iconClassName = "text-gray-400",
    error,
    helperText,
    inputClassName = "",
    containerClassName = "",
    disabled = false,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    const hasLeftIcon = Icon && iconPosition === "left";
    const hasRightIcon = Icon && iconPosition === "right";

    return (
        <div className={twMerge("w-full", containerClassName)}>
            {label && (
                <label
                    className={twMerge(
                        "mb-2 block text-sm font-medium text-gray-700",
                        labelClassName
                    )}
                >
                    {label}
                </label>
            )}

            <div className="relative">
                {hasLeftIcon && (
                    <Icon
                        className={twMerge(
                            "absolute left-3 top-1/2 -translate-y-1/2",
                            iconClassName
                        )}
                    />
                )}

                <input
                    type={inputType}
                    disabled={disabled}
                    className={twMerge(
                        "w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition",
                        hasLeftIcon && "pl-10",
                        (hasRightIcon || isPassword) && "pr-10",
                        error
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-blue-500",
                        disabled
                            ? "cursor-not-allowed bg-gray-100 text-gray-500"
                            : "bg-white",
                        inputClassName
                    )}
                    {...props}
                />

                {hasRightIcon && !isPassword && (
                    <Icon
                        className={twMerge(
                            "absolute right-3 top-1/2 -translate-y-1/2",
                            iconClassName
                        )}
                    />
                )}

                {isPassword && (
                    <button
                        type="button"
                        disabled={disabled}
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700 disabled:cursor-not-allowed"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? (
                            <MdVisibilityOff className="text-xl" />
                        ) : (
                            <MdVisibility className="text-xl" />
                        )}
                    </button>
                )}
            </div>

            {error && (
                <p className="mt-1 text-xs text-red-500">
                    {error}
                </p>
            )}

            {!error && helperText && (
                <p className="mt-1 text-xs text-gray-500">
                    {helperText}
                </p>
            )}
        </div>
    );
};

export default Input;