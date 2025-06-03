'use client';

import { useArticle } from '@lib/context/ArticleContext';
import { useArticleAttributes } from '@lib/hooks/useArticleAttributes';
import { ArticleAttribute } from '@lib/type/articleattribute';

import { ArticleColorSelector } from '@/app/articles/[id]/ArticleColorSelector';
import { ArticleSizeSelector } from '@/app/articles/[id]/ArticleSizeSelector';

import { AddToCart } from '@ui/articles/AddToCart';
import { ArticleRate } from '@ui/articles/ArticleRate';
import { CurrencyFormatter } from '@ui/component/CurrencyFormatter';

export function ArticleDetail() {
  const article: Article = useArticle();
  const { selectedAttribute, handleColorChange, handleSizeChange } =
    useArticleAttributes(
      article.articleItems.map((item) => ({
        color: item.color,
        size: item.size,
      }))
    );

  const attributes: ArticleAttribute[] = article.articleItems.map((item) => ({
    color: item.color,
    size: item.size,
  }));

  const articleItem = article.articleItems.find(
    (item) =>
      item.color === selectedAttribute.color &&
      item.size === selectedAttribute.size
  )!;

  return (
    <div className={'bg-white p-4 flex flex-col gap-4 h-full min-h-96'}>
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
        <ArticleColorSelector
          attributes={attributes}
          selectedAttribute={selectedAttribute}
          setColor={handleColorChange}
        />
      </div>
      <div>
        <h3 className={'text-sm font-bold mb-1'}>Tailles</h3>
        <ArticleSizeSelector
          attributes={attributes}
          selectedAttribute={selectedAttribute}
          setSize={handleSizeChange}
        />
      </div>
      <div className={'h-full border-b'} />
      <div>
        {articleItem.availableStock > 0 ? (
          <AddToCart articleItem={articleItem} />
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
