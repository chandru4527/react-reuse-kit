import React from "react";
import Avatar from "../components/ui/display/Avatar";
import {
    MdRestaurant,
    MdNotifications,
} from "react-icons/md";

const AvatarElements = () => {
    const anime =
        "https://tse2.mm.bing.net/th/id/OIP.wY5abcWi8KXwF51VlFWVRwHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3";

    return (
        <div className="grid grid-cols-1 gap-8 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-white border border-gray-200 m-3  rounded">

            {/* Image Avatar */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Image Avatar</h2>
                <Avatar src={anime} name="Chandru Kumar" size="xl" />
            </div>

            {/* Avatar Sizes */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Avatar Sizes</h2>
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
                <h2 className="text-lg font-semibold text-gray-800">Icon Avatar</h2>
                <Avatar
                    icon={<MdRestaurant className="text-2xl" />}
                    shape="rounded"
                />
            </div>

            {/* Badge Avatar */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Badge Avatar</h2>
                <Avatar
                    icon={<MdNotifications className="text-xl" />}
                    shape="square"
                    size="md"
                    badge={2}
                />
            </div>

            {/* Status Avatar */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Status Avatar</h2>
                <div className="flex flex-wrap items-center gap-4">
                    <Avatar name="SK" status="online" />
                    <Avatar name="SK" status="offline" />
                    <Avatar name="SK" status="busy" />
                    <Avatar name="SK" status="away" />
                </div>
            </div>

            {/* Ring Avatar */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Ring Avatar</h2>
                <Avatar
                    src={anime}
                    status="online"
                    ring
                />
            </div>

            {/* Editable Avatar */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Editable Avatar</h2>
                <Avatar
                    src={anime}
                    size="xl"
                    editable
                    onClick={() => console.log("Avatar clicked")}
                    onEdit={() => console.log("Edit avatar")}
                />
            </div>

            {/* Shapes */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Avatar Shapes</h2>
                <div className="flex flex-wrap items-center gap-4">
                    <Avatar name="SK" shape="circle" />
                    <Avatar name="SK" shape="rounded" />
                    <Avatar name="SK" shape="soft" />
                    <Avatar name="SK" shape="square" />
                    <Avatar name="SK" shape="pill" size="pillMd" />
                    <Avatar name="SK" shape="hex" gradient />
                </div>
            </div>

            {/* Gradient Avatar */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-800">Gradient Avatar</h2>
                <div className="flex items-center gap-4">
                    <Avatar name="CK" gradient />
                    <Avatar name="SK" size="lg" gradient />
                    <Avatar name="PK" size="xl" gradient />
                </div>
            </div>

        </div>
    );
};

export default AvatarElements;