import React, { useRef, useState } from "react";
import {
    MdCloudUpload,
    MdClose,
} from "react-icons/md";

const FileInput = ({
    label,
    name,
    register,
    error,
    clearErrors,
    required = false,
    multiple = false,
    accept = "image/*",
    validation = {},
    maxSize = 3, // MB
}) => {
    const inputRef = useRef(null);
    const [files, setFiles] = useState([]);

    const field = register(name, validation);

    const handleChange = (e) => {
        const selectedFiles = Array.from(e.target.files || []);

        // No file selected
        if (!selectedFiles.length) {
            return;
        }

        // Check file size
        const invalidFiles = selectedFiles.filter(
            (file) => file.size > maxSize * 1024 * 1024
        );

        if (invalidFiles.length > 0) {
            field.onChange({
                target: {
                    name,
                    files: e.target.files,
                },
            });

            return;
        }

        if (multiple) {
            const updatedFiles = [...files, ...selectedFiles];

            setFiles(updatedFiles);

            const dataTransfer = new DataTransfer();

            updatedFiles.forEach((file) => {
                dataTransfer.items.add(file);
            });

            inputRef.current.files = dataTransfer.files;

            field.onChange({
                target: {
                    name,
                    files: dataTransfer.files,
                },
            });
        } else {
            setFiles(selectedFiles);

            field.onChange(e);
        }

        clearErrors?.(name);
    };

    const handleRemove = (index) => {
        const updatedFiles = files.filter(
            (_, fileIndex) => fileIndex !== index
        );

        setFiles(updatedFiles);

        if (inputRef.current) {
            const dataTransfer = new DataTransfer();

            updatedFiles.forEach((file) => {
                dataTransfer.items.add(file);
            });

            inputRef.current.files = dataTransfer.files;

            field.onChange({
                target: {
                    name,
                    files: dataTransfer.files,
                },
            });
        }
    };

    return (
        <div className="w-full space-y-2">

            {/* Label */}
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}

                    {required && (
                        <span className="ml-1 text-red-500">
                            *
                        </span>
                    )}
                </label>
            )}

            {/* Upload Card */}
            <label
                htmlFor={name}
                className={`
                    flex w-fit cursor-pointer items-center gap-3
                    rounded border bg-white px-4 py-3
                    shadow-sm transition-all duration-200
                    hover:shadow-md
                    ${
                        error
                            ? "border-red-500"
                            : "border-gray-200 hover:border-blue-400"
                    }
                `}
            >
                {/* Upload Icon */}
                <div
                    className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-lg bg-blue-50
                    "
                >
                    <MdCloudUpload
                        size={26}
                        className="text-blue-500"
                    />
                </div>

                {/* Upload Text */}
                <div>
                    <p className="text-sm font-semibold text-gray-700">
                        Upload a file
                    </p>

                    <p className="text-xs text-gray-400">
                        Max {maxSize} MB
                    </p>
                </div>

                {/* Hidden File Input */}
                <input
                    id={name}
                    ref={(element) => {
                        inputRef.current = element;
                        field.ref(element);
                    }}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    name={field.name}
                    onBlur={field.onBlur}
                    onChange={handleChange}
                    className="hidden"
                />
            </label>

            {/* Preview */}
            {files.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-3">
                    {files.map((file, index) => (
                        <div
                            key={`${file.name}-${index}`}
                            className="relative"
                        >
                            <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="
                                    h-20 w-20
                                    rounded-lg
                                    object-cover
                                    border
                                    border-gray-200
                                "
                            />

                            {/* Remove Button */}
                            <button
                                type="button"
                                onClick={() => handleRemove(index)}
                                className="
                                    absolute -right-2 -top-2
                                    flex h-5 w-5
                                    cursor-pointer
                                    items-center justify-center
                                    rounded-full
                                    bg-red-500
                                    text-white
                                    shadow
                                    hover:bg-red-600
                                "
                            >
                                <MdClose size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Error */}
            {error && (
                <p className="text-sm text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    );
};

export default FileInput;