'use client';

import { createCartItem } from '@lib/actions/cartitem';
import { clsx } from 'clsx';
import { ReactNode, useState } from 'react';

import { Loader } from '@ui/component/Loader';

interface Props {
  articleId: string;
}

export function AddToCart({ articleId }: Readonly<Props>) {
  const [message, setMessage] = useState<string | ReactNode>('Add to cart');

  const [state, setState] = useState<'normal' | 'error'>('normal');

  const onClick = () => {
    const cartItemReq = {
      articleId: articleId,
      cartId: '11111111-1111-4444-1111-111111111119',
      quantity: 1,
    } as CartItemRequest;
    setMessage(
      <>
        <Loader />
        <p className={'ml-2'}>Adding to cart ...</p>
      </>
    );
    createCartItem(cartItemReq)
      .then(() => setMessage('Add to cart'))
      .catch((error) => {
        setMessage(error.message);
        setState('error');
        setTimeout(() => {
          setState('normal');
          setMessage('Add to cart');
        }, 8000);
      });
  };

  return (
    <button
      onClick={onClick}
      disabled={state !== 'normal'}
      className={clsx('w-full rounded p-1 flex items-center justify-center', {
        'bg-zinc-200 text-white hover:bg-black hover:text-white':
          state == 'normal',
        'bg-red-100 text-red-500': state == 'error',
      })}
    >
      {message}
    </button>
  );
}
