import { useForm } from "react-hook-form";
import Radio from "../components/forms/Radio";

const RadioElement = () => {
    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Radio Components
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Basic, groups, validation, disabled and custom styling
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {/* 1. Basic Radio */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <h2 className="mb-4 text-lg font-semibold">
                                1. Basic Radio
                            </h2>

                            <div className="space-y-3">
                                <Radio
                                    label="Male"
                                    name="gender"
                                    value="male"
                                    register={register}
                                    clearErrors={clearErrors}
                                />

                                <Radio
                                    label="Female"
                                    name="gender"
                                    value="female"
                                    register={register}
                                    clearErrors={clearErrors}
                                />
                            </div>
                        </div>

                        {/* 2. Radio Group */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <h2 className="mb-4 text-lg font-semibold">
                                2. Radio Group
                            </h2>

                            <div className="space-y-3">
                                <Radio
                                    label="Admin"
                                    name="role"
                                    value="admin"
                                    register={register}
                                    clearErrors={clearErrors}
                                />

                                <Radio
                                    label="Manager"
                                    name="role"
                                    value="manager"
                                    register={register}
                                    clearErrors={clearErrors}
                                />

                                <Radio
                                    label="User"
                                    name="role"
                                    value="user"
                                    register={register}
                                    clearErrors={clearErrors}
                                />
                            </div>
                        </div>

                        {/* 3. Horizontal Radio */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <h2 className="mb-4 text-lg font-semibold">
                                3. Horizontal Radio
                            </h2>

                            <div className="flex flex-wrap gap-5">
                                <Radio
                                    label="Yes"
                                    name="status"
                                    value="yes"
                                    register={register}
                                    clearErrors={clearErrors}
                                    className="w-auto"
                                />

                                <Radio
                                    label="No"
                                    name="status"
                                    value="no"
                                    register={register}
                                    clearErrors={clearErrors}
                                    className="w-auto"
                                />

                                <Radio
                                    label="Maybe"
                                    name="status"
                                    value="maybe"
                                    register={register}
                                    clearErrors={clearErrors}
                                    className="w-auto"
                                />
                            </div>
                        </div>

                        {/* 4. Required Radio */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <h2 className="mb-4 text-lg font-semibold">
                                4. Required Radio
                            </h2>

                            <div className="space-y-3">
                                <Radio
                                    label="Cash"
                                    name="payment"
                                    value="cash"
                                    register={register}
                                    clearErrors={clearErrors}
                                    required
                                    error={errors.payment}
                                />

                                <Radio
                                    label="Card"
                                    name="payment"
                                    value="card"
                                    register={register}
                                    clearErrors={clearErrors}
                                    required
                                    error={errors.payment}
                                />

                                <Radio
                                    label="UPI"
                                    name="payment"
                                    value="upi"
                                    register={register}
                                    clearErrors={clearErrors}
                                    required
                                    error={errors.payment}
                                />
                            </div>
                        </div>

                        {/* 5. Disabled Radio */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <h2 className="mb-4 text-lg font-semibold">
                                5. Disabled Radio
                            </h2>

                            <div className="space-y-3">
                                <Radio
                                    label="Available"
                                    name="availability"
                                    value="available"
                                    register={register}
                                    clearErrors={clearErrors}
                                />

                                <Radio
                                    label="Coming Soon"
                                    name="availability"
                                    value="coming-soon"
                                    register={register}
                                    clearErrors={clearErrors}
                                    disabled
                                />

                                <Radio
                                    label="Unavailable"
                                    name="availability"
                                    value="unavailable"
                                    register={register}
                                    clearErrors={clearErrors}
                                />
                            </div>
                        </div>

                        {/* 6. Error State */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <h2 className="mb-4 text-lg font-semibold">
                                6. Error State
                            </h2>

                            <div className="space-y-3">
                                <Radio
                                    label="Option A"
                                    name="requiredOption"
                                    value="a"
                                    register={register}
                                    clearErrors={clearErrors}
                                    required
                                    error={errors.requiredOption}
                                />

                                <Radio
                                    label="Option B"
                                    name="requiredOption"
                                    value="b"
                                    register={register}
                                    clearErrors={clearErrors}
                                    required
                                    error={errors.requiredOption}
                                />
                            </div>
                        </div>

                        {/* 7. Custom Radio Style */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <h2 className="mb-4 text-lg font-semibold">
                                7. Custom Radio Style
                            </h2>

                            <div className="space-y-3">
                                <Radio
                                    label="Primary"
                                    name="customColor"
                                    value="primary"
                                    register={register}
                                    clearErrors={clearErrors}
                                    radioClassName="accent-purple-600"
                                    labelClassName="text-purple-700"
                                />

                                <Radio
                                    label="Secondary"
                                    name="customColor"
                                    value="secondary"
                                    register={register}
                                    clearErrors={clearErrors}
                                    radioClassName="accent-pink-600"
                                    labelClassName="text-pink-700"
                                />
                            </div>
                        </div>

                        {/* 8. Custom Error Style */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <h2 className="mb-4 text-lg font-semibold">
                                8. Custom Error Style
                            </h2>

                            <Radio
                                label="Accept Terms"
                                name="terms"
                                value="accepted"
                                register={register}
                                clearErrors={clearErrors}
                                required
                                error={errors.terms}
                                errorClassName="font-medium text-orange-500"
                            />
                        </div>

                        {/* 9. Subscription */}
                        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                            <h2 className="mb-4 text-lg font-semibold">
                                9. Subscription
                            </h2>

                            <div className="space-y-3">
                                <Radio
                                    label="Free"
                                    name="subscription"
                                    value="free"
                                    register={register}
                                    clearErrors={clearErrors}
                                />

                                <Radio
                                    label="Basic"
                                    name="subscription"
                                    value="basic"
                                    register={register}
                                    clearErrors={clearErrors}
                                />

                                <Radio
                                    label="Premium"
                                    name="subscription"
                                    value="premium"
                                    register={register}
                                    clearErrors={clearErrors}
                                />
                            </div>
                        </div>

                    </div>

                    {/* Submit */}
                    <div className="mt-8 flex justify-center">
                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RadioElement;