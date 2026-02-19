import { Outlet } from "react-router-dom";
import { Sidebar } from "../../shared/components/Sidebar";

export default function DashboardLayout() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <main className="flex-1 p-6 bg-[#f6f6f6]">
                <Outlet />
            </main>
        </div>
    );
}
