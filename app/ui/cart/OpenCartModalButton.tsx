'use client';

import { useNotification } from '@lib/hooks/useNotification';
import { IconShoppingCart } from '@tabler/icons-react';
import { redirect, usePathname } from 'next/navigation';

export function OpenCartModalButton() {
  const pathname = usePathname();
  const { openNotification, contextHolder } = useNotification();

  const goToCartPage = () => {
    if (pathname !== '/cart') {
      redirect('/cart');
    }
  };
  return (
    <>
      <button onClick={openNotification} className={'text-white'}>
        Add Notif
      </button>
      {contextHolder}
      <button className={'text-white'} onClick={goToCartPage}>
        <IconShoppingCart className={'text-white w-6 grid grid-cols-2'} />
      </button>
    </>
  );
}
