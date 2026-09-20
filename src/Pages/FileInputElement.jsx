import { useState } from "react";
import FileInput from "../components/ui/forms/FileInput";

const FileInputElement = () => {
    const [images, setImages] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [mixedFiles, setMixedFiles] = useState([]);
    const [profileImage, setProfileImage] = useState(null);
    const [mediaFiles, setMediaFiles] = useState([]);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Reusable File Upload Input
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Single & Multiple • Image, Video, Audio, PDF, Docs, Excel •
                        Preview • Fully Customizable
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                    {/* 1. Multiple Images */}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="mb-5 inline-flex rounded-md bg-purple-50 px-3 py-1 text-sm font-semibold text-purple-600">
                            1. Image Upload (Multiple)
                        </div>

                        <FileInput
                            label="Upload Images"
                            name="images"
                            multiple
                            required
                            value={images}
                            onChange={setImages}
                            accept="image/png,image/jpeg,image/jpg,image/webp"
                            maxFiles={5}
                            maxSize={5 * 1024 * 1024}
                            placeholder="Click or drag images here"
                            helperText="PNG, JPG, JPEG, WEBP (MAX. 5MB)"
                            iconClassName="text-purple-500"
                            uploadClassName="min-h-36 border-purple-300 bg-purple-50/30 hover:border-purple-500 hover:bg-purple-50"
                            fileListClassName="grid grid-cols-2 gap-4 sm:grid-cols-3"
                        />

                        <p className="mt-3 text-sm font-medium text-purple-600">
                            {images.length} files selected
                        </p>
                    </div>

                    {/* 2. Multiple Documents */}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="mb-5 inline-flex rounded-md bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
                            2. Document Upload (Multiple)
                        </div>

                        <FileInput
                            label="Upload Documents"
                            name="documents"
                            multiple
                            required
                            value={documents}
                            onChange={setDocuments}
                            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                            maxFiles={5}
                            maxSize={10 * 1024 * 1024}
                            placeholder="Click or drag documents here"
                            helperText="PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX (MAX. 10MB)"
                            iconClassName="text-green-500"
                            uploadClassName="min-h-36 border-green-300 bg-green-50/30 hover:border-green-500 hover:bg-green-50"
                        />

                        <p className="mt-3 text-sm font-medium text-green-600">
                            {documents.length} files selected
                        </p>
                    </div>

                    {/* 3. Mixed Files */}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="mb-5 inline-flex rounded-md bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600">
                            3. Mixed Files Upload (Multiple)
                        </div>

                        <FileInput
                            label="Upload Files"
                            name="mixedFiles"
                            multiple
                            required
                            value={mixedFiles}
                            onChange={setMixedFiles}
                            accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,video/*,audio/*"
                            maxFiles={10}
                            maxSize={10 * 1024 * 1024}
                            placeholder="Click or drag files here"
                            helperText="Images, PDF, Docs, Excel, PowerPoint, Video, Audio (MAX. 10MB)"
                            iconClassName="text-orange-500"
                            uploadClassName="min-h-36 border-orange-300 bg-orange-50/30 hover:border-orange-500 hover:bg-orange-50"
                        />

                        <p className="mt-3 text-sm font-medium text-orange-600">
                            {mixedFiles.length} files selected
                        </p>
                    </div>

                    {/* 4. Single Image */}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="mb-5 inline-flex rounded-md bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                            4. Single Image Upload
                        </div>

                        <FileInput
                            label="Profile Picture"
                            name="profileImage"
                            required
                            value={profileImage}
                            onChange={setProfileImage}
                            accept="image/png,image/jpeg,image/jpg,image/webp"
                            maxSize={5 * 1024 * 1024}
                            placeholder="Click or drag image here"
                            helperText="PNG, JPG, JPEG, WEBP (MAX. 5MB)"
                            iconClassName="text-blue-500"
                            uploadClassName="min-h-36 border-blue-300 bg-blue-50/30 hover:border-blue-500 hover:bg-blue-50"
                        />

                        {profileImage && (
                            <p className="mt-3 truncate text-sm font-medium text-blue-600">
                                {profileImage.name}
                            </p>
                        )}
                    </div>

                    {/* 5. Video & Audio */}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="mb-5 inline-flex rounded-md bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-600">
                            5. Video & Audio Preview
                        </div>

                        <FileInput
                            label="Upload Media"
                            name="media"
                            multiple
                            value={mediaFiles}
                            onChange={setMediaFiles}
                            accept="video/*,audio/*"
                            maxFiles={5}
                            maxSize={50 * 1024 * 1024}
                            placeholder="Click or drag media files here"
                            helperText="MP4, MOV, WEBM, MP3, WAV (MAX. 50MB)"
                            iconClassName="text-pink-500"
                            uploadClassName="min-h-36 border-pink-300 bg-pink-50/30 hover:border-pink-500 hover:bg-pink-50"
                        />

                        <p className="mt-3 text-sm font-medium text-pink-600">
                            {mediaFiles.length} files selected
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileInputElement;