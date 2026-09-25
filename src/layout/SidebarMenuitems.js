import {
    MdDashboard, MdTouchApp, MdCreditCard, MdGridOn, MdOpenInNew, MdEdit, MdClose, MdExpandMore,
     MdPerson, MdNavigation, MdImage,
} from "react-icons/md";


export const menuItems = [
    {
        label: "Dashboard",
        icon: MdDashboard,
        path: "/admin",
    },
    {
        label: "Buttons",
        icon: MdTouchApp,
        path: "/admin/buttons",
    },
    {
        label: "Cards",
        icon: MdCreditCard,
        path: "/admin/cards",
    },
    {
        label: "Slider",
        icon: MdCreditCard,
        path: "/admin/slider",
    },
    {
        label: "Tables",
        icon: MdGridOn,
        path: "/admin/tables",
    },
    {
        label: "Modals",
        icon: MdOpenInNew,
        path: "/admin/modals&drawer",
    },
    {
        label: "Forms",
        icon: MdEdit,
        children: [
            {
                path: "/admin/inputs",
                label: "Input",
            },
            {
                path: "/admin/form/select",
                label: "Select",
            },
            {
                path: "/admin/form/textarea",
                label: "Textarea",
            },
            {
                path: "/admin/form/fileinput",
                label: "FileInput",
            },
            {
                path: "/admin/form/checkbox",
                label: "Checkbox",
            },
            {
                path: "/admin/form/switch",
                label: "Switch",
            },
            {
                path: "/admin/form/radio",
                label: "Radio",
            },

        ],
    },
    {
        label: "Feedback",
        icon: MdPerson,
        children: [
            {
                path: "/admin/feedback/avatar",
                label: "Avatar",
            },
            {
                path: "/admin/feedback/badge",
                label: "Badge",
            },
            {
                path: "/admin/feedback/alert",
                label: "Alert",
            },
            {
                path: "/admin/feedback/empty-state",
                label: "Empty State",
            },
            {
                path: "/admin/feedback/loader",
                label: "Loader",
            },
            {
                path: "/admin/feedback/spinner",
                label: "Spinner",
            },
            {
                path: "/admin/feedback/tooltip",
                label: "Tooltip",
            },
            {
                path: "/admin/feedback/Progressbar",
                label: "ProgressBar",
            },
        ]
    },
    {
        label: "Navigation",
        icon: MdNavigation,
        children: [
            {
                path: "/admin/navigation/breadcrumb",
                label: "Breadcrumb",
            },
            {
                path: "/admin/navigation/navigation",
                label: "Navigation",
            },
        ]
    },
    {
        label: "Media Elements",
        icon: MdImage,
        children: [
            {
                path: "/admin/media-elements/img",
                label: "Image",
            },
            {
                path: "/admin/media-elements/video",
                label: "Video",
            },
            {
                path: "/admin/media-elements/audio",
                label: "Audio",
            },
        ]
    },

];