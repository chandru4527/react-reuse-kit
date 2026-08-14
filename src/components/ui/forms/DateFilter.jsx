import { useForm } from "react-hook-form";
import Input from "../forms/Input";
import {formatDate} from '../../../utils/date'

const DateFilter = () => {
    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            startDate: "",
            endDate: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Date Filter:", formatDate(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Input
                label="From Date"
                name="startDate"
                type="date"
                register={register}
            />

            <Input
                label="To Date"
                name="endDate"
                type="date"
                register={register}
            />

            <button
                type="submit"
                className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white"
            >
                Apply
            </button>

        </form>
    );
};

export default DateFilter;