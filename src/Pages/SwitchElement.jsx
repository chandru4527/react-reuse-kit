import { useForm } from "react-hook-form";
import Switch from "../components/forms/Switch";

const SwitchElement = () => {
    const { control, clearErrors } = useForm({
        defaultValues: {
            basic: false,
            activeStatus: true,
            blueSwitch: true,
            darkSwitch: false,
            greenSwitch: true,
            purpleSwitch: true,
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
            emailNotifications: true,
            smsNotifications: false,
            pushNotifications: true,
            twoFactor: true,
        },
    });

    return (
        <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Switch Components
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                        A reusable React Hook Form switch with different sizes,
                        colors, label positions, descriptions and disabled states.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* 1. Basic */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-800">
                            1. Basic Switch
                        </h3>

                        <div className="rounded-lg border border-gray-200 bg-white p-4">
                            <Switch
                                name="basic"
                                control={control}
                                label="Enable Notifications"
                            />
                        </div>
                    </div>

                    {/* 2. Active / Inactive */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-800">
                            2. Active / Inactive
                        </h3>

                        <div className="rounded-lg border border-gray-200 bg-white p-4">
                            <Switch
                                name="activeStatus"
                                control={control}
                                label="User Status"
                                activeColor="bg-green-500"
                                inactiveColor="bg-red-400"
                            />
                        </div>
                    </div>

                    {/* 3. Different Colors */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-800">
                            3. Different Colors
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <Switch
                                name="blueSwitch"
                                control={control}
                                label="Blue"
                                activeColor="bg-blue-600"
                            />

                            <Switch
                                name="darkSwitch"
                                control={control}
                                label="Dark"
                                activeColor="bg-gray-900"
                            />

                            <Switch
                                name="greenSwitch"
                                control={control}
                                label="Green"
                                activeColor="bg-green-500"
                            />

                            <Switch
                                name="purpleSwitch"
                                control={control}
                                label="Purple"
                                activeColor="bg-purple-600"
                            />
                        </div>
                    </div>

                    {/* 4. Sizes */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-800">
                            4. Switch Sizes
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

                    {/* 5. Description */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-800">
                            5. With Description
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

                    {/* 6. Label Position */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-800">
                            6. Label Position
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

                    {/* 7. Custom Thumb */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-800">
                            7. Custom Thumb
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

                    {/* 8. Disabled */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-gray-800">
                            8. Disabled
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

                    {/* 9. Notification Settings */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <h3 className="mb-4 text-sm font-semibold text-gray-800">
                            9. Notification Settings
                        </h3>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                            <div className="rounded-lg border border-gray-200 bg-white p-4">
                                <Switch
                                    name="emailNotifications"
                                    control={control}
                                    label="Email Notifications"
                                    description="Receive notifications through email."
                                />
                            </div>

                            <div className="rounded-lg border border-gray-200 bg-white p-4">
                                <Switch
                                    name="smsNotifications"
                                    control={control}
                                    label="SMS Notifications"
                                    description="Receive notifications through SMS."
                                    activeColor="bg-green-500"
                                />
                            </div>

                            <div className="rounded-lg border border-gray-200 bg-white p-4">
                                <Switch
                                    name="pushNotifications"
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
            </div>
        </div>
    );
};

export default SwitchElement;