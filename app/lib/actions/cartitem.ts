'use server';

import { revalidateTag } from 'next/cache';

export async function createCartItem(
  cartItemReq: CartItemRequest
): Promise<void> {
  return fetch(`http://localhost:8080/api/cart-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItemReq),
  })
    .then(() => revalidateTag('cart'))
    .catch((error) => console.error('Error:', error));
}

export async function updateCartItem(
  cartItemReq: CartItemRequest
): Promise<CartItem> {
  return fetch(`http://localhost:8080/api/cart-items/${cartItemReq.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItemReq),
  })
    .then((res) => {
      revalidateTag('cart');
      return res.json();
    })
    .catch((error) => console.error('Error:', error));
}

export async function deleteCartItem(id: string): Promise<void> {
  return fetch(`http://localhost:8080/api/cart-items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => revalidateTag('cart'))
    .catch((error) => console.error('Error:', error));
}
