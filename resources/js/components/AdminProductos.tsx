import { useEffect, useState } from "react";

export default function AdminProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("/api/admin/productos")
            .then(res => res.json())
            .then(data => setProductos(data.data)); // paginated
    }, []);

    return (
        <div className="p-4 bg-white shadow rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Productos</h2>

            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Nombre</th>
                        <th className="p-2 border">Precio</th>
                    </tr>
                </thead>

                <tbody>
                    {productos.map(p => (
                        <tr key={p.id}>
                            <td className="border p-2">{p.id}</td>
                            <td className="border p-2">{p.nombre}</td>
                            <td className="border p-2">{p.precio} €</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
