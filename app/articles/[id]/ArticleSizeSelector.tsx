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
    return filteredAttributes.some((attribute) => attribute.size === size);
  };

  const onClick = (size: string) => {
    setSize(size);
  };

  return (
    <div className={'grid grid-cols-4 gap-2'}>
      {attributes.map((attribute) => (
        <SizeButton
          key={'size_' + attribute.size}
          value={attribute.size}
          selected={selectedAttribute.size === attribute.size}
          disabled={!hasSize(attribute.size)}
          onClick={() => onClick(attribute.size)}
        />
      ))}
    </div>
  );
}
