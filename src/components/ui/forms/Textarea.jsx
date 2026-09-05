import React, { forwardRef, useEffect, useState } from "react";

const Textarea = forwardRef(
    (
        {
            label,
            icon: Icon,
            iconPosition = "left",

            error,
            helperText,

            showCount = false,
            maxLength,

            className = "",
            labelClassName = "",
            textareaClassName = "",
            iconClassName = "",

            disabled = false,
            required = false,
            rows = 4,

            value,
            defaultValue = "",
            onChange,

            ...props
        },
        ref
    ) => {
        const isControlled = value !== undefined;

        const [internalValue, setInternalValue] = useState(
            defaultValue || ""
        );

        const currentValue = isControlled ? value || "" : internalValue;

        useEffect(() => {
            if (isControlled) {
                setInternalValue(value || "");
            }
        }, [value, isControlled]);

        const handleChange = (e) => {
            if (!isControlled) {
                setInternalValue(e.target.value);
            }

            onChange?.(e);
        };

        return (
            <div className={`w-full ${className}`}>
                {/* Label */}
                {label && (
                    <label
                        className={`mb-2 block text-sm font-medium ${disabled ? "text-gray-400" : "text-gray-700"
                            } ${labelClassName}`}
                    >
                        {label}

                        {required && (
                            <span className="ml-1 text-red-500">*</span>
                        )}
                    </label>
                )}

                {/* Textarea */}
                <div className="relative">
                    {Icon && iconPosition === "left" && (
                        <Icon
                            className={`absolute left-3 top-3 h-5 w-5 text-gray-400 ${iconClassName}`}
                        />
                    )}

                    <textarea
                        ref={ref}
                        rows={rows}
                        value={isControlled ? value : undefined}
                        defaultValue={!isControlled ? defaultValue : undefined}
                        maxLength={maxLength}
                        disabled={disabled}
                        onChange={handleChange}
                        className={`w-full rounded-lg border-2 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500 ${error
                                ? "border-red-500 focus:border-red-500"
                                : "border-gray-300 focus:border-blue-500"
                            } ${Icon && iconPosition === "left"
                                ? "pl-11"
                                : Icon && iconPosition === "right"
                                    ? "pr-11"
                                    : ""
                            } ${textareaClassName}`}
                        {...props}
                    />

                    {Icon && iconPosition === "right" && (
                        <Icon
                            className={`absolute right-3 top-3 h-5 w-5 text-gray-400 ${iconClassName}`}
                        />
                    )}
                </div>

                {/* Bottom Information */}
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
    }
);

Textarea.displayName = "Textarea";

export default Textarea;