'use client';

import { useNotification } from '@lib/hooks/useNotification';

import { AddToCart } from '@ui/articles/AddToCart';
import { ArticleRate } from '@ui/articles/ArticleRate';
import { CurrencyFormatter } from '@ui/component/CurrencyFormatter';
import { ArticleColorSelector } from '@/app/articles/[id]/ArticleColorSelector';

interface Props {
  article: Article;
}

export function ArticleDetail({ article }: Readonly<Props>) {
  const { contextHolder, openNotification } = useNotification();
  return (
    <div className={'bg-white p-4 flex flex-col gap-4 h-full min-h-96'}>
      {contextHolder}
      <div className={'flex items-center justify-between'}>
        <div
          className={
            'bg-red-700 rounded text-white text-xs px-2 py-1 uppercase font-bold'
          }
        >
          NEW
        </div>
        <ArticleRate averageRate={70} />
      </div>
      <div>
        <h1 className={'font-bold text-2xl'}>{article.name}</h1>
        <p className={'text-xs'}>Homme - Sweat</p>
      </div>
      <div>
        <CurrencyFormatter className={'font-semibold'} value={article.price} />
      </div>
      <div>
        <p className={'text-zinc-500 text-sm'}>
          Description - Homme - Sweatshirt
        </p>
      </div>
      <div>
        <h3 className={'text-sm font-bold mb-1'}>Couleurs</h3>
        <ArticleColorSelector colors={article.articleItems.map((i) => i.color.toLowerCase())} />
      </div>
      <div>
        <h3 className={'text-sm font-bold mb-1'}>Tailles</h3>
        <select
          name='sort'
          id='sort'
          defaultValue={'L'}
          className={'w-full p-2 bg-white border border-zinc-300'}
        >
          {
            article.articleItems.map((item) => (
              <option key={item.id} value={item.size}>
                {item.size}
              </option>
            ))
          }
        </select>
      </div>
      <div className={'h-full border-b'} />
      <div>
        {article.articleItems[0].availableStock > 0 ? (
          <AddToCart
            articleItemId={article.articleItems[1].id}
            openNotification={openNotification}
          />
        ) : (
          <div
            className={
              'w-full p-3 border border-red-700 text-red-700 bg-red-200'
            }
          >
            <h3 className={'text-lg font-semibold'}>Article épuisé</h3>
            <p className={'text-sm'}>
              Nous nous dépêchons pour remettre l'article en stock.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
