import React from "react";
import Loader from "../feedback/Loader";
import EmptyState from '../feedback/EmptyState'


const getValue = (obj, path) => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

// ✅ Safely render any value
const renderValue = (value) => {
    if (value === null || value === undefined) return "-";

    if (Array.isArray(value)) {
        return value.join(", ");
    }

    if (typeof value === "object") {
        return JSON.stringify(value);
    }

    if (typeof value === "boolean") {
        return value ? "Yes" : "No";
    }

    return value;
};

const DataTable = ({
    columns = [],
    data = [],
    loading = false,
    rowKey = "_id",
    className = "",
}) => {
    if (loading) return <Loader text="Loading data..." />;

    if (!data || data.length === 0) {
        return (
            <EmptyState
                title="No Data Found"
                description="There is no data available."
            />
        );
    }

    return (
        <div className={`overflow-x-auto rounded-lg border border-gray-200 bg-white ${className}`}>
            <table className="min-w-full border-collapse">
                <thead className="bg-blue-500">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.accessor}
                                className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-white"
                            >
                                {column.Header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={row[rowKey] || rowIndex} className="hover:bg-gray-50">
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
    );
};

export default DataTable;