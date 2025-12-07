import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = () => {
    const { user, isAuthenticated, isLoading } = useAuth();

    // Verificar si user es un objeto vacío
    const isUserEmpty = !user || (typeof user === 'object' && Object.keys(user).length === 0);
    const hasAdminRole = user?.role === 'admin';

    // Debug logging
    console.log('AdminRoute - Debug:', {
        isAuthenticated,
        isLoading,
        user,
        userRole: user?.role,
        isUserEmpty,
        hasAdminRole,
        shouldBlock: !isAuthenticated || isUserEmpty || !hasAdminRole
    });

    if (isLoading) {
        console.log('AdminRoute - LOADING...');
        return <div className="flex justify-center items-center h-screen">Cargando...</div>;
    }

    // BLOQUEAR si:
    // 1. No está autenticado
    // 2. User es null, undefined o objeto vacío
    // 3. El rol NO es exactamente 'admin'
    if (!isAuthenticated || isUserEmpty || !hasAdminRole) {
        console.log('AdminRoute - BLOQUEANDO ACCESO', {
            isAuthenticated,
            isUserEmpty,
            hasAdminRole,
            userRole: user?.role,
            reason: !isAuthenticated ? 'No autenticado' :
                isUserEmpty ? 'Usuario vacío o no cargado' :
                    'Rol no es admin: ' + (user?.role || 'undefined')
        });
        return <Navigate to="/login" replace />;
    }

    console.log('AdminRoute - PERMITIENDO ACCESO - Usuario admin verificado');
    return <Outlet />;
};

export default AdminRoute;
