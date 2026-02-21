import React from "react";

export interface Column<T> {
    key?: keyof T | string;
    label: string;
    render?: (item: T) => React.ReactNode;
    className?: string;
}

interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    className?: string;
}

function isKeyOf<T>(key: string | keyof T | undefined, obj: T): key is keyof T {
    return key !== undefined && typeof obj === "object" && obj !== null && key in obj;
}


export const DataTable = <T,>({ columns, data, className }: DataTableProps<T>) => {
    return (
        <div className={`overflow-x-auto ${className || ""}`}>
            <table className="min-w-full shadow-lg">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={String(col.key)}
                                className={`px-4 py-2 text-left text-sm font-semibold text-gray-400 ${col.className || ""}`}
                            >
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((item, idx) => (
                        <tr key={idx}>
                            {columns.map((col) => (
                                <td key={String(col.key)} className="px-4 py-2 text-sm text-gray-700">
                                    {col.render
                                        ? col.render(item)
                                        : isKeyOf(col.key, item)
                                            ? String(item[col.key])
                                            : ""}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
