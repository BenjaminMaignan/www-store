'use client';

import { clsx } from 'clsx';

interface ArticleAttribute {
  color: string;
  size: string;
}

interface Props {
  attributes: ArticleAttribute[];
  selectedColor: string;
  selectedSize: string;
  setColor: (color: string) => void;
}

export function ArticleColorSelector({
  attributes,
  selectedColor,
  selectedSize,
  setColor,
}: Readonly<Props>) {
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
      default:
        return '';
    }
  };

  const onClick = (color: string) => {
    setColor(color);
  };

  return (
    <div className={'flex flex-wrap gap-2'}>
      {attributes.map((attribute) => (
        <button
          key={'color_' + attribute.color}
          className={clsx(
            `relative size-6 rounded-full ${getColorClass(attribute.color)} flex items-center justify-center`,
            {
              'ring-2 ring-zinc-300': selectedColor === attribute.color,
            }
          )}
          onClick={() => onClick(attribute.color)}
        ></button>
      ))}
    </div>
  );
}
