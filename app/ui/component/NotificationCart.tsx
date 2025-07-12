import { useCart } from '@lib/context/CartContext';
import { IconX } from '@tabler/icons-react';
import Link from 'next/link';

import { CurrencyFormatter } from '@ui/component/CurrencyFormatter';

interface Props {
  article: Article;
  articleItem: ArticleItem;
  handleClose?: () => void;
}

export function NotificationCart({
  article,
  articleItem,
  handleClose,
}: Readonly<Props>) {
  const { cart } = useCart();

  const onClose = () => {
    if (handleClose) {
      handleClose();
    }
  };

  // const cartItemCount = cart.cartItems.length;
  const cartItemCount = 0;
  const priceList = cart.cartItems.map((item) => item.articleItem.price);
  const cartCost = priceList.reduce((total, price) => {
    return total + price;
  }, 0);

  return (
    <div className={'w-80 bg-white shadow-2xl border border-zinc-100'}>
      <div
        className={
          'bg-zinc-100 flex items-center justify-between pr-3 pl-6 py-4'
        }
      >
        <h2 className={'font-bold text-xl'}>Article ajouté au panier</h2>
        <button
          className={
            'aspect-square w-8 rounded flex items-center justify-center text-zinc-400 hover:text-zinc-800 hover:bg-zinc-200 transition ease-in'
          }
          onClick={onClose}
        >
          <IconX className={'w-5 h-5'} />
        </button>
      </div>
      <div className={'p-4 border-t border-zinc-300 flex gap-4'}>
        <div className={'aspect-square h-20 my-auto'}>
          <img
            className={'w-full h-full object-cover'}
            src='https://mrmockup.com/wp-content/uploads/2023/07/Free-T-Shirt-on-Men-Mockup-01.jpg'
            alt='Sweat'
          />
        </div>
        <div>
          <p className={'font-semibold mb-2'}>{article.name}</p>
          <p className={'text-xs text-zinc-500 mb-2'}>
            Couleur :{' '}
            <span className={'font-bold text-zinc-700'}>
              {articleItem.color}
            </span>
          </p>
          <p className={'text-xs text-zinc-500 mb-2'}>
            Taille :{' '}
            <span className={'font-bold text-zinc-700'}>
              {articleItem.size}
            </span>
          </p>
          <CurrencyFormatter value={article.price} />
        </div>
      </div>
      <div className={'p-4 border-t border-zinc-300'}>
        <div
          className={
            'mb-4 flex items-center justify-between text-zinc-800 font-bold'
          }
        >
          <p>{cartItemCount} Articles</p>
          <CurrencyFormatter value={cartCost} />
        </div>
        <div className={'flex'}>
          <Link
            className={
              'w-full bg-black text-white flex justify-center uppercase text-lg font-semibold p-3'
            }
            href={'/cart'}
          >
            Afficher le panier
          </Link>
        </div>
      </div>
    </div>
  );
}
