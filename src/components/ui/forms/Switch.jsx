import React from "react";
import { Controller } from "react-hook-form";

const Switch = ({
    label,
    name,
    control,
    clearErrors,
    disabled = false,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <label className="flex items-center justify-between  bg-white px-4 py-3">
                    <span className="text-sm font-medium text-gray-700">{label}</span>

                    <button
                        type="button"
                        onClick={() => {
                            field.onChange(!field.value);
                            clearErrors?.(name);
                        }}
                        disabled={disabled}
                        className={`relative h-7 w-12 rounded-full transition-colors ${field.value ? "bg-blue-600" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${field.value ? "translate-x-5" : ""
                                }`}
                        />
                    </button>
                </label>
            )}
        />
    );
};

export default Switch;