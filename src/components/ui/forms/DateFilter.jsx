import dayjs from "dayjs";
import { useForm } from "react-hook-form";

import Input from "../forms/Input";
import Button from "../buttons/Button";

const DateFilter = ({
    onApply,
    dateFormat = "YYYY-MM-DD",
}) => {

    const {
        register,
        handleSubmit,
        watch,
        clearErrors,
        formState: { errors },
    } = useForm({
        defaultValues: {
            startDate: "",
            endDate: "",
        },
    });

    const startDate = watch("startDate");

    const onSubmit = (data) => {

        console.log("FORM DATA:", data);

        const formattedData = {
            startDate: data.startDate
                ? dayjs(data.startDate).format(dateFormat)
                : "",

            endDate: data.endDate
                ? dayjs(data.endDate).format(dateFormat)
                : "",
        };

        console.log("FORMATTED DATE:", formattedData);

        onApply?.(formattedData);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-end gap-3"
        >

            <Input
                label="From Date"
                name="startDate"
                type="date"
                register={register}
                clearErrors={clearErrors}
                error={errors.startDate}
                max={dayjs().format("YYYY-MM-DD")}
            />

            <Input
                label="To Date"
                name="endDate"
                type="date"
                register={register}
                clearErrors={clearErrors}
                error={errors.endDate}
                min={startDate || undefined}
                max={dayjs().format("YYYY-MM-DD")}
            />

            <Button
                type="submit"
                variant="primary"
            >
                Apply
            </Button>

        </form>
    );
};

export default DateFilter;