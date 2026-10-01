import { useEffect, useRef, useState } from "react";
import { MdCheck, MdKeyboardArrowDown } from "react-icons/md";
import { twMerge } from "tailwind-merge";

const Select = ({
  label,
  labelClassName = "",
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  disabled = false,
  required = false,
  error,
  icon: Icon,
  iconClassName = "text-gray-500",
  className = "",
  selectClassName = "",
  dropdownClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectedOption = options.find(
    (option) => String(option.value) === String(value)
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    if (option.disabled) return;

    onChange({
      target: {
        name,
        value: option.value,
      },
    });

    setIsOpen(false);
  };

  return (
    <div ref={selectRef} className={twMerge("w-full", className)}>
      {label && (
        <label
          htmlFor={name}
          className={twMerge(
            "mb-2 block text-sm font-medium text-gray-700",
            labelClassName
          )}
        >
          {label}

          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <button
          id={name}
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen((prev) => !prev)}
          className={twMerge(
            "flex w-full items-center gap-3 rounded-lg border bg-white px-4 py-2.5 text-left outline-none transition",
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-blue-500",
            disabled
              ? "cursor-not-allowed bg-gray-100 opacity-60"
              : "cursor-pointer",
            selectClassName
          )}
        >
          {Icon && (
            <Icon
              className={twMerge(
                "shrink-0 text-xl",
                iconClassName
              )}
            />
          )}

          <span
            className={twMerge(
              "min-w-0 flex-1 truncate",
              selectedOption ? "text-gray-900" : "text-gray-400"
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>

          <MdKeyboardArrowDown
            className={twMerge(
              "shrink-0 text-2xl transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {isOpen && !disabled && (
          <div
            className={twMerge(
              "absolute z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white p-1 shadow-lg",
              dropdownClassName
            )}
          >
            {options.length > 0 ? (
              options.map((option) => {
                const isSelected =
                  String(option.value) === String(value);

                return (
                  <button
                    key={option.value}
                    type="button"
                    disabled={option.disabled}
                    onClick={() => handleSelect(option)}
                    className={twMerge(
                      "flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm transition-all duration-200",
                      isSelected
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-700",
                      option.disabled &&
                      "cursor-not-allowed opacity-50"
                    )}
                  >
                    <span className="min-w-0 flex-1 truncate">
                      {option.label}
                    </span>

                    {isSelected && (
                      <MdCheck className="shrink-0 text-lg" />
                    )}
                  </button>
                );
              })
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500">
                No options available
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;