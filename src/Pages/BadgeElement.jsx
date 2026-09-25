import Badge from "../components/feedback/Badge";

const BadgeElements = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Badge Component
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Reusable • Lightweight • Built with React & Tailwind CSS
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {/* 1. Variants */}
                    <section className="grid gap-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            1. Variants
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            <Badge>Default</Badge>
                            <Badge variant="primary">Primary</Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="danger">Danger</Badge>
                            <Badge variant="warning">Warning</Badge>
                            <Badge variant="info">Info</Badge>
                            <Badge variant="purple">Purple</Badge>
                            <Badge variant="pink">Pink</Badge>
                        </div>
                    </section>

                    {/* 2. Sizes */}
                    <section className="grid gap-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            2. Sizes
                        </h2>

                        <div className="flex flex-wrap items-center gap-3">
                            <Badge size="xs" variant="primary">
                                Extra Small
                            </Badge>

                            <Badge size="sm" variant="primary">
                                Small
                            </Badge>

                            <Badge size="md" variant="primary">
                                Medium
                            </Badge>

                            <Badge size="lg" variant="primary">
                                Large
                            </Badge>
                        </div>
                    </section>

                    {/* 3. Dot */}
                    <section className="grid gap-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            3. Dot
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            <Badge variant="success" dot>
                                Active
                            </Badge>

                            <Badge variant="danger" dot>
                                Inactive
                            </Badge>

                            <Badge variant="warning" dot>
                                Pending
                            </Badge>

                            <Badge variant="info" dot>
                                Processing
                            </Badge>
                        </div>
                    </section>

                    {/* 4. Rounded */}
                    <section className="grid gap-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            4. Rounded
                        </h2>

                        <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="primary" rounded="none">
                                None
                            </Badge>

                            <Badge variant="primary" rounded="sm">
                                Small
                            </Badge>

                            <Badge variant="primary" rounded="md">
                                Medium
                            </Badge>

                            <Badge variant="primary" rounded="lg">
                                Large
                            </Badge>

                            <Badge variant="primary" rounded="full">
                                Full
                            </Badge>
                        </div>
                    </section>

                    {/* 5. Status */}
                    <section className="grid gap-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            5. Status
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            <Badge variant="success" dot>
                                Online
                            </Badge>

                            <Badge variant="danger" dot>
                                Offline
                            </Badge>

                            <Badge variant="warning" dot>
                                Away
                            </Badge>

                            <Badge variant="primary" dot>
                                New
                            </Badge>
                        </div>
                    </section>

                    {/* 6. Border */}
                    <section className="grid gap-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            6. Border
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            <Badge variant="primary">
                                With Border
                            </Badge>

                            <Badge
                                variant="success"
                                border={false}
                            >
                                Without Border
                            </Badge>

                            <Badge
                                variant="danger"
                                border={false}
                                dot
                            >
                                No Border
                            </Badge>
                        </div>
                    </section>

                    {/* 7. Custom Styling */}
                    <section className="grid gap-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            7. Custom Styling
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            <Badge
                                variant="primary"
                                className="shadow-md"
                            >
                                Custom Shadow
                            </Badge>

                            <Badge
                                variant="success"
                                size="lg"
                                className="px-5"
                            >
                                Custom Padding
                            </Badge>

                            <Badge
                                variant="purple"
                                className="text-base uppercase tracking-wide"
                            >
                                Custom Text
                            </Badge>
                        </div>
                    </section>

                    {/* 8. Real World Status */}
                    <section className="grid gap-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            8. Real World
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            <Badge variant="success" dot>
                                Active
                            </Badge>

                            <Badge variant="danger" dot>
                                Deleted
                            </Badge>

                            <Badge variant="warning" dot>
                                Pending
                            </Badge>

                            <Badge variant="info">
                                Draft
                            </Badge>

                            <Badge variant="purple">
                                Premium
                            </Badge>

                            <Badge variant="pink">
                                Featured
                            </Badge>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default BadgeElements;