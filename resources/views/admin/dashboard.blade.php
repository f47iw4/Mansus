@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <h1 class="mb-4">Panel de Administración</h1>
    
    <div class="row g-4">
        <!-- Card: Gestionar Productos -->
        <div class="col-md-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5 class="card-title mb-0">
                            <i class="bi bi-box-seam text-primary"></i> Gestionar Productos
                        </h5>
                    </div>
                    <p class="card-text text-muted">
                        Administra el catálogo de productos: crear, editar, eliminar y activar/desactivar productos.
                    </p>
                    <div class="mb-3">
                        <h6 class="text-muted mb-2">Resumen:</h6>
                        <ul class="list-unstyled">
                            <li><strong>{{ $totalProductos }}</strong> productos totales</li>
                            <li><strong class="text-success">{{ $productosActivos }}</strong> activos</li>
                            <li><strong class="text-secondary">{{ $productosInactivos }}</strong> inactivos</li>
                        </ul>
                    </div>
                    <a href="{{ route('admin.productos.index') }}" class="btn btn-primary w-100">
                        <i class="bi bi-arrow-right-circle"></i> Ir a Productos
                    </a>
                </div>
            </div>
        </div>

        <!-- Card: Gestionar Clientes -->
        <div class="col-md-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5 class="card-title mb-0">
                            <i class="bi bi-people text-success"></i> Gestionar Clientes
                        </h5>
                    </div>
                    <p class="card-text text-muted">
                        Visualiza y administra los clientes registrados, sus datos y status VIP.
                    </p>
                    <div class="mb-3">
                        <h6 class="text-muted mb-2">Resumen:</h6>
                        <ul class="list-unstyled">
                            <li><strong>{{ $totalClientes }}</strong> clientes registrados</li>
                            <li><strong class="text-warning">{{ $clientesVIP }}</strong> clientes VIP</li>
                            <li><strong>{{ $clientesRecientes }}</strong> últimos 7 días</li>
                        </ul>
                    </div>
                    <a href="{{ route('admin.clientes.index') }}" class="btn btn-success w-100">
                        <i class="bi bi-arrow-right-circle"></i> Ir a Clientes
                    </a>
                </div>
            </div>
        </div>

        <!-- Card: Estado del Servidor -->
        <div class="col-md-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5 class="card-title mb-0">
                            <i class="bi bi-hdd-network text-info"></i> Estado del Servidor
                        </h5>
                    </div>
                    <p class="card-text text-muted">
                        Verifica el estado de la conexión entre backend y frontend.
                    </p>
                    <div class="mb-3">
                        <h6 class="text-muted mb-2">Estado actual:</h6>
                        <ul class="list-unstyled">
                            <li>
                                <span class="badge bg-success">
                                    <i class="bi bi-check-circle"></i> Base de datos: OK
                                </span>
                            </li>
                            <li class="mt-2">
                                <span class="badge bg-success">
                                    <i class="bi bi-check-circle"></i> API: Operativa
                                </span>
                            </li>
                            <li class="mt-2">
                                <small class="text-muted">Laravel v{{ app()->version() }}</small>
                            </li>
                        </ul>
                    </div>
                    <a href="{{ route('admin.servidor') }}" class="btn btn-info w-100">
                        <i class="bi bi-arrow-right-circle"></i> Ver Detalles
                    </a>
                </div>
            </div>
        </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-12">
            <div class="card shadow-sm">
                <div class="card-header bg-white">
                    <h5 class="mb-0"><i class="bi bi-graph-up text-primary"></i> Productos Más Vendidos</h5>
                </div>
                <div class="card-body">
                    @if($productosMasVendidos->count() > 0)
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Categoría</th>
                                        <th>Precio</th>
                                        <th>Ventas</th>
                                        <th>Stock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($productosMasVendidos as $producto)
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    @if($producto->imagen)
                                                        <img src="{{ $producto->imagen }}" alt="{{ $producto->nombre }}" class="rounded me-2" style="width: 40px; height: 40px; object-fit: cover;">
                                                    @else
                                                        <div class="rounded me-2 bg-secondary d-flex align-items-center justify-content-center text-white" style="width: 40px; height: 40px;">
                                                            <i class="bi bi-image"></i>
                                                        </div>
                                                    @endif
                                                    {{ $producto->nombre }}
                                                </div>
                                            </td>
                                            <td>{{ $producto->categoria }}</td>
                                            <td>€{{ number_format($producto->precio, 2) }}</td>
                                            <td><strong>{{ $producto->ventas }}</strong></td>
                                            <td>
                                                <span class="badge bg-{{ $producto->stock < 5 ? 'danger' : 'success' }}">
                                                    {{ $producto->stock }}
                                                </span>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    @else
                        <p class="text-muted text-center py-3">No hay datos de ventas disponibles.</p>
                    @endif
                </div>
            </div>
        </div>
    </div>

    <!-- Sección de accesos rápidos -->
    <div class="row mt-5">
        <div class="col-12">
            <h3 class="mb-3">Accesos Rápidos</h3>
            <div class="btn-group" role="group">
                <a href="{{ route('admin.productos.create') }}" class="btn btn-outline-primary">
                    <i class="bi bi-plus-circle"></i> Nuevo Producto
                </a>
                <a href="{{ route('admin.clientes.create') }}" class="btn btn-outline-success">
                    <i class="bi bi-person-plus"></i> Nuevo Cliente
                </a>
                <a href="{{ route('productos.index') }}" class="btn btn-outline-secondary" target="_blank">
                    <i class="bi bi-eye"></i> Ver Tienda Pública
                </a>
            </div>
        </div>
    </div>
</div>
@endsection