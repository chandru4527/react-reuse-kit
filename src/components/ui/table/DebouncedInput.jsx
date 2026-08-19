import React, { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";

const DebouncedInput = ({
    value = "",
    onDebouncedChange,
    delay = 500,
    placeholder = "Search...",
    className = "",
    ...props
}) => {
    const [inputValue, setInputValue] = useState(value);

    // keep local state in sync if parent changes value
    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const debounced = useMemo(
        () =>
            debounce((val) => {
                onDebouncedChange?.(val);
            }, delay),
        [delay, onDebouncedChange]
    );

    useEffect(() => {
        return () => debounced.cancel();
    }, [debounced]);

    const handleChange = (e) => {
        const val = e.target.value;
        setInputValue(val);
        debounced(val);
    };

    return (
        <input
            type="search"
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            className={`rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 ${className}`}
            {...props}
        />
    );
};

export default DebouncedInput;