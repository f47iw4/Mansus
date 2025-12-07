import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Configurar axios con el token
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    useEffect(() => {
        const checkAuth = async () => {
            if (token) {
                try {
                    const response = await axios.get('/api/user');
                    setUser(response.data);
                    setIsAuthenticated(true);
                } catch (error) {
                    console.error('Error verificando sesión:', error);
                    logout();
                }
            }
            setIsLoading(false);
        };

        checkAuth();
    }, [token]);

    const login = async (email, password) => {
        try {
            // CSRF cookie call removed for token-based auth


            const response = await axios.post('/api/login', { email, password });
            const { token, user } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user)); // ← GUARDAR USUARIO
            setToken(token);
            setUser(user);
            setIsAuthenticated(true);

            return { success: true, role: user.role, user: user };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Error al iniciar sesión'
            };
        }
    };

    const register = async (name, email, password) => {
        try {
            // CSRF cookie call removed for token-based auth

            const response = await axios.post('/api/register', { name, email, password });
            const { token, user } = response.data;

            localStorage.setItem('token', token);
            setToken(token);
            setUser(user);
            setIsAuthenticated(true);

            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Error al registrarse'
            };
        }
    };

    const logout = async () => {
        try {
            await axios.post('/api/logout');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }

        // Limpiar TODOS los datos de autenticación
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ user, token, isAuthenticated, isLoading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
