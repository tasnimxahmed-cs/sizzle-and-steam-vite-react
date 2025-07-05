import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Initialize from localStorage or empty array
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Sync cart to localStorage on changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add or update quantity of item
  const addItem = (item, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  // Update quantity for an item (replace)
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // enforce min 1
    setCart(prev =>
      prev.map(i => (i.id === id ? { ...i, quantity } : i))
    );
  };

  // Clear entire cart
  const clearCart = () => setCart([]);

  // Total count of items
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
