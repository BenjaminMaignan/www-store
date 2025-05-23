'use client';

import { useNotification } from '@lib/hooks/useNotification';
import { useState } from 'react';

import { ArticleColorSelector } from '@/app/articles/[id]/ArticleColorSelector';
import { ArticleSizeSelector } from '@/app/articles/[id]/ArticleSizeSelector';

import { AddToCart } from '@ui/articles/AddToCart';
import { ArticleRate } from '@ui/articles/ArticleRate';
import { CurrencyFormatter } from '@ui/component/CurrencyFormatter';

interface Props {
  article: Article;
}

interface ArticleAttribute {
  color: string;
  size: string;
}

function useArticleAttributes(attributes: ArticleAttribute[]) {
  const [selectedColor, setSelectedColor] = useState<string>(attributes[0].color);
  const [selectedSize, setSelectedSize] = useState<string>(attributes[0].size);

  const handleColorChange = (color: string) => {
    const filteredByColor = attributes.filter(attr => attr.color === color);
    const sizeExists = filteredByColor.some(attr => attr.size === selectedSize);

    setSelectedColor(color);

    if (!sizeExists) {
      setSelectedSize(filteredByColor[0].size);
    }
  };

  const handleSizeChange = (size: string) => {
    const filteredBySize = attributes.filter(attr => attr.size === size);
    const colorExists = filteredBySize.some(attr => attr.color === selectedColor);

    setSelectedSize(size);

    if (!colorExists) {
      setSelectedColor(filteredBySize[0].color);
    }
  };

  return {
    selectedColor,
    selectedSize,
    handleColorChange,
    handleSizeChange,
  };
}

export function ArticleDetail({ article }: Readonly<Props>) {
  const { contextHolder, openNotification } = useNotification();
  const { selectedColor, selectedSize, handleColorChange, handleSizeChange } = useArticleAttributes(article.articleItems.map((item) => ({
    color: item.color,
    size: item.size,
  })))

  const attributes: ArticleAttribute[] = article.articleItems.map((item) => ({
    color: item.color,
    size: item.size,
  }));


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
        <ArticleColorSelector
          attributes={attributes}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          setColor={handleColorChange}
        />
      </div>
      <div>
        <h3 className={'text-sm font-bold mb-1'}>Tailles</h3>
        <ArticleSizeSelector
          attributes={attributes}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          setSize={handleSizeChange}
        />
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
