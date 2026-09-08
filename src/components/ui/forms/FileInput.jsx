import React, { forwardRef, useEffect, useRef, useState, } from "react";

import {
  MdCloudUpload, MdClose, MdPictureAsPdf, MdDescription, MdTableChart, MdSlideshow, MdVideoFile,
  MdAudioFile, MdImage, MdInsertDriveFile,
} from "react-icons/md";

const FileInput = forwardRef(
  (
    {
      label,
      name,
      multiple = false,
      accept,
      disabled = false,
      required = false,

      error,
      helperText,

      icon = true,
      iconComponent,

      maxFiles,
      maxSize,

      preview = true,
      showFileList = true,

      value,
      onChange,
      onRemove,

      placeholder = "Click or drag files here",

      className = "",
      labelClassName = "",
      inputClassName = "",
      uploadClassName = "",
      errorClassName = "",
      helperTextClassName = "",
      fileListClassName = "",
      fileItemClassName = "",
      previewClassName = "",
      removeButtonClassName = "",

      ...props
    },
    ref
  ) => {
    const inputRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [previewUrls, setPreviewUrls] = useState({});

    const files = value
      ? Array.isArray(value)
        ? value
        : [value]
      : [];

    const getFileKey = (file) => {
      return `${file.name}-${file.size}-${file.lastModified}`;
    };

    /* Create preview URLs */
    useEffect(() => {
      const urls = {};

      files.forEach((file) => {
        if (
          file instanceof File &&
          (file.type?.startsWith("image/") ||
            file.type?.startsWith("video/") ||
            file.type?.startsWith("audio/"))
        ) {
          urls[getFileKey(file)] = URL.createObjectURL(file);
        }
      });

      setPreviewUrls(urls);

      return () => {
        Object.values(urls).forEach((url) => {
          URL.revokeObjectURL(url);
        });
      };
    }, [value]);

    /* Get icon based on file type */
    const getFileIcon = (file) => {
      const type = file.type?.toLowerCase() || "";
      const extension = file.name?.split(".").pop()?.toLowerCase();

      if (type.startsWith("image/")) {
        return MdImage;
      }

      if (type === "application/pdf" || extension === "pdf") {
        return MdPictureAsPdf;
      }

      if (
        type.includes("word") ||
        ["doc", "docx"].includes(extension)
      ) {
        return MdDescription;
      }

      if (
        type.includes("excel") ||
        type.includes("spreadsheet") ||
        ["xls", "xlsx", "csv"].includes(extension)
      ) {
        return MdTableChart;
      }

      if (
        type.includes("powerpoint") ||
        type.includes("presentation") ||
        ["ppt", "pptx"].includes(extension)
      ) {
        return MdSlideshow;
      }

      if (
        type.startsWith("video/") ||
        ["mp4", "mov", "avi", "webm", "mkv"].includes(extension)
      ) {
        return MdVideoFile;
      }

      if (
        type.startsWith("audio/") ||
        ["mp3", "wav", "ogg", "aac", "m4a"].includes(extension)
      ) {
        return MdAudioFile;
      }

      return MdInsertDriveFile;
    };

    const isImageFile = (file) => {
      const type = file.type?.toLowerCase() || "";
      const extension = file.name?.split(".").pop()?.toLowerCase();

      return (
        type.startsWith("image/") ||
        ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(
          extension
        )
      );
    };

    const isVideoFile = (file) => {
      const type = file.type?.toLowerCase() || "";
      const extension = file.name?.split(".").pop()?.toLowerCase();

      return (
        type.startsWith("video/") ||
        ["mp4", "mov", "avi", "webm", "mkv"].includes(extension)
      );
    };

    const isAudioFile = (file) => {
      const type = file.type?.toLowerCase() || "";
      const extension = file.name?.split(".").pop()?.toLowerCase();

      return (
        type.startsWith("audio/") ||
        ["mp3", "wav", "ogg", "aac", "m4a"].includes(extension)
      );
    };

    const formatFileSize = (bytes) => {
      if (!bytes) return "0 KB";

      if (bytes < 1024) {
        return `${bytes} B`;
      }

      if (bytes < 1024 * 1024) {
        return `${(bytes / 1024).toFixed(1)} KB`;
      }

      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    /* Check duplicate */
    const isDuplicate = (file, existingFiles) => {
      return existingFiles.some(
        (existingFile) =>
          existingFile.name === file.name &&
          existingFile.size === file.size &&
          existingFile.lastModified === file.lastModified
      );
    };

    /* Handle selected files */
    const handleFiles = (selectedFiles) => {
      if (disabled) return;

      let selected = Array.from(selectedFiles);

      if (!selected.length) return;

      /* Size validation */
      if (maxSize) {
        selected = selected.filter(
          (file) => file.size <= maxSize
        );
      }

      if (!selected.length) return;

      /* Single file */
      if (!multiple) {
        const file = selected[0];

        onChange?.(file);

        return;
      }

      /* Remove duplicates against already selected files */
      selected = selected.filter(
        (file) => !isDuplicate(file, files)
      );

      /* Remove duplicates inside current selection */
      const uniqueSelected = [];

      selected.forEach((file) => {
        if (!isDuplicate(file, uniqueSelected)) {
          uniqueSelected.push(file);
        }
      });

      if (!uniqueSelected.length) return;

      /* Add new files to existing files */
      let updatedFiles = [...files, ...uniqueSelected];

      /* Maximum files */
      if (maxFiles) {
        updatedFiles = updatedFiles.slice(0, maxFiles);
      }

      onChange?.(updatedFiles);
    };

    /* Input change */
    const handleChange = (event) => {
      handleFiles(event.target.files);

      /* Allows selecting the same file after removing it */
      event.target.value = "";
    };

    /* Drag over */
    const handleDragOver = (event) => {
      event.preventDefault();

      if (!disabled) {
        setIsDragging(true);
      }
    };

    /* Drag leave */
    const handleDragLeave = (event) => {
      event.preventDefault();
      setIsDragging(false);
    };

    /* Drop */
    const handleDrop = (event) => {
      event.preventDefault();
      setIsDragging(false);

      if (!disabled) {
        handleFiles(event.dataTransfer.files);
      }
    };

    /* Remove file */
    const handleRemove = (index) => {
      const removedFile = files[index];

      const updatedFiles = files.filter(
        (_, fileIndex) => fileIndex !== index
      );

      if (multiple) {
        onChange?.(updatedFiles);
      } else {
        onChange?.(null);
      }

      onRemove?.(removedFile, index);
    };

    /* Open file picker */
    const handleClick = () => {
      if (!disabled) {
        inputRef.current?.click();
      }
    };

    const UploadIcon = iconComponent || MdCloudUpload;

    /* Common remove button */
    const RemoveButton = ({ index }) => (
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          handleRemove(index);
        }}
        className={`absolute -right-1 -top-1 z-20 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white shadow-sm transition hover:bg-red-600 ${removeButtonClassName} cursor-pointer`}
      >
        <MdClose className="text-xs" />
      </button>
    );

    return (
      <div className={`w-full ${className}`}>
        {/* Label */}
        {label && (
          <label
            htmlFor={name}
            className={`mb-2 block text-sm font-medium text-gray-700 ${labelClassName}`}
          >
            {label}

            {required && (
              <span className="ml-1 text-red-500">*</span>
            )}
          </label>
        )}

        {/* Hidden Input */}
        <input
          ref={(node) => {
            inputRef.current = node;

            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          id={name}
          name={name}
          type="file"
          multiple={multiple}
          accept={accept}
          disabled={disabled}
          required={required && files.length === 0}
          onChange={handleChange}
          className={`hidden ${inputClassName}`}
          {...props}
        />

        {/* Upload Area */}
        <div
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-4 transition-all 
            ${isDragging
              ? "border-blue-500 bg-blue-50"
              : error
                ? "border-red-400 bg-red-50"
                : "border-blue-600 bg-blue-50"
            } ${disabled
              ? "cursor-not-allowed opacity-50"
              : "hover:border-blue-500 hover:bg-blue-50"
            } ${uploadClassName}`}
        >
          {icon && (
            <UploadIcon className="mb-2 text-4xl text-gray-500" />
          )}

          <p className="text-sm font-medium text-gray-700">
            {placeholder}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {multiple
              ? "You can select multiple files"
              : "Select one file"}
          </p>
        </div>

        {/* Helper Text */}
        {helperText && !error && (
          <p
            className={`mt-1 text-xs text-gray-500 ${helperTextClassName}`}
          >
            {helperText}
          </p>
        )}

        {/* Error */}
        {error && (
          <p
            className={`mt-1 text-xs text-red-500 ${errorClassName}`}
          >
            {error}
          </p>
        )}

        {/* Preview */}
        {preview && showFileList && files.length > 0 && (
          <div
            className={`mt-4 ${previewClassName}`}
          >
            {/* IMAGE GRID */}
            {files.some(isImageFile) && (
              <div
                className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${fileListClassName}`}
              >
                {files.map((file, index) => {
                  if (!isImageFile(file)) return null;

                  const fileKey = getFileKey(file);
                  const previewUrl = previewUrls[fileKey];

                  return (
                    <div
                      key={fileKey}
                      className={`relative h-28 w-28 ${fileItemClassName}`}
                    >
                      {previewUrl && (
                        <img
                          src={previewUrl}
                          alt={file.name}
                          className="h-full w-full object-contain border border-gray-300 rounded"
                        />
                      )}

                      <RemoveButton index={index} />
                    </div>
                  );
                })}
              </div>
            )}

            {/* DOCUMENT / VIDEO / AUDIO LIST */}
            {files.some(
              (file) =>
                !isImageFile(file)
            ) && (
                <div className="flex flex-col gap-2 mt-2">
                  {files.map((file, index) => {
                    if (isImageFile(file)) return null;

                    const fileKey = getFileKey(file);
                    const previewUrl = previewUrls[fileKey];

                    const isVideo = isVideoFile(file);
                    const isAudio = isAudioFile(file);

                    const FileIcon = getFileIcon(file);

                    /* VIDEO */
                    if (isVideo) {
                      return (
                        <div
                          key={fileKey}
                          className={`relative w-full rounded-lg border border-gray-200 ${fileItemClassName}`}
                        >
                          {previewUrl && (
                            <video
                              src={previewUrl}
                              controls
                              className="h-auto w-full object-contain aspect-video rounded"
                            />
                          )}

                          <RemoveButton index={index} />
                        </div>
                      );
                    }

                    /* AUDIO */
                    if (isAudio) {
                      return (
                        <div
                          key={fileKey}
                          className={`relative flex w-full items-center gap-3 rounded border border-gray-200 bg-white p-3 pr-10 ${fileItemClassName}`}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gray-100">
                            <MdAudioFile className="text-2xl text-gray-500" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p
                              className="mb-2 truncate text-sm font-medium text-gray-700"
                              title={file.name}
                            >
                              {file.name}
                            </p>

                            {previewUrl && (
                              <audio
                                src={previewUrl}
                                controls
                                className="w-full h-10"
                              />
                            )}
                          </div>

                          <RemoveButton index={index} />
                        </div>
                      );
                    }

                    /* DOCUMENT */
                    return (
                      <div
                        key={fileKey}
                        className={`relative flex w-full min-w-0 items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-3 pr-10 ${fileItemClassName}`}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gray-100">
                          <FileIcon className="text-2xl text-gray-500" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p
                            className="truncate text-sm font-medium text-gray-700"
                            title={file.name}
                          >
                            {file.name}
                          </p>

                          <p className="mt-0.5 text-xs text-gray-400">
                            {formatFileSize(file.size)}
                          </p>
                        </div>

                        <RemoveButton index={index} />
                      </div>
                    );
                  })}
                </div>
              )}
          </div>
        )}

        {/* Simple File List */}
        {!preview &&
          showFileList &&
          files.length > 0 && (
            <div className="mt-4 space-y-3">
              {files.map((file, index) => {
                const FileIcon = getFileIcon(file);
                const fileKey = getFileKey(file);

                return (
                  <div
                    key={fileKey}
                    className={`mt-1 relative flex min-w-0 items-center gap-3 rounded border border-gray-400 bg-white 
                      px-1 py-1 pr-10 ${fileItemClassName}`}
                  >
                    <div className="flex gap-3 h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gray-900">
                      <FileIcon className="text-2xl text-gray-500" />
                    </div>

                    <div className="min-w-0 flex">
                      <p
                        className="truncate text-sm font-medium text-gray-700"
                        title={file.name}
                      >
                        {file.name}
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        {formatFileSize(file.size)}
                      </p>
                    </div>

                    <RemoveButton index={index} />
                  </div>
                );
              })}
            </div>
          )}
      </div>
    );
  }
);

FileInput.displayName = "FileInput";

export default FileInput;