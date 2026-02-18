import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

import CustomerRentalPage from "../features/rental/pages/CustomerRentalPage";
import UserManagementPage from "../features/user/pages/UserManagementPage";
import DvdManagementPage from "../features/dvd/pages/DvdManagementPage";
import DvdListPage from "../features/dvd/pages/DvdListPage";
import CustomerDashboardPage from "../features/dashboard/pages/CustomerDashboardPage";
import AdminDashboardPage from "../features/dashboard/pages/AdminDashboardPage";

const router = createBrowserRouter([
    {
        element: <PublicRoute />,
        children: [
            {
                element: <AuthLayout />,
                children: [
                    { path: "/login", element: <LoginPage /> },
                    { path: "/register", element: <RegisterPage /> },
                ],
            },
        ],
    },

    {
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [
            {
                element: <DashboardLayout />,
                children: [
                    { path: "/admin", element: <AdminDashboardPage /> },
                    { path: "/admin/dvds", element: <DvdManagementPage /> },
                    { path: "/admin/users", element: <UserManagementPage /> },
                ],
            },
        ],
    },

    {
        element: <ProtectedRoute allowedRoles={["customer","admin"]} />,
        children: [
            {
                element: <DashboardLayout />,
                children: [
                    { path: "/", element: <CustomerDashboardPage /> },
                    { path: "/dvds", element: <DvdListPage /> },
                    { path: "/my-rentals", element: <CustomerRentalPage /> },
                ],
            },
        ],
    },
]);

export default router;
