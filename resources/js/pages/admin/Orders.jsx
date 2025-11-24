import React from 'react';
import { Eye, Download, Filter, Search, Calendar } from 'lucide-react';

export default function Orders() {
    const orders = [
        { id: '#ORD-7829', customer: 'Sofia Martinez', email: 'sofia@example.com', date: '24 Nov 2025', total: 450.00, status: 'Completed', items: 3 },
        { id: '#ORD-7830', customer: 'Carlos Ruiz', email: 'carlos@example.com', date: '24 Nov 2025', total: 120.50, status: 'Processing', items: 1 },
        { id: '#ORD-7831', customer: 'Ana Lopez', email: 'ana@example.com', date: '23 Nov 2025', total: 890.00, status: 'Pending', items: 5 },
        { id: '#ORD-7832', customer: 'Miguel Angel', email: 'miguel@example.com', date: '23 Nov 2025', total: 65.00, status: 'Cancelled', items: 1 },
    ];

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Pedidos</h1>
                    <p className="text-gray-500 mt-1">Gestiona y procesa los pedidos de los clientes.</p>
                </div>
                <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition-all font-medium">
                    <Download size={20} />
                    <span>Exportar CSV</span>
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                {/* Toolbar */}
                <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="flex gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-80">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Buscar pedido, cliente..."
                                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all"
                            />
                        </div>
                        <button className="px-4 py-2.5 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 flex items-center gap-2 font-medium transition-colors">
                            <Calendar size={18} />
                        </button>
                        <button className="px-4 py-2.5 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 flex items-center gap-2 font-medium transition-colors">
                            <Filter size={18} />
                            <span>Estado</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50/50 text-gray-500 uppercase tracking-wider font-semibold text-xs border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4">ID Pedido</th>
                                <th className="px-6 py-4">Cliente</th>
                                <th className="px-6 py-4">Fecha</th>
                                <th className="px-6 py-4">Items</th>
                                <th className="px-6 py-4">Total</th>
                                <th className="px-6 py-4">Estado</th>
                                <th className="px-6 py-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50/80 transition-colors group">
                                    <td className="px-6 py-4 font-bold text-gray-900">{order.id}</td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{order.customer}</p>
                                            <p className="text-xs text-gray-500">{order.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{order.date}</td>
                                    <td className="px-6 py-4 text-gray-500">{order.items}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">€{order.total.toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${order.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-100' :
                                                order.status === 'Processing' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                                    order.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                                                        'bg-red-50 text-red-700 border-red-100'
                                            }`}>
                                            {order.status === 'Completed' ? 'Completado' :
                                                order.status === 'Processing' ? 'Procesando' :
                                                    order.status === 'Pending' ? 'Pendiente' : 'Cancelado'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors" title="Ver Detalles">
                                                <Eye size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
