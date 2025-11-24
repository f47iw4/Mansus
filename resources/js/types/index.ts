// Product types
export interface Product {
    id: number;
    nombre: string;
    descripcion?: string;
    categoria?: string;
    material?: string;
    precio: number;
    stock: number;
    activo: boolean;
    imagen?: string;
}

// Cart types
export interface CartItem extends Product {
    quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
}

// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}
