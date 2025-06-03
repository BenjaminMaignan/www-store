'use client';

import {
  createCartItem,
  deleteCartItem,
  updateCartItem,
} from '@lib/actions/cartitem';
import { createContext, useContext, useMemo } from 'react';

interface CartContextType {
  cart: Cart;
  addToCart: (cartItem: CartItemRequest) => Promise<void>;
  removeFromCart: (cartItemId: string) => Promise<void>;
  updateFromCart: (
    cartId: string,
    cartItemId: string,
    articleItemId: string,
    quantity: number
  ) => Promise<void>;
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
    await createCartItem(cartItem);
  };

  const updateFromCart = async (
    cartId: string,
    cartItemId: string,
    articleItemId: string,
    quantity: number
  ) => {
    await updateCartItem({
      id: cartItemId,
      cartId: cartId,
      articleItemId: articleItemId,
      quantity: quantity,
    } as CartItemRequest);
  };

  const removeFromCart = async (cartItemId: string) => {
    await deleteCartItem(cartItemId);
  };

  const value = useMemo(
    () => ({ cart, addToCart, removeFromCart, updateFromCart }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
