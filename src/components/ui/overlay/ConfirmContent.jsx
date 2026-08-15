import { MdDeleteOutline, MdCheckCircleOutline, MdWarningAmber, MdInfoOutline, MdHelpOutline, } from "react-icons/md";

const ConfirmContent = ({
    type = "danger",
    message,
}) => {
    const config = {
        danger: {
            icon: MdDeleteOutline,
            iconStyle: "bg-red-100 text-red-600",
        },
        success: {
            icon: MdCheckCircleOutline,
            iconStyle: "bg-green-100 text-green-600",
        },
        warning: {
            icon: MdWarningAmber,
            iconStyle: "bg-yellow-100 text-yellow-600",
        },
        info: {
            icon: MdInfoOutline,
            iconStyle: "bg-blue-100 text-blue-600",
        },
        question: {
            icon: MdHelpOutline,
            iconStyle: "bg-purple-100 text-purple-600",
        },
    };

    const current = config[type] || config.danger;
    const Icon = current.icon;

    return (
        <div className="flex flex-col items-center text-center">

            {/* Icon */}
            <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${current.iconStyle}`}>
                <Icon size={30} />
            </div>

            {/* Message */}
            <p className="mt-4 text-sm leading-6 text-gray-600">
                {message}
            </p>

        </div>
    );
};

export default ConfirmContent;