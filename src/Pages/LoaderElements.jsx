import Loader from "../components/ui/feedback/Loader";

const LoaderElements = () => {
    return (
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <h2 className="mb-4 text-lg font-semibold">Basic Loader</h2>
                {/* <Loader fullscreen text={'loading....'}/> */}
                <Loader />
            </div>

            <div>
                <h2 className="mb-4 text-lg font-semibold">Small Loader</h2>
                <Loader size="md" />
            </div>

            <div>
                <h2 className="mb-4 text-lg font-semibold">Large Loader</h2>
                <Loader size="lg" />
            </div>

            <div className="flex gap-3">
                <h2 className="mb-4 text-lg font-semibold ">Color</h2>
                <Loader color="green" size="lg" />
                <Loader color="red" size="lg" />
                <Loader color="blue" size="lg" />
                <Loader color="black" size="lg" />
                <Loader color="#7c3aed" size="lg" />
            </div>

            <div>
                <h2 className="mb-4 text-lg font-semibold">With Text</h2>
                <Loader text="Loading..." textClassName="font-bold" />
            </div>

            <div>
                <h2 className="mb-4 text-lg font-semibold">Ring Loader</h2>
                <Loader variant="ring" size="lg" />
            </div>

            <div>
                <h2 className="mb-4 text-lg font-semibold">Dots Loader</h2>
                <Loader variant="dots" />
            </div>

            <div>
                <h2 className="mb-4 text-lg font-semibold">Custom Style</h2>
                <Loader size="xl" className="justify-start" />
            </div>
        </div>
    );
};

export default LoaderElements;