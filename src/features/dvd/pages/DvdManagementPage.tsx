import { AdminDvdTable } from "../components/AdminDVDTable";
import type { DVD } from "../types";

export default function DvdManagementPage() {
    const handleView = (dvd: DVD) => console.log("View", dvd);
    const handleEdit = (dvd: DVD) => console.log("Edit", dvd);
    const handleDelete = (dvd: DVD) => console.log("Delete", dvd);

    return (
        <div className="px-8 py-2 bg-white shadow-lg">
            <AdminDvdTable onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}
