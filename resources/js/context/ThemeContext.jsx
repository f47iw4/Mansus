import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Force light mode
    const isDark = false;

    useEffect(() => {
        // Always ensure dark mode is disabled
        document.documentElement.classList.remove('dark');
        localStorage.removeItem('theme');
    }, []);

    const toggleTheme = () => {
        // No-op
        console.log('Theme toggling is disabled');
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}
