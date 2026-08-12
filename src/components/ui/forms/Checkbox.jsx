import React from "react";

const Checkbox = ({
    label,
    name,
    value,
    register,
    error,
    clearErrors,
    disabled = false,
    required = false,
}) => {
    return (
        <div className="w-full">
            <label className="flex items-start gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    value={value}
                    disabled={disabled}
                    {...register(name)}
                    onFocus={() => clearErrors?.(name)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 cursor-pointer"
                />

                <span className="text-sm text-gray-700">
                    {label}
                    {required && <span className="ml-1 text-red-500">*</span>}
                </span>
            </label>

            {error && (
                <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
        </div>
    );
};

export default Checkbox;