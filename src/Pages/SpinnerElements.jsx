import React from "react";
import Spinner from "../components/ui/feedback/Spinner";

const SpinnerElements = () => {
    return (
        <div className="grid grid-cols-1 gap-6">
            {/* Sizes */}
            <section className="grid gap-4 rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-800">Spinner Sizes</h2>

                <div className="flex flex-wrap items-center gap-6">
                    <div className="grid justify-items-center gap-2">
                        <Spinner size="xs" />
                        <span className="text-sm text-gray-500">XS</span>
                    </div>

                    <div className="grid justify-items-center gap-2">
                        <Spinner size="sm" />
                        <span className="text-sm text-gray-500">SM</span>
                    </div>

                    <div className="grid justify-items-center gap-2">
                        <Spinner size="md" />
                        <span className="text-sm text-gray-500">MD</span>
                    </div>

                    <div className="grid justify-items-center gap-2">
                        <Spinner size="lg" />
                        <span className="text-sm text-gray-500">LG</span>
                    </div>

                    <div className="grid justify-items-center gap-2">
                        <Spinner size="xl" />
                        <span className="text-sm text-gray-500">XL</span>
                    </div>
                </div>
            </section>

            {/* Colors */}
            <section className="grid gap-4 rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-800">Spinner Colors</h2>

                <div className="flex flex-wrap items-center gap-6">
                    <div className="grid justify-items-center gap-2">
                        <Spinner color="blue" />
                        <span className="text-sm text-gray-500">Blue</span>
                    </div>

                    <div className="grid justify-items-center gap-2">
                        <Spinner color="green" />
                        <span className="text-sm text-gray-500">Green</span>
                    </div>

                    <div className="grid justify-items-center gap-2">
                        <Spinner color="red" />
                        <span className="text-sm text-gray-500">Red</span>
                    </div>

                    <div className="grid justify-items-center gap-2">
                        <Spinner color="yellow" />
                        <span className="text-sm text-gray-500">Yellow</span>
                    </div>

                    <div className="grid justify-items-center gap-2">
                        <Spinner color="gray" />
                        <span className="text-sm text-gray-500">Gray</span>
                    </div>
                </div>
            </section>

            {/* White Spinner */}
            <section className="grid gap-4 rounded-lg border border-gray-200 bg-gray-800 p-6">
                <h2 className="text-lg font-semibold text-white">White Spinner</h2>

                <div className="flex items-center gap-6">
                    <Spinner color="white" size="sm" />
                    <Spinner color="white" size="md" />
                    <Spinner color="white" size="lg" />
                    <Spinner color="white" size="xl" />
                </div>
            </section>

            {/* Custom Styling */}
            <section className="grid gap-4 rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-gray-800">Custom Styling</h2>

                <div className="flex flex-wrap items-center gap-6">
                    <Spinner
                        size="lg"
                        className="border-purple-300 border-t-purple-600"
                    />

                    <Spinner
                        size="lg"
                        className="border-pink-300 border-t-pink-600"
                    />

                    <Spinner
                        size="lg"
                        className="border-orange-300 border-t-orange-600"
                    />
                </div>
            </section>
        </div>
    );
};

export default SpinnerElements;