import { useState } from 'react';
import { ArticleAttribute } from '@lib/type/articleattribute';

export function useArticleAttributes(attributes: ArticleAttribute[]) {
  const [selectedAttribute, setSelectedAttribute] = useState<ArticleAttribute>(
    attributes[0]
  );

  const handleColorChange = (color: string) => {
    const filteredByColor = attributes.filter((attr) => attr.color === color);
    const sizeExists = filteredByColor.some(
      (attr) => attr.size === selectedAttribute.size
    );

    if (!sizeExists) {
      setSelectedAttribute({ color, size: filteredByColor[0].size });
    } else {
      setSelectedAttribute({ ...selectedAttribute, color });
    }
  };

  const handleSizeChange = (size: string) => {
    const filteredBySize = attributes.filter((attr) => attr.size === size);
    const colorExists = filteredBySize.some(
      (attr) => attr.color === selectedAttribute.color
    );

    if (!colorExists) {
      setSelectedAttribute({ color: filteredBySize[0].color, size });
    } else {
      setSelectedAttribute({ ...selectedAttribute, size });
    }
  };

  return {
    selectedAttribute,
    handleColorChange,
    handleSizeChange,
  };
}