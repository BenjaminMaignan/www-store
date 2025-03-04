'use server';

import { revalidateTag } from 'next/cache';

export async function getCart(cartId: string): Promise<Cart> {
  return fetch(`http://localhost:8080/api/carts/${cartId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['cart'], revalidate: 60 },
  }).then((res) => res.json());
}

export async function updateCart(cartReq: CartRequest): Promise<void> {
  return fetch(`http://localhost:8080/api/carts/${cartReq.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartReq),
  })
    .then(() => revalidateTag('cart'))
    .catch((error) => console.error('Error:', error));
}
