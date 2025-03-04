'use client';

import { useCart } from '@lib/hooks/useCart';

interface Props {
  cartItemId: string;
}

export function DeleteCartItem({ cartItemId }: Readonly<Props>) {
  const { removeItemFromCart } = useCart();

  const onDelete = () => {
    removeItemFromCart(cartItemId);
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
