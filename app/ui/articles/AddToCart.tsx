'use client';

import { createCartItem } from '@lib/actions/cartitem';
import { clsx } from 'clsx';
import { ReactNode, useState } from 'react';

import { Loader } from '@ui/component/Loader';
import { useNotification } from '@lib/context/NotificationContext';

interface Props {
  articleItem: ArticleItem;
}

export function AddToCart({ articleItem }: Readonly<Props>) {
  const { openNotification } = useNotification();

  const [message, setMessage] = useState<string | ReactNode>('Ajouter au panier');

  const [state, setState] = useState<'normal' | 'error'>('normal');

  const onClick = () => {
    const cartItemReq = {
      articleItemId: articleItem.id,
      cartId: '11111111-1111-4444-1111-111111111119',
      quantity: 1,
    } as CartItemRequest;
    setMessage(
      <>
        <Loader />
        <p className={'ml-4'}>Ajout en cours</p>
      </>
    );
    createCartItem(cartItemReq)
      .then(() => {
        setMessage('Ajouter au panier');
        openNotification("test", 'success');
      })
      .catch((error) => {
        setMessage(error.message);
        setState('error');
        setTimeout(() => {
          setState('normal');
          setMessage('Ajouter au panier');
        }, 3000);
      });
  };

  return (
    <button
      onClick={onClick}
      disabled={state !== 'normal'}
      className={clsx('w-full p-3 flex items-center justify-center uppercase text-lg font-semibold', {
        'bg-black text-white hover:bg-zinc-900 active:bg-zinc-800':
          state == 'normal',
        'bg-red-100 text-red-500': state == 'error',
      })}
    >
      {message}
    </button>
  );
}
