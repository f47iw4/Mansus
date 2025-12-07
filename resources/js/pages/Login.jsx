import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight } from 'lucide-react';

import { useAuth } from '../context/AuthContext';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Add name state for registration
    const [error, setError] = useState(''); // Add error state

    const navigate = useNavigate();
    const { login, register } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (isLogin) {
            const result = await login(email, password);
            console.log('Login result:', result); // DEBUG

            if (result.success) {
                console.log('User email:', result.user?.email); // DEBUG
                console.log('Is admin?', result.user?.email === 'admin@mansus.com'); // DEBUG

                // Si el usuario es admin, redirigir al panel de administración
                if (result.user && result.user.email === 'admin@mansus.com') {
                    console.log('Redirecting to /admin'); // DEBUG
                    navigate('/admin');
                } else {
                    console.log('Redirecting to /'); // DEBUG
                    // Usuarios normales van a la landing page
                    navigate('/');
                }
            } else {
                setError(result.message);
            }
        } else {
            const result = await register(name, email, password);
            if (result.success) {
                navigate('/');
            } else {
                setError(result.message);
            }
        }
    };

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 w-full max-w-md shadow-2xl overflow-hidden rounded-2xl"
            >
                <div className="p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-2">
                            {isLogin ? 'Bienvenido de nuevo' : 'Crear Cuenta'}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {isLogin ? 'Ingresa a tu cuenta MANSUS' : 'Únete al mundo exclusivo de MANSUS'}
                        </p>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold">Nombre y Apellido</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-gray-900 dark:focus:border-white focus:ring-0 outline-none transition-colors"
                                        placeholder="Nombre y Apellido"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold">Email</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-gray-900 dark:focus:border-white focus:ring-0 outline-none transition-colors"
                                    placeholder="nombre@ejemplo.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold">Contraseña</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:border-gray-900 dark:focus:border-white focus:ring-0 outline-none transition-colors"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {isLogin && (
                            <div className="flex justify-end">
                                <a href="#" className="text-xs text-gray-500 hover:text-gray-900 underline">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white py-4 uppercase tracking-widest text-sm hover:bg-gray-800 transition flex items-center justify-center gap-2 group"
                        >
                            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-sm text-gray-600 hover:text-gray-900"
                        >
                            {isLogin ? (
                                <>¿No tienes cuenta? <span className="font-semibold underline">Regístrate</span></>
                            ) : (
                                <>¿Ya tienes cuenta? <span className="font-semibold underline">Inicia Sesión</span></>
                            )}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
