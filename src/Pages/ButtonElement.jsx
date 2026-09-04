import React from "react";
import { MdAdd, MdCheck, MdDelete, MdDownload, MdArrowForward, MdSend, MdShare, } from "react-icons/md";

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
                        <Button variant="primary" shape="rounded">
                            Primary
                        </Button>

                        <Button variant="secondary" shape="rounded">
                            Secondary
                        </Button>

                        <Button variant="success" shape="rounded">
                            Success
                        </Button>

                        <Button variant="danger" shape="rounded">
                            Danger
                        </Button>

                        <Button variant="warning" shape="rounded">
                            Warning
                        </Button>

                        <Button variant="outline" shape="rounded">
                            Outline
                        </Button>

                        <Button variant="ghost" shape="rounded">
                            Ghost
                        </Button>
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

                {/* Icons */}
                <section className="border-t border-gray-100 py-5">
                    <h2 className="mb-6 font-bold text-gray-800">
                        3. WITH ICONS
                    </h2>

                    <div className="flex flex-wrap gap-5">
                        <Button leftIcon={<MdAdd size={20} />}>
                            Add User
                        </Button>

                        <Button variant="success" leftIcon={<MdCheck size={20} />}>
                            Success
                        </Button>

                        <Button variant="danger" leftIcon={<MdDelete size={20} />}>
                            Delete
                        </Button>

                        <Button variant="outline" leftIcon={<MdDownload size={20} />}>
                            Download
                        </Button>

                        <Button rightIcon={<MdArrowForward size={20} />}>
                            Next
                        </Button>

                        <Button rightIcon={<MdSend size={20} />}>
                            Send
                        </Button>

                        <Button
                            leftIcon={<MdShare size={20} />}
                            rightIcon={<MdShare size={20} />}
                        >
                            Share
                        </Button>
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

                        <Button disabled>
                            Disabled
                        </Button>

                        <Button loading disabled>
                            Processing
                        </Button>
                    </div>
                </section>

                {/* OnClick */}
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
                <section className="border-t border-gray-100 pt-5">
                    <h2 className="mb-6 font-bold text-gray-800">
                        7. CUSTOM STYLES
                    </h2>

                    <div className="flex flex-wrap gap-5">
                        <Button
                            shape="full"
                            className="bg-purple-600 px-8 hover:bg-purple-700"
                        >
                            Rounded Full
                        </Button>

                        <Button className="bg-gray-900 px-8 hover:bg-gray-800">
                            Dark Mode
                        </Button>

                        <Button className="bg-white px-8 text-black shadow-lg hover:bg-gray-50">
                            With Shadow
                        </Button>

                        <Button className="border-0 bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 px-8">
                            Gradient
                        </Button>
                    </div>
                </section>
            </div>
        </div>

    );
};

export default ButtonElement;
