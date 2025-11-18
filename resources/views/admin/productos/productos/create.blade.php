@extends('layouts.app')

@section('content')
<h1>Crear producto</h1>

<form action="{{ route('productos.store') }}" method="POST">
    @csrf
    @include('admin.productos.form')
    <button class="btn btn-success mt-3">Guardar</button>
</form>
@endsection
