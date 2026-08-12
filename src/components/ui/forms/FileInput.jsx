import React, { useRef, useState } from "react";
import { MdClose } from "react-icons/md";

const FileInput = ({
    label,
    name,
    register,
    error,
    clearErrors,
    required = false,
    multiple = false,
    accept = "image/*",
}) => {
    const inputRef = useRef(null);
    const [files, setFiles] = useState([]);

    const field = register(name);

    const handleChange = (e) => {
        const selectedFiles = Array.from(e.target.files || []);

        if (multiple) {
            const updatedFiles = [...files, ...selectedFiles]; // append

            setFiles(updatedFiles);

            // Update input files
            const dt = new DataTransfer();
            updatedFiles.forEach((file) => dt.items.add(file));
            inputRef.current.files = dt.files;

            field.onChange({
                target: {
                    name,
                    files: dt.files,
                },
            });
        } else {
            setFiles(selectedFiles);

            field.onChange(e);
        }

        clearErrors?.(name);
    };

    const handleRemove = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);

        if (inputRef.current) {
            const dt = new DataTransfer();
            updatedFiles.forEach((file) => dt.items.add(file));
            inputRef.current.files = dt.files;

            field.onChange({
                target: {
                    name,
                    files: dt.files,
                },
            });
        }
    };

    return (
        <div className="w-full space-y-2">
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="ml-1 text-red-500">*</span>}
                </label>
            )}

            <input
                ref={(e) => {
                    inputRef.current = e;
                    field.ref(e);
                }}
                type="file"
                accept={accept}
                multiple={multiple}
                name={field.name}
                onBlur={field.onBlur}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-white px-3 py-2 text-sm
          ${error ? "border-red-500" : "border-gray-300"}
          file:mr-3 file:rounded-md file:border-0
          file:bg-blue-600 file:px-3 file:py-1.5
          file:text-white hover:file:bg-blue-700`}
            />

            {files.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-3">
                    {files.map((file, index) => (
                        <div key={index} className="relative">
                            <img
                                src={URL.createObjectURL(file)}
                                alt="preview"
                                className="h-20 w-20 rounded object-cover"
                            />

                            <button
                                type="button"
                                onClick={() => handleRemove(index)}
                                className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white text-xs hover:bg-red-700 cursor-pointer"
                            >
                                <MdClose />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
    );
};

export default FileInput;