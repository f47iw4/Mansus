import React, { useState, useEffect } from 'react';
import { DollarSign, ShoppingBag, Users, TrendingUp, ArrowUpRight, ArrowDownRight, MoreHorizontal, Package } from 'lucide-react';
import axios from 'axios';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color, loading }) => (
    <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
            <div className={`p-3.5 rounded-xl ${color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                <Icon size={24} className={color.replace('bg-', 'text-')} />
            </div>
            <button className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal size={20} />
            </button>
        </div>
        <div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
            <div className="flex items-end gap-3">
                {loading ? (
                    <div className="h-9 w-24 bg-gray-100 animate-pulse rounded"></div>
                ) : (
                    <>
                        <span className="text-3xl font-bold text-gray-900 tracking-tight">{value}</span>
                        {trend && (
                            <span className={`text-sm font-medium mb-1.5 flex items-center gap-0.5 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                                {trendValue}%
                            </span>
                        )}
                    </>
                )}
            </div>
        </div>
    </div>
);

export default function Dashboard() {
    const [stats, setStats] = useState({
        totalProducts: 0,
        activeProducts: 0,
        lowStockProducts: 0,
        totalValue: 0
    });
    const [recentProducts, setRecentProducts] = useState([]);
    const [mostSoldProducts, setMostSoldProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        setLoading(true);
        try {
            // Corrected API endpoint
            const response = await axios.get('/api/admin/productos');
            const products = response.data.data || response.data;

            // Calculate stats
            const totalProducts = products.length;
            const activeProducts = products.filter(p => p.activo).length;
            const lowStockProducts = products.filter(p => p.stock < 5).length;
            const totalValue = products.reduce((sum, p) => sum + (parseFloat(p.precio) * p.stock), 0);

            setStats({
                totalProducts,
                activeProducts,
                lowStockProducts,
                totalValue
            });

            // Get recent products (last 5 - assuming higher ID is more recent or we could sort by date if available)
            // Since we don't have created_at in the mock controller/seeder explicitly sorted, we'll take the last ones
            const sortedByRecent = [...products].reverse();
            setRecentProducts(sortedByRecent.slice(0, 5));

            // Get most sold products
            const sortedBySales = [...products].sort((a, b) => (b.ventas || 0) - (a.ventas || 0));
            setMostSoldProducts(sortedBySales.slice(0, 5));
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
                    <p className="text-gray-500 mt-1">Resumen de tu tienda MANSUS.</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={fetchDashboardData}
                        className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                    >
                        Actualizar
                    </button>
                    <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
                        Descargar Reporte
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Productos"
                    value={stats.totalProducts}
                    icon={Package}
                    trend="up"
                    trendValue={100}
                    color="bg-blue-500"
                    loading={loading}
                />
                <StatCard
                    title="Productos Activos"
                    value={stats.activeProducts}
                    icon={ShoppingBag}
                    trend="up"
                    trendValue={Math.round((stats.activeProducts / stats.totalProducts) * 100) || 0}
                    color="bg-green-500"
                    loading={loading}
                />
                <StatCard
                    title="Stock Bajo"
                    value={stats.lowStockProducts}
                    icon={TrendingUp}
                    trend={stats.lowStockProducts > 0 ? "down" : "up"}
                    trendValue={stats.lowStockProducts}
                    color="bg-orange-500"
                    loading={loading}
                />
                <StatCard
                    title="Valor Inventario"
                    value={`€${stats.totalValue.toFixed(0)}`}
                    icon={DollarSign}
                    trend="up"
                    trendValue={15}
                    color="bg-purple-500"
                    loading={loading}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                    {/* Most Sold Products */}
                    <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-gray-900">Productos Más Vendidos</h3>
                        </div>
                        <div className="space-y-1">
                            {loading ? (
                                Array(3).fill(0).map((_, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 animate-pulse">
                                        <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                                        </div>
                                    </div>
                                ))
                            ) : mostSoldProducts.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    <p>No hay datos de ventas</p>
                                </div>
                            ) : (
                                mostSoldProducts.map((product) => (
                                    <div key={product.id_producto} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                                                {product.imagen ? (
                                                    <img src={product.imagen} alt={product.nombre} className="w-full h-full object-cover" />
                                                ) : (
                                                    <Package size={20} className="text-gray-400" />
                                                )}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">{product.nombre}</p>
                                                <p className="text-xs text-gray-500">Ventas: {product.ventas || 0}</p>
                                            </div>
                                        </div>
                                        <span className="text-sm font-bold text-gray-900">€{parseFloat(product.precio).toFixed(2)}</span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Recent Products */}
                    <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-gray-900">Productos Recientes</h3>
                            <a href="/#/admin/products" className="text-sm text-blue-600 font-medium hover:underline">Ver todos</a>
                        </div>
                        <div className="space-y-1">
                            {loading ? (
                                Array(5).fill(0).map((_, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 animate-pulse">
                                        <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                                            <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                ))
                            ) : recentProducts.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    <Package size={48} className="mx-auto mb-2 text-gray-300" />
                                    <p>No hay productos aún</p>
                                </div>
                            ) : (
                                recentProducts.map((product) => (
                                    <div key={product.id_producto} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors group cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:shadow-sm transition-all overflow-hidden">
                                                {product.imagen ? (
                                                    <img src={product.imagen} alt={product.nombre} className="w-full h-full object-cover" />
                                                ) : (
                                                    <Package size={20} className="text-gray-400" />
                                                )}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">{product.nombre}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs text-gray-500">{product.categoria || 'Sin categoría'}</span>
                                                    <span className="text-xs text-gray-400">•</span>
                                                    <span className={`text-xs font-medium ${product.stock < 5 ? 'text-orange-600' : 'text-gray-500'}`}>
                                                        Stock: {product.stock}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-sm font-bold text-gray-900">€{parseFloat(product.precio).toFixed(2)}</span>
                                            <span className={`inline-block text-xs px-2 py-0.5 rounded-full mt-1 ${product.activo ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'
                                                }`}>
                                                {product.activo ? 'Activo' : 'Inactivo'}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl text-white">
                    <h3 className="text-lg font-bold mb-6">Resumen Rápido</h3>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl backdrop-blur">
                            <div>
                                <p className="text-sm text-gray-300">Productos Totales</p>
                                <p className="text-2xl font-bold mt-1">{stats.totalProducts}</p>
                            </div>
                            <Package size={32} className="text-white/60" />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl backdrop-blur">
                            <div>
                                <p className="text-sm text-gray-300">Valor Total</p>
                                <p className="text-2xl font-bold mt-1">€{stats.totalValue.toFixed(2)}</p>
                            </div>
                            <DollarSign size={32} className="text-white/60" />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl backdrop-blur">
                            <div>
                                <p className="text-sm text-gray-300">Stock Bajo</p>
                                <p className="text-2xl font-bold mt-1">{stats.lowStockProducts}</p>
                            </div>
                            <TrendingUp size={32} className="text-white/60" />
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-sm text-gray-300 mb-2">Estado del Inventario</p>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                                    style={{ width: `${(stats.activeProducts / stats.totalProducts) * 100 || 0}%` }}
                                ></div>
                            </div>
                            <span className="text-sm font-medium">{Math.round((stats.activeProducts / stats.totalProducts) * 100) || 0}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
