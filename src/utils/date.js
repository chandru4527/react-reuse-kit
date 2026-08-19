import dayjs from "dayjs";

export const formatDate = (date, format = "DD MMM YYYY") => {
    if (!date) return "";

    return dayjs(date).format(format);
};