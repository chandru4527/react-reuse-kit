import {
    MdDelete,
    MdEdit,
    MdMenu,
    MdSave,
} from "react-icons/md";
import Button from "../components/buttons/Button";
import useDrawerStore from "../store/drawerStore";

const DrawerElements = () => {
    const openDrawer = useDrawerStore((state) => state.openDrawer);

    // Right drawer
    const openRightDrawer = () => {
        openDrawer({
            position: "right",
            size: "md",
            rounded: "none",
            title: "Right Drawer",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-600">
                        This is the right drawer content.
                    </p>
                    <p className="text-sm text-gray-500">
                        You can place any React content here.
                    </p>
                </div>
            ),
        });
    };

    // Left drawer
    const openLeftDrawer = () => {
        openDrawer({
            position: "left",
            size: "md",
            rounded: "lg",
            title: "Left Drawer",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-600">
                        This is the left drawer content.
                    </p>
                    <p className="text-sm text-gray-500">
                        You can place any React content here.
                    </p>
                </div>
            ),
        });
    };

    // Top drawer
    const openTopDrawer = () => {
        openDrawer({
            position: "top",
            size: "md",
            rounded: "xl",
            title: "Top Drawer",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-600">
                        This is the top drawer content.
                    </p>
                    <p className="text-sm text-gray-500">
                        Drawer can also open from the top.
                    </p>
                </div>
            ),
        });
    };

    // Bottom drawer
    const openBottomDrawer = () => {
        openDrawer({
            position: "bottom",
            size: "md",
            rounded: "2xl",
            title: "Bottom Drawer",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-600">
                        This is the bottom drawer content.
                    </p>
                    <p className="text-sm text-gray-500">
                        Drawer can also open from the bottom.
                    </p>
                </div>
            ),
        });
    };

    // Save action
    const openSaveDrawer = () => {
        openDrawer({
            position: "right",
            size: "md",
            rounded: "xl",
            title: "Edit User",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-600">
                        Edit the user information and save your changes.
                    </p>

                    <input
                        type="text"
                        placeholder="User name"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                    />
                </div>
            ),
            showAction: true,
            actionText: "Save",
            actionVariant: "primary",
            actionLeftIcon: MdSave,
            actionIconSize: 18,
            actionLoading: false,
            actionLoadingText: "Saving...",
            actionDisabled: false,
            onAction: () => {
                console.log("Save clicked");
            },
        });
    };

    // Loading action
    const openLoadingDrawer = () => {
        openDrawer({
            position: "right",
            size: "md",
            rounded: "lg",
            title: "Save Changes",
            content: (
                <p className="text-gray-600">
                    This drawer demonstrates the loading state of the
                    action button.
                </p>
            ),
            showAction: true,
            actionText: "Save",
            actionVariant: "primary",
            actionLeftIcon: null,
            actionLoading: true,
            actionLoadingText: "Saving...",
            onAction: () => {
                console.log("Saving...");
            },
        });
    };

    // Delete action
    const openDeleteDrawer = () => {
        openDrawer({
            position: "right",
            size: "sm",
            rounded: "lg",
            title: "Delete User",
            content: (
                <p className="text-gray-600">
                    Are you sure you want to delete this user?
                </p>
            ),
            showAction: true,
            actionText: "Delete",
            actionVariant: "danger",
            actionLeftIcon: MdDelete,
            actionIconSize: 18,
            onAction: () => {
                console.log("Delete clicked");
            },
        });
    };

    // Custom action
    const openCustomActionDrawer = () => {
        openDrawer({
            position: "right",
            size: "md",
            rounded: "2xl",
            title: "Custom Action",
            content: (
                <p className="text-gray-600">
                    The action button can use custom Button props.
                </p>
            ),
            showAction: true,
            actionText: "Update",
            actionVariant: "outline",
            actionLeftIcon: MdEdit,
            actionIconSize: 18,
            actionClassName:
                "border-purple-500 text-purple-600 hover:bg-purple-50",
            onAction: () => {
                console.log("Update clicked");
            },
        });
    };

    // Rounded drawer
    const openRoundedDrawer = () => {
        openDrawer({
            position: "right",
            size: "md",
            rounded: "xl",
            title: "Rounded Drawer",
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600">
                        This drawer uses the xl rounded style.
                    </p>

                    <p className="text-sm text-gray-500">
                        The rounding automatically follows the drawer
                        direction.
                    </p>
                </div>
            ),
        });
    };

    // Custom className
    const openCustomDrawer = () => {
        openDrawer({
            position: "right",
            size: "lg",
            rounded: "2xl",
            title: "Custom Styled Drawer",
            className: "bg-gray-50 shadow-xl",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700">
                        This drawer uses a custom className.
                    </p>

                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                        <p className="text-sm text-blue-700">
                            You can customize the drawer background,
                            shadow, width, border, padding, and more.
                        </p>
                    </div>
                </div>
            ),
        });
    };

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Right */}
            <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Right Drawer
                </h3>

                <Button leftIcon={MdMenu} onClick={openRightDrawer}>
                    Open Right
                </Button>
            </div>

            {/* Left */}
            <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Left Drawer
                </h3>

                <Button leftIcon={MdMenu} onClick={openLeftDrawer}>
                    Open Left
                </Button>
            </div>

            {/* Top */}
            <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Top Drawer
                </h3>

                <Button leftIcon={MdMenu} onClick={openTopDrawer}>
                    Open Top
                </Button>
            </div>

            {/* Bottom */}
            <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Bottom Drawer
                </h3>

                <Button leftIcon={MdMenu} onClick={openBottomDrawer}>
                    Open Bottom
                </Button>
            </div>

            {/* Save */}
            <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Action Button
                </h3>

                <Button leftIcon={MdSave} onClick={openSaveDrawer}>
                    Open With Save
                </Button>
            </div>

            {/* Loading */}
            <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Loading Action
                </h3>

                <Button leftIcon={MdSave} onClick={openLoadingDrawer}>
                    Open Loading
                </Button>
            </div>

            {/* Delete */}
            <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Danger Action
                </h3>

                <Button leftIcon={MdDelete} onClick={openDeleteDrawer}>
                    Open Delete
                </Button>
            </div>

            {/* Custom Action */}
            <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Custom Action
                </h3>

                <Button leftIcon={MdEdit} onClick={openCustomActionDrawer}>
                    Open Custom
                </Button>
            </div>

            {/* Rounded */}
            <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Rounded Drawer
                </h3>

                <Button leftIcon={MdMenu} onClick={openRoundedDrawer}>
                    Open Rounded
                </Button>
            </div>

            {/* Custom Class */}
            <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Custom Class
                </h3>

                <Button leftIcon={MdEdit} onClick={openCustomDrawer}>
                    Open Custom Style
                </Button>
            </div>
        </div>
    );
};

export default DrawerElements;