import React from "react";
import { useForm } from "react-hook-form";
import Switch from "../components/ui/forms/Switch";

const SwitchElement = () => {
    const { control, clearErrors } = useForm({
        defaultValues: {
            basic: false,
            activeStatus: true,
            darkMode: false,
            notifications: true,
            small: false,
            medium: true,
            large: false,
            description: true,
            leftLabel: false,
            rightLabel: true,
            yellowThumb: true,
            blackThumb: true,
            disabledOff: false,
            disabledOn: true,
            email: true,
            sms: false,
            push: true,
            twoFactor: true,
        },
    });

    return (
        <div className="grid grid-cols-1 gap-6 p-3 sm:grid-cols-2 lg:grid-cols-3">

            {/* Basic Switch */}
            <div>
                <h3 className="mb-4 text-sm font-semibold text-gray-800">
                    Basic Switch
                </h3>

                <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <Switch
                        name="basic"
                        control={control}
                        clearErrors={clearErrors}
                        label="Enable Notifications"
                    />
                </div>
            </div>

            {/* Active / Inactive */}
            <div>
                <h3 className="mb-4 text-sm font-semibold text-gray-800">
                    Active / Inactive
                </h3>

                <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <Switch
                        name="activeStatus"
                        control={control}
                        clearErrors={clearErrors}
                        label="User Status"
                        activeColor="bg-green-500"
                        inactiveColor="bg-red-400"
                    />
                </div>
            </div>

            {/* Different Colors */}
            <div>
                <h3 className="mb-4 text-sm font-semibold text-gray-800">
                    Different Colors
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    <Switch
                        name="notifications"
                        control={control}
                        label="Blue"
                        activeColor="bg-blue-600"
                    />

                    <Switch
                        name="darkMode"
                        control={control}
                        label="Dark"
                        activeColor="bg-gray-900"
                    />

                    <Switch
                        name="email"
                        control={control}
                        label="Green"
                        activeColor="bg-green-500"
                    />

                    <Switch
                        name="twoFactor"
                        control={control}
                        label="Purple"
                        activeColor="bg-purple-600"
                    />
                </div>
            </div>

            {/* Sizes */}
            <div>
                <h3 className="mb-4 text-sm font-semibold text-gray-800">
                    Switch Sizes
                </h3>

                <div className="grid grid-cols-1 gap-4">
                    <Switch
                        name="small"
                        control={control}
                        label="Small"
                        size="sm"
                    />

                    <Switch
                        name="medium"
                        control={control}
                        label="Medium"
                        size="md"
                    />

                    <Switch
                        name="large"
                        control={control}
                        label="Large"
                        size="lg"
                    />
                </div>
            </div>

            {/* Description */}
            <div>
                <h3 className="mb-4 text-sm font-semibold text-gray-800">
                    With Description
                </h3>

                <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <Switch
                        name="description"
                        control={control}
                        clearErrors={clearErrors}
                        label="Email Notifications"
                        description="Receive notifications when you receive a new email."
                        activeColor="bg-green-500"
                    />
                </div>
            </div>

            {/* Label Position */}
            <div>
                <h3 className="mb-4 text-sm font-semibold text-gray-800">
                    Label Position
                </h3>

                <div className="grid grid-cols-1 gap-4">
                    <Switch
                        name="leftLabel"
                        control={control}
                        label="Label Left"
                        labelPosition="left"
                    />

                    <Switch
                        name="rightLabel"
                        control={control}
                        label="Label Right"
                        labelPosition="right"
                    />
                </div>
            </div>

            {/* Custom Thumb */}
            <div>
                <h3 className="mb-4 text-sm font-semibold text-gray-800">
                    Custom Thumb
                </h3>

                <div className="grid grid-cols-1 gap-4">
                    <Switch
                        name="yellowThumb"
                        control={control}
                        label="Yellow Thumb"
                        activeColor="bg-orange-500"
                        thumbColor="bg-yellow-200"
                    />

                    <Switch
                        name="blackThumb"
                        control={control}
                        label="Black Thumb"
                        activeColor="bg-blue-600"
                        thumbColor="bg-gray-900"
                    />
                </div>
            </div>

            {/* Disabled */}
            <div>
                <h3 className="mb-4 text-sm font-semibold text-gray-800">
                    Disabled
                </h3>

                <div className="grid grid-cols-1 gap-4">
                    <Switch
                        name="disabledOff"
                        control={control}
                        label="Disabled Off"
                        disabled
                    />

                    <Switch
                        name="disabledOn"
                        control={control}
                        label="Disabled On"
                        disabled
                        activeColor="bg-green-500"
                    />
                </div>
            </div>

            {/* Notification Settings */}
            <div className="sm:col-span-2 lg:col-span-2">
                <h3 className="mb-4 text-sm font-semibold text-gray-800">
                    Notification Settings
                </h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <div className="rounded-lg border border-gray-200 bg-white p-4">
                        <Switch
                            name="email"
                            control={control}
                            label="Email Notifications"
                            description="Receive notifications through email."
                        />
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-white p-4">
                        <Switch
                            name="sms"
                            control={control}
                            label="SMS Notifications"
                            description="Receive notifications through SMS."
                            activeColor="bg-green-500"
                        />
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-white p-4">
                        <Switch
                            name="push"
                            control={control}
                            label="Push Notifications"
                            description="Receive notifications on your device."
                            activeColor="bg-purple-600"
                        />
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-white p-4">
                        <Switch
                            name="twoFactor"
                            control={control}
                            label="Two-Factor Authentication"
                            description="Add an extra layer of security."
                            activeColor="bg-green-600"
                        />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SwitchElement;