import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    MdEdit,
    MdMessage,
    MdNotes,
    MdLocationOn,
    MdFeedback,
    MdPerson,
    MdEmail,
} from "react-icons/md";

import Textarea from "../components/forms/Textarea";
import Button from "../components/buttons/Button";

const TextareaElement = () => {
    const [message, setMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="space-y-10 bg-gray-50 p-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Textarea Components
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Reusable Textarea Component Examples
                </p>
            </div>

            {/* Textarea Examples */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                {/* 1. Basic Textarea */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        1. Basic Textarea
                    </h2>

                    <Textarea
                        label="Description"
                        placeholder="Enter description..."
                        rows={5}
                    />
                </section>

                {/* 2. Left Icon */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        2. Left Icon
                    </h2>

                    <Textarea
                        label="Message"
                        placeholder="Type your message..."
                        icon={MdMessage}
                        iconPosition="left"
                        iconClassName="text-blue-600"
                        rows={5}
                    />
                </section>

                {/* 3. Right Icon */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        3. Right Icon
                    </h2>

                    <Textarea
                        label="Notes"
                        placeholder="Enter your notes..."
                        icon={MdEdit}
                        iconPosition="right"
                        iconClassName="text-blue-600"
                        rows={5}
                    />
                </section>

                {/* 4. Error State */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        4. Error State
                    </h2>

                    <Textarea
                        label="Description"
                        placeholder="Enter description..."
                        required
                        error="Description is required"
                        rows={5}
                    />
                </section>

                {/* 5. Helper Text */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        5. Helper Text
                    </h2>

                    <Textarea
                        label="Address"
                        placeholder="Enter your address..."
                        icon={MdLocationOn}
                        iconPosition="left"
                        iconClassName="text-blue-600"
                        helperText="Include street, city and pincode."
                        rows={5}
                    />
                </section>

                {/* 6. Controlled Textarea */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        6. Controlled Textarea
                    </h2>

                    <Textarea
                        label="Message"
                        placeholder="Write something..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                    />

                    <p className="mt-2 text-sm text-gray-500">
                        Current value: {message || "Empty"}
                    </p>
                </section>

                {/* 7. Disabled State */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        7. Disabled State
                    </h2>

                    <Textarea
                        label="Comments"
                        value="This textarea is disabled."
                        disabled
                        readOnly
                        rows={5}
                    />
                </section>

                {/* 8. Required Field */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        8. Required Field
                    </h2>

                    <Textarea
                        label="Feedback"
                        placeholder="Enter your feedback..."
                        icon={MdFeedback}
                        iconPosition="left"
                        iconClassName="text-blue-600"
                        required
                        rows={5}
                    />
                </section>

                {/* 9. React Hook Form */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        9. React Hook Form
                    </h2>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <Textarea
                            label="Your Message"
                            placeholder="Write your message..."
                            icon={MdNotes}
                            iconPosition="left"
                            iconClassName="text-blue-600"
                            rows={5}
                            {...register("message", {
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters",
                                },
                            })}
                            error={errors.message?.message}
                        />

                        <Button type="submit">
                            Submit
                        </Button>
                    </form>
                </section>

                {/* 10. Character Count */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        10. Character Count
                    </h2>

                    <Textarea
                        label="Bio"
                        placeholder="Tell us something about yourself..."
                        rows={5}
                        maxLength={200}
                        showCount
                    />
                </section>

                {/* 11. Default Value */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        11. Default Value
                    </h2>

                    <Textarea
                        label="About"
                        defaultValue="This is a default textarea value."
                        placeholder="Enter something..."
                        rows={5}
                    />
                </section>

                {/* 12. Custom Label */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        12. Custom Label
                    </h2>

                    <Textarea
                        label="Description"
                        labelClassName="font-semibold text-blue-600"
                        placeholder="Enter description..."
                        rows={5}
                    />
                </section>

                {/* 13. Custom Styling */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        13. Custom Styling
                    </h2>

                    <Textarea
                        label="Notes"
                        placeholder="Enter your notes..."
                        textareaClassName="border-purple-500 focus:border-purple-600"
                        icon={MdNotes}
                        iconClassName="text-purple-500"
                        rows={5}
                    />
                </section>

                {/* 14. Custom Error Styling */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        14. Custom Error Styling
                    </h2>

                    <Textarea
                        label="Feedback"
                        placeholder="Enter your feedback..."
                        error="Please enter your feedback"
                        errorClassName="font-medium text-orange-500"
                        rows={5}
                    />
                </section>

                {/* 15. Custom Helper Styling */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        15. Custom Helper Styling
                    </h2>

                    <Textarea
                        label="Email Content"
                        placeholder="Write your email..."
                        icon={MdEmail}
                        iconClassName="text-blue-500"
                        helperText="Keep your message clear and concise."
                        helperTextClassName="text-blue-500"
                        rows={5}
                    />
                </section>

                {/* 16. Small Textarea */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        16. Small Textarea
                    </h2>

                    <Textarea
                        label="Short Note"
                        placeholder="Enter a short note..."
                        rows={2}
                    />
                </section>

                {/* 17. Large Textarea */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        17. Large Textarea
                    </h2>

                    <Textarea
                        label="Detailed Description"
                        placeholder="Enter detailed description..."
                        rows={8}
                    />
                </section>

                {/* 18. No Resize */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        18. No Resize
                    </h2>

                    <Textarea
                        label="Message"
                        placeholder="This textarea cannot be resized..."
                        textareaClassName="resize-none"
                        rows={5}
                    />
                </section>

                {/* 19. User Profile */}
                <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        19. User Profile
                    </h2>

                    <Textarea
                        label="About Me"
                        placeholder="Tell us about yourself..."
                        icon={MdPerson}
                        iconPosition="left"
                        iconClassName="text-blue-600"
                        maxLength={300}
                        showCount
                        rows={5}
                    />
                </section>

            </div>
        </div>
    );
};

export default TextareaElement;