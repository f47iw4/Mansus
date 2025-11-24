import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import { CartProvider } from '../context/CartContext';

// Public Pages
import Home from '../pages/Home';
import Jewelry from '../pages/Jewelry';
import Collections from '../pages/Collections';
import Watches from '../pages/Watches';
import Brand from '../pages/Brand';
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';

// Admin Pages
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/admin/Dashboard';
import Products from '../pages/admin/Products';
import Orders from '../pages/admin/Orders';

// Layout wrapper for public pages to include Header/Footer
const PublicLayout = ({ children }) => (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
        <Header />
        <CartSidebar />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
    </div>
);

export default function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
                    <Route path="/joyas" element={<PublicLayout><Jewelry /></PublicLayout>} />
                    <Route path="/colecciones" element={<PublicLayout><Collections /></PublicLayout>} />
                    <Route path="/relojes" element={<PublicLayout><Watches /></PublicLayout>} />
                    <Route path="/marca" element={<PublicLayout><Brand /></PublicLayout>} />
                    <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
                    <Route path="/product/:id" element={<PublicLayout><ProductDetail /></PublicLayout>} />
                    <Route path="/checkout" element={<PublicLayout><Checkout /></PublicLayout>} />

                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="products" element={<Products />} />
                        <Route path="orders" element={<Orders />} />
                    </Route>

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}
