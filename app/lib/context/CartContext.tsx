import { createContext, useContext, useMemo } from 'react';
import { createCartItem } from '@lib/actions/cartitem';

interface CartContextType {
  cart : Cart;
  addToCart: (cartItem: CartItemRequest) => Promise<void>;
}

interface Props {
  cart: Cart;
  children: React.ReactNode;
}

const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartProvider({ cart, children }: Readonly<Props>) {
  const addToCart = async (cartItem: CartItemRequest) => {
    createCartItem(cartItem)
  }

  const value = useMemo(() => ({ cart, addToCart }), [cart]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}