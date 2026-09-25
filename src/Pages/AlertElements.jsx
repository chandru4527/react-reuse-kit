import { MdCheckCircle, MdNotifications, MdRestaurant, } from "react-icons/md";

import Alert from "../components/feedback/Alert";
import Button from "../components/buttons/Button";

const AlertElements = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Alert Component
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Reusable • Customizable • Built with React & Tailwind CSS
                    </p>
                </div>

                {/* 1. Alert Types */}
                <section className="mb-10">
                    <h2 className="mb-5 text-lg font-semibold text-gray-800">
                        1. ALERT TYPES
                    </h2>

                    <div className="grid gap-4">
                        <Alert
                            type="success"
                            title="Success"
                            message="Your changes have been saved successfully."
                        />

                        <Alert
                            type="danger"
                            title="Error"
                            message="Something went wrong. Please try again."
                        />

                        <Alert
                            type="warning"
                            title="Warning"
                            message="Please check your information before continuing."
                        />

                        <Alert
                            type="info"
                            title="Information"
                            message="A new update is available."
                        />
                    </div>
                </section>

                {/* 2. Sizes */}
                <section className="mb-10">
                    <h2 className="mb-5 text-lg font-semibold text-gray-800">
                        2. SIZES
                    </h2>

                    <div className="grid gap-4">
                        <Alert
                            type="info"
                            size="sm"
                            title="Small Alert"
                            message="This is a small alert."
                        />

                        <Alert
                            type="info"
                            size="md"
                            title="Medium Alert"
                            message="This is a medium alert."
                        />

                        <Alert
                            type="info"
                            size="lg"
                            title="Large Alert"
                            message="This is a large alert."
                        />
                    </div>
                </section>

                {/* 3. Without Icon */}
                <section className="mb-10">
                    <h2 className="mb-5 text-lg font-semibold text-gray-800">
                        3. WITHOUT ICON
                    </h2>

                    <Alert
                        type="warning"
                        icon={false}
                        title="Without Icon"
                        message="This alert does not display an icon."
                    />
                </section>

                {/* 4. Custom Icon */}
                <section className="mb-10">
                    <h2 className="mb-5 text-lg font-semibold text-gray-800">
                        4. CUSTOM ICON
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2">
                        <Alert
                            type="success"
                            customIcon={MdCheckCircle}
                            iconSize={26}
                            title="Custom Icon"
                            message="You can provide your own icon."
                        />

                        <Alert
                            type="info"
                            customIcon={MdNotifications}
                            iconSize={26}
                            title="Notification"
                            message="You have a new notification."
                        />
                    </div>
                </section>

                {/* 5. Rounded */}
                <section className="mb-10">
                    <h2 className="mb-5 text-lg font-semibold text-gray-800">
                        5. ROUNDED STYLES
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2">
                        <Alert
                            type="info"
                            rounded="none"
                            title="No Rounded"
                            message="rounded='none'"
                        />

                        <Alert
                            type="info"
                            rounded="sm"
                            title="Small Rounded"
                            message="rounded='sm'"
                        />

                        <Alert
                            type="info"
                            rounded="lg"
                            title="Large Rounded"
                            message="rounded='lg'"
                        />

                        <Alert
                            type="info"
                            rounded="xl"
                            title="Extra Rounded"
                            message="rounded='xl'"
                        />
                    </div>
                </section>

                {/* 6. Closable */}
                <section className="mb-10">
                    <h2 className="mb-5 text-lg font-semibold text-gray-800">
                        6. CLOSABLE ALERT
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2">
                        <Alert
                            type="success"
                            title="Success"
                            message="This alert can be closed."
                            closable
                            onClose={() => console.log("Success closed")}
                        />

                        <Alert
                            type="danger"
                            title="Error"
                            message="Close this error alert."
                            closable
                            onClose={() => console.log("Error closed")}
                        />
                    </div>
                </section>

                {/* 7. Custom Styling */}
                <section className="mb-10">
                    <h2 className="mb-5 text-lg font-semibold text-gray-800">
                        7. CUSTOM STYLING
                    </h2>

                    <div className="grid gap-4">
                        <Alert
                            type="info"
                            title="Restaurant Update"
                            message="Your restaurant order has been confirmed."
                            customIcon={MdRestaurant}
                            className="max-w-full"
                            iconClassName="text-purple-600"
                            titleClassName="text-purple-700"
                            messageClassName="text-purple-600"
                        />

                        <Alert
                            type="success"
                            title="Custom Background"
                            message="This alert uses a custom background color."
                            bgColor="bg-emerald-50"
                            className="max-w-full border-emerald-300"
                        />
                    </div>
                </section>

                {/* 8. Custom Content */}
                <section className="mb-10">
                    <h2 className="mb-5 text-lg font-semibold text-gray-800">
                        8. CUSTOM CONTENT
                    </h2>

                    <Alert
                        type="info"
                        title="New Update"
                        message="A new version is available."
                    >
                        <div className="flex flex-wrap items-center gap-3">
                            <Button size="sm">
                                Update Now
                            </Button>

                            <Button
                                size="sm"
                                variant="ghost"
                            >
                                Later
                            </Button>
                        </div>
                    </Alert>
                </section>

                {/* 9. Position */}
                <section className="mb-10">
                    <h2 className="mb-5 text-lg font-semibold text-gray-800">
                        9. STATIC POSITION
                    </h2>

                    <Alert
                        type="success"
                        position="static"
                        title="Static Alert"
                        message="This alert stays in the normal document flow."
                    />
                </section>

                {/* 10. Close Button Customization */}
                <section className="mb-10">
                    <h2 className="mb-5 text-lg font-semibold text-gray-800">
                        10. CUSTOM CLOSE BUTTON
                    </h2>

                    <Alert
                        type="warning"
                        title="Custom Close"
                        message="The close button can also be customized."
                        closable
                        closeIconSize={18}
                        closeClassName="text-red-600 hover:bg-red-100"
                        onClose={() => console.log("Custom close")}
                    />
                </section>

                {/* 11. Notification */}
                <section className="mb-10">
                    <h2 className="mb-5 text-lg font-semibold text-gray-800">
                        11. NOTIFICATION
                    </h2>

                    <Alert
                        type="info"
                        customIcon={MdNotifications}
                        title="New Notification"
                        message="You have a new notification."
                        closable
                        onClose={() => console.log("Notification closed")}
                    />
                </section>

            </div>
        </div>
    );
};

export default AlertElements;