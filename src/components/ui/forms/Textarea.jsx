import React from "react";

const Textarea = ({
    label,
    name,
    register,
    error,
    placeholder,
    rows = 4,
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

            <textarea
                rows={rows}
                placeholder={placeholder}
                disabled={disabled}
                onFocus={() => clearErrors?.(name)}
                {...(register ? register(name) : {})}
                className={`w-full rounded border px-3 py-2 bg-white text-gray-600 font-semibold
          ${error ? "border-red-500" : "border-gray-500"}
          focus:outline-none focus:border-blue-500
          ${disabled ? "opacity-60 cursor-not-allowed" : ""}
          ${className}`}
            />

            {error && (
                <p className="text-sm text-red-500">{error.message}</p>
            )}
        </div>
    );
};

export default Textarea;