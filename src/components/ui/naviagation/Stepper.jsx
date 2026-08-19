import { MdCheck } from "react-icons/md";

const Stepper = ({
    steps = [],

    // Current active step
    activeStep = 0,

    // horizontal | vertical
    orientation = "horizontal",

    // sm | md | lg
    size = "md",

    // --------------------------------
    // Normal / upcoming
    // --------------------------------
    color = "text-gray-400",
    bgColor = "bg-white",
    borderColor = "border-gray-300",

    // --------------------------------
    // Active
    // --------------------------------
    activeColor = "text-blue-600",
    activeBgColor = "bg-blue-600",
    activeBorderColor = "border-blue-600",

    // --------------------------------
    // Completed
    // --------------------------------
    completedColor = "text-green-600",
    completedBgColor = "bg-green-600",
    completedBorderColor = "border-green-600",

    // --------------------------------
    // Lines
    // --------------------------------
    lineColor = "bg-gray-300",
    activeLineColor = "bg-green-600",

    // --------------------------------
    // Click behavior
    // --------------------------------
    onStepClick,

    // --------------------------------
    // Custom
    // --------------------------------
    className = "",
    stepClassName = "",
}) => {
    // ==========================================
    // SIZE
    // ==========================================

    const sizes = {
        sm: {
            circle: "h-7 w-7 text-xs",
            icon: 14,
            label: "text-xs",
            description: "text-xs",
            horizontalGap: "gap-2",
            verticalGap: "gap-2",
            line: "h-0.5",
            verticalLine: "w-0.5",
        },

        md: {
            circle: "h-9 w-9 text-sm",
            icon: 18,
            label: "text-sm",
            description: "text-xs",
            horizontalGap: "gap-3",
            verticalGap: "gap-3",
            line: "h-0.5",
            verticalLine: "w-0.5",
        },

        lg: {
            circle: "h-11 w-11 text-base",
            icon: 22,
            label: "text-base",
            description: "text-sm",
            horizontalGap: "gap-4",
            verticalGap: "gap-4",
            line: "h-1",
            verticalLine: "w-1",
        },
    };

    const currentSize = sizes[size] || sizes.md;

    // ==========================================
    // STEP STATUS
    // ==========================================

    const getStatus = (index) => {
        if (index < activeStep) {
            return "completed";
        }

        if (index === activeStep) {
            return "active";
        }

        return "upcoming";
    };

    // ==========================================
    // CIRCLE CLASSES
    // ==========================================

    const getCircleClasses = (status) => {
        if (status === "completed") {
            return `
        ${completedBgColor}
        ${completedColor}
        border
        ${completedBorderColor}
      `;
        }

        if (status === "active") {
            return `
        ${activeBgColor}
        ${activeColor}
        border
        ${activeBorderColor}
      `;
        }

        return `
      ${bgColor}
      ${color}
      border
      ${borderColor}
    `;
    };

    // ==========================================
    // LABEL CLASSES
    // ==========================================

    const getLabelClasses = (status) => {
        if (status === "completed") {
            return completedColor;
        }

        if (status === "active") {
            return activeColor;
        }

        return color;
    };

    // ==========================================
    // STEP CONTENT
    // ==========================================

    const renderCircle = (step, index, status) => {
        const clickable = Boolean(onStepClick);

        return (
            <button
                type="button"
                disabled={!clickable}
                onClick={() => onStepClick?.(index)}
                className={`
          flex
          shrink-0
          items-center
          justify-center
          rounded-full
          ${currentSize.circle}
          ${getCircleClasses(status)}
          ${clickable ? "cursor-pointer" : "cursor-default"}
          ${stepClassName}
        `}
            >
                {status === "completed" ? (
                    step.completedIcon || (
                        <MdCheck size={currentSize.icon} />
                    )
                ) : step.icon ? (
                    step.icon
                ) : (
                    index + 1
                )}
            </button>
        );
    };

    // ==========================================
    // HORIZONTAL
    // ==========================================

    if (orientation === "horizontal") {
        return (
            <div
                className={`
          flex
          w-full
          items-start
          ${className}
        `}
            >
                {steps.map((step, index) => {
                    const status = getStatus(index);

                    const isLast = index === steps.length - 1;

                    const lineActive =
                        index < activeStep;

                    return (
                        <div
                            key={step.id || step.label || index}
                            className="flex min-w-0 flex-1 items-start"
                        >
                            {/* STEP */}
                            <div
                                className={`
                  flex
                  min-w-0
                  flex-col
                  items-center
                  text-center
                  ${currentSize.horizontalGap}
                `}
                            >
                                {renderCircle(step, index, status)}

                                <div>
                                    <div
                                        className={`
                      font-medium
                      ${currentSize.label}
                      ${getLabelClasses(status)}
                    `}
                                    >
                                        {step.label}
                                    </div>

                                    {step.description && (
                                        <div
                                            className={`
                        mt-1
                        ${currentSize.description}
                        text-gray-400
                      `}
                                        >
                                            {step.description}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* LINE */}
                            {!isLast && (
                                <div
                                    className={`
                    mt-4.5
                    mx-2
                    flex-1
                    ${currentSize.line}
                    rounded-full
                    ${lineActive ? activeLineColor : lineColor}
                  `}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }

    // ==========================================
    // VERTICAL
    // ==========================================

    return (
        <div
            className={`
        flex
        flex-col
        ${className}
      `}
        >
            {steps.map((step, index) => {
                const status = getStatus(index);

                const isLast = index === steps.length - 1;

                const lineActive =
                    index < activeStep;

                return (
                    <div
                        key={step.id || step.label || index}
                        className="flex"
                    >
                        {/* LEFT SIDE */}
                        <div className="flex flex-col items-center">
                            {renderCircle(step, index, status)}

                            {!isLast && (
                                <div
                                    className={`
                    min-h-10
                    ${currentSize.verticalLine}
                    rounded-full
                    ${lineActive
                                            ? activeLineColor
                                            : lineColor
                                        }
                  `}
                                />
                            )}
                        </div>

                        {/* RIGHT SIDE */}
                        <div
                            className={`
                ml-4
                pb-8
                ${currentSize.verticalGap}
              `}
                        >
                            <div
                                className={`
                  font-medium
                  ${currentSize.label}
                  ${getLabelClasses(status)}
                `}
                            >
                                {step.label}
                            </div>

                            {step.description && (
                                <div
                                    className={`
                    mt-1
                    ${currentSize.description}
                    text-gray-400
                  `}
                                >
                                    {step.description}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Stepper;