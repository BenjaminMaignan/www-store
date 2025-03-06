'use server';

import { revalidateTag } from 'next/cache';

export async function createCartItem(
  cartItemReq: CartItemRequest
): Promise<void> {
  const response = await fetch(`http://localhost:8080/api/cart-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItemReq),
  });

  if (!response.ok) {
    const error: ProblemDetail = await response.json();
    throw new Error(error.detail || 'An error occurred');
  }

  revalidateTag('cart');
}

export async function updateCartItem(
  cartItemReq: CartItemRequest
): Promise<CartItem> {
  const response = await fetch(
    `http://localhost:8080/api/cart-items/${cartItemReq.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItemReq),
    }
  );

  revalidateTag('cart');

  return response.json();
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
