import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Textarea = ({
    label,
    labelClassName = "",
    icon: Icon,
    iconPosition = "left",
    iconClassName = "text-gray-400",

    error,
    helperText,

    showCount = false,
    maxLength,

    className = "",
    textareaClassName = "",

    disabled = false,
    required = false,
    rows = 4,

    value,
    defaultValue = "",
    onChange,

    ...props
}) => {
    const isControlled = value !== undefined;

    const [internalValue, setInternalValue] = useState(defaultValue);

    const currentValue = isControlled ? value || "" : internalValue;

    const handleChange = (e) => {
        if (!isControlled) {
            setInternalValue(e.target.value);
        }

        onChange?.(e);
    };

    const hasLeftIcon = Icon && iconPosition === "left";
    const hasRightIcon = Icon && iconPosition === "right";

    return (
        <div className={twMerge("w-full", className)}>
            {label && (
                <label
                    className={twMerge(
                        "mb-2 block text-sm font-medium",
                        disabled ? "text-gray-400" : "text-gray-700",
                        labelClassName
                    )}
                >
                    {label}

                    {required && (
                        <span className="ml-1 text-red-500">*</span>
                    )}
                </label>
            )}

            <div className="relative">
                {hasLeftIcon && (
                    <Icon
                        className={twMerge(
                            "absolute left-3 top-3 h-5 w-5",
                            iconClassName
                        )}
                    />
                )}

                <textarea
                    rows={rows}
                    value={isControlled ? value : undefined}
                    defaultValue={!isControlled ? defaultValue : undefined}
                    maxLength={maxLength}
                    disabled={disabled}
                    required={required}
                    onChange={handleChange}
                    className={twMerge(
                        "w-full resize-y rounded-lg border-2 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400",
                        "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
                        error
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-blue-500",
                        hasLeftIcon && "pl-11",
                        hasRightIcon && "pr-11",
                        textareaClassName
                    )}
                    {...props}
                />

                {hasRightIcon && (
                    <Icon
                        className={twMerge(
                            "absolute right-3 top-3 h-5 w-5",
                            iconClassName
                        )}
                    />
                )}
            </div>

            {(error || helperText || (showCount && maxLength)) && (
                <div className="mt-1 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        {error && (
                            <p className="text-sm text-red-500">
                                {error}
                            </p>
                        )}

                        {!error && helperText && (
                            <p className="text-sm text-gray-500">
                                {helperText}
                            </p>
                        )}
                    </div>

                    {showCount && maxLength && (
                        <span className="shrink-0 text-xs text-gray-500">
                            {String(currentValue).length} / {maxLength}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default Textarea;