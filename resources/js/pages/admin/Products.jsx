import React, { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Filter, MoreHorizontal, ArrowUpDown, Loader, RefreshCw } from 'lucide-react';
import ProductModal from '../../components/admin/ProductModal';
import axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/admin/productos');
            // Check if response.data is paginated (Laravel paginate returns { data: [...], ... })
            const data = response.data.data ? response.data.data : response.data;
            setProducts(data);
            setError(null);
        } catch (err) {
            console.error('Error fetching products:', err);
            setError('No se pudieron cargar los productos.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSave = async (formData) => {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const config = {
            headers: {
                'X-CSRF-TOKEN': csrfToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        try {
            if (editingProduct) {
                // Update
                await axios.put(`/api/admin/productos/${editingProduct.id_producto}`, formData, config);
            } else {
                // Create
                await axios.post('/api/admin/productos', formData, config);
            }
            // Refresh list
            fetchProducts();
        } catch (err) {
            console.error('Error saving:', err);
            throw err; // Re-throw to be handled by modal
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('¿Estás seguro de que quieres eliminar este producto?')) return;

        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        try {
            await axios.delete(`/api/admin/productos/${id}`, {
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                    'Accept': 'application/json'
                }
            });
            fetchProducts();
        } catch (err) {
            console.error('Error deleting:', err);
            alert('Error al eliminar el producto.');
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const handleCreate = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
    };

    // Client-side filtering (since API doesn't support it yet without modifying controller)
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (product.descripcion && product.descripcion.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = filterCategory ? product.categoria === filterCategory : true;
        return matchesSearch && matchesCategory;
    });

    if (loading && products.length === 0) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader className="animate-spin text-gray-400" size={32} />
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Productos</h1>
                    <p className="text-gray-500 mt-1">Gestiona tu catálogo, inventario y precios.</p>
                </div>
                <button
                    onClick={handleCreate}
                    className="bg-gray-900 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 font-medium"
                >
                    <Plus size={20} />
                    <span>Añadir Producto</span>
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                {/* Toolbar */}
                <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Buscar por nombre o descripción..."
                            className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all"
                        />
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="px-4 py-2.5 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 focus:outline-none bg-white"
                        >
                            <option value="">Todas las Categorías</option>
                            <option value="Anillos">Anillos</option>
                            <option value="Collares">Collares</option>
                            <option value="Pulseras">Pulseras</option>
                            <option value="Pendientes">Pendientes</option>
                            <option value="Relojes">Relojes</option>
                        </select>
                        <button
                            onClick={fetchProducts}
                            className="px-4 py-2.5 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 flex items-center gap-2 font-medium transition-colors"
                        >
                            <RefreshCw size={18} />
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50/50 text-gray-500 uppercase tracking-wider font-semibold text-xs border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4">Producto</th>
                                <th className="px-6 py-4">Categoría</th>
                                <th className="px-6 py-4">Precio</th>
                                <th className="px-6 py-4">Stock</th>
                                <th className="px-6 py-4">Estado</th>
                                <th className="px-6 py-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredProducts.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                                        No se encontraron productos.
                                    </td>
                                </tr>
                            ) : (
                                filteredProducts.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50/80 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden border border-gray-100 flex items-center justify-center">
                                                    {product.imagen ? (
                                                        <img src={product.imagen} alt={product.nombre} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <span className="text-xs text-gray-400">No img</span>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{product.nombre}</p>
                                                    {product.material && <p className="text-xs text-gray-500">{product.material}</p>}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                                                {product.categoria || 'Sin categoría'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            €{parseFloat(product.precio).toFixed(2)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-600">{product.stock}</span>
                                                {product.stock < 5 && product.stock > 0 && (
                                                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                                )}
                                                {product.stock === 0 && (
                                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${product.activo ? 'bg-green-50 text-green-700 border-green-100' :
                                                'bg-red-50 text-red-700 border-red-100'
                                                }`}>
                                                {product.activo ? 'Activo' : 'Inactivo'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => handleEdit(product)}
                                                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product.id)}
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <ProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={editingProduct}
                onSave={handleSave}
            />
        </div>
    );
}
