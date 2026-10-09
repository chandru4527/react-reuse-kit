import { twMerge } from "tailwind-merge";

const Image = ({
    src,
    alt = "",
    className = "",
    wrapperClassName = "",
    ...props
}) => {
    return (
        <div className={twMerge("overflow-hidden", wrapperClassName)}>
            <img
                src={src}
                alt={alt}
                className={twMerge("block h-auto w-full object-cover", className)}
                {...props}
            />
        </div>
    );
};

export default Image;