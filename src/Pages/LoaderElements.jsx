import Loader from "../components/feedback/Loader";

const LoaderElements = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Loader Component
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Reusable • Customizable • Built with React & Tailwind CSS
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {/* 1. Basic */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            1. Basic Loader
                        </h2>

                        <Loader />
                    </section>

                    {/* 2. Sizes */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            2. Sizes
                        </h2>

                        <div className="flex flex-wrap items-center gap-5">
                            <Loader size="xs" />
                            <Loader size="sm" />
                            <Loader size="md" />
                            <Loader size="lg" />
                            <Loader size="xl" />
                        </div>
                    </section>

                    {/* 3. Colors */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            3. Colors
                        </h2>

                        <div className="flex flex-wrap items-center gap-5">
                            <Loader color="blue" size="lg" />
                            <Loader color="green" size="lg" />
                            <Loader color="red" size="lg" />
                            <Loader color="yellow" size="lg" />
                            <Loader color="gray" size="lg" />
                            <Loader color="black" size="lg" />
                            <Loader color="#7c3aed" size="lg" />
                        </div>
                    </section>

                    {/* 4. Variants */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            4. Variants
                        </h2>

                        <div className="flex items-center gap-6">
                            <div className="grid justify-items-center gap-2">
                                <Loader variant="spinner" size="lg" />
                                <span className="text-xs text-gray-500">
                                    Spinner
                                </span>
                            </div>

                            <div className="grid justify-items-center gap-2">
                                <Loader variant="ring" size="lg" />
                                <span className="text-xs text-gray-500">
                                    Ring
                                </span>
                            </div>

                            <div className="grid justify-items-center gap-2">
                                <Loader variant="dots" size="lg" />
                                <span className="text-xs text-gray-500">
                                    Dots
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 5. With Text */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            5. With Text
                        </h2>

                        <Loader
                            text="Loading..."
                            textClassName="font-medium text-blue-600"
                        />
                    </section>

                    {/* 6. Different Text Sizes */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            6. Loader With Sizes
                        </h2>

                        <div className="grid gap-4">
                            <Loader size="sm" text="Loading..." />
                            <Loader size="md" text="Please wait..." />
                            <Loader size="lg" text="Processing..." />
                        </div>
                    </section>

                    {/* 7. Custom Color */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            7. Custom Color
                        </h2>

                        <div className="flex items-center gap-5">
                            <Loader color="#7c3aed" size="lg" />
                            <Loader color="#f97316" size="lg" />
                            <Loader color="#0891b2" size="lg" />
                        </div>
                    </section>

                    {/* 8. Custom Loader Style */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            8. Custom Loader Style
                        </h2>

                        <Loader
                            size="xl"
                            loaderClassName="border-8"
                        />
                    </section>

                    {/* 9. Custom Container */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            9. Custom Container
                        </h2>

                        <Loader
                            size="lg"
                            className="justify-start rounded-lg bg-gray-100 p-5"
                        />
                    </section>

                    {/* 10. Dots Colors */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            10. Dots Colors
                        </h2>

                        <div className="flex flex-wrap items-center gap-6">
                            <Loader variant="dots" color="blue" />
                            <Loader variant="dots" color="green" />
                            <Loader variant="dots" color="red" />
                            <Loader variant="dots" color="purple" />
                        </div>
                    </section>

                    {/* 11. Ring Colors */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            11. Ring Colors
                        </h2>

                        <div className="flex flex-wrap items-center gap-5">
                            <Loader variant="ring" color="blue" size="lg" />
                            <Loader variant="ring" color="green" size="lg" />
                            <Loader variant="ring" color="red" size="lg" />
                            <Loader variant="ring" color="black" size="lg" />
                        </div>
                    </section>

                    {/* 12. Fullscreen */}
                    <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            12. Fullscreen
                        </h2>

                        <p className="text-sm text-gray-500">
                            Uncomment the example below to test fullscreen mode.
                        </p>

                        {/* 
                        <Loader
                            fullscreen
                            text="Loading..."
                            size="lg"
                        />
                        */}
                    </section>

                </div>
            </div>
        </div>
    );
};

export default LoaderElements;