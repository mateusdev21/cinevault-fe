import { Outlet } from "react-router-dom";
import { Sidebar } from "../../shared/components/Sidebar";
import { Header } from "../../shared/components/Header";

export default function DashboardLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col bg-[#f6f6f6]">
                <Header />
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
