import React from "react";
import { twMerge } from "tailwind-merge";

const Radio = ({
  label,
  name,
  value,
  register,
  error,
  clearErrors,
  disabled = false,
  required = false,
  className,
  labelClassName,
  radioClassName,
  errorClassName,
  ...props
}) => {
  const registerProps = register(name, {
    required: required ? `${label} is required` : false,
  });

  return (
    <div className={twMerge("w-full", className)}>
      <label
        className={twMerge(
          "flex items-center gap-2 cursor-pointer",
          disabled && "cursor-not-allowed opacity-60",
          labelClassName
        )}
      >
        <input
          type="radio"
          value={value}
          disabled={disabled}
          {...registerProps}
          {...props}
          onFocus={(e) => {
            clearErrors?.(name);
            registerProps.onFocus?.(e);
          }}
          className={twMerge(
            "h-4 w-4 cursor-pointer border-gray-300 accent-blue-600 focus:ring-blue-500",
            disabled && "cursor-not-allowed",
            radioClassName
          )}
        />

        <span className="text-sm text-gray-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </span>
      </label>

      {error && (
        <p className={twMerge("mt-1 text-sm text-red-500", errorClassName)}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Radio;