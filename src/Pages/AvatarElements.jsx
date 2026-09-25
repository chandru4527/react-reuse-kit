import React from "react";
import Avatar from "../components/display/Avatar";
import {
    MdNotifications,
    MdRestaurant,
} from "react-icons/md";

const AvatarElements = () => {
    const anime =
        "https://tse2.mm.bing.net/th/id/OIP.wY5abcWi8KXwF51VlFWVRwHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3";

    return (
        <div className="m-3 grid grid-cols-1 gap-8 rounded border border-gray-200 bg-white p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {/* Image Avatar */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Image Avatar
                </h2>

                <Avatar
                    src={anime}
                    name="Chandru Kumar"
                    size="xl"
                />
            </div>

            {/* Avatar Sizes */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Avatar Sizes
                </h2>

                <div className="flex flex-wrap items-center gap-4">
                    <Avatar name="C" size="xs" />
                    <Avatar name="C" size="sm" />
                    <Avatar name="C" size="md" />
                    <Avatar name="C" size="lg" />
                    <Avatar name="C" size="xl" />
                    <Avatar name="C" size="2xl" />
                </div>
            </div>

            {/* Icon Avatar */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Icon Avatar
                </h2>

                <Avatar
                    icon={<MdRestaurant />}
                    shape="rounded"
                />
            </div>

            {/* Badge Avatar */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Badge Avatar
                </h2>

                <Avatar
                    icon={<MdNotifications />}
                    shape="square"
                    size="md"
                    badge={2}
                />
            </div>

            {/* Status Avatar */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Status Avatar
                </h2>

                <div className="flex flex-wrap items-center gap-4">
                    <Avatar name="SK" status="online" />
                    <Avatar name="SK" status="offline" />
                    <Avatar name="SK" status="busy" />
                    <Avatar name="SK" status="away" />
                </div>
            </div>

            {/* Status Positions */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Status Positions
                </h2>

                <div className="flex flex-wrap items-center gap-6">
                    <Avatar
                        name="SK"
                        status="online"
                        statusPosition="top-right"
                    />

                    <Avatar
                        name="SK"
                        status="online"
                        statusPosition="top-left"
                    />

                    <Avatar
                        name="SK"
                        status="online"
                        statusPosition="bottom-right"
                    />

                    <Avatar
                        name="SK"
                        status="online"
                        statusPosition="bottom-left"
                    />
                </div>
            </div>

            {/* Ring Avatar */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Ring Avatar
                </h2>

                <Avatar
                    src={anime}
                    status="online"
                    ring
                />
            </div>

            {/* Shapes */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Avatar Shapes
                </h2>

                <div className="flex flex-wrap items-center gap-4">
                    <Avatar name="SK" shape="circle" />
                    <Avatar name="SK" shape="rounded" />
                    <Avatar name="SK" shape="soft" />
                    <Avatar name="SK" shape="square" />
                    <Avatar name="SK" shape="pill" />
                    <Avatar name="SK" shape="hex" gradient />
                </div>
            </div>

            {/* Gradient Avatar */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Gradient Avatar
                </h2>

                <div className="flex items-center gap-4">
                    <Avatar
                        name="CK"
                        gradient
                    />

                    <Avatar
                        name="SK"
                        size="lg"
                        gradient
                    />

                    <Avatar
                        name="PK"
                        size="xl"
                        gradient
                    />
                </div>
            </div>

            {/* Badge Variants */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Badge Variants
                </h2>

                <div className="flex flex-wrap items-center gap-6">
                    <Avatar
                        name="CK"
                        badge={2}
                        badgeVariant="danger"
                    />

                    <Avatar
                        name="SK"
                        badge={5}
                        badgeVariant="success"
                    />

                    <Avatar
                        name="PK"
                        badge={8}
                        badgeVariant="primary"
                    />
                </div>
            </div>

            {/* Combined */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Combined
                </h2>

                <div className="flex flex-wrap items-center gap-6">
                    <Avatar
                        src={anime}
                        size="lg"
                        status="online"
                        ring
                    />

                    <Avatar
                        name="SK"
                        size="xl"
                        status="busy"
                        badge={5}
                        gradient
                        ring
                    />

                    <Avatar
                        name="CK"
                        size="lg"
                        status="away"
                        badge={2}
                        gradient
                        shape="rounded"
                    />
                </div>
            </div>

        </div>
    );
};

export default AvatarElements;