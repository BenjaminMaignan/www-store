'use client';

import { useCart } from '@lib/context/CartContext';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';
import { clsx } from 'clsx';

import styles from '@ui/cart/quantityselector.module.css';

interface Props {
  cartId: string;
  cartItemId: string;
  articleItemId: string;
  quantity: number;
  availableQuantity: number;
}

export function QuantitySelector({
  cartId,
  cartItemId,
  articleItemId,
  quantity,
  availableQuantity,
}: Readonly<Props>) {
  const { updateFromCart, removeFromCart } = useCart();

  const onIncrease = async () => {
    if (quantity < availableQuantity) {
      await updateFromCart(cartId, cartItemId, articleItemId, quantity + 1);
    }
  };

  const onDecrease = async () => {
    if (quantity > 1) {
      await updateFromCart(cartId, cartItemId, articleItemId, quantity - 1);
    } else {
      await removeFromCart(cartItemId);
    }
  };

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value <= availableQuantity) {
      updateFromCart(cartId, cartItemId, articleItemId, value);
    }
  };

  const isAtMax = quantity >= availableQuantity;

  return (
    <div className={styles.quantitySelector + ' flex'}>
      <button
        onClick={onDecrease}
        className={
          'flex items-center justify-center border-y border-l border-black w-8 h-8 active:bg-zinc-200'
        }
      >
        {quantity === 1 ? (
          <IconTrash className={'size-4'} />
        ) : (
          <IconMinus className={'size-4'} />
        )}
      </button>
      <input
        type={'number'}
        value={quantity}
        onChange={onQuantityChange}
        className={'border border-black w-8 h-8 text-center'}
      />
      <button
        onClick={onIncrease}
        disabled={isAtMax}
        className={clsx(
          'flex items-center justify-center border-y border-r border-black w-8 h-8 active:bg-zinc-200',
          'disabled:bg-gray-100 disabled:text-zinc-300 disabled:border-gray-300'
        )}
      >
        <IconPlus className={'size-4'} />
      </button>
    </div>
  );
}
