import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = () => {
    const { user, isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Cargando...</div>;
    }

    console.log('AdminRoute Check:', { user, role: user?.role, isAuthenticated }); // DEBUG SEGURIDAD

    if (!isAuthenticated || user?.role !== 'admin') {
        console.log('Access Denied. Redirecting to login.'); // DEBUG
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default AdminRoute;
