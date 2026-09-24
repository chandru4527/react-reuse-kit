import {
    MdAdd,
    MdArrowForward,
    MdCheck,
    MdClose,
    MdDelete,
    MdEdit,
} from "react-icons/md";

import Button from "../components/ui/buttons/Button";

const ButtonElement = () => {
    const handleClick = (message) => {
        alert(`${message} button clicked!`);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
            <div className="mx-auto max-w-7xl rounded border border-gray-200 bg-white p-5 shadow-sm sm:p-8">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-lg font-bold text-gray-900 sm:text-2xl">
                        Button Component
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        Reusable • Customizable • Built with React & Tailwind CSS
                    </p>
                </div>

                {/* Variants */}
                <section className="border-t border-gray-100 py-5">
                    <h2 className="mb-6 font-bold text-gray-800">
                        1. VARIANTS
                    </h2>

                    <div className="flex flex-wrap gap-5">
                        <Button variant="normal">Normal</Button>
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="success">Success</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                </section>

                {/* Sizes */}
                <section className="border-t border-gray-100 py-5">
                    <h2 className="mb-6 font-bold text-gray-800">
                        2. SIZES
                    </h2>

                    <div className="flex flex-wrap items-center gap-5">
                        <Button size="xs">Extra Small</Button>
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                        <Button size="xl">Extra Large</Button>
                    </div>
                </section>

                {/* Shapes */}
                <section className="border-t border-gray-100 py-5">
                    <h2 className="mb-6 font-bold text-gray-800">
                        3. SHAPES
                    </h2>

                    <div className="flex flex-wrap items-center gap-5">
                        <Button shape="default">Default</Button>
                        <Button shape="rounded">Rounded</Button>
                        <Button shape="full">Full</Button>
                        <Button shape="square">Square</Button>
                    </div>
                </section>

                {/* States */}
                <section className="border-t border-gray-100 py-5">
                    <h2 className="mb-6 font-bold text-gray-800">
                        4. STATES
                    </h2>

                    <div className="flex flex-wrap gap-5">
                        <Button>Default</Button>

                        <Button loading>
                            Loading
                        </Button>

                        <Button loading loadingText="Processing...">
                            Processing
                        </Button>

                        <Button disabled>
                            Disabled
                        </Button>

                        <Button loading disabled>
                            Disabled Loading
                        </Button>
                    </div>
                </section>

                {/* On Click */}
                <section className="border-t border-gray-100 py-5">
                    <h2 className="mb-6 font-bold text-gray-800">
                        5. ON CLICK
                    </h2>

                    <Button onClick={() => handleClick("Primary")}>
                        Click Me
                    </Button>
                </section>

                {/* Full Width */}
                <section className="border-t border-gray-100 py-5">
                    <h2 className="mb-6 font-bold text-gray-800">
                        6. FULL WIDTH
                    </h2>

                    <Button fullWidth>
                        This is a Full Width Button
                    </Button>
                </section>

                {/* Custom */}
                <section className="border-t border-gray-100 py-5">
                    <h2 className="mb-6 font-bold text-gray-800">
                        7. CUSTOM STYLES
                    </h2>

                    <div className="flex flex-wrap gap-5">
                        <Button
                            shape="full"
                            className="bg-purple-600 px-8 text-white hover:bg-purple-700"
                        >
                            Rounded Full
                        </Button>

                        <Button className="bg-gray-900 px-8 text-white hover:bg-gray-800">
                            Dark Button
                        </Button>

                        <Button className="bg-white px-8 text-black shadow-lg hover:bg-gray-50">
                            With Shadow
                        </Button>

                        <Button className="border-0 bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white">
                            Gradient
                        </Button>
                    </div>
                </section>

                {/* Icons */}
                <section className="border-t border-gray-100 py-5">
                    <h2 className="mb-6 font-bold text-gray-800">
                        8. ICONS
                    </h2>

                    <div className="flex flex-wrap items-center gap-5">

                        {/* Start Icon */}
                        <Button
                            variant="primary"
                            icon={MdAdd}
                            iconPosition="start"
                        >
                            Add User
                        </Button>

                        {/* End Icon */}
                        <Button
                            variant="outline"
                            icon={MdEdit}
                            iconPosition="end"
                        >
                            Edit
                        </Button>

                        {/* Start Icon */}
                        <Button
                            variant="success"
                            icon={MdCheck}
                            iconPosition="start"
                        >
                            Save
                        </Button>

                        {/* End Icon */}
                        <Button
                            variant="primary"
                            icon={MdArrowForward}
                            iconPosition="end"
                        >
                            Continue
                        </Button>

                        {/* Custom Icon Size */}
                        <Button
                            variant="warning"
                            icon={MdAdd}
                            iconPosition="start"
                            iconSize={18}
                        >
                            Add Item
                        </Button>

                        {/* Only Icon */}
                        <Button
                            variant="danger"
                            shape="rounded"
                            className="h-10 w-10 p-0"
                            aria-label="Delete"
                        >
                            <MdDelete size={20} />
                        </Button>

                        {/* Only Close Icon */}
                        <Button
                            variant="normal"
                            shape="full"
                            className="h-10 w-10 p-0"
                            aria-label="Close"
                        >
                            <MdClose size={20} />
                        </Button>

                    </div>
                </section>

            </div>
        </div>
    );
};

export default ButtonElement;