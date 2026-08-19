import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const PageNavigation = ({
    direction,
    children,
    icon,
    size = "md",
    className = "",
    disabled = false,
}) => {
    const navigate = useNavigate();

    const sizes = {
        sm: "px-3 py-1.5 text-sm gap-2",
        md: "px-4 py-2.5 text-sm gap-2",
        lg: "px-5 py-3 text-base gap-2.5",
    };

    const handleNavigate = () => {
        if (disabled) return;

        if (direction === "previous") {
            navigate(-1);
        }

        if (direction === "next") {
            navigate(1);
        }
    };

    const defaultIcon =
        direction === "previous" ? (
            <MdArrowBack size={20} />
        ) : (
            <MdArrowForward size={20} />
        );

    return (
        <button
            type="button"
            onClick={handleNavigate}
            disabled={disabled}
            className={`
        inline-flex
        items-center
        justify-center
        rounded-lg
        font-medium
        transition-colors
        duration-200
        ${sizes[size]}
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
        ${className}
      `}
        >
            {icon || defaultIcon}

            {children}
        </button>
    );
};

export default PageNavigation;