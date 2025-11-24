<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
<meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Panel Admin</title>
    
</head>
<body>

    <div class="container">
        @yield('content')
    </div>

</body>
</html>
