import React from "react";
import { useForm } from "react-hook-form";
import Radio from "../components/ui/forms/Radio";

const RadioElement = () => {
    const {
        register,
        clearErrors,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            gender: "",
            plan: "",
            status: "",
            payment: "",
            required: "",
            disabled: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full p-5">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                {/* Basic Radio */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="mb-4 text-base font-semibold text-gray-800">
                        Basic Radio
                    </h3>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
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

                        <Radio
                            label="Other"
                            name="gender"
                            value="other"
                            register={register}
                            clearErrors={clearErrors}
                        />
                    </div>
                </div>

                {/* Grid Radio */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="mb-4 text-base font-semibold text-gray-800">
                        Grid Radio
                    </h3>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <Radio
                            label="Basic"
                            name="plan"
                            value="basic"
                            register={register}
                            clearErrors={clearErrors}
                        />

                        <Radio
                            label="Standard"
                            name="plan"
                            value="standard"
                            register={register}
                            clearErrors={clearErrors}
                        />

                        <Radio
                            label="Premium"
                            name="plan"
                            value="premium"
                            register={register}
                            clearErrors={clearErrors}
                        />

                        <Radio
                            label="Enterprise"
                            name="plan"
                            value="enterprise"
                            register={register}
                            clearErrors={clearErrors}
                        />
                    </div>
                </div>

                {/* Different Colors */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="mb-4 text-base font-semibold text-gray-800">
                        Different Colors
                    </h3>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <Radio
                            label="Blue"
                            name="status"
                            value="blue"
                            register={register}
                            clearErrors={clearErrors}
                            radioClassName="accent-blue-600"
                        />

                        <Radio
                            label="Green"
                            name="status"
                            value="green"
                            register={register}
                            clearErrors={clearErrors}
                            radioClassName="accent-green-600"
                        />

                        <Radio
                            label="Red"
                            name="status"
                            value="red"
                            register={register}
                            clearErrors={clearErrors}
                            radioClassName="accent-red-600"
                        />

                        <Radio
                            label="Purple"
                            name="status"
                            value="purple"
                            register={register}
                            clearErrors={clearErrors}
                            radioClassName="accent-purple-600"
                        />
                    </div>
                </div>

                {/* Card Style */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="mb-4 text-base font-semibold text-gray-800">
                        Card Style
                    </h3>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <Radio
                            label="Cash"
                            name="payment"
                            value="cash"
                            register={register}
                            clearErrors={clearErrors}
                            labelClassName="rounded-lg border border-gray-200 bg-gray-50 p-4 transition hover:border-blue-500 hover:bg-blue-50"
                            radioClassName="accent-blue-600"
                        />

                        <Radio
                            label="Card"
                            name="payment"
                            value="card"
                            register={register}
                            clearErrors={clearErrors}
                            labelClassName="rounded-lg border border-gray-200 bg-gray-50 p-4 transition hover:border-green-500 hover:bg-green-50"
                            radioClassName="accent-green-600"
                        />

                        <Radio
                            label="UPI"
                            name="payment"
                            value="upi"
                            register={register}
                            clearErrors={clearErrors}
                            labelClassName="rounded-lg border border-gray-200 bg-gray-50 p-4 transition hover:border-purple-500 hover:bg-purple-50"
                            radioClassName="accent-purple-600"
                        />
                    </div>
                </div>

                {/* Disabled */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="mb-4 text-base font-semibold text-gray-800">
                        Disabled Radio
                    </h3>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <Radio
                            label="Available Option"
                            name="disabled"
                            value="available"
                            register={register}
                            clearErrors={clearErrors}
                        />

                        <Radio
                            label="Disabled Option"
                            name="disabled"
                            value="disabled"
                            register={register}
                            clearErrors={clearErrors}
                            disabled
                        />
                    </div>
                </div>

                {/* Required */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="mb-4 text-base font-semibold text-gray-800">
                        Required Radio
                    </h3>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <Radio
                            label="Accept"
                            name="required"
                            value="accept"
                            register={register}
                            clearErrors={clearErrors}
                            required
                            error={errors.required}
                        />

                        <Radio
                            label="Reject"
                            name="required"
                            value="reject"
                            register={register}
                            clearErrors={clearErrors}
                            required
                            error={errors.required}
                        />
                    </div>
                </div>

            </div>

            <button
                type="submit"
                className="mt-8 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
                Submit
            </button>
        </form>
    );
};

export default RadioElement;