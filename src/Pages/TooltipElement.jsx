import React from "react";
import Tooltip from "../components/feedback/Tooltip";
import {
    MdInfo,
    MdHelp,
    MdDelete,
    MdSettings,
    MdNotifications,
} from "react-icons/md";

const TooltipElements = () => {
    return (
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 xl:grid-cols-3">
            {/* Basic */}
            <div className="grid gap-4 rounded-lg border border-gray-200 p-5">
                <h2 className="text-lg font-semibold text-gray-800">Basic Tooltip</h2>

                <div className="flex items-center justify-center py-8">
                    <Tooltip content="This is a tooltip">
                        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
                            Hover me
                        </button>
                    </Tooltip>
                </div>
            </div>

            {/* Positions */}
            <div className="grid gap-4 rounded-lg border border-gray-200 p-5">
                <h2 className="text-lg font-semibold text-gray-800">Positions</h2>

                <div className="grid grid-cols-2 gap-6 py-8">
                    <div className="flex justify-center">
                        <Tooltip content="Top tooltip" position="top">
                            <button className="rounded-md bg-gray-800 px-3 py-2 text-sm text-white">
                                Top
                            </button>
                        </Tooltip>
                    </div>

                    <div className="flex justify-center">
                        <Tooltip content="Bottom tooltip" position="bottom">
                            <button className="rounded-md bg-gray-800 px-3 py-2 text-sm text-white">
                                Bottom
                            </button>
                        </Tooltip>
                    </div>

                    <div className="flex justify-center">
                        <Tooltip content="Left tooltip" position="left">
                            <button className="rounded-md bg-gray-800 px-3 py-2 text-sm text-white">
                                Left
                            </button>
                        </Tooltip>
                    </div>

                    <div className="flex justify-center">
                        <Tooltip content="Right tooltip" position="right">
                            <button className="rounded-md bg-gray-800 px-3 py-2 text-sm text-white">
                                Right
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>

            {/* Sizes */}
            <div className="grid gap-4 rounded-lg border border-gray-200 p-5">
                <h2 className="text-lg font-semibold text-gray-800">Sizes</h2>

                <div className="flex flex-wrap items-center justify-center gap-4 py-8">
                    <Tooltip content="Small tooltip" size="sm">
                        <button className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white">
                            Small
                        </button>
                    </Tooltip>

                    <Tooltip content="Medium tooltip" size="md">
                        <button className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white">
                            Medium
                        </button>
                    </Tooltip>

                    <Tooltip content="Large tooltip" size="lg">
                        <button className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white">
                            Large
                        </button>
                    </Tooltip>
                </div>
            </div>

            {/* Background Colors */}
            <div className="grid gap-4 rounded-lg border border-gray-200 p-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    Background Colors
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-5 py-8">
                    <Tooltip content="Dark tooltip" bgColor="dark">
                        <MdInfo className="cursor-pointer text-2xl text-gray-700" />
                    </Tooltip>

                    <Tooltip
                        content="Light tooltip"
                        bgColor="light"
                        textColor="black"
                    >
                        <MdHelp className="cursor-pointer text-2xl text-gray-700" />
                    </Tooltip>

                    <Tooltip content="Primary tooltip" bgColor="primary">
                        <MdSettings className="cursor-pointer text-2xl text-blue-600" />
                    </Tooltip>

                    <Tooltip content="Success tooltip" bgColor="success">
                        <MdNotifications className="cursor-pointer text-2xl text-green-600" />
                    </Tooltip>

                    <Tooltip content="Danger tooltip" bgColor="danger">
                        <MdDelete className="cursor-pointer text-2xl text-red-600" />
                    </Tooltip>

                    <Tooltip
                        content="Warning tooltip"
                        bgColor="warning"
                        textColor="white"
                    >
                        <MdInfo className="cursor-pointer text-2xl text-yellow-500" />
                    </Tooltip>
                </div>
            </div>

            {/* Rounded */}
            <div className="grid gap-4 rounded-lg border border-gray-200 p-5">
                <h2 className="text-lg font-semibold text-gray-800">Rounded</h2>

                <div className="flex flex-wrap items-center justify-center gap-4 py-8">
                    <Tooltip content="No rounded" rounded="none">
                        <button className="rounded-md bg-gray-800 px-3 py-2 text-sm text-white">
                            None
                        </button>
                    </Tooltip>

                    <Tooltip content="Small rounded" rounded="sm">
                        <button className="rounded-md bg-gray-800 px-3 py-2 text-sm text-white">
                            Small
                        </button>
                    </Tooltip>

                    <Tooltip content="Medium rounded" rounded="md">
                        <button className="rounded-md bg-gray-800 px-3 py-2 text-sm text-white">
                            Medium
                        </button>
                    </Tooltip>

                    <Tooltip content="Large rounded" rounded="lg">
                        <button className="rounded-md bg-gray-800 px-3 py-2 text-sm text-white">
                            Large
                        </button>
                    </Tooltip>

                    <Tooltip content="Full rounded" rounded="full">
                        <button className="rounded-md bg-gray-800 px-3 py-2 text-sm text-white">
                            Full
                        </button>
                    </Tooltip>
                </div>
            </div>

            {/* Arrow */}
            <div className="grid gap-4 rounded-lg border border-gray-200 p-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    Arrow
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-6 py-8">
                    <Tooltip content="With arrow" showArrow>
                        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
                            With Arrow
                        </button>
                    </Tooltip>

                    <Tooltip content="Without arrow" showArrow={false}>
                        <button className="rounded-md bg-gray-800 px-4 py-2 text-sm text-white">
                            No Arrow
                        </button>
                    </Tooltip>
                </div>
            </div>

            {/* Disabled */}
            <div className="grid gap-4 rounded-lg border border-gray-200 p-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    Disabled
                </h2>

                <div className="flex items-center justify-center py-8">
                    <Tooltip content="You won't see this" disabled>
                        <button className="rounded-md bg-gray-400 px-4 py-2 text-sm text-white">
                            Disabled Tooltip
                        </button>
                    </Tooltip>
                </div>
            </div>

            {/* Icon Tooltip */}
            <div className="grid gap-4 rounded-lg border border-gray-200 p-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    Icon Tooltip
                </h2>

                <div className="flex items-center justify-center gap-6 py-8">
                    <Tooltip content="Information">
                        <MdInfo className="cursor-pointer text-2xl text-blue-600" />
                    </Tooltip>

                    <Tooltip content="Help">
                        <MdHelp className="cursor-pointer text-2xl text-gray-600" />
                    </Tooltip>

                    <Tooltip content="Settings">
                        <MdSettings className="cursor-pointer text-2xl text-gray-600" />
                    </Tooltip>

                    <Tooltip content="Notifications">
                        <MdNotifications className="cursor-pointer text-2xl text-green-600" />
                    </Tooltip>

                    <Tooltip content="Delete">
                        <MdDelete className="cursor-pointer text-2xl text-red-600" />
                    </Tooltip>
                </div>
            </div>

            {/* Custom Styling */}
            <div className="grid gap-4 rounded-lg border border-gray-200 p-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    Custom Styling
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-5 py-8">
                    <Tooltip
                        content="Custom shadow"
                        contentClassName="shadow-2xl"
                    >
                        <button className="rounded-md bg-purple-600 px-4 py-2 text-sm text-white">
                            Shadow
                        </button>
                    </Tooltip>

                    <Tooltip
                        content="Custom spacing"
                        contentClassName="px-6 py-3"
                    >
                        <button className="rounded-md bg-pink-600 px-4 py-2 text-sm text-white">
                            Spacing
                        </button>
                    </Tooltip>

                    <Tooltip
                        content="Custom style"
                        contentClassName="text-base font-bold"
                    >
                        <button className="rounded-md bg-green-600 px-4 py-2 text-sm text-white">
                            Custom
                        </button>
                    </Tooltip>
                </div>
            </div>

            {/* Real World Usage */}
            <div className="grid gap-4 rounded-lg border border-gray-200 p-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    Real World Usage
                </h2>

                <div className="flex items-center justify-center gap-5 py-8">
                    <Tooltip content="View information">
                        <button
                            type="button"
                            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
                        >
                            <MdInfo className="text-xl" />
                        </button>
                    </Tooltip>

                    <Tooltip content="Settings">
                        <button
                            type="button"
                            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
                        >
                            <MdSettings className="text-xl" />
                        </button>
                    </Tooltip>

                    <Tooltip content="Notifications">
                        <button
                            type="button"
                            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
                        >
                            <MdNotifications className="text-xl" />
                        </button>
                    </Tooltip>

                    <Tooltip content="Delete item" bgColor="danger">
                        <button
                            type="button"
                            className="rounded-md p-2 text-red-600 hover:bg-red-50"
                        >
                            <MdDelete className="text-xl" />
                        </button>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default TooltipElements;