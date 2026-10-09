import { twMerge } from "tailwind-merge";

/**
 * Reusable Audio component.
 *
 * @param {Object} props
 * @param {string} props.src Audio source URL
 * @param {React.ElementType} [props.icon] Icon component
 * @param {"start" | "end"} [props.iconPosition="start"] Icon position
 * @param {number} [props.iconSize=20] Icon size
 * @param {string} [props.iconClassName=""] Icon classes
 * @param {string} [props.className=""] Audio element classes
 * @param {string} [props.wrapperClassName=""] Wrapper classes
 * @param {boolean} [props.controls=true] Show audio controls
 * @param {boolean} [props.autoPlay=false] Automatically play audio
 * @param {boolean} [props.loop=false] Repeat audio
 * @param {boolean} [props.muted=false] Start audio muted
 */
const Audio = ({
    src,
    icon: Icon,
    iconPosition = "start",
    iconSize = 20,
    iconClassName = "",
    className = "",
    wrapperClassName = "",
    controls = true,
    autoPlay = false,
    loop = false,
    muted = false,
    ...props
}) => {
    const iconElement = Icon ? (
        <Icon
            size={iconSize}
            className={twMerge("shrink-0", iconClassName)}
        />
    ) : null;

    return (
        <div
            className={twMerge(
                "flex w-full items-center gap-3",
                wrapperClassName
            )}
        >
            {iconPosition === "start" && iconElement}

            <audio
                src={src}
                controls={controls}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                className={twMerge("w-full", className)}
                {...props}
            />

            {iconPosition === "end" && iconElement}
        </div>
    );
};

export default Audio;