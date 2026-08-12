import React from "react";
// import { MdInbox } from "react-icons/md";

const EmptyState = ({
    title = "No Data Found",
    description = "There is nothing to display here.",
    icon,
    action,
    className = "",
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-10 text-center ${className}`}
        >
            <div className="mb- text-5xl text-gray-300">
                {/* {icon || <MdInbox />} */}
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
                {title}
            </h3>

            <p className="mt-2 max-w-md text-sm text-gray-500">
                {description}
            </p>

            {action && (
                <div className="mt-5">
                    {action}
                </div>
            )}
        </div>
    );
};

export default EmptyState;