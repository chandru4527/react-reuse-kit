import { twMerge } from "tailwind-merge";

const Video = ({
    src,
    poster = "",
    className = "",
    wrapperClassName = "",
    controls = true,
    autoPlay = false,
    muted = false,
    loop = false,
    playsInline = true,
    ...props
}) => {
    return (
        <div className={twMerge("overflow-hidden", wrapperClassName)}>
            <video
                src={src}
                poster={poster}
                controls={controls}
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                playsInline={playsInline}
                className={twMerge("block h-auto w-full object-cover", className)}
                {...props}
            />
        </div>
    );
};

export default Video;