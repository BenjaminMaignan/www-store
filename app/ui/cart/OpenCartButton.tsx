'use client';

import { IconShoppingCart } from '@tabler/icons-react';
import { redirect, usePathname } from 'next/navigation';

export function OpenCartButton() {
  const pathname = usePathname();

  const goToCartPage = () => {
    if (pathname !== '/cart') {
      redirect('/cart');
    }
  };
  return (
    <button className={'text-black'} onClick={goToCartPage}>
      <IconShoppingCart />
    </button>
  );
}
