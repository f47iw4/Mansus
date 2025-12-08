import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    LogOut,
    Menu,
    X,
    Bell,
    Search,
    User,
    Sparkles,
    Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard, isReact: true },
        { name: 'Productos', path: '/admin/productos', icon: Package, isReact: false }, // Blade CRUD
        { name: 'Pedidos', path: '/admin/orders', icon: ShoppingCart, isReact: true },
    ];

    const handleAdminPanelClick = (e) => {
        e.preventDefault();
        const confirmed = window.confirm(
            '⚠️ Autenticación Requerida\n\n' +
            'Necesitas iniciar sesión como administrador principal (admin@mansus.com) para acceder al Panel Administrador.\n\n' +
            '¿Deseas continuar?'
        );
        if (confirmed) {
            window.location.href = '/admin/login';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex font-sans text-gray-900">
            {/* Sidebar - Desktop */}
            <motion.aside
                initial={{ width: 280 }}
                animate={{ width: isSidebarOpen ? 280 : 80 }}
                className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex-shrink-0 flex flex-col fixed md:relative h-full z-30 hidden md:flex shadow-2xl"
            >
                {/* Logo */}
                <div className="h-20 flex items-center justify-center px-8 border-b border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                    {isSidebarOpen ? (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative flex items-center gap-2"
                        >
                            <Sparkles className="text-yellow-400" size={24} />
                            <span className="text-2xl font-serif font-bold tracking-widest bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                MANSUS
                            </span>
                        </motion.div>
                    ) : (
                        <span className="text-2xl font-serif font-bold text-white">M</span>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <motion.div
                                key={item.path}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.isReact ? (
                                    <Link
                                        to={item.path}
                                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden ${isActive
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <item.icon
                                            size={22}
                                            strokeWidth={isActive ? 2.5 : 2}
                                            className="relative z-10"
                                        />
                                        {isSidebarOpen && (
                                            <span className={`font-medium relative z-10 ${isActive ? 'font-semibold' : ''}`}>
                                                {item.name}
                                            </span>
                                        )}
                                        {!isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                                        )}
                                    </Link>
                                ) : (
                                    <a
                                        href={item.path}
                                        className="flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden text-gray-400 hover:text-white hover:bg-white/5"
                                    >
                                        <item.icon size={22} strokeWidth={2} className="relative z-10" />
                                        {isSidebarOpen && (
                                            <span className="font-medium relative z-10">{item.name}</span>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                                    </a>
                                )}
                            </motion.div>
                        );
                    })}

                    {/* Panel Admin Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <a
                            href="/admin/login"
                            onClick={handleAdminPanelClick}
                            className="flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden text-gray-400 hover:text-white hover:bg-white/5"
                        >
                            <Settings size={22} strokeWidth={2} className="relative z-10" />
                            {isSidebarOpen && (
                                <span className="font-medium relative z-10">Panel Administrador</span>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                        </a>
                    </motion.div>
                </nav>

                {/* Logout Button */}
                <div className="p-4 border-t border-white/10">
                    <Link
                        to="/login"
                        className="flex items-center gap-4 px-4 py-3.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-300 group"
                    >
                        <LogOut size={22} className="group-hover:rotate-12 transition-transform" />
                        {isSidebarOpen && <span className="font-medium">Cerrar Sesión</span>}
                    </Link>
                </div>
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Topbar */}
                <header className="h-20 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 flex items-center justify-between px-6 md:px-10 sticky top-0 z-20 shadow-sm">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-900 transition-all hidden md:block"
                        >
                            <Menu size={20} />
                        </button>
                        <button
                            className="md:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-500"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <Menu size={24} />
                        </button>

                        {/* Search Bar */}
                        <div className="hidden md:flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all w-96 shadow-sm">
                            <Search size={18} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="bg-transparent border-none focus:outline-none text-sm w-full text-gray-700 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Notifications */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative p-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-full text-gray-500 hover:text-gray-900 transition-all"
                        >
                            <Bell size={20} />
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full border-2 border-white shadow-lg"
                            />
                        </motion.button>

                        {/* User Profile */}
                        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-semibold text-gray-900">Admin User</p>
                                <p className="text-xs text-gray-500">Administrador</p>
                            </div>
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 ring-2 ring-white">
                                <User size={20} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6 md:p-10 overflow-auto">
                    <Outlet />
                </main>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <div className="md:hidden fixed inset-0 z-40">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="absolute inset-0 bg-black"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute inset-y-0 left-0 w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl flex flex-col"
                        >
                            <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="text-yellow-400" size={20} />
                                    <span className="text-xl font-serif font-bold tracking-widest text-white">MANSUS</span>
                                </div>
                                <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 hover:text-white">
                                    <X size={24} />
                                </button>
                            </div>
                            <nav className="flex-1 px-4 py-6 space-y-2">
                                {navItems.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setIsSidebarOpen(false)}
                                            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <item.icon size={20} />
                                            <span className="font-medium">{item.name}</span>
                                        </Link>
                                    );
                                })}
                                {/* Panel Admin Link (Mobile) */}
                                <a
                                    href="/admin/login"
                                    onClick={(e) => {
                                        setIsSidebarOpen(false);
                                        handleAdminPanelClick(e);
                                    }}
                                    className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-gray-400 hover:text-white hover:bg-white/5"
                                >
                                    <Settings size={20} />
                                    <span className="font-medium">Panel Administrador</span>
                                </a>
                            </nav>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
