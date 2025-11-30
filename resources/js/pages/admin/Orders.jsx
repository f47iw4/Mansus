import React from 'react';
import { Eye, Download, Filter, Search, Calendar, Package, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import WorldMap from '../../components/ui/world-map';

export default function Orders() {
    const orders = [
        { id: '#ORD-7829', customer: 'Sofia Martinez', email: 'sofia@example.com', date: '24 Nov 2025', total: 450.00, status: 'Completed', items: 3, location: 'Madrid, España' },
        { id: '#ORD-7830', customer: 'Carlos Ruiz', email: 'carlos@example.com', date: '24 Nov 2025', total: 120.50, status: 'Processing', items: 1, location: 'Barcelona, España' },
        { id: '#ORD-7831', customer: 'Ana Lopez', email: 'ana@example.com', date: '23 Nov 2025', total: 890.00, status: 'Pending', items: 5, location: 'Buenos Aires, Argentina' },
        { id: '#ORD-7832', customer: 'Miguel Angel', email: 'miguel@example.com', date: '23 Nov 2025', total: 65.00, status: 'Cancelled', items: 1, location: 'Ciudad de México, México' },
    ];

    // Map dots - from Spain (warehouse) to customer locations
    const mapDots = [
        {
            start: { lat: 40.4168, lng: -3.7038 }, // Madrid, España
            end: { lat: 41.3851, lng: 2.1734 }, // Barcelona
        },
        {
            start: { lat: 40.4168, lng: -3.7038 }, // Madrid
            end: { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
        },
        {
            start: { lat: 40.4168, lng: -3.7038 }, // Madrid
            end: { lat: 19.4326, lng: -99.1332 }, // Ciudad de México
        },
        {
            start: { lat: 40.4168, lng: -3.7038 }, // Madrid
            end: { lat: 51.5074, lng: -0.1278 }, // London
        },
        {
            start: { lat: 40.4168, lng: -3.7038 }, // Madrid
            end: { lat: 40.7128, lng: -74.0060 }, // New York
        },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30';
            case 'Processing':
                return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30';
            case 'Pending':
                return 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg shadow-yellow-500/30';
            case 'Cancelled':
                return 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'Completed': return 'Completado';
            case 'Processing': return 'Procesando';
            case 'Pending': return 'Pendiente';
            case 'Cancelled': return 'Cancelado';
            default: return status;
        }
    };

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent tracking-tight">
                        Pedidos
                    </h1>
                    <p className="text-gray-500 mt-1">Gestiona y procesa los pedidos de los clientes.</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all font-medium shadow-lg shadow-blue-500/30"
                >
                    <Download size={20} />
                    <span>Exportar CSV</span>
                </motion.button>
            </motion.div>

            {/* World Map Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700"
            >
                <div className="p-8">
                    <div className="text-center mb-8">
                        <motion.h2
                            className="font-bold text-3xl md:text-4xl text-white mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Envíos{" "}
                            <span className="text-blue-400">
                                {"Internacionales".split("").map((char, idx) => (
                                    <motion.span
                                        key={idx}
                                        className="inline-block"
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: idx * 0.04 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h2>
                        <p className="text-sm md:text-lg text-slate-400 max-w-2xl mx-auto">
                            Conectamos con clientes de todo el mundo. Envíos rápidos y seguros desde nuestro almacén en Madrid.
                        </p>
                    </div>

                    {/* World Map */}
                    <div className="h-[400px] relative">
                        <WorldMap dots={mapDots} />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <div className="flex items-center gap-2 text-blue-400 mb-2">
                                <MapPin size={20} />
                                <span className="text-sm font-medium">Países</span>
                            </div>
                            <p className="text-2xl font-bold text-white">12</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <div className="flex items-center gap-2 text-green-400 mb-2">
                                <Package size={20} />
                                <span className="text-sm font-medium">Envíos</span>
                            </div>
                            <p className="text-2xl font-bold text-white">847</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <div className="flex items-center gap-2 text-purple-400 mb-2">
                                <Calendar size={20} />
                                <span className="text-sm font-medium">Este Mes</span>
                            </div>
                            <p className="text-2xl font-bold text-white">127</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <div className="flex items-center gap-2 text-yellow-400 mb-2">
                                <Download size={20} />
                                <span className="text-sm font-medium">En Tránsito</span>
                            </div>
                            <p className="text-2xl font-bold text-white">23</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Table Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
                {/* Toolbar */}
                <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gradient-to-r from-gray-50/50 to-transparent">
                    <div className="flex gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-80">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Buscar pedido, cliente..."
                                className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2.5 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 flex items-center gap-2 font-medium transition-all shadow-sm"
                        >
                            <Calendar size={18} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2.5 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 flex items-center gap-2 font-medium transition-all shadow-sm"
                        >
                            <Filter size={18} />
                            <span className="hidden sm:inline">Estado</span>
                        </motion.button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 uppercase tracking-wider font-semibold text-xs border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4">ID Pedido</th>
                                <th className="px-6 py-4">Cliente</th>
                                <th className="px-6 py-4">Ubicación</th>
                                <th className="px-6 py-4">Fecha</th>
                                <th className="px-6 py-4">Items</th>
                                <th className="px-6 py-4">Total</th>
                                <th className="px-6 py-4">Estado</th>
                                <th className="px-6 py-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order, index) => (
                                <motion.tr
                                    key={order.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all group cursor-pointer"
                                >
                                    <td className="px-6 py-4 font-bold text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{order.customer}</p>
                                            <p className="text-xs text-gray-500">{order.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1 text-gray-600">
                                            <MapPin size={14} className="text-gray-400" />
                                            <span className="text-sm">{order.location}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{order.date}</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1 text-gray-600">
                                            <Package size={16} />
                                            {order.items}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">€{order.total.toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getStatusStyle(order.status)}`}>
                                            {getStatusText(order.status)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                title="Ver Detalles"
                                            >
                                                <Eye size={18} />
                                            </motion.button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}
