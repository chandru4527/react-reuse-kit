import React, { useEffect, useState } from "react";
import { MdFirstPage, MdLastPage, MdNavigateBefore, MdNavigateNext, } from "react-icons/md";

const Pagination = ({
    page = 1,
    totalPages = 1,
    onPageChange,
}) => {
    const [inputPage, setInputPage] = useState(page);

    useEffect(() => {
        setInputPage(page);
    }, [page]);

    const goToPage = () => {
        let value = Number(inputPage);

        if (isNaN(value)) value = page;
        if (value < 1) value = 1;
        if (value > totalPages) value = totalPages;

        onPageChange(value);
    };

    return (
        <div className="flex items-center justify-end border-t border-gray-200 bg-white px-4 py-3">
            <div className="flex items-center gap-2">

                {/* First */}
                <button
                    onClick={() => onPageChange(1)}
                    disabled={page === 1}
                    className="rounded border bg-blue-600 p-2 hover:bg-blue-700 text-white cursor-pointer disabled:opacity-50"
                >
                    <MdFirstPage size={18} />
                </button>

                {/* Previous */}
                <button
                    onClick={() => onPageChange(page - 1)}
                    disabled={page === 1}
                    className="rounded border bg-blue-600 p-2 hover:bg-blue-700 text-white cursor-pointer disabled:opacity-50"
                >
                    <MdNavigateBefore size={18} />
                </button>

                <span className="text-sm text-gray-600">
                    Page <span className="font-semibold">{page}</span> of{" "}
                    <span className="font-semibold">{totalPages}</span>
                </span>

                {/* Page Input */}
                <input
                    type="number"
                    value={inputPage}
                    min={1}
                    max={totalPages}
                    onChange={(e) => setInputPage(e.target.value)}
                    onBlur={goToPage}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            goToPage();
                        }
                    }}
                    className="w-16 rounded border border-gray-300 px-2 py-2 text-center text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />

                {/* Next */}
                <button
                    onClick={() => onPageChange(page + 1)}
                    disabled={page === totalPages}
                    className="rounded border bg-blue-600 p-2 hover:bg-blue-700 text-white cursor-pointer disabled:opacity-50"
                >
                    <MdNavigateNext size={18} />
                </button>

                {/* Last */}
                <button
                    onClick={() => onPageChange(totalPages)}
                    disabled={page === totalPages}
                    className="rounded border bg-blue-600 p-2 hover:bg-blue-700 text-white cursor-pointer disabled:opacity-50"
                >
                    <MdLastPage size={18} />
                </button>

            </div>
        </div>
    );
};

export default Pagination;