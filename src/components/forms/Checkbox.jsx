import { twMerge } from "tailwind-merge";

/**
 * Reusable Checkbox component.
 *
 * @param {Object} props
 * @param {string} [props.label]
 * @param {string} [props.name]
 * @param {string} [props.value]
 * @param {Function} [props.register] React Hook Form register function
 * @param {Object|string} [props.error]
 * @param {Function} [props.clearErrors] React Hook Form clearErrors function
 * @param {"left" | "right"} [props.labelPosition="right"]
 * @param {boolean} [props.disabled=false]
 * @param {boolean} [props.required=false]
 * @param {string} [props.className=""]
 * @param {string} [props.labelClassName=""]
 * @param {string} [props.labelTextClassName=""]
 * @param {string} [props.inputClassName=""]
 * @param {string} [props.errorClassName=""]
 */
const Checkbox = ({
    label,
    name,
    value,
    register,
    error,
    clearErrors,
    labelPosition = "right",
    disabled = false,
    required = false,
    className = "",
    labelClassName = "",
    labelTextClassName = "",
    inputClassName = "",
    errorClassName = "",
    onFocus,
    ...props
}) => {
    const registerProps = register && name ? register(name) : {};

    return (
        <div className={twMerge("w-full", className)}>
            <label
                className={twMerge(
                    "flex cursor-pointer items-start gap-2",
                    labelPosition === "left" && "flex-row-reverse justify-between",
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
                    {...registerProps}
                    {...props}
                    onFocus={(event) => {
                        clearErrors?.(name);
                        registerProps.onFocus?.(event);
                        onFocus?.(event);
                    }}
                    className={twMerge(
                        "mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-blue-500",
                        disabled && "cursor-not-allowed",
                        inputClassName
                    )}
                />

                {label && (
                    <span
                        className={twMerge(
                            "text-sm text-gray-700",
                            labelTextClassName
                        )}
                    >
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