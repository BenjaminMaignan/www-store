'use client';

import { useArticle } from '@lib/context/ArticleContext';
import { clsx } from 'clsx';

interface ArticleAttribute {
  color: string;
  size: string;
}

interface Props {
  attributes: ArticleAttribute[];
  selectedAttribute: ArticleAttribute;
  setColor: (color: string) => void;
}

export function ArticleColorSelector({
  attributes,
  selectedAttribute,
  setColor,
}: Readonly<Props>) {
  const { article, setSelectedArticleItem } = useArticle();

  const getColorClass = (color: string) => {
    switch (color.toLowerCase()) {
      case 'red':
        return 'bg-red-800';
      case 'blue':
        return 'bg-blue-800';
      case 'green':
        return 'bg-green-800';
      case 'yellow':
        return 'bg-yellow-800';
      case 'purple':
        return 'bg-purple-800';
      case 'grey':
        return 'bg-gray-600';
      case 'black':
        return 'bg-black';
      case 'beige':
        return 'bg-yellow-100';
      default:
        return 'bg-white';
    }
  };

  const onClick = (color: string) => {
    setColor(color);

    const result = article.articleItems.find((item) => item.color === color);

    if (result) {
      setSelectedArticleItem(result);
    }
  };

  const uniqueColors = [...new Set(attributes.map((attr) => attr.color))];

  return (
    <div className={'flex flex-wrap gap-2'}>
      {uniqueColors.map((c) => (
        <button
          key={'color_' + c}
          className={clsx(
            `relative size-6 rounded-full ${getColorClass(c)} flex items-center justify-center`,
            {
              'ring-2 ring-zinc-300': selectedAttribute.color === c,
            }
          )}
          onClick={() => onClick(c)}
        ></button>
      ))}
    </div>
  );
}
