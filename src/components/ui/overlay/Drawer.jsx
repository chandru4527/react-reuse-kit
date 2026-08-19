import {
    useEffect,
    useLayoutEffect,
    useState,
} from "react";

import {
    MdClose,
    MdHourglassEmpty,
} from "react-icons/md";

import useDrawerStore from "../../../store/drawerStore";

const Drawer = () => {
    // ==========================================
    // ZUSTAND
    // ==========================================

    const isOpen = useDrawerStore(
        (state) => state.isOpen
    );

    const position = useDrawerStore(
        (state) => state.position
    );

    const title = useDrawerStore(
        (state) => state.title
    );

    const content = useDrawerStore(
        (state) => state.content
    );

    const size = useDrawerStore(
        (state) => state.size
    );

    const showClose = useDrawerStore(
        (state) => state.showClose
    );

    const closeText = useDrawerStore(
        (state) => state.closeText
    );

    const showAction = useDrawerStore(
        (state) => state.showAction
    );

    const actionText = useDrawerStore(
        (state) => state.actionText
    );

    const actionClassName = useDrawerStore(
        (state) => state.actionClassName
    );

    const actionLoading = useDrawerStore(
        (state) => state.actionLoading
    );

    const actionDisabled = useDrawerStore(
        (state) => state.actionDisabled
    );

    const onAction = useDrawerStore(
        (state) => state.onAction
    );

    const closeDrawer = useDrawerStore(
        (state) => state.closeDrawer
    );

    // ==========================================
    // ANIMATION
    // ==========================================

    const [isVisible, setIsVisible] = useState(false);

    // ==========================================
    // OPEN ANIMATION
    // ==========================================

    useLayoutEffect(() => {
        if (!isOpen) {
            setIsVisible(false);
            return;
        }

        // Start from closed position
        setIsVisible(false);

        // Let browser paint closed position
        const frame = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [isOpen, position]);

    // ==========================================
    // ESCAPE
    // ==========================================

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                closeDrawer();
            }
        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [isOpen, closeDrawer]);

    // ==========================================
    // SIZE
    // ==========================================

    const horizontalSizes = {
        sm: "w-80",
        md: "w-96",
        lg: "w-[32rem]",
        xl: "w-[40rem]",
        full: "w-full",
    };

    const verticalSizes = {
        sm: "h-64",
        md: "h-80",
        lg: "h-96",
        xl: "h-[32rem]",
        full: "h-full",
    };

    // ==========================================
    // POSITION
    // ==========================================

    const positionConfig = {
        right: {
            positionClass: `
                right-0
                top-0
                h-full
            `,

            sizeClass:
                horizontalSizes[size] ||
                horizontalSizes.md,

            openClass:
                "translate-x-0",

            closedClass:
                "translate-x-full",
        },

        left: {
            positionClass: `
                left-0
                top-0
                h-full
            `,

            sizeClass:
                horizontalSizes[size] ||
                horizontalSizes.md,

            openClass:
                "translate-x-0",

            closedClass:
                "-translate-x-full",
        },

        top: {
            positionClass: `
                top-0
                left-0
                w-full
            `,

            sizeClass:
                verticalSizes[size] ||
                verticalSizes.md,

            openClass:
                "translate-y-0",

            closedClass:
                "-translate-y-full",
        },

        bottom: {
            positionClass: `
                bottom-0
                left-0
                w-full
            `,

            sizeClass:
                verticalSizes[size] ||
                verticalSizes.md,

            openClass:
                "translate-y-0",

            closedClass:
                "translate-y-full",
        },
    };

    // ==========================================
    // CURRENT POSITION
    // ==========================================

    const currentPosition =
        positionConfig[position] ||
        positionConfig.right;

    // ==========================================
    // TRANSFORM
    // ==========================================

    const transformClass = isVisible
        ? currentPosition.openClass
        : currentPosition.closedClass;

    // ==========================================
    // FOOTER
    // ==========================================

    const showFooter =
        showClose || showAction;

    // ==========================================
    // RENDER
    // ==========================================

    return (
        <div
            className={`
                fixed
                inset-0
                z-50

                ${
                    isOpen
                        ? "pointer-events-auto"
                        : "pointer-events-none"
                }
            `}
        >
            {/* =====================================
                OVERLAY
            ===================================== */}

            <div
                onClick={closeDrawer}
                className={`
                    absolute
                    inset-0

                    bg-black/40

                    transition-opacity
                    duration-300
                    ease-out

                    ${
                        isVisible && isOpen
                            ? "opacity-100"
                            : "opacity-0"
                    }
                `}
            />

            {/* =====================================
                DRAWER
            ===================================== */}

            <div
                className={`
                    fixed

                    ${currentPosition.positionClass}
                    ${currentPosition.sizeClass}

                    flex
                    flex-col

                    bg-white
                    shadow-2xl

                    transform

                    transition-transform
                    duration-300
                    ease-out

                    ${transformClass}
                `}
            >
                {/* ===================================
                    HEADER
                =================================== */}

                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        justify-between

                        border-b
                        border-gray-200

                        px-5
                        py-4
                    "
                >
                    <h2
                        className="
                            text-lg
                            font-semibold
                            text-gray-900
                        "
                    >
                        {title}
                    </h2>

                    <button
                        type="button"
                        onClick={closeDrawer}
                        className="
                            rounded-lg
                            p-2

                            text-gray-500

                            transition

                            hover:bg-gray-100
                            hover:text-gray-900
                        "
                    >
                        <MdClose size={22} />
                    </button>
                </div>

                {/* ===================================
                    CONTENT
                =================================== */}

                <div
                    className="
                        min-h-0
                        flex-1
                        overflow-y-auto
                        p-5
                    "
                >
                    {content}
                </div>

                {/* ===================================
                    FOOTER
                =================================== */}

                {showFooter && (
                    <div
                        className="
                            flex
                            shrink-0
                            items-center
                            justify-end
                            gap-3

                            border-t
                            border-gray-200

                            px-5
                            py-4
                        "
                    >
                        {/* CLOSE BUTTON */}

                        {showClose && (
                            <button
                                type="button"
                                onClick={closeDrawer}
                                className="
                                    rounded-lg
                                    border
                                    border-gray-300

                                    px-4
                                    py-2

                                    text-sm
                                    font-medium
                                    text-gray-700

                                    transition

                                    hover:bg-gray-100
                                "
                            >
                                {closeText}
                            </button>
                        )}

                        {/* ACTION BUTTON */}

                        {showAction && (
                            <button
                                type="button"
                                disabled={
                                    actionDisabled ||
                                    actionLoading
                                }
                                onClick={onAction}
                                className={`
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2

                                    rounded-lg

                                    px-4
                                    py-2

                                    text-sm
                                    font-medium

                                    text-white

                                    transition

                                    disabled:cursor-not-allowed
                                    disabled:opacity-60

                                    ${
                                        actionClassName ||
                                        "bg-blue-600 hover:bg-blue-700"
                                    }
                                `}
                            >
                                {actionLoading && (
                                    <MdHourglassEmpty
                                        size={18}
                                        className="animate-spin"
                                    />
                                )}

                                {actionText}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Drawer;