import { twMerge } from "tailwind-merge";

const Checkbox = ({
    label,
    name,
    value,
    register,
    error,
    clearErrors,
    disabled = false,
    required = false,
    className = "",
    labelClassName = "",
    inputClassName = "",
    errorClassName = "",
    ...props
}) => {
    return (
        <div className={twMerge("w-full", className)}>
            <label
                className={twMerge(
                    "flex items-start gap-2 cursor-pointer",
                    disabled && "cursor-not-allowed opacity-60",
                    labelClassName
                )}
            >
                <input
                    type="checkbox"
                    name={name}
                    value={value}
                    disabled={disabled}
                    required={required}
                    {...(register ? register(name) : {})}
                    onFocus={() => clearErrors?.(name)}
                    className={twMerge(
                        "mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 cursor-pointer focus:ring-blue-500",
                        inputClassName
                    )}
                    {...props}
                />

                {label && (
                    <span className="text-sm text-gray-700">
                        {label}
                        {required && (
                            <span className="ml-1 text-red-500">*</span>
                        )}
                    </span>
                )}
            </label>

            {error && (
                <p
                    className={twMerge(
                        "mt-1 text-sm text-red-500",
                        errorClassName
                    )}
                >
                    {error.message || error}
                </p>
            )}
        </div>
    );
};

export default Checkbox;