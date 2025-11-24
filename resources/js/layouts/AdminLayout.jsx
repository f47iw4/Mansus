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
    ChevronDown,
    User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Productos', path: '/admin/products', icon: Package },
        { name: 'Pedidos', path: '/admin/orders', icon: ShoppingCart },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
            {/* Sidebar */}
            <motion.aside
                initial={{ width: 280 }}
                animate={{ width: isSidebarOpen ? 280 : 80 }}
                className="bg-white border-r border-gray-200 flex-shrink-0 flex flex-col fixed md:relative h-full z-30 hidden md:flex"
            >
                <div className="h-20 flex items-center px-8 border-b border-gray-100">
                    {isSidebarOpen ? (
                        <span className="text-2xl font-serif font-bold tracking-widest text-gray-900">MANSUS</span>
                    ) : (
                        <span className="text-2xl font-serif font-bold text-gray-900">M</span>
                    )}
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group ${isActive
                                        ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                                {isSidebarOpen && (
                                    <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>
                                        {item.name}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <Link
                        to="/login"
                        className="flex items-center gap-4 px-4 py-3.5 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                    >
                        <LogOut size={22} />
                        {isSidebarOpen && <span className="font-medium">Cerrar Sesión</span>}
                    </Link>
                </div>
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Topbar */}
                <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-10 sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hidden md:block"
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
                        <div className="hidden md:flex items-center gap-3 px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-gray-300 focus-within:ring-2 focus-within:ring-gray-100 transition-all w-96">
                            <Search size={18} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="bg-transparent border-none focus:outline-none text-sm w-full text-gray-700 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative p-2 hover:bg-gray-50 rounded-full text-gray-500 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>

                        <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-semibold text-gray-900">Admin User</p>
                                <p className="text-xs text-gray-500">Administrador</p>
                            </div>
                            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-md">
                                <User size={20} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6 md:p-10 overflow-auto bg-gray-50/50">
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
                            className="absolute inset-y-0 left-0 w-64 bg-white shadow-2xl flex flex-col"
                        >
                            <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
                                <span className="text-xl font-serif font-bold tracking-widest">MANSUS</span>
                                <button onClick={() => setIsSidebarOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>
                            <nav className="flex-1 px-4 py-6 space-y-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsSidebarOpen(false)}
                                        className={`flex items-center gap-4 px-4 py-3 rounded-xl ${location.pathname === item.path
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-500'
                                            }`}
                                    >
                                        <item.icon size={20} />
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
