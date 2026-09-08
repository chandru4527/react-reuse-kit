import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { MdVisibility, MdVisibilityOff,} from "react-icons/md";

const Input = forwardRef(
    (
        {
            type = "text",
            label,
            icon: Icon,
            iconPosition = "left",
            iconClassName = "text-gray-400",
            error,
            helperText,
            inputClassName = "",
            containerClassName = "",
            disabled = false,
            ...props
        },
        ref
    ) => {
        const [showPassword, setShowPassword] = useState(false);

        const isPassword = type === "password";
        const inputType = isPassword && showPassword ? "text" : type;

        const hasLeftIcon = Icon && iconPosition === "left";
        const hasRightIcon = Icon && iconPosition === "right";

        return (
            <div className={`w-full ${containerClassName}`}>
                {label && (
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        {label}
                    </label>
                )}

                <div className="relative">
                    {hasLeftIcon && (
                        <Icon
                            className={`absolute left-3 top-1/2 -translate-y-1/2 ${iconClassName}`}
                        />
                    )}

                    <input
                        ref={ref}
                        type={inputType}
                        disabled={disabled}
                        className={`
                            w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition
                            ${hasLeftIcon ? "pl-10" : ""}
                            ${hasRightIcon || isPassword ? "pr-10" : ""}
                            ${error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}
                            ${disabled ? "cursor-not-allowed bg-gray-100 text-gray-500" : "bg-white"}
                            ${inputClassName}
                        `}
                        {...props}
                    />

                    {hasRightIcon && !isPassword && (
                        <Icon
                            className={`absolute right-3 top-1/2 -translate-y-1/2 ${iconClassName}`}
                        />
                    )}

                    {isPassword && (
                        <button
                            type="button"
                            disabled={disabled}
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 transition hover:text-blue-600 disabled:cursor-not-allowed"
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
    }
);

Input.displayName = "Input";

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.elementType,
    iconPosition: PropTypes.oneOf(["left", "right"]),
    iconClassName: PropTypes.string,
    error: PropTypes.string,
    helperText: PropTypes.string,
    inputClassName: PropTypes.string,
    containerClassName: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Input;