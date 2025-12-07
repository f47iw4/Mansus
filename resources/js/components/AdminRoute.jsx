import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = () => {
    const { user, isAuthenticated, isLoading } = useAuth();

    // Debug logging
    console.log('AdminRoute - Debug:', {
        isAuthenticated,
        isLoading,
        user,
        userRole: user?.role,
        shouldBlock: !isAuthenticated || user?.role !== 'admin'
    });

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Cargando...</div>;
    }

    if (!isAuthenticated || user?.role !== 'admin') {
        console.log('AdminRoute - BLOQUEANDO ACCESO');
        return <Navigate to="/login" replace />;
    }

    console.log('AdminRoute - PERMITIENDO ACCESO');
    return <Outlet />;
};

export default AdminRoute;
