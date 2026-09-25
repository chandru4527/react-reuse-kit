import ProgressBar from "../components/feedback/ProgressBar";

const ProgressBarElements = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900">
            Progress Bar Component
          </h1>

          <p className="mt-2 text-gray-500">
            Reusable • Customizable • Built with React & Tailwind CSS
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* 1. Basic */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              1. Basic Progress
            </h2>

            <ProgressBar
              label="Basic Progress"
              value={40}
            />
          </section>

          {/* 2. Colors */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              2. Colors
            </h2>

            <div className="grid gap-5">
              <ProgressBar
                label="Primary"
                value={75}
                color="blue"
              />

              <ProgressBar
                label="Success"
                value={75}
                color="green"
              />

              <ProgressBar
                label="Warning"
                value={60}
                color="yellow"
              />

              <ProgressBar
                label="Danger"
                value={90}
                color="red"
              />
            </div>
          </section>

          {/* 3. Sizes */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              3. Sizes
            </h2>

            <div className="grid gap-5">
              <ProgressBar
                label="Small"
                value={35}
                size="sm"
              />

              <ProgressBar
                label="Medium"
                value={50}
                size="md"
              />

              <ProgressBar
                label="Large"
                value={70}
                size="lg"
              />

              <ProgressBar
                label="Extra Large"
                value={85}
                size="xl"
              />
            </div>
          </section>

          {/* 4. Without Percentage */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              4. Without Percentage
            </h2>

            <ProgressBar
              label="Uploading"
              value={65}
              showValue={false}
            />
          </section>

          {/* 5. Custom Max */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              5. Custom Max Value
            </h2>

            <ProgressBar
              label="Tasks Completed"
              value={7}
              max={10}
              color="purple"
            />

            <ProgressBar
              label="Storage Used"
              value={35}
              max={50}
              color="pink"
            />
          </section>

          {/* 6. Track Colors */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              6. Track Colors
            </h2>

            <div className="grid gap-5">
              <ProgressBar
                label="Blue Track"
                value={70}
                color="blue"
                trackColor="blue"
              />

              <ProgressBar
                label="Green Track"
                value={80}
                color="green"
                trackColor="green"
              />

              <ProgressBar
                label="Purple Track"
                value={60}
                color="purple"
                trackColor="purple"
              />
            </div>
          </section>

          {/* 7. Rounded */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              7. Rounded
            </h2>

            <div className="grid gap-5">
              <ProgressBar
                label="No Rounded"
                value={40}
                rounded="none"
              />

              <ProgressBar
                label="Small Rounded"
                value={55}
                rounded="sm"
              />

              <ProgressBar
                label="Large Rounded"
                value={70}
                rounded="lg"
              />

              <ProgressBar
                label="Full Rounded"
                value={85}
                rounded="full"
              />
            </div>
          </section>

          {/* 8. Animated */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              8. Animated
            </h2>

            <ProgressBar
              label="Processing"
              value={70}
              color="purple"
              animated
            />
          </section>

          {/* 9. Custom Color */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              9. Custom Color
            </h2>

            <div className="grid gap-5">
              <ProgressBar
                label="Custom Purple"
                value={65}
                color="#7c3aed"
              />

              <ProgressBar
                label="Custom Orange"
                value={80}
                color="#f97316"
              />
            </div>
          </section>

          {/* 10. Custom Styling */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              10. Custom Styling
            </h2>

            <ProgressBar
              label="Custom Progress"
              value={75}
              color="blue"
              labelClassName="text-blue-700"
              valueClassName="text-blue-600"
              className="rounded-lg bg-blue-50 p-4"
              barClassName="shadow-md"
            />
          </section>

          {/* 11. Indeterminate */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              11. Indeterminate
            </h2>

            <ProgressBar
              label="Loading Data"
              indeterminate
              color="blue"
            />
          </section>

          {/* 12. Circle Progress */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              12. Circle Progress
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <ProgressBar
                variant="circle"
                value={35}
                size="sm"
              />

              <ProgressBar
                variant="circle"
                value={60}
                size="md"
                color="blue"
              />

              <ProgressBar
                variant="circle"
                value={80}
                size="lg"
                color="green"
              />

              <ProgressBar
                variant="circle"
                value={95}
                size="xl"
                color="purple"
              />
            </div>
          </section>

          {/* 13. Circle Colors */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              13. Circle Colors
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <ProgressBar
                variant="circle"
                value={75}
                color="blue"
                size="lg"
              />

              <ProgressBar
                variant="circle"
                value={75}
                color="green"
                size="lg"
              />

              <ProgressBar
                variant="circle"
                value={75}
                color="red"
                size="lg"
              />

              <ProgressBar
                variant="circle"
                value={75}
                color="yellow"
                size="lg"
              />

              <ProgressBar
                variant="circle"
                value={75}
                color="purple"
                size="lg"
              />
            </div>
          </section>

          {/* 14. Circle With Label */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              14. Circle With Label
            </h2>

            <div className="flex items-center justify-center">
              <ProgressBar
                variant="circle"
                value={72}
                size="xl"
                color="green"
                label="Profile Complete"
              />
            </div>
          </section>

          {/* 15. Circle Custom Color */}
          <section className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              15. Circle Custom Color
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <ProgressBar
                variant="circle"
                value={65}
                size="lg"
                color="#7c3aed"
                trackColor="#ede9fe"
              />

              <ProgressBar
                variant="circle"
                value={85}
                size="lg"
                color="#f97316"
                trackColor="#ffedd5"
              />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ProgressBarElements;