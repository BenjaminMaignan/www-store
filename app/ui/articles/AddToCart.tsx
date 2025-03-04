'use client';

import { createCartItem } from '@lib/actions/cartitem';

interface Props {
  articleId: string;
}

export function AddToCart({ articleId }: Readonly<Props>) {
  const onClick = () => {
    const cartItemReq = {
      articleId: articleId,
      cartId: '11111111-1111-4444-1111-111111111119',
      quantity: 1,
    } as CartItemRequest;
    createCartItem(cartItemReq).then((r) => console.log(r));
  };

  return (
    <button
      onClick={onClick}
      className={
        'bg-zinc-200 text-white w-full rounded p-1 hover:bg-black hover:text-white'
      }
    >
      Add to cart
    </button>
  );
}
