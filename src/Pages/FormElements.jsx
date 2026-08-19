import React from "react";
import Button from "../components/ui/buttons/Button";

import { Input, Textarea, Select, Checkbox, Radio, Switch, FileInput, DateFilter } from "../components/ui/forms/index";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const FormElements = () => {

    const schema = yup.object({
        name: yup
            .string()
            .trim()
            .required("Name is required")
            .min(3, "Name must be at least 3 characters")
            .matches(/^[A-Za-z ]+$/, "Only letters and spaces are allowed"),

        email: yup
            .string()
            .trim()
            .required("Email is required")
            .email("Enter a valid email"),

        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),

        age: yup
            .number()
            .typeError("Age is required")
            .required("Age is required")
            .min(1, "Age must be at least 1")
            .max(120, "Age must be less than 120"),

        phone: yup
            .string()
            .required("Phone number is required")
            .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number"),

        dob: yup
            .date()
            .transform((value, originalValue) => {
                return originalValue === "" ? null : value;
            })
            .nullable()
            .required("Date of birth is required")
            .max(new Date(), "Date of birth cannot be in the future"),

        search: yup
            .string()
            .trim()
            .max(100, "Search must be less than 100 characters"),

        bio: yup
            .string()
            .trim()
            .required("Bio is required")
            .min(10, "Bio must be at least 10 characters")
            .max(300, "Bio must be less than 300 characters"),

        role: yup.string().required("Role is required"),

        terms: yup
            .boolean()
            .oneOf([true], "You must accept the terms and conditions"),

        permission: yup
            .array()
            .min(1, "Select at least one permission"),

        gender: yup.string().required("Gender is required"),

        isActive: yup.boolean(),

        profileImage: yup.mixed().required("Profile image is required"),

        animeImages: yup
            .mixed()
            .test("required", "At least one image is required", (value) => {
                return value && value.length > 0;
            }),
    });

    const roleOptions = [
        { label: "User", value: "user" },
        { label: "Admin", value: "admin" },
        { label: "Sub Admin", value: "subadmin" },
    ];

    const {
        register,
        clearErrors,
        handleSubmit,
        setFocus,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        shouldFocusError: false,

        defaultValues: {
            name: "",
            email: "",
            password: "",
            age: "",
            phone: "",
            dob: "",
            search: "",
            bio: "",
            role: "",
            permission: ["dashboard"], // checkbox array
            gender: "male",
            isActive: true, // switch / checkbox
            permissions: {
                dashboard: true,
                users: false,
                services: true,
                bookings: false,
                revenue: true,
            },
            profileImage: null,
            animeImages: [],
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    //   const onError = () => {
    //   setFocus("name");
    // };

    return (
        <div className="p-6">

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">

                    <Input
                        label="Name"
                        type="text"
                        name="name"
                        register={register}
                        clearErrors={clearErrors}
                        error={errors.name}
                        placeholder="Enter your name"
                        required
                    />

                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        register={register}
                        clearErrors={clearErrors}
                        error={errors.email}
                        placeholder="Enter your email"
                        required
                    />

                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        register={register}
                        clearErrors={clearErrors}
                        error={errors.password}
                        placeholder="Enter your password"
                        required
                    />

                    <Input
                        label="Age"
                        type="number"
                        name="age"
                        register={register}
                        clearErrors={clearErrors}
                        error={errors.age}
                        placeholder="Enter your age"
                        required
                    />

                    <Input
                        label="DOB"
                        type="date"
                        name="dob"
                        register={register}
                        clearErrors={clearErrors}
                        error={errors.dob}
                        required
                    />

                    <Input
                        label="Mobile"
                        type="tel"
                        name="phone"
                        register={register}
                        clearErrors={clearErrors}
                        error={errors.phone}
                        placeholder="Enter your mobile number"
                        required
                    />

                    <Input
                        label="Search"
                        type="search"
                        name="search"
                        register={register}
                        clearErrors={clearErrors}
                        error={errors.search}
                        placeholder="Search..."
                    />

                    <Textarea
                        label="Bio"
                        name="bio"
                        register={register}
                        error={errors.bio}
                        clearErrors={clearErrors}
                        placeholder="Write your bio..."
                        rows={5}
                        required
                    />

                    <Select
                        label="Role"
                        name="role"
                        register={register}
                        error={errors.role}
                        clearErrors={clearErrors}
                        options={roleOptions}
                        required
                    />

                    <Checkbox
                        label="I agree to the Terms & Conditions"
                        name="terms"
                        register={register}
                        error={errors.terms}
                        clearErrors={clearErrors}
                        required
                    />

                    <div className="space-y-2 grid grid-cols-3">

                        <Checkbox
                            label="Dashboard"
                            name="permission"
                            value="dashboard"
                            register={register}
                            error={errors.permission}
                            clearErrors={clearErrors}
                        />

                        <Checkbox
                            label="Users"
                            name="permission"
                            value="users"
                            register={register}
                            error={errors.permission}
                            clearErrors={clearErrors}
                        />

                        <Checkbox
                            label="Bookings"
                            name="permission"
                            value="bookings"
                            register={register}
                            error={errors.permission}
                            clearErrors={clearErrors}
                        />
                    </div>


                    <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">
                            Gender <span className="text-red-500">*</span>
                        </p>

                        <Radio
                            label="Male"
                            name="gender"
                            value="male"
                            register={register}
                            error={errors.gender}
                            clearErrors={clearErrors}
                        />

                        <Radio
                            label="Female"
                            name="gender"
                            value="female"
                            register={register}
                            error={errors.gender}
                            clearErrors={clearErrors}
                        />

                        <Radio
                            label="Other"
                            name="gender"
                            value="other"
                            register={register}
                            error={errors.gender}
                            clearErrors={clearErrors}
                        />
                    </div>

                    <Switch
                        label="Active Status"
                        name="isActive"
                        control={control}
                        clearErrors={clearErrors}
                        activeColor="bg-green-600"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <Switch
                            label="Dashboard"
                            name="permissions.dashboard"
                            control={control}
                            clearErrors={clearErrors}
                        />

                        <Switch
                            label="Users"
                            name="permissions.users"
                            control={control}
                            clearErrors={clearErrors}
                        />

                        <Switch
                            label="Services"
                            name="permissions.services"
                            control={control}
                            clearErrors={clearErrors}
                        />

                        <Switch
                            label="Bookings"
                            name="permissions.bookings"
                            control={control}
                            clearErrors={clearErrors}
                        />

                        <Switch
                            label="Revenue"
                            name="permissions.revenue"
                            control={control}
                            clearErrors={clearErrors}
                        />
                    </div>

                    <FileInput
                        label="Profile Image"
                        name="profileImage"
                        register={register}
                        error={errors.profileImage}
                        required
                        validation={{
                            validate: (files) => {
                                return files?.length > 0 || "Image is required";
                            },
                        }}
                    />

                    <FileInput
                        label="Anime Images"
                        name="animeImages"
                        register={register}
                        error={errors.animeImages}
                        clearErrors={clearErrors}
                        multiple
                    />

                </div>

                <Button type="submit">Submit</Button>
            </form>


            {/* date picker */}
            <DateFilter
                dateFormat="DD/MM/YYYY"
                onApply={(data) => {
                    console.log(data);
                }}
            />
        </div>
    );
};

export default FormElements;