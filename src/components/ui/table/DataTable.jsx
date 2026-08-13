import React, { useMemo, useState } from "react";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import Pagination from "./Pagination";
import EmptyState from "../feedback/EmptyState";
import Loader from "../feedback/Loader";

const getValue = (obj, path) => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

const renderValue = (value) => {
    if (value === null || value === undefined) return "-";
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (typeof value === "object") return JSON.stringify(value);
    return value;
};

const DataTable = ({
    columns = [],
    data = [],
    loading = false,
    rowKey = "_id",

    // sorting
    sortable = true,

    // pagination
    pagination = false,
    page = 1,
    totalPages = 1,
    onPageChange,

    className = "",
}) => {
    const [sortConfig, setSortConfig] = useState({
        key: "",
        direction: "asc",
    });

    const sortedData = useMemo(() => {
        if (!sortable || !sortConfig.key) return data;

        return [...data].sort((a, b) => {
            const aVal = getValue(a, sortConfig.key);
            const bVal = getValue(b, sortConfig.key);

            if (aVal < bVal)
                return sortConfig.direction === "asc" ? -1 : 1;

            if (aVal > bVal)
                return sortConfig.direction === "asc" ? 1 : -1;

            return 0;
        });
    }, [data, sortConfig, sortable]);

    const handleSort = (accessor) => {
        if (!sortable) return;

        setSortConfig((prev) => ({
            key: accessor,
            direction:
                prev.key === accessor && prev.direction === "asc"
                    ? "desc"
                    : "asc",
        }));
    };

    if (loading) return <Loader text="Loading data..." />;

    if (!data.length) {
        return (
            <EmptyState
                title="No Data Found"
                description="There is no data available."
            />
        );
    }


    return (
        <div
            className={`overflow-hidden rounded-md border border-gray-200 bg-white ${className}`}
        >
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead className="bg-blue-500">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.accessor}
                                    onClick={() =>
                                        column.sortable !== false &&
                                        handleSort(column.accessor)
                                    }
                                    className={`border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-white ${column.sortable !== false
                                        ? "cursor-pointer select-none"
                                        : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-1">
                                        {column.Header}

                                        {sortable &&
                                            column.sortable !== false &&
                                            sortConfig.key === column.accessor &&
                                            (sortConfig.direction === "asc" ? (
                                                <MdArrowUpward />
                                            ) : (
                                                <MdArrowDownward />
                                            ))}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {sortedData.map((row, rowIndex) => (
                            <tr
                                key={row[rowKey] || rowIndex}
                                className="hover:bg-gray-50"
                            >
                                {columns.map((column) => (
                                    <td
                                        key={column.accessor}
                                        className="border border-gray-200 px-4 py-3 text-sm text-gray-700"
                                    >
                                        {column.Cell
                                            ? column.Cell({ row })
                                            : renderValue(getValue(row, column.accessor))}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {pagination && (
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            )}
        </div>
    );
};

export default DataTable;