'use client';

import { SizeButton } from '@/app/articles/[id]/SizeButton';

interface ArticleAttribute {
  color: string;
  size: string;
}

interface Props {
  attributes: ArticleAttribute[];
  selectedColor: string;
  selectedSize: string;
  setSize: (size: string) => void;
}

export function ArticleSizeSelector({
  attributes,
  selectedColor,
  selectedSize,
  setSize,
}: Readonly<Props>) {
  const filteredAttributes = attributes.filter(
    (attribute) => attribute.color === selectedColor
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
          selected={selectedSize === attribute.size}
          disabled={!hasSize(attribute.size)}
          onClick={() => onClick(attribute.size)}
        />
      ))}
    </div>
  );
}
