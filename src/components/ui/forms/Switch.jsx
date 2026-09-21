import React from "react";
import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";

const Switch = ({
    label,
    description,
    name,
    control,
    clearErrors,
    disabled = false,

    // Colors
    activeColor = "bg-blue-600",
    inactiveColor = "bg-gray-300",
    thumbColor = "bg-white",

    // Size
    size = "md",

    // Label position
    labelPosition = "left",

    // Custom classes
    className = "",
    labelClassName = "",
    descriptionClassName = "",
    switchClassName = "",

    // Accessibility
    ariaLabel,

    // Change callback
    onChange,

    ...props
}) => {
    const sizes = {
        sm: {
            switch: "h-5 w-9",
            thumb: "h-3.5 w-3.5",
            translate: "translate-x-4",
            position: "left-1 top-0.75",
        },
        md: {
            switch: "h-7 w-12",
            thumb: "h-5 w-5",
            translate: "translate-x-5",
            position: "left-1 top-1",
        },
        lg: {
            switch: "h-8 w-14",
            thumb: "h-6 w-6",
            translate: "translate-x-6",
            position: "left-1 top-1",
        },
    };

    const currentSize = sizes[size] || sizes.md;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const isChecked = Boolean(field.value);
                const isDisabled = disabled || field.disabled;

                const handleChange = () => {
                    if (isDisabled) return;

                    const newValue = !isChecked;

                    field.onChange(newValue);
                    clearErrors?.(name);
                    onChange?.(newValue);
                };

                return (
                    <div
                        className={twMerge(
                            "flex items-center gap-3",
                            labelPosition === "right"
                                ? "flex-row"
                                : "flex-row-reverse justify-end",
                            className
                        )}
                    >
                        <button
                            {...props}
                            type="button"
                            role="switch"
                            aria-checked={isChecked}
                            aria-label={!label ? ariaLabel : undefined}
                            disabled={isDisabled}
                            onClick={handleChange}
                            onBlur={field.onBlur}
                            className={twMerge(
                                "relative shrink-0 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                                currentSize.switch,
                                isDisabled
                                    ? "cursor-not-allowed opacity-50"
                                    : "cursor-pointer",
                                isChecked
                                    ? activeColor
                                    : inactiveColor,
                                switchClassName
                            )}
                        >
                            <span
                                aria-hidden="true"
                                className={twMerge(
                                    "absolute rounded-full shadow-sm transition-transform duration-200 ease-in-out",
                                    currentSize.position,
                                    currentSize.thumb,
                                    isChecked
                                        ? currentSize.translate
                                        : "translate-x-0",
                                    thumbColor
                                )}
                            />
                        </button>

                        {(label || description) && (
                            <div
                                className={twMerge(
                                    isDisabled
                                        ? "cursor-not-allowed"
                                        : "cursor-pointer",
                                    labelClassName
                                )}
                                onClick={handleChange}
                            >
                                {label && (
                                    <span className="block text-sm font-medium text-gray-700">
                                        {label}
                                    </span>
                                )}

                                {description && (
                                    <p
                                        className={twMerge(
                                            "mt-1 text-xs text-gray-500",
                                            descriptionClassName
                                        )}
                                    >
                                        {description}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                );
            }}
        />
    );
};

export default Switch;