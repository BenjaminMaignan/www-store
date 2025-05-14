import { Suspense } from 'react';

import { CartItemList } from '@ui/cart/CartItemList';
import { Breadcrumb } from '@ui/component/Breadcrumb';

export default async function CartPage() {
  const breadcrumbs: Breadcrumb[] = [
    { label: "Page d'accueil", href: '/' },
    { label: 'Mon pannier', href: '/cart', active: true },
  ];

  return (
    <div className={'max-w-[90rem] mx-auto py-4'}>
      <div className={'py-2 mb-4'}>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <h1 className={'font-bold text-4xl'}>Mon pannier</h1>
      </div>
      <div>
        <Suspense fallback={<div>Chargement...</div>}>
          <CartItemList />
        </Suspense>
      </div>
    </div>
  );
}
