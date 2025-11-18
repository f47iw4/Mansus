@extends('layouts.app')

@section('content')
<h1>Editar producto</h1>

<form action="{{ route('productos.update', $producto) }}" method="POST">
    @csrf
    @method('PUT')
    @include('admin.productos.form')
    <button class="btn btn-primary mt-3">Actualizar</button>
</form>
@endsection
