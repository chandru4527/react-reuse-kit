import { useEffect, useRef, useState } from "react";
import {
  MdCloudUpload,
  MdImage,
  MdClose,
  MdInsertDriveFile,
  MdMovie,
  MdAudioFile,
  MdDescription,
  MdPresentToAll,
  MdPictureAsPdf,
  MdRefresh,
} from "react-icons/md";
import { twMerge } from "tailwind-merge";

const VARIANT_CONFIG = {
  profile: {
    multiple: false,
    accept: "image/*",
    maxSize: 5,
    label: "Profile Image",
    buttonText: "Choose Image",
  },
  banner: {
    multiple: false,
    accept: "image/*",
    maxSize: 5,
    label: "Banner Image",
    buttonText: "Upload Banner",
  },
  images: {
    multiple: true,
    accept: "image/*",
    maxSize: 5,
    label: "Upload Images",
    buttonText: "Choose Images",
  },
  media: {
    multiple: true,
    accept: "video/*,audio/*",
    maxSize: 50,
    label: "Upload Media",
    buttonText: "Choose Media",
  },
  documents: {
    multiple: true,
    accept: ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv",
    maxSize: 10,
    label: "Upload Documents",
    buttonText: "Choose Documents",
  },
  default: {
    multiple: false,
    accept: "",
    maxSize: 5,
    label: "Upload File",
    buttonText: "Choose File",
  },
};

