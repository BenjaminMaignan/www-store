'use client';

import { SizeButton } from '@/app/articles/[id]/SizeButton';
import { ArticleAttribute } from '@lib/type/articleattribute';

interface Props {
  attributes: ArticleAttribute[];
  selectedAttribute: ArticleAttribute;
  setSize: (size: string) => void;
}

export function ArticleSizeSelector({
  attributes,
  selectedAttribute,
  setSize,
}: Readonly<Props>) {
  const filteredAttributes = attributes.filter(
    (attribute) => attribute.color === selectedAttribute.color
  );
  const hasSize = (size: string) => {
    return filteredAttributes.some((attr) => attr.size === size);
  };

  const onClick = (size: string) => {
    setSize(size);
  };

  const uniqueSizes = [...new Set(attributes.map(attr => attr.size))];

  return (
    <div className={'grid grid-cols-4 gap-2'}>
      {uniqueSizes.map((s) => (
        <SizeButton
          key={'size_' + s}
          value={s}
          selected={selectedAttribute.size === s}
          disabled={!hasSize(s)}
          onClick={() => onClick(s)}
        />
      ))}
    </div>
  );
}
