import React, { createContext, useContext, useState, useEffect } from 'react';
import { type MenuItem } from '../data/menuData';

export interface CartItem {
  id: string; // unique cart identifier (e.g. itemId-size-toppings)
  menuItem: MenuItem;
  quantity: number;
  size?: 'Small' | 'Medium' | 'Large' | 'XL';
  toppings: { name: string; price: number }[];
  unitPrice: number; // base price + size difference + toppings sum
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    item: MenuItem,
    quantity: number,
    size?: 'Small' | 'Medium' | 'Large' | 'XL',
    toppings?: { name: string; price: number }[]
  ) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, change: number) => void;
  clearCart: () => void;
  subtotal: number;
  deliveryCharges: number;
  grandTotal: number;
  totalItemsCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const localData = localStorage.getItem('oven_bake_cart');
    return localData ? JSON.parse(localData) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('oven_bake_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (
    item: MenuItem,
    quantity: number,
    size?: 'Small' | 'Medium' | 'Large' | 'XL',
    toppings: { name: string; price: number }[] = []
  ) => {
    // Determine unit price
    let basePrice = item.price;
    if (item.isPizza && size && item.sizes) {
      const selectedSizeObj = item.sizes.find((s) => s.name === size);
      if (selectedSizeObj) {
        basePrice = selectedSizeObj.price;
      }
    }
    
    const toppingsPrice = toppings.reduce((acc, t) => acc + t.price, 0);
    const finalUnitPrice = basePrice + toppingsPrice;

    // Create unique key for this item combo
    const toppingsKey = toppings
      .map((t) => t.name)
      .sort()
      .join(',');
    const cartItemId = `${item.id}-${size || 'default'}-${toppingsKey || 'none'}`;

    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === cartItemId);
      
      if (existingItemIndex > -1) {
        // Increment quantity
        const newItems = [...prevItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity
        };
        return newItems;
      } else {
        // Add new item combo
        return [
          ...prevItems,
          {
            id: cartItemId,
            menuItem: item,
            quantity,
            size,
            toppings,
            unitPrice: finalUnitPrice
          }
        ];
      }
    });

    // Auto open cart when item is added
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, change: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + change;
            return { ...item, quantity: Math.max(1, newQty) };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const deliveryCharges = subtotal > 0 ? 150 : 0;
  const grandTotal = subtotal + deliveryCharges;
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        deliveryCharges,
        grandTotal,
        totalItemsCount,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