const FileInput = ({
  variant = "default",
  label,
  name,
  value = null,
  onChange,
  onRemove,
  multiple,
  accept,
  maxFiles = 5,
  maxSize,
  preview = true,
  previewUrl = "",
  showFileList = true,
  showRemove = true,
  buttonText,
  placeholder,
  helperText = "",
  aspectRatio,
  loading = false,
  disabled = false,
  required = false,
  error = "",
  className = "",
  labelClassName = "",
  containerClassName = "",
  uploadClassName = "",
  previewClassName = "",
  buttonClassName = "",
  fileListClassName = "",
  helperClassName = "",
  errorClassName = "",
  iconClassName = "",
}) => {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [localError, setLocalError] = useState("");
  const [previewItems, setPreviewItems] = useState([]);

  const config = VARIANT_CONFIG[variant] || VARIANT_CONFIG.default;

  const isMultiple = multiple ?? config.multiple;
  const acceptedTypes = accept ?? config.accept;
  const sizeLimit = maxSize ?? config.maxSize;
  const inputLabel = label ?? config.label;
  const uploadButtonText = buttonText ?? config.buttonText;

  const files = isMultiple
    ? Array.isArray(value)
      ? value
      : []
    : value
      ? [value]
      : [];

  const displayError = error || localError;

  const defaultAspectRatio =
    aspectRatio ||
    (variant === "banner"
      ? "16/9"
      : variant === "profile"
        ? "1/1"
        : "4/3");

  // Generate local previews for selected files.
  useEffect(() => {
    const items = files.map((file) => ({
      file,
      url:
        file instanceof File &&
          (file.type.startsWith("image/") ||
            file.type.startsWith("video/") ||
            file.type.startsWith("audio/"))
          ? URL.createObjectURL(file)
          : "",
    }));

    setPreviewItems(items);

    return () => {
      items.forEach(({ url }) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [value]);

  const getPreviewUrl = (file, index) => {
    const item = previewItems.find(
      (previewItem) => previewItem.file === file
    );

    if (item?.url) return item.url;

    if (index === 0 && previewUrl) return previewUrl;

    return "";
  };

  const openFilePicker = () => {
    if (!disabled && !loading) {
      inputRef.current?.click();
    }
  };

  const isAcceptedFile = (file) => {
    if (!acceptedTypes.trim()) return true;

    return acceptedTypes.split(",").some((rule) => {
      const type = rule.trim().toLowerCase();
      const fileName = file.name.toLowerCase();
      const mimeType = file.type.toLowerCase();

      if (type.endsWith("/*")) {
        return mimeType.startsWith(type.slice(0, -1));
      }

      if (type.startsWith(".")) {
        return fileName.endsWith(type);
      }

      return mimeType === type;
    });
  };

  const handleFiles = (fileList) => {
    if (disabled || loading) return;

    const selectedFiles = Array.from(fileList || []);

    if (!selectedFiles.length) return;

    setLocalError("");

    const validFiles = [];
    const existingFiles = isMultiple ? files : [];

    for (const file of selectedFiles) {
      if (!isAcceptedFile(file)) {
        setLocalError(`${file.name} is not an accepted file type.`);
        continue;
      }

      if (file.size > sizeLimit * 1024 * 1024) {
        setLocalError(
          `${file.name} exceeds the ${sizeLimit}MB size limit.`
        );
        continue;
      }

      const isDuplicate = [...existingFiles, ...validFiles].some(
        (existingFile) =>
          existingFile.name === file.name &&
          existingFile.size === file.size &&
          existingFile.lastModified === file.lastModified
      );

      if (isDuplicate) continue;

      if (isMultiple && existingFiles.length + validFiles.length >= maxFiles) {
        setLocalError(`You can select a maximum of ${maxFiles} files.`);
        break;
      }

      validFiles.push(file);
    }

    if (validFiles.length) {
      onChange?.(
        isMultiple
          ? [...existingFiles, ...validFiles]
          : validFiles[0]
      );
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleRemove = (index) => {
    if (disabled || loading || !showRemove) return;

    const removedFile = files[index];

    onChange?.(
      isMultiple
        ? files.filter((_, fileIndex) => fileIndex !== index)
        : null
    );

    onRemove?.(removedFile, index);
    setLocalError("");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    if (!disabled && !loading) {
      handleFiles(event.dataTransfer.files);
    }
  };

  const getFileIcon = (file, size = 24) => {
    if (file.type.startsWith("image/")) {
      return <MdImage size={size} />;
    }

    if (file.type.startsWith("video/")) {
      return <MdMovie size={size} />;
    }

    if (file.type.startsWith("audio/")) {
      return <MdAudioFile size={size} />;
    }

    if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
      return <MdPictureAsPdf size={size} />;
    }

    if (/\.(ppt|pptx)$/i.test(file.name)) {
      return <MdPresentToAll size={size} />;
    }

    if (/\.(doc|docx|txt)$/i.test(file.name)) {
      return <MdDescription size={size} />;
    }

    return <MdInsertDriveFile size={size} />;
  };

  const formatSize = (size) => {
    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(0)} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  const renderButton = (text = uploadButtonText) => (
    <button
      type="button"
      onClick={openFilePicker}
      disabled={disabled || loading}
      className={twMerge(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50",
        buttonClassName
      )}
    >
      {loading ? (
        <>
          <MdRefresh size={18} className="animate-spin" />
          Uploading...
        </>
      ) : (
        <>
          <MdCloudUpload size={20} />
          {text}
        </>
      )}
    </button>
  );

  const renderMediaPreview = (file, index) => {
    const src = getPreviewUrl(file, index);

    if (!preview) return null;

    if (file.type.startsWith("image/") && src) {
      return (
        <img
          src={src}
          alt={file.name}
          className="h-full w-full object-cover"
        />
      );
    }

    if (file.type.startsWith("video/") && src) {
      return (
        <video
          src={src}
          controls
          className="h-full w-full bg-black object-contain"
        />
      );
    }

    if (file.type.startsWith("audio/") && src) {
      return (
        <div className="flex h-full flex-col items-center justify-center gap-3 p-3">
          <MdAudioFile size={32} className="text-gray-500" />
          <audio src={src} controls className="w-full" />
        </div>
      );
    }

    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-3 text-gray-500">
        {getFileIcon(file, 30)}
        <span className="max-w-full truncate text-xs">{file.name}</span>
      </div>
    );
  };

  const renderRemoveButton = (index, className = "") => {
    if (!showRemove) return null;

    return (
      <button
        type="button"
        onClick={() => handleRemove(index)}
        disabled={disabled || loading}
        aria-label={`Remove ${files[index]?.name || "file"}`}
        className={twMerge(
          "flex items-center justify-center rounded-full text-gray-500 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50",
          className
        )}
      >
        <MdClose size={18} />
      </button>
    );
  };

  const renderFileList = () => (
    <div
      className={twMerge(
        "divide-y divide-gray-200 rounded-lg border border-gray-200",
        fileListClassName
      )}
    >
      {files.map((file, index) => (
        <div
          key={`${file.name}-${file.lastModified}-${index}`}
          className="flex min-w-0 items-center gap-3 p-3"
        >
          <span className="shrink-0 text-gray-500">
            {getFileIcon(file)}
          </span>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-700">
              {file.name}
            </p>
            <p className="text-xs text-gray-500">
              {formatSize(file.size)}
            </p>
          </div>

          {renderRemoveButton(index)}
        </div>
      ))}
    </div>
  );

  return (
    <div className={twMerge("w-full", className)}>
      {inputLabel && (
        <label
          className={twMerge(
            "mb-2 block text-sm font-medium text-gray-700",
            labelClassName
          )}
        >
          {inputLabel}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <input
        ref={inputRef}
        id={name}
        name={name}
        type="file"
        accept={acceptedTypes}
        multiple={isMultiple}
        disabled={disabled || loading}
        onChange={(event) => handleFiles(event.target.files)}
        className="hidden"
      />

      {/* PROFILE VARIANT */}
      {variant === "profile" && (
        <div className={twMerge("flex flex-col items-start gap-3", containerClassName)}>
          <div className="relative h-30 w-30 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
            {preview && (getPreviewUrl(files[0], 0) || previewUrl) ? (
              <img
                src={getPreviewUrl(files[0], 0) || previewUrl}
                alt="Profile preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-400">
                <MdImage size={36} />
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="h-6 w-6 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {renderButton(files.length ? "Change Photo" : "Upload Photo")}
            {files.length > 0 && renderRemoveButton(0, "h-9 w-9")}
          </div>
        </div>
      )}

      {/* BANNER VARIANT */}
      {variant === "banner" && (
        <div className={twMerge(" rounded-lg border border-gray-200 bg-gray-50", containerClassName)}>
          <div className="relative w-full aspect-16/8" >
            {preview && (getPreviewUrl(files[0], 0) || previewUrl) ? (
              <img
                src={getPreviewUrl(files[0], 0) || previewUrl}
                alt="Banner preview"
                className="h-full w-full object-cover aspect-video"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-400">
                <MdImage size={36} />
                <span className="text-sm">No banner selected</span>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 text-sm text-white">
                <span className="h-7 w-7 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Uploading banner...
              </div>
            )}

            {files.length > 0 && !loading && renderRemoveButton(0, "absolute  -right-1 -top-1 h-5 w-5 bg-red-600 text-white hover:bg-red-700 hover:text-white cursor-pointer")}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 p-3">
            <p className={twMerge("text-xs text-gray-500", helperClassName)}>
              {helperText || `Maximum size: ${sizeLimit}MB`}
            </p>
            {renderButton(files.length ? "Change Banner" : "Upload Banner")}
          </div>
        </div>
      )}

      {/* IMAGES VARIANT */}
      {variant === "images" && (
        <div className={twMerge("space-y-3", containerClassName)}>
          <button
            type="button"
            onClick={openFilePicker}
            onDragOver={(event) => {
              event.preventDefault();
              if (!disabled && !loading) setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            disabled={disabled || loading}
            className={twMerge(
              "flex min-h-32 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed p-4 text-center transition",
              isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/50",
              uploadClassName
            )}
          >
            <MdCloudUpload size={30} className={twMerge("mb-2 text-gray-400", iconClassName)} />
            <span className="text-sm font-medium text-gray-700">
              {placeholder || "Click or drag images here"}
            </span>
            <span className="mt-1 text-xs text-gray-500">
              {helperText || `Maximum ${maxFiles} images • ${sizeLimit}MB each`}
            </span>
          </button>

          {preview && files.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {files.map((file, index) => (
                <div key={`${file.name}-${file.lastModified}-${index}`} className="min-w-0">
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                    {renderMediaPreview(file, index)}
                    {renderRemoveButton(index, "absolute right-2 top-2 h-7 w-7 bg-black/60 text-white hover:bg-red-600 hover:text-white")}
                  </div>
                  <p className="mt-1 truncate text-xs text-gray-600">{file.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* MEDIA VARIANT */}
      {variant === "media" && (
        <div className={twMerge("space-y-3", containerClassName)}>
          <button
            type="button"
            onClick={openFilePicker}
            onDragOver={(event) => {
              event.preventDefault();
              if (!disabled && !loading) setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            disabled={disabled || loading}
            className={twMerge(
              "flex min-h-32 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4 text-center transition hover:border-blue-400 hover:bg-blue-50/50",
              isDragging && "border-blue-500 bg-blue-50",
              uploadClassName
            )}
          >
            <MdCloudUpload size={30} className={twMerge("mb-2 text-gray-400", iconClassName)} />
            <span className="text-sm font-medium text-gray-700">
              {placeholder || "Click or drag video/audio files here"}
            </span>
            <span className="mt-1 text-xs text-gray-500">
              {helperText || `Maximum ${maxFiles} files • ${sizeLimit}MB each`}
            </span>
          </button>

          {files.length > 0 && (
            <div className="space-y-3">
              {files.map((file, index) => (
                <div key={`${file.name}-${file.lastModified}-${index}`} className="overflow-hidden rounded-lg border border-gray-200">
                  {preview && file.type.startsWith("video/") && getPreviewUrl(file, index) && (
                    <video src={getPreviewUrl(file, index)} controls className="max-h-48 w-full bg-black" />
                  )}

                  <div className="flex min-w-0 items-center gap-3 p-3">
                    <span className="shrink-0 text-gray-500">{getFileIcon(file)}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-700">{file.name}</p>
                      <p className="text-xs text-gray-500">{formatSize(file.size)}</p>
                      {preview && file.type.startsWith("audio/") && getPreviewUrl(file, index) && (
                        <audio src={getPreviewUrl(file, index)} controls className="mt-2 w-full" />
                      )}
                    </div>
                    {renderRemoveButton(index)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* DOCUMENTS VARIANT */}
      {variant === "documents" && (
        <div className={twMerge("space-y-3", containerClassName)}>
          <button
            type="button"
            onClick={openFilePicker}
            onDragOver={(event) => {
              event.preventDefault();
              if (!disabled && !loading) setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            disabled={disabled || loading}
            className={twMerge(
              "flex min-h-28 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4 text-center transition hover:border-blue-400 hover:bg-blue-50/50",
              isDragging && "border-blue-500 bg-blue-50",
              uploadClassName
            )}
          >
            <MdCloudUpload size={30} className={twMerge("mb-2 text-gray-400", iconClassName)} />
            <span className="text-sm font-medium text-gray-700">
              {placeholder || "Click or drag documents here"}
            </span>
            <span className="mt-1 text-xs text-gray-500">
              {helperText || `Maximum ${maxFiles} files • ${sizeLimit}MB each`}
            </span>
          </button>

          {showFileList && files.length > 0 && renderFileList()}
        </div>
      )}

      {/* DEFAULT VARIANT */}
      {variant === "default" && (
        <div className={twMerge("space-y-3", containerClassName)}>
          <button
            type="button"
            onClick={openFilePicker}
            onDragOver={(event) => {
              event.preventDefault();
              if (!disabled && !loading) setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            disabled={disabled || loading}
            className={twMerge(
              "flex min-h-32 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4 text-center transition hover:border-blue-400 hover:bg-blue-50/50",
              isDragging && "border-blue-500 bg-blue-50",
              uploadClassName
            )}
          >
            <MdCloudUpload size={30} className={twMerge("mb-2 text-gray-400", iconClassName)} />
            <span className="text-sm font-medium text-gray-700">
              {placeholder || "Click or drag files here"}
            </span>
            <span className="mt-1 text-xs text-gray-500">
              {helperText || `Maximum ${sizeLimit}MB per file`}
            </span>
          </button>

          {preview && files.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {files.map((file, index) => (
                <div key={`${file.name}-${file.lastModified}-${index}`} className="min-w-0">
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                    {renderMediaPreview(file, index)}
                    {renderRemoveButton(index, "absolute right-2 top-2 h-7 w-7 bg-black/60 text-white hover:bg-red-600 hover:text-white")}
                  </div>
                  <p className="mt-1 truncate text-xs text-gray-600">{file.name}</p>
                </div>
              ))}
            </div>
          )}

          {showFileList && files.length > 0 && renderFileList()}
        </div>
      )}

      {displayError && (
        <p className={twMerge("mt-2 text-xs text-red-500", errorClassName)}>
          {displayError}
        </p>
      )}
    </div>
  );
};

export default FileInput;