import React from "react";
import { Controller } from "react-hook-form";

const Switch = ({
    label,
    name,
    control,
    clearErrors,
    disabled = false,

    // Custom colors
    activeColor = "bg-blue-600",
    inactiveColor = "bg-gray-300",

    // Custom thumb color
    thumbColor = "bg-white",
}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <label className="flex items-center justify-between bg-white px-4 py-3">

                    {/* Label */}
                    <span className="text-sm font-medium text-gray-700">
                        {label}
                    </span>

                    {/* Switch */}
                    <button
                        type="button"
                        role="switch"
                        aria-checked={!!field.value}
                        disabled={disabled}
                        onClick={() => {
                            field.onChange(!field.value);
                            clearErrors?.(name);
                        }}
                        className={` relative h-7 w-12 rounded-full transition-colors duration-200 focus:outline-none
                            ${disabled
                                ? "cursor-not-allowed opacity-50"
                                : "cursor-pointer"
                            }
                            ${field.value
                                ? activeColor
                                : inactiveColor
                            }
                        `}
                    >
                        <span
                            className={` absolute left-1 top-1 h-5 w-5 rounded-full shadow transition-transform duration-200
                                ${thumbColor}
                                ${field.value
                                    ? "translate-x-5"
                                    : "translate-x-0"
                                }
                            `}
                        />
                    </button>
                </label>
            )}
        />
    );
};

export default Switch;