import React from "react";
import { MdCheckCircle, MdNotifications, MdRestaurant,} from "react-icons/md";
import Alert from "../components/ui/feedback/Alert";

const AlertElements = () => {
    return (
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
            <div>
                <h2 className="mb-4 text-xl font-semibold">Alert Types</h2>

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
            </div>

            <div>
                <h2 className="mb-4 text-xl font-semibold">Alert Variations</h2>

                <div className="grid gap-4">
                    <Alert
                        type="success"
                        size="sm"
                        title="Small Alert"
                        message="Small size alert."
                    />

                    <Alert
                        type="info"
                        size="lg"
                        rounded="xl"
                        title="Large Alert"
                        message="Large rounded information alert."
                    />

                    <Alert
                        type="warning"
                        icon={false}
                        title="Without Icon"
                        message="This alert does not display an icon."
                    />

                    <Alert
                        type="success"
                        customIcon={MdCheckCircle}
                        iconSize={26}
                        title="Custom Icon"
                        message="You can provide your own icon."
                    />
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-xl font-semibold">Closable Alert</h2>

                <Alert
                    type="info"
                    title="Notification"
                    message="This alert can be closed."
                    closable
                    onClose={() => console.log("Alert closed")}
                />
            </div>

            <div>
                <h2 className="mb-4 text-xl font-semibold">Custom Styling</h2>

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
            </div>

            <div>
                <h2 className="mb-4 text-xl font-semibold">Position</h2>

                <Alert
                    type="success"
                    position="static"
                    title="Static Alert"
                    message="This alert stays in the normal document flow."
                />
            </div>

            <div>
                <h2 className="mb-4 text-xl font-semibold">Notification</h2>

                <Alert
                    type="info"
                    customIcon={MdNotifications}
                    title="New Notification"
                    message="You have a new notification."
                    closable
                    onClose={() => console.log("Notification closed")}
                />
            </div>
        </div>
    );
};

export default AlertElements;