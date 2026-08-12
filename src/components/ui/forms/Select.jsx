import React from "react";

const Select = ({
    label,
    name,
    register,
    error,
    options = [],
    required = false,
    disabled = false,
    clearErrors,
    className = "",
}) => {
    return (
        <div className="w-full space-y-1">
            {label && (
                <label className="block text-sm font-medium text-gray-600">
                    {label}
                    {required && <span className="ml-1 text-red-500">*</span>}
                </label>
            )}

            <select
                {...register(name)}
                disabled={disabled}
                onFocus={() => clearErrors?.(name)}
                {...(register ? register(name) : {})}
                className={`w-full rounded border px-3 py-2 bg-white text-gray-600 font-semibold
          ${error ? "border-red-500" : "border-gray-500"}
          focus:outline-none focus:border-blue-500
          ${disabled ? "opacity-60 cursor-not-allowed" : ""}
          ${className}`}
            >
                <option value="">Select</option>

                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {error && (
                <p className="text-sm text-red-500">{error.message}</p>
            )}
        </div>
    );
};

export default Select;