import { CartItemList } from '@ui/cart/CartItemList';
import { Breadcrumb } from '@ui/component/Breadcrumb';
import { getCart } from '@lib/actions/cart';
import { CurrencyFormatter } from '@ui/component/CurrencyFormatter';

export default async function CartPage() {
  const cart: Cart = await getCart('11111111-1111-4444-1111-111111111119');

  const breadcrumbs: Breadcrumb[] = [
    { label: "Page d'accueil", href: '/' },
    { label: 'Mon pannier', href: '/cart', active: true },
  ];

  const cartItemCount = cart.cartItems.length;
  const priceList = cart.cartItems.map((item) => item.articleItem.price);
  const cartCost = priceList.reduce((total, price) => {
    return total + price;
  }, 0);
  const deliveryCost = priceList.length > 0 ? 5.99 : 0;
  const discount = priceList.length > 0 ? -9.99 : 0;

  return (
    <div className={'max-w-[90rem] mx-auto p-4'}>
      <div className={'py-2 mb-4'}>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <h1 className={'font-bold text-4xl'}>Mon pannier</h1>
      </div>
      <div className={'grid sm:grid-cols-[3fr,2fr] gap-4'}>
        <CartItemList cart={cart} />
        <div className={'p-3'}>
        <div className={'pb-4 mb-4 border-b'}>
          <h2 className={'font-semibold text-xl mb-4'}>Résumé de la commande</h2>
          <div className={'flex flex-col gap-4'}>
          <div className={'flex justify-between'}>
            <p>Sous-total ({cartItemCount} article{cartItemCount> 1 && 's'})</p>
            <CurrencyFormatter value={cartCost} />
          </div>
          <div className={'flex justify-between'}>
            <p>Frais de livraison</p>
            <CurrencyFormatter value={deliveryCost} />
          </div>
          <div className={'flex justify-between'}>
            <p>Code promo</p>
            <CurrencyFormatter value={discount} />
          </div>
          </div>
          <div className={'flex justify-between mt-4 text-xl'}>
            <p>Prix total :</p>
            <CurrencyFormatter value={cartCost + deliveryCost + discount} />
          </div>
        </div>
        <button
          className={'w-full p-3 flex items-center justify-center uppercase text-lg font-semibold bg-black text-white hover:bg-zinc-900 active:bg-zinc-800'}>Commander</button>
      </div>
      </div>
    </div>
  );
}
