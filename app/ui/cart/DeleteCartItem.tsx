'use client';

import { useCart } from '@lib/context/CartContext';

interface Props {
  cartItemId: string;
}

export function DeleteCartItem({ cartItemId }: Readonly<Props>) {
  const { removeFromCart } = useCart();

  const onDelete = async () => {
    await removeFromCart(cartItemId);
  };

  return (
    <button
      className={'font-normal text-xs underline text-zinc-500 hover:text-black'}
      onClick={onDelete}
    >
      supprimer
    </button>
  );
}
