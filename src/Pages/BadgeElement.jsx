import React from "react";
import Badge from "../components/ui/feedback/Badge";

const BadgeElements = () => {
    return (
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="grid gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Variants</h2>

                <div className="flex flex-wrap gap-3">
                    <Badge>Default</Badge>
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="purple">Purple</Badge>
                    <Badge variant="pink">Pink</Badge>
                </div>
            </div>

            <div className="grid gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Sizes</h2>

                <div className="flex flex-wrap items-center gap-3">
                    <Badge size="sm" variant="primary">Small</Badge>
                    <Badge size="md" variant="primary">Medium</Badge>
                    <Badge size="lg" variant="primary">Large</Badge>
                </div>
            </div>

            <div className="grid gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Dot</h2>

                <div className="flex flex-wrap gap-3">
                    <Badge variant="success" dot>Active</Badge>
                    <Badge variant="danger" dot>Inactive</Badge>
                    <Badge variant="warning" dot>Pending</Badge>
                    <Badge variant="info" dot>Processing</Badge>
                </div>
            </div>

            <div className="grid gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Rounded</h2>

                <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="primary" rounded="none">None</Badge>
                    <Badge variant="primary" rounded="sm">Small</Badge>
                    <Badge variant="primary" rounded="md">Medium</Badge>
                    <Badge variant="primary" rounded="lg">Large</Badge>
                    <Badge variant="primary" rounded="full">Full</Badge>
                </div>
            </div>

            <div className="grid gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Status</h2>

                <div className="flex flex-wrap gap-3">
                    <Badge variant="success" dot>Online</Badge>
                    <Badge variant="danger" dot>Offline</Badge>
                    <Badge variant="warning" dot>Away</Badge>
                    <Badge variant="primary" dot>New</Badge>
                </div>
            </div>

            <div className="grid gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Custom</h2>

                <div className="flex flex-wrap gap-3">
                    <Badge variant="primary" className="shadow-md">
                        Custom Shadow
                    </Badge>

                    <Badge
                        variant="success"
                        size="lg"
                        className="px-5"
                    >
                        Custom Padding
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default BadgeElements;