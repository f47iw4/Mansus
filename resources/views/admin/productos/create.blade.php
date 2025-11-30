@extends('layouts.app')

@section('content')
<h1>Crear producto</h1>

<form action="{{ route('admin.productos.store') }}" method="POST" enctype="multipart/form-data">
    @csrf
    @include('admin.productos.form')
    <button class="btn btn-success mt-3">Guardar</button>
</form>
@endsection



