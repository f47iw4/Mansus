import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

import { AuthProvider } from './context/AuthContext';

if (document.getElementById('app')) {
    const root = createRoot(document.getElementById('app'));
    root.render(
        <React.StrictMode>
            <AuthProvider>
                <App />
            </AuthProvider>
        </React.StrictMode>
    );
}
