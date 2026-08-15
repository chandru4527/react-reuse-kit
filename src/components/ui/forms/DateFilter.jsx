import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import Input from "../forms/Input";
import Button from "../buttons/Button";

const DateFilter = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            startDate: "",
            endDate: "",
        },
    });

    const validateDate = (value) => {
        if (!value) {
            return "Date is required";
        }

        if (dayjs(value).isAfter(dayjs(), "day")) {
            return "Future dates are not allowed";
        }

        return true;
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <h1 className="mt-5">date filter</h1>

            <Input
                label="From Date"
                name="startDate"
                type="date"
                register={register}
                validation={{
                    validate: validateDate,
                }}
                error={errors.startDate}
            />

            <Input
                label="To Date"
                name="endDate"
                type="date"
                register={register}
                validation={{
                    validate: validateDate,
                }}
                error={errors.endDate}
            />

            <Button
                type="submit"
                variant="primary"
                className="mt-10"
            >
                Apply
            </Button>

        </form>
    );
};

export default DateFilter;