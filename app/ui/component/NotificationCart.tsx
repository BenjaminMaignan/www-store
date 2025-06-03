import { IconX } from '@tabler/icons-react';
import Link from 'next/link';

import { CurrencyFormatter } from '@ui/component/CurrencyFormatter';

interface Props {
  article: Article;
  articleItem: ArticleItem;
  handleClose?: () => void;
}

export function NotificationCart({ article, articleItem, handleClose }: Readonly<Props>) {
  const onClose = () => {
    if (handleClose) {
      handleClose();
    }
  }

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
            src='https://assets.wordans.fr/files/model_specifications/2020/1/27/1052931/1052931_big.jpg?1733634037'
            alt='Sweat'
          />
        </div>
        <div>
          <p className={'font-semibold mb-2'}>{article.name}</p>
          <p className={'text-xs text-zinc-500 mb-2'}>
            Couleur : <span className={'font-bold text-zinc-700'}>{articleItem.color}</span>
          </p>
          <p className={'text-xs text-zinc-500 mb-2'}>
            Taille : <span className={'font-bold text-zinc-700'}>{articleItem.size}</span>
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
          <p>_ Articles</p>
          <CurrencyFormatter value={-999.99} />
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
