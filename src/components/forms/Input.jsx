import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
    MdVisibility,
    MdVisibilityOff,
} from "react-icons/md";
import Button from "../buttons/Button";

const Input = ({
    type = "text",
    label,
    labelClassName = "",
    icon: Icon,
    iconPosition = "left",
    iconSize = 20,
    iconClassName = "text-gray-400",
    error,
    errorClassName = "",
    helperText,
    helperTextClassName = "",
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
                        size={iconSize}
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
                        size={iconSize}
                        className={twMerge(
                            "absolute right-3 top-1/2 -translate-y-1/2",
                            iconClassName
                        )}
                    />
                )}

                {isPassword && (
                    <Button
                        type="button"
                        variant="ghost"
                        icon={showPassword ? MdVisibilityOff : MdVisibility}
                        iconSize={20}
                        aria-label={
                            showPassword
                                ? "Hide password"
                                : "Show password"
                        }
                        disabled={disabled}
                        onClick={() =>
                            setShowPassword((prev) => !prev)
                        }
                        className="absolute right-1 top-1/2 h-9! w-9! -translate-y-1/2 p-0!"
                    />
                )}
            </div>

            {error && (
                <p
                    className={twMerge(
                        "mt-1 text-xs text-red-500",
                        errorClassName
                    )}
                >
                    {error}
                </p>
            )}

            {!error && helperText && (
                <p
                    className={twMerge(
                        "mt-1 text-xs text-gray-500",
                        helperTextClassName
                    )}
                >
                    {helperText}
                </p>
            )}
        </div>
    );
};

export default Input;