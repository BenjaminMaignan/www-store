'use client';

import { IconShoppingCart } from '@tabler/icons-react';
import { redirect, usePathname } from 'next/navigation';

export function OpenCartModalButton() {
  const pathname = usePathname();

  const goToCartPage = () => {
    if (pathname !== '/cart') {
      redirect('/cart');
    }
  };
  return (
    <button className={'text-white'} onClick={goToCartPage}>
      <IconShoppingCart className={'text-white w-6 grid grid-cols-2'} />
    </button>
  );
}
