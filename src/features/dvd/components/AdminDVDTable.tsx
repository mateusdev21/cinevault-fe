import { DataTable, type Column } from "../../../shared/components/DataTable";
import { useEffect } from "react";
import type { DVD } from "../types";
import { IoEyeOutline, IoPencilOutline, IoTrashBinOutline } from "react-icons/io5";
import { useDVDStore } from "../store/dvd.store";
import { useFetchDVDs } from "../hooks/useFetchDVDs";
import { currencyFormatter } from "../../../shared/utils";

interface AdminDvdTableProps {
    onView: (dvd: DVD) => void;
    onEdit: (dvd: DVD) => void;
    onDelete: (dvd: DVD) => void;
}

export const AdminDvdTable: React.FC<AdminDvdTableProps> = ({ onView, onEdit, onDelete }) => {
    const dvds = useDVDStore((state) => state.dvds);
    const { fetchDVDs, loading, error } = useFetchDVDs();

    useEffect(() => {
        fetchDVDs();
    }, [fetchDVDs]);

    const columns: Column<DVD>[] = [
        { key: "id", label: "ID" },
        {
            key: "cover_image_url",
            label: "Cover",
            render: (item) => <img src={item.cover_image_url} alt={item.title} className="w-22 h-30 object-cover rounded" />,
        },
        { key: "title", label: "Title" },
        { key: "genre", label: "Genre" },
        { key: "stock_total", label: "Stock Total" },
        { key: "stock_available", label: "Stock Available" },
        {
            key: "rental_price_per_day",
            label: "Price/Day",
            render: (item) => `${currencyFormatter(item.rental_price_per_day, "Rp")}`,
        },
        {
            key: "action",
            label: "Action",
            render: (item) => (
                <div className="flex space-x-2">
                    <button
                        className="p-2 text-blue-500 hover:bg-blue-100 hover:cursor-pointer rounded"
                        onClick={() => onView(item)}
                        title="View"
                    >
                        <IoEyeOutline className="w-5 h-5" />
                    </button>
                    <button
                        className="p-2 text-green-500 hover:bg-green-100 hover:cursor-pointer rounded"
                        onClick={() => onEdit(item)}
                        title="Edit"
                    >
                        <IoPencilOutline className="w-5 h-5" />
                    </button>
                    <button
                        className="p-2 text-red-500 hover:bg-red-100 hover:cursor-pointer rounded"
                        onClick={() => onDelete(item)}
                        title="Delete"
                    >
                        <IoTrashBinOutline className="w-5 h-5" />
                    </button>
                </div>
            ),
        },
    ];

    if (loading) return <div className="p-4">Loading DVDs...</div>;
    if (error) return <div className="p-4 text-gray-400 text-center">{error}</div>;
    return <DataTable columns={columns} data={dvds} />;
};
