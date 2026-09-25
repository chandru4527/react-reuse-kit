import React from "react";
import Spinner from "../components/feedback/Spinner";

const SpinnerElements = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Spinner Component
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Reusable • Customizable • Built with React & Tailwind CSS
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                    {/* 1. Sizes */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-800">
                            1. Spinner Sizes
                        </h2>

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

                    {/* 2. Colors */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-800">
                            2. Spinner Colors
                        </h2>

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

                    {/* 3. White */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-gray-800 p-6">
                        <h2 className="text-lg font-semibold text-white">
                            3. White Spinner
                        </h2>

                        <div className="flex items-center gap-6">
                            <Spinner color="white" size="sm" />
                            <Spinner color="white" size="md" />
                            <Spinner color="white" size="lg" />
                            <Spinner color="white" size="xl" />
                        </div>
                    </section>

                    {/* 4. Custom Colors */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-800">
                            4. Custom Colors
                        </h2>

                        <div className="flex flex-wrap items-center gap-6">
                            <div className="grid justify-items-center gap-2">
                                <Spinner
                                    size="lg"
                                    color="#7c3aed"
                                />
                                <span className="text-sm text-gray-500">
                                    Purple
                                </span>
                            </div>

                            <div className="grid justify-items-center gap-2">
                                <Spinner
                                    size="lg"
                                    color="#db2777"
                                />
                                <span className="text-sm text-gray-500">
                                    Pink
                                </span>
                            </div>

                            <div className="grid justify-items-center gap-2">
                                <Spinner
                                    size="lg"
                                    color="#f97316"
                                />
                                <span className="text-sm text-gray-500">
                                    Orange
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 5. Custom Styling */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6 md:col-span-2">
                        <h2 className="text-lg font-semibold text-gray-800">
                            5. Custom Styling
                        </h2>

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

                    {/* 6. Real World */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6 md:col-span-2">
                        <h2 className="text-lg font-semibold text-gray-800">
                            6. Real World Usage
                        </h2>

                        <div className="flex flex-wrap items-center gap-8">
                            <div className="flex items-center gap-2">
                                <Spinner size="sm" />
                                <span className="text-sm text-gray-600">
                                    Loading data...
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Spinner size="sm" color="green" />
                                <span className="text-sm text-gray-600">
                                    Processing...
                                </span>
                            </div>

                            <div className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2">
                                <Spinner
                                    size="sm"
                                    color="white"
                                />
                                <span className="text-sm font-medium text-white">
                                    Please wait...
                                </span>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default SpinnerElements;