<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - MANSUS</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
        }
    </style>
</head>
<body class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 animate-gradient">
    <div class="w-full max-w-md">
        <!-- Logo/Brand -->
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-white mb-2">MANSUS</h1>
            <p class="text-gray-400">Panel de Administración</p>
        </div>

        <!-- Login Card -->
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
            <div class="text-center mb-8">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full mb-4 shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h2 class="text-2xl font-bold text-white">Acceso Seguro</h2>
                <p class="text-gray-300 text-sm mt-2">Ingresa tus credenciales de administrador</p>
            </div>

            @if ($errors->any())
                <div class="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl backdrop-blur-sm">
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-red-200 text-sm font-medium">{{ $errors->first() }}</p>
                    </div>
                </div>
            @endif

            <form method="POST" action="{{ route('admin.login.post') }}" id="loginForm">
                @csrf
                <div class="space-y-5">
                    <div>
                        <label for="email" class="block text-sm font-semibold text-gray-200 mb-2">
                            Email
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value="{{ old('email') }}" 
                                required 
                                autofocus
                                class="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all backdrop-blur-sm"
                                placeholder="admin@mansus.com"
                            >
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-semibold text-gray-200 mb-2">
                            Contraseña
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                required
                                class="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all backdrop-blur-sm"
                                placeholder="••••••••"
                            >
                        </div>
                    </div>

                    <button 
                        type="submit"
                        id="submitBtn"
                        class="w-full py-3.5 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        <span id="btnText">Iniciar Sesión</span>
                        <span id="btnLoading" class="hidden">
                            <svg class="animate-spin inline-block w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Verificando...
                        </span>
                    </button>
                </div>
            </form>

            <div class="mt-6 text-center">
                <a href="/" class="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors group">
                    <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver a la tienda
                </a>
            </div>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8 text-gray-400 text-sm">
            <p>&copy; 2025 MANSUS. Todos los derechos reservados.</p>
        </div>
    </div>

    <script>
        document.getElementById('loginForm').addEventListener('submit', function() {
            const btn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const btnLoading = document.getElementById('btnLoading');
            
            btn.disabled = true;
            btnText.classList.add('hidden');
            btnLoading.classList.remove('hidden');
        });
    </script>
</body>
</html>
